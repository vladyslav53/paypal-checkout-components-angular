/* @flow */
/* eslint max-lines: 0 */

import { ZalgoPromise } from 'zalgo-promise/src';
import { info, track, warn, flush as flushLogs, immediateFlush } from 'beaver-logger/client';
import { create, CONSTANTS } from 'xcomponent/src';
import { getParent, isSameDomain } from 'cross-domain-utils/src';

import { isDevice, request, getQueryParam, redirect as redir, patchMethod,
    setLogLevel, getCommonSessionID, getBrowserLocale, supportsPopups } from '../../lib';
import { config, ENV, FPTI } from '../../config';
import { onLegacyPaymentAuthorize } from '../../compat';

import { containerTemplate, componentTemplate } from './templates';
import { determineParameterFromToken, determineUrlFromToken } from './util';
import { setupPopupBridgeProxy, getPopupBridgeOpener, awaitPopupBridgeOpener } from './popupBridge';


function addHeader(name, value) : void {

    if (!window.$Api) {
        return;
    }

    if (window.$Api.addHeader) {
        return window.$Api.addHeader(name, value);
    }
}

export function allowIframe() : boolean {

    if (!supportsPopups()) {
        return true;
    }

    let parentWindow = getParent(window);
    if (parentWindow && isSameDomain(parentWindow)) {
        return true;
    }

    let parentComponentWindow = window.xchild && window.xchild.getParentComponentWindow();
    if (parentComponentWindow && isSameDomain(parentComponentWindow)) {
        return true;
    }

    if (__TEST__) {
        return true;
    }

    return false;
}

function forceIframe() : boolean {

    if (!supportsPopups()) {
        return true;
    }

    return false;
}

