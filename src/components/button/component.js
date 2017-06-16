/* @flow */

import { ZalgoPromise } from 'zalgo-promise';
import * as xcomponent from 'xcomponent/src';
import * as $logger from 'beaver-logger/client';

import { Checkout, enableCheckoutIframe } from '../checkout';
import { config, USERS, SOURCE, ENV, FPTI } from '../../config';
import { redirect as redir, hasMetaViewPort, setLogLevel, forceIframe, getBrowserLocale, getSessionID, request, checkpoint } from '../../lib';
import { rest } from '../../api';

import { getPopupBridgeOpener, awaitPopupBridgeOpener } from '../checkout/popupBridge';
import { containerTemplate, componentTemplate } from './templates';
import { validateButtonLocale, validateButtonStyle } from './templates/component/validate';
import { awaitBraintreeClient, type BraintreePayPalClient } from './braintree';

export let Button = xcomponent.create({

    tag: 'paypal-button',
    name: 'ppbutton',

    buildUrl(props) : string {
        let env = props.env || config.env;

        return config.buttonUrls[env];
    },

    contexts: {
        iframe: true,
        popup: false
    },

    scrolling: false,

    containerTemplate,
    componentTemplate,

    sacrificialComponentTemplate: true,

    get version() : string {
        return config.ppobjects ? __FILE_VERSION__ : __MINOR_VERSION__;
    },

    get domain() : Object {
        return config.paypalDomains;
    },

    autoResize: {
        width: false,
        height: true,
        element: 'body'
    },

    props: {

        uid: {
            type: 'string',
            value: getSessionID(),
            def() : string {
                return getSessionID();
            },
            queryParam: true
        },

        env: {
            type: 'string',
            required: false,
            queryParam: true,

            def() : string {
                return config.env;
            },

            validate(env) {
                if (!config.paypalUrls[env]) {
                    throw new Error(`Invalid env: ${env}`);
                }
            }
        },

        client: {
            type: 'object',
            required: false,
            def() : Object {
                return {};
            },
            sendToChild: false,

            validate(client, props) {
                let env = props.env || config.env;

                if (!client[env]) {
                    throw new Error(`Client ID not found for env: ${env}`);
                }

                if (client[env].match(/^(.)\1+$/)) {
                    throw new Error(`Invalid client ID: ${client[env]}`);
                }
            }
        },

        source: {
            type: 'string',
            required: false,
            def() : string {
                return SOURCE.MANUAL;
            }
        },

        stage: {
            type: 'string',
            required: false,
            queryParam: true,

            def(props) : ?string {
                let env = props.env || config.env;

                if (env === ENV.STAGE || env === ENV.LOCAL) {
                    return config.stage;
                }
            }
        },

        braintree: {
            type: 'object',
            required: false,
            validate(braintree, props) {

                if (!braintree.paypalCheckout) {
                    throw new Error(`Expected Braintree paypal-checkout component to be loaded`);
                }

                if (!props.client) {
                    throw new Error(`Expected client prop to be passed with Braintree authorization keys`);
                }
            },
            decorate(braintree, props) : ?ZalgoPromise<BraintreePayPalClient> {

                if (!braintree) {
                    return;
                }

                let env = props.env || config.env;
                let authorization = props.client[env];

                return awaitBraintreeClient(braintree, authorization);
            }
        },

        payment: {
            type: 'function',
            required: true,
            memoize: false,
            timeout: __TEST__ ? 500 : 10 * 1000,
            alias: 'billingAgreement',

            decorate(original) : Function {
                return function payment() : ZalgoPromise<string> {
                    return new ZalgoPromise((resolve, reject) => {

                        let data = resolve;
                        let actions = reject;

                        data.payment = actions.payment = {
                            create: (options, experience) => {
                                return rest.payment.create(this.props.env, this.props.client, options, experience);
                            }
                        };

                        data.braintree = actions.braintree = {
                            create: (options) => {
                                if (!this.props.braintree) {
                                    throw new Error(`Can not create using Braintree - no braintree client provided`);
                                }

                                return this.props.braintree.then(client => {
                                    return client.createPayment(options);
                                });
                            }
                        };

                        actions.request = request;

                        let context = {
                            props: {
                                env: this.props.env,
                                client: this.props.client
                            }
                        };

                        let result;

                        try {
                            result = original.call(context, data, actions);
                        } catch (err) {
                            return reject(err);
                        }

                        if (result && typeof result.then === 'function') {
                            return result.then(resolve, reject);
                        }

                        if (result !== undefined) {
                            return resolve(result);
                        }

                        let timeout = __TEST__ ? 500 : 10 * 1000;

                        setTimeout(() => {
                            reject(`Timed out waiting ${timeout}ms for payment`);
                        }, timeout);

                    }).then(result => {

                        if (!result) {
                            throw new Error(`No value passed to payment`);
                        }

                        return result;
                    });
                };
            }
        },

        commit: {
            type: 'boolean',
            required: false
        },

        onRender: {
            type: 'function',
            promisify: true,
            required: false,
            decorate(original) : Function {
                return function() : mixed {
                    checkpoint('render_iframe_button', { version: true });
                    $logger.track({
                        [ FPTI.KEY.STATE ]: FPTI.STATE.LOAD,
                        [ FPTI.KEY.TRANSITION ]: FPTI.TRANSITION.BUTTON_RENDER,
                        [ FPTI.KEY.BUTTON_TYPE ]: FPTI.BUTTON_TYPE.IFRAME,
                        [ FPTI.KEY.BUTTON_SOURCE ]: this.props.source
                    });
                    $logger.flush();
                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
        },

        onAuth: {
            type: 'function',
            required: false,

            value() {
                this.onRemember = this.onRemember || new ZalgoPromise();
                this.onRemember.resolve();

                enableCheckoutIframe();
            }
        },

        onRemembered: {
            type: 'function',
            required: false,

            value() {
                this.onRemember = this.onRemember || new ZalgoPromise();
                this.onRemember.resolve();
            }
        },

        onDisplay: {
            type: 'function',
            required: false,

            decorate(original) : Function {
                return function() : ZalgoPromise<void> {
                    return ZalgoPromise.try(() => {

                        this.onRemember = this.onRemember || new ZalgoPromise();

                        if (this.props.displayTo === USERS.REMEMBERED) {
                            $logger.info(`button_render_wait_for_remembered_user`);

                            return this.onRemember.then(() => {
                                $logger.info(`button_render_got_remembered_user`);
                            });
                        }

                    }).then(() => {

                        if (original) {
                            return original.apply(this, arguments);
                        }
                    });
                };
            }
        },

        onAuthorize: {
            type: 'function',
            required: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions) : void | ZalgoPromise<void> {

                        if (this.props.braintree) {
                            return this.props.braintree.then(client => {
                                return client.tokenizePayment(data).then(res => {
                                    return original.call(this, { nonce: res.nonce });
                                });
                            });
                        }

                        let redirect = (win, url) => {
                            return ZalgoPromise.all([
                                redir(win || window.top, url || data.returnUrl),
                                actions.close()
                            ]);
                        };

                        return ZalgoPromise.try(() => {
                            return original.call(this, data, { ...actions, redirect });
                        }).catch(err => {
                            return this.error(err);
                        });
                    };
                }
            }
        },

        onCancel: {
            type: 'function',
            required: false,
            noop: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions) : void | ZalgoPromise<void> {

                        let redirect = (win, url) => {
                            return ZalgoPromise.all([
                                redir(win || window.top, url || data.cancelUrl),
                                actions.close()
                            ]);
                        };

                        return original.call(this, data, { ...actions, redirect });
                    };
                }
            }
        },

        onClick: {
            type: 'function',
            required: false,
            decorate(original) : Function {
                return function() : void {

                    $logger.track({
                        [ FPTI.KEY.STATE ]: FPTI.STATE.BUTTON,
                        [ FPTI.KEY.TRANSITION ]: FPTI.TRANSITION.BUTTON_CLICK,
                        [ FPTI.KEY.BUTTON_TYPE ]: FPTI.BUTTON_TYPE.IFRAME
                    });

                    $logger.flush();

                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
        },

        locale: {
            type: 'string',
            required: false,
            queryParam: 'locale.x',

            def() : string {
                let { lang, country } = getBrowserLocale();
                return `${lang}_${country}`;
            },

            validate: validateButtonLocale
        },

        style: {
            type: 'object',
            required: false,
            queryParam: true,
            alias: 'buttonStyle',

            def() : Object {
                return {
                    color: 'gold',
                    shape: 'pill',
                    size:  'small',
                    label: 'checkout',
                    fundingicons: false
                };
            },

            validate: validateButtonStyle
        },

        displayTo: {
            type: 'string',
            required: false,
            def() : string {
                return USERS.ALL;
            }
        },

        disableLightbox: {
            type: 'boolean',
            required: false,

            get value() : boolean {
                return !hasMetaViewPort();
            }
        },

        validate: {
            type: 'function',
            required: false
        },

        logLevel: {
            type: 'string',
            required: false,
            get value() : string {
                return config.logLevel;
            }
        },

        popupBridge: {
            type: 'object',
            required: false,
            get value() : Object {
                return {
                    open: getPopupBridgeOpener(),
                    awaitOpener: awaitPopupBridgeOpener
                };
            }
        },

        test: {
            type: 'object',
            required: false,
            def() : Object {
                return { action: 'checkout' };
            }
        }
    }
});

if (Button.isChild()) {

    if (forceIframe()) {
        $logger.info('force_enable_iframe');
        enableCheckoutIframe({ force: true, time: 30 * 60 * 1000 });
    }

    if (window.xprops.logLevel) {
        setLogLevel(window.xprops.logLevel);
    }

    awaitPopupBridgeOpener();

    if (window.xprops.validate) {

        let enabled = true;

        window.xprops.validate({
            enable() {
                enabled = true;
            },

            disable() {
                enabled = false;
            }
        });

        let renderTo = Checkout.renderTo;

        Checkout.renderTo = function() : ?Promise<Object> {
            if (enabled) {
                return renderTo.apply(this, arguments);
            }
        };
    }
}
