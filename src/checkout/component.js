/* @flow */
/* eslint max-lines: 0 */

import { getPayPalDomainRegex, getLogger, getLocale, getEnv, getClientID, getCommit, getSDKMeta, isEligible } from '@paypal/sdk-client/src';
import { FUNDING } from '@paypal/sdk-constants/src';
import { ZalgoPromise } from 'zalgo-promise/src';
import { create, CONTEXT, type ZoidComponent } from 'zoid/src';
import { isDevice, memoize, isIEIntranet, noop, once } from 'belter/src';

import { getSessionID, getButtonSessionID } from '../lib';
import { FUNDING_CONFIG } from '../funding';

import { containerTemplate, componentTemplate } from './template';
import type { CheckoutPropsType } from './props';

export const Checkout : ZoidComponent<CheckoutPropsType> = create({

    tag:  'paypal-checkout',

    attributes: {
        iframe: {
            scrolling: 'yes'
        }
    },

    defaultContext: CONTEXT.POPUP,

    url({ props }) : string {
        const { fundingSource } = props;
        const fundingConfig = FUNDING_CONFIG[fundingSource];

        if (!fundingConfig) {
            throw new Error(`Can not find funding config for ${ fundingSource }`);
        }

        return fundingConfig.url();
    },

    domain: getPayPalDomainRegex(),

    logger: getLogger(),

    validate() {
        if (isIEIntranet()) {
            throw new Error(`Can not render button in IE intranet mode`);
        }

        if (!isEligible()) {
            getLogger().warn('checkout_render_ineligible');
        }
    },

    prerenderTemplate: componentTemplate,
    containerTemplate,

    props: {

        clientID: {
            type:       'string',
            value:      () => getClientID(),
            queryParam: true
        },

        sessionID: {
            type: 'string',
            // $FlowFixMe
            value() : string {
                return getSessionID();
            },
            queryParam: true
        },

        buttonSessionID: {
            type:     'string',
            required: false,
            default() : ?string {
                return getButtonSessionID();
            },
            queryParam: true
        },
        
        env: {
            type:       'string',
            queryParam: true,
            // $FlowFixMe
            value:      () => getEnv()
        },

        sdkMeta: {
            type:       'string',
            queryParam: true,
            // $FlowFixMe
            value:      () => getSDKMeta()
        },

        nonce: {
            type:     'string',
            required: false
        },

        meta: {
            type:    'object',
            default:  () => {
                const meta = window.xprops && window.xprops.meta;
                return meta || {};
            }
        },

        locale: {
            type:          'object',
            queryParam:    'locale.x',
            allowDelegate: true,
            queryValue({ value }) : string {
                const { lang, country } = value;
                return `${ lang }_${ country }`;
            },
            // $FlowFixMe
            value: () => getLocale()
        },
        
        // $FlowFixMe
        createOrder: {
            type:       'function',
            queryParam: 'token',
            alias:      'payment',
            queryValue: ({ value }) => {
                return ZalgoPromise.try(value);
            },
            decorate: ({ value: payment }) => {
                return memoize(() => {
                    return ZalgoPromise.try(payment)
                        .then(orderID => {

                            if (!orderID) {
                                throw new Error(`No order id passed`);
                            }

                            return orderID;
                        });
                });
            }
        },

        xcomponent: {
            type:       'string',
            queryParam: true,
            // $FlowFixMe
            value() : string {
                return '1';
            }
        },

        version: {
            type:       'string',
            queryParam: true,
            // $FlowFixMe
            value() : string {
                return '5';
            }
        },

        commit: {
            type:       'boolean',
            queryParam: true,
            default:        getCommit
        },

        // $FlowFixMe
        fundingSource: {
            type:       'string',
            queryParam: true,
            default() : $Values<typeof FUNDING> {
                return FUNDING.PAYPAL;
            }
        },

        // $FlowFixMe
        onApprove: {
            type:     'function',
            alias:    'onAuthorize',

            decorate: ({ value, state, close, onError }) => {
                return function decorateOnApprove(data, actions) : ZalgoPromise<void> {
                    return ZalgoPromise.try(() => {
                        state.approved = true;

                        // $FlowFixMe
                        return value(data, actions);
                    }).catch(err => {
                        return onError(err);
                    }).finally(() => {
                        return close();
                    });
                };
            }
        },

        onAuth: {
            type:       'function',
            required:   false,
            sameDomain: true
        },

        accessToken: {
            type:     'string',
            required: false
        },

        onCancel: {
            type:     'function',
            required: false,

            decorate: ({ value, close, onError }) => {
                return function decorateOnCancel(data, actions = {}) : ZalgoPromise<void> {
                    return ZalgoPromise.try(() => {
                        // $FlowFixMe
                        return value(data, actions);
                    }).catch(err => {
                        return onError(err);
                    }).finally(() => {
                        close();
                    });
                };
            },

            // $FlowFixMe
            default: () => noop
        },

        onClose: {
            type:          'function',
            required:      false,
            allowDelegate: true,

            decorate: ({ value, props, state }) => {
                return once((reason, ...args) : ZalgoPromise<void> => {
                    return ZalgoPromise.try(() => {
                        return ZalgoPromise.all((state.onCloseHandlers || []).map(handler => handler()));

                    }).then(() => {
                        if (!state.approved) {
                            // $FlowFixMe
                            return ZalgoPromise.try(() => props.onCancel())
                                .then(() => value(...args));
                        }

                        return value(...args);
                    });
                });
            },

            default: () => noop
        },

        addOnClose: {
            type:          'function',
            allowDelegate: true,
            value:         ({ state }) => {
                return (handler) => {
                    state.onCloseHandlers = state.onCloseHandlers || [];
                    state.onCloseHandlers.push(handler);
                };
            }
        },

        onDisplay: {
            type:          'function',
            required:      false,
            allowDelegate: true,

            decorate: ({ value, state }) => {
                return once(function decorateOnDisplay() : ZalgoPromise<void> {
                    return ZalgoPromise.try(() => {
                        return ZalgoPromise.all((state.onDisplayHandlers || []).map(handler => handler()));

                    }).then(() => {
                        return value.apply(this, arguments);
                    });
                });
            },

            default: () => noop
        },

        addOnDisplay: {
            type:          'function',
            allowDelegate: true,
            value:         ({ state }) => {
                return (handler) => {
                    state.onDisplayHandlers = state.onDisplayHandlers || [];
                    state.onDisplayHandlers.push(handler);
                };
            }
        },

        test: {
            type: 'object',
            default() : Object {
                return window.__test__ || { action: 'checkout' };
            }
        }
    },

    dimensions: isDevice()
        ? { width:  '100%', height: '535px' }
        : { width:  '450px', height: '535px' }
});