export let Checkout = create({

    tag:  'paypal-checkout',
    name: 'ppcheckout',

    scrolling: true,

    buildUrl(props) : string | ZalgoPromise<string> {
        let env = props.env || config.env;

        return props.payment().then(token => {
            if (!token) {
                throw new Error(`Expected payment id or token to be passed, got ${ token }`);
            }

            return determineUrlFromToken(env, token);
        });
    },

    get domain() : Object {
        return config.paypalDomains;
    },

    get bridgeUrl() : Object {
        return config.postBridgeUrls;
    },

    get bridgeDomain() : Object {
        return config.paypalDomains;
    },

    contexts: {
        iframe: forceIframe(),
        popup:  true
    },

    get version() : string {
        return config.ppobjects ? __FILE_VERSION__ : __MINOR_VERSION__;
    },

    prerenderTemplate: componentTemplate,
    containerTemplate,

    props: {

        uid: {
            type:  'string',
            value: getCommonSessionID(),
            def() : string {
                return getCommonSessionID();
            },
            queryParam: true
        },

        env: {
            type:       'string',
            required:   false,
            queryParam: true,

            def() : string {
                return config.env;
            },

            validate(env) {
                if (!config.paypalUrls[env]) {
                    throw new Error(`Invalid env: ${ env }`);
                }
            }
        },

        stage: {
            type:       'string',
            required:   false,
            queryParam: true,

            def(props) : ?string {
                let env = props.env || config.env;

                if (env === ENV.STAGE || env === ENV.LOCAL) {
                    return config.stage;
                }
            }
        },

        locale: {
            type:          'string',
            required:      false,
            queryParam:    'locale.x',
            allowDelegate: true,

            def() : string {
                let { lang, country } = getBrowserLocale();
                return `${ lang }_${ country }`;
            }
        },


        client: {
            type:     'object',
            required: false,
            def() : Object {
                return {};
            },
            sendToChild: false,

            validate(client, props) {
                let env = props.env || config.env;

                if (!client[env]) {
                    throw new Error(`Client ID not found for env: ${ env }`);
                }

                if (client[env].match(/^(.)\1+$/)) {
                    throw new Error(`Invalid client ID: ${ client[env] }`);
                }
            }
        },

        payment: {
            type:     'string',
            required: false,
            getter:   true,
            memoize:  true,
            timeout:  __TEST__ ? 500 : 10 * 1000,
            queryParam(value = '') : string {
                return determineParameterFromToken(value);
            },
            childDef() : ?string {
                return getQueryParam('token');
            },
            validate(value, props) {
                if (!value && !props.url) {
                    throw new Error(`Expected props.payment to be passed`);
                }
            },
            alias: 'billingAgreement'
        },

        commit: {
            type:     'boolean',
            required: false
        },

        experience: {
            type:     'object',
            required: false,
            def() : Object {
                return {};
            }
        },

        onAuthorize: {
            type:     'function',
            required: true,
            once:     true,

            decorate(original) : ?Function {
                if (original) {
                    return function decorateOnAuthorize(data, actions = {}) : ZalgoPromise<void> {

                        if (data && !data.intent) {
                            warn(`checkout_authorize_no_intent`, { paymentID: data.paymentID, token: data.paymentToken });
                        }

                        Checkout.contexts.iframe = false;

                        let close = () => {
                            return ZalgoPromise.try(() => {
                                if (actions.close) {
                                    return actions.close();
                                }
                            }).then(() => {
                                return this.closeComponent();
                            });
                        };

                        let redirect = (win, url) => {
                            return ZalgoPromise.all([
                                redir(win || window.top, url || data.returnUrl),
                                close()
                            ]);
                        };

                        return ZalgoPromise.try(() => {

                            try {
                                let isButton = window.location.href.indexOf('/webapps/hermes/button') !== -1;
                                let isGuest  = this.window.location.href.indexOf('/webapps/xoonboarding') !== -1;

                                if (isButton && isGuest) {
                                    return request({
                                        win:    this.window,
                                        method: 'get',
                                        url:    '/webapps/hermes/api/auth'
                                    }).then(result => {
                                        if (result && result.data && result.data.access_token) {
                                            addHeader('x-paypal-internal-euat', result.data.access_token);
                                        }
                                    }).catch(() => {
                                        // pass
                                    });
                                }

                            } catch (err) {
                                // pass
                            }

                        }).then(() => {
                            return original.call(this, data, { ...actions, close, redirect });
                        }).catch(err => {
                            return this.error(err);
                        }).finally(() => {
                            return this.close();
                        });
                    };
                }
            }
        },

        onAuth: {
            type:       'function',
            required:   false,
            sameDomain: true
        },

        accessToken: {
            type:     'function',
            required: false
        },

        onCancel: {
            type:     'function',
            required: false,
            once:     true,
            noop:     true,

            decorate(original) : ?Function {
                return function decorateOnCancel(data, actions = {}) : ZalgoPromise<void> {

                    Checkout.contexts.iframe = false;

                    let close = () => {
                        return ZalgoPromise.try(() => {
                            if (actions.close) {
                                return actions.close();
                            }
                        }).then(() => {
                            return this.closeComponent();
                        });
                    };

                    let redirect = (win, url) => {
                        return ZalgoPromise.all([
                            redir(win || window.top, url || data.cancelUrl),
                            close()
                        ]);
                    };

                    return ZalgoPromise.try(() => {
                        if (original) {
                            return original.call(this, data, { ...actions, close, redirect });
                        }
                    }).finally(() => {
                        this.close();
                    });
                };
            }
        },

        init: {
            type:     'function',
            required: false,
            once:     true,

            decorate(original) : Function {
                return function decorateInit(data) : void {

                    info('checkout_init');

                    track({
                        [ FPTI.KEY.STATE ]:        FPTI.STATE.CHECKOUT,
                        [ FPTI.KEY.TRANSITION ]:   FPTI.TRANSITION.CHECKOUT_INIT,
                        [ FPTI.KEY.CONTEXT_TYPE ]: FPTI.CONTEXT_TYPE.EC_TOKEN,
                        [ FPTI.KEY.TOKEN ]:        data.paymentToken,
                        [ FPTI.KEY.SELLER_ID ]:    data.merchantID,
                        [ FPTI.KEY.CONTEXT_ID ]:   data.paymentToken
                    });

                    flushLogs();

                    this.paymentToken = data.paymentToken;
                    this.cancelUrl    = data.cancelUrl;

                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
        },

        onClose: {
            type:      'function',
            required:  false,
            once:      true,
            promisify: true,

            decorate(original) : Function {
                return function decorateOnClose(reason) : ZalgoPromise<void> {

                    let onClose = original
                        ? original.apply(this, arguments)
                        : ZalgoPromise.resolve();

                    let CLOSE_REASONS = CONSTANTS.CLOSE_REASONS;

                    let shouldCancel =
                        this.props.onCancel &&
                        [ CLOSE_REASONS.CLOSE_DETECTED, CLOSE_REASONS.USER_CLOSED ].indexOf(reason) !== -1;

                    let hasDetails =
                        this.paymentToken &&
                        this.cancelUrl;

                    if (shouldCancel && !hasDetails) {
                        warn(`close_no_token_cancelurl`);
                        return onClose;
                    }

                    if (shouldCancel) {
                        info(`close_trigger_cancel`);
                        return ZalgoPromise.all([
                            onClose,
                            this.props.onCancel({
                                paymentToken: this.paymentToken,
                                cancelUrl:    this.cancelUrl
                            })
                        ]).then(() => {
                            return onClose;
                        });
                    }

                    return onClose;
                };
            }
        },

        onError: {
            type:      'function',
            required:  false,
            promisify: true,
            noop:      true,
            once:      true
        },

        fallback: {
            type:     'function',
            required: false,
            once:     true,

            def() : Function {
                return function decorateFallback(url) : ZalgoPromise<void> {
                    warn('fallback', { url });
                    return onLegacyPaymentAuthorize(this.props.onAuthorize);
                };
            }
        },

        logLevel: {
            type:     'string',
            required: false,
            get value() : string {
                return config.logLevel;
            }
        },

        popupBridge: {
            type:     'object',
            required: false,
            get value() : Object {
                return {
                    open:        getPopupBridgeOpener(),
                    awaitOpener: awaitPopupBridgeOpener
                };
            }
        },

        test: {
            type:     'object',
            required: false,
            def() : Object {
                return { action: 'checkout' };
            }
        }
    },

    autoResize: {
        width:  false,
        height: false
    },

    get dimensions() : { width : string | number, height : string | number } {

        if (isDevice()) {
            return {
                width:  '100%',
                height: '535px'
            };
        }

        return {
            width:  '450px',
            height: '535px'
        };
    }
});

setupPopupBridgeProxy(Checkout);

export function enableCheckoutIframe() {
    delete Checkout.contexts.iframe;
    Checkout.contexts.iframe = true;
}

if (Checkout.isChild()) {

    if (window.xprops.logLevel) {
        setLogLevel(window.xprops.logLevel);
    }

    awaitPopupBridgeOpener();

    patchMethod(window.xprops, 'onAuthorize', ({ callOriginal, args : [ data ] }) => {
        if (data && !data.intent) {
            warn(`hermes_authorize_no_intent`, { paymentID: data.paymentID, token: data.paymentToken });

            try {
                let intent = window.injector.get('$CheckoutCartModel').instance(data.paymentToken).payment_action;
                warn(`hermes_intent`, { paymentID: data.paymentID, token: data.paymentToken, intent });
            } catch (err) {
                // pass
            }

            immediateFlush();
        }
        return callOriginal();
    });
}
