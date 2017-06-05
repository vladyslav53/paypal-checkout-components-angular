/* @flow */

import { SyncPromise } from 'sync-browser-mocks/src/promise';
import * as xcomponent from 'xcomponent/src';
import * as $logger from 'beaver-logger/client';

import { Checkout, enableCheckoutIframe } from '../checkout';
import { config, USERS, ENV, FPTI } from '../../config';
import { redirect as redir, hasMetaViewPort, setLogLevel, forceIframe, getBrowserLocale, getPageID, request, checkpoint } from '../../lib';
import { rest } from '../../api';

import { getPopupBridgeOpener, awaitPopupBridgeOpener } from '../checkout/popupBridge';
import { containerTemplate, componentTemplate } from './templates';
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
            value: getPageID(),
            def() : string {
                return getPageID();
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
            decorate(braintree, props) : ?SyncPromise<BraintreePayPalClient> {

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
                return function payment() : SyncPromise<string> {
                    return new SyncPromise((resolve, reject) => {

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
                        [ FPTI.KEY.BUTTON_TYPE ]: FPTI.BUTTON_TYPE.IFRAME
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
                this.onRemember = this.onRemember || new SyncPromise();
                this.onRemember.resolve();

                enableCheckoutIframe();
            }
        },

        onRemembered: {
            type: 'function',
            required: false,

            value() {
                this.onRemember = this.onRemember || new SyncPromise();
                this.onRemember.resolve();
            }
        },

        onDisplay: {
            type: 'function',
            required: false,

            decorate(original) : Function {
                return function() : SyncPromise<void> {
                    return SyncPromise.try(() => {

                        this.onRemember = this.onRemember || new SyncPromise();

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
                    return function(data, actions) : void | SyncPromise<void> {

                        if (this.props.braintree) {
                            return this.props.braintree.then(client => {
                                return client.tokenizePayment(data).then(res => {
                                    return original.call(this, { nonce: res.nonce });
                                });
                            });
                        }

                        let redirect = (win, url) => {
                            return SyncPromise.all([
                                redir(win || window.top, url || data.returnUrl),
                                actions.close()
                            ]);
                        };

                        return SyncPromise.try(() => {
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
                    return function(data, actions) : void | SyncPromise<void> {

                        let redirect = (win, url) => {
                            return SyncPromise.all([
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

            validate(locale) {

                if (!locale || !locale.match(/^[a-z]{2}[-_][A-Z][A-Z0-9]$/)) {
                    throw new Error(`Invalid locale: ${locale}`);
                }

                let [ lang, country ] = locale.split('_');

                if (!config.locales[country] || config.locales[country].indexOf(lang) === -1) {
                    throw new Error(`Invalid locale: ${locale}`);
                }
            }
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

            validate(style) {
                if (style.size && config.buttonStyles.size.indexOf(style.size) === -1) {
                    throw new Error(`Invalid button size: ${style.size}`);
                }

                if (style.label && config.buttonStyles.label.indexOf(style.label) === -1) {
                    throw new Error(`Invalid button label: ${style.label}`);
                }

                if (style.label === 'credit' && style.size === 'tiny') {
                    throw new Error(`Invalid ${style.label} button size: ${style.size}`);
                }

                if (style.label === 'credit' && style.color) {
                    throw new Error(`Custom colors for ${style.label} button are not supported`);
                }

                if (style.label === 'credit' && style.hasOwnProperty('fundingicons')) {
                    throw new Error(`Invalid option: style.fundingicons for ${style.label} button`);
                }

                if (style.label === 'pay' && style.size === 'tiny') {
                    throw new Error(`Invalid ${style.label} button size: ${style.size}`);
                }

                if (style.label === 'buynow' && style.size === 'tiny') {
                    throw new Error(`Invalid ${style.label} button size: ${style.size}`);
                }

                if (style.label !== 'buynow' && style.hasOwnProperty('branding')) {
                    throw new Error(`style.branding option not valid for ${style.label} button`);
                }

                if (style.label === 'buynow' && style.hasOwnProperty('branding') && style.branding !== true) {
                    throw new Error(`Invalid option: style.branding must be unspecified or true`);
                }
            }
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
