/* @flow */

export const ENV = {
    LOCAL:      'local',
    STAGE:      'stage',
    SANDBOX:    'sandbox',
    PRODUCTION: 'production',
    TEST:       'test'
};


export const USERS = {
    ALL:        'all',
    REMEMBERED: 'remembered'
};

export const SOURCE = {
    MANUAL: 'manual',
    BUTTON_FACTORY: 'button_factory'
};

export const LOG_LEVEL = {
    DEBUG: 'debug',
    INFO:  'info',
    WARN:  'warn',
    ERROR: 'error'
};

export const FPTI = {

    KEY: {
        FEED: 'feed_name',
        STATE: 'state_name',
        TRANSITION: 'transition_name',
        BUTTON_TYPE: 'button_type',
        UID: 'user_guid',
        TOKEN: 'token',
        CONTEXT_ID: 'context_id',
        CONTEXT_TYPE: 'context_type',
        REFERER: 'referer_url',
        PAY_ID: 'pay_id',
        SELLER_ID: 'seller_id',
        DATA_SOURCE: 'serverside_data_source',
        BUTTON_SOURCE: 'button_source',
        ERROR_CODE: 'ext_error_code',
        ERROR_DESC: 'ext_error_desc'
    },

    BUTTON_TYPE: {
        IFRAME: 'iframe',
        HTML: 'html',
        CUSTOM: 'custom'
    },

    DATA_SOURCE: {
        CHECKOUT: 'checkout'
    },

    CONTEXT_TYPE: {
        UID: 'UID',
        EC_TOKEN: 'EC-Token'
    },

    FEED: {
        CHECKOUTJS: 'checkoutjs'
    },

    STATE: {
        LOAD: 'checkoutjs_load',
        BUTTON: 'checkoutjs_button',
        CHECKOUT: 'checkoutjs_checkout',
        PPTM: 'checkoutjs_pptm'
    },

    TRANSITION: {
        SCRIPT_LOAD: 'process_script_load',
        BUTTON_RENDER: 'process_button_render',
        BUTTON_CLICK: 'process_button_click',
        CREATE_PAYMENT: 'process_create_payment',
        CHECKOUT_INIT: 'process_checkout_init',
        PPTM_LOAD: 'process_pptm_load',
        PPTM_LOADED: 'process_pptm_loaded'
    }
};

export const PPTM_ID = 'xo--pptm';

