
import xcomponent from 'xcomponent/src';
import { config } from '../../config';
import { Checkout } from '../checkout';

import { validateProps } from '../common';

import componentTemplate from './componentTemplate.htm';

export let Button = xcomponent.create({

    tag: 'paypal-button',
    name: 'ppbutton',

    buildUrl(instance) {
        let env = instance.props.env || config.env;

        return config.buttonUrls[env];
    },

    contexts: {
        iframe: true,
        lightbox: false,
        popup: false
    },

    scrolling: false,
    componentTemplate,

    get version() {
        return config.ppobjects ? __FILE_VERSION__ : __MINOR_VERSION__;
    },

    validateProps(component, props, required = true) {
        if (required) {
            return validateProps(props);
        }
    },

    props: {

        env: {
            type: 'string',
            required: false,

            def() {
                return config.env;
            }
        },

        client: {
            type: 'object',
            required: false,
            def() {
                return {};
            },
            sendToChild: false
        },

        stage: {
            type: 'string',
            required: false,

            def() {
                return config.stage;
            }
        },

        paymentToken: {
            type: 'string',
            required: false,
            getter: true,
            queryParam: 'token',
            alias: 'paymentToken'
        },

        payment: {
            type: 'string',
            required: false,
            getter: true,
            queryParam: 'token',
            alias: 'paymentToken'
        },

        billingAgreement: {
            type: 'string',
            required: false,
            getter: true,
            queryParam: false,
            alias: 'billingToken'
        },

        commit: {
            type: 'boolean',
            required: false,
            sendToChild: false
        },

        onAuthorize: {
            type: 'function',
            required: false,
            autoClose: false,
            alias: 'onPaymentAuthorize',

            decorate(original) {
                if (original) {
                    return function() {
                        Checkout.contexts.lightbox = true;
                        return original.apply(this, arguments);
                    };
                }
            }
        },

        onPaymentAuthorize: {
            type: 'function',
            required: false,
            autoClose: false,
            alias: 'onPaymentAuthorize'
        },

        onCancel: {
            type: 'function',
            required: false,
            autoClose: false,
            alias: 'onPaymentCancel'
        },

        onClick: {
            type: 'function',
            required: false
        },

        dimensions: {
            type: 'object',
            required: false,

            def(props) {
                let size = props.buttonStyle && props.buttonStyle.size || 'small';

                return {

                    tiny: {
                        width: 80,
                        height: 22
                    },

                    small: {
                        width: 148,
                        height: 40
                    },

                    medium: {
                        width: 230,
                        height: 48
                    }

                }[size];
            }
        },
        
        locale: {
            type: 'string',
            required: false,

            def() {
                return 'en_US';
            }
        },

        buttonStyle: {
            type: 'object',
            required: false,
            queryParam: false,
            def() {
                return {
                    color: 'gold',
                    shape: 'pill',
                    size:  'small',
                    label: 'checkout'
                };
            }
        }
    },

    autoResize: true,

    dimensions: {
        width: 146,
        height: 40
    }
});
