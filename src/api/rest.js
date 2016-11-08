
import { SyncPromise as Promise } from 'sync-browser-mocks/src/promise';
import postRobot from 'post-robot/src';
import { btoa } from 'Base64';

import { config } from '../config';
import { request } from '../lib';

import { Button } from '../components';

let proxyRest = {};

function memoize(method, options = {}) {

    let cache = {};

    return function() {

        let key = JSON.stringify(arguments);

        if (!cache.hasOwnProperty(key)) {
            cache[key] = method.apply(this, arguments);

            if (options.time) {
                setTimeout(() => {
                    delete cache[key];
                }, options.time);
            }
        }

        return cache[key];
    };
}

let createAccessToken = memoize(function createAccessToken(env, client) {

    env = env || config.env;

    let clientID = client[env];

    if (!clientID) {
        throw new Error(`Client ID not found for env: ${env}`);
    }

    if (proxyRest.createAccessToken) {
        return proxyRest.createAccessToken(env, client);
    }

    let basicAuth = btoa(`${clientID}:`);

    return request({

        method: `post`,
        url: config.authApiUrls[env],
        headers: {
            Authorization: `Basic ${basicAuth}`
        },
        body: {
            grant_type: `client_credentials`
        }

    }).then(res => {

        if (res && res.error === 'invalid_client') {
            throw new Error(`Auth Api invalid ${env} client id: ${clientID}:\n\n${JSON.stringify(res, 0, 4)}`);
        }

        if (!res || !res.access_token) {
            throw new Error(`Auth Api response error:\n\n${JSON.stringify(res, 0, 4)}`);
        }

        return res.access_token;
    });
}, { time: 10 * 60 * 1000 });

let createExperienceProfile = memoize(function createExperienceProfile(env, client, experienceDetails = {}) {
    env = env || config.env;

    let clientID = client[env];

    if (!clientID) {
        throw new Error(`Client ID not found for env: ${env}`);
    }

    if (proxyRest.createExperienceProfile) {
        return proxyRest.createExperienceProfile(env, client, experienceDetails);
    }

    experienceDetails.temporary = true;
    experienceDetails.name = experienceDetails.name ? `${experienceDetails.name}_${Math.random().toString()}` : Math.random().toString();

    return createAccessToken(env, client).then(accessToken => {

        return request({
            method: `post`,
            url: config.experienceApiUrls[env],
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            json: experienceDetails
        });

    }).then(res => {

        if (res && res.error) {
            throw new Error(res.error);
        }

        if (!res.id) {
            throw new Error(`No id in experience profile response:\n\n${JSON.stringify(res, 0, 4)}`);
        }

        return res.id;
    });

}, { time: 10 * 60 * 1000 });

function createCheckoutToken(env, client, paymentDetails, experienceDetails) {

    env = env || config.env;

    let clientID = client[env];

    if (!clientID) {
        throw new Error(`Client ID not found for env: ${env}`);
    }

    if (proxyRest.createCheckoutToken) {
        return proxyRest.createCheckoutToken(env, client, paymentDetails, experienceDetails);
    }

    paymentDetails = { ...paymentDetails };
    paymentDetails.intent = paymentDetails.intent || 'sale';
    paymentDetails.redirect_urls = paymentDetails.redirect_urls || {};
    paymentDetails.redirect_urls.return_url = paymentDetails.redirect_urls.return_url || `${window.location.protocol}//${window.location.host}`;
    paymentDetails.redirect_urls.cancel_url = paymentDetails.redirect_urls.cancel_url || `${window.location.protocol}//${window.location.host}`;
    paymentDetails.payer = paymentDetails.payer || {};
    paymentDetails.payer.payment_method = paymentDetails.payer.payment_method || 'paypal';

    return createAccessToken(env, client).then(accessToken => {

        return Promise.try(() => {

            if (experienceDetails) {
                return createExperienceProfile(env, client, experienceDetails);
            }

        }).then(experienceID => {

            if (experienceID) {
                paymentDetails.experience_profile_id = experienceID;
            }

            return request({
                method: `post`,
                url: config.paymentApiUrls[env],
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                json: paymentDetails
            });
        });

    }).then(res => {

        if (res && res.id) {
            return res.id;
        }

        throw new Error(`Payment Api response error:\n\n${JSON.stringify(res, 0, 4)}`);
    });
}

export function createBillingToken(env, client, billingDetails, experienceDetails) {

    env = env || config.env;

    let clientID = client[env];

    if (!clientID) {
        throw new Error(`Client ID not found for env: ${env}`);
    }

    if (proxyRest.createBillingToken) {
        return proxyRest.createBillingToken(env, client, billingDetails, experienceDetails);
    }

    billingDetails = { ...billingDetails };
    billingDetails.plan = billingDetails.plan || {};
    billingDetails.plan.merchant_preferences = billingDetails.plan.merchant_preferences || {};
    billingDetails.plan.merchant_preferences.return_url = billingDetails.plan.merchant_preferences.return_url || `${window.location.protocol}//${window.location.host}`;
    billingDetails.plan.merchant_preferences.cancel_url = billingDetails.plan.merchant_preferences.cancel_url || `${window.location.protocol}//${window.location.host}`;
    billingDetails.payer = billingDetails.payer || {};
    billingDetails.payer.payment_method = billingDetails.payer.payment_method || 'paypal';


    return createAccessToken(env, client).then(accessToken => {

        return Promise.try(() => {

            if (experienceDetails) {
                return createExperienceProfile(env, client, experienceDetails);
            }

        }).then(experienceID => {

            if (experienceID) {
                billingDetails.experience_profile_id = experienceID;
            }

            return request({
                method: `post`,
                url: config.billingApiUrls[env],
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                json: billingDetails
            });
        });

    }).then(res => {

        if (res && res.token_id) {
            return res.token_id;
        }

        throw new Error(`Billing Api response error:\n\n${JSON.stringify(res, 0, 4)}`);
    });
}

export let rest = {
    payment: {
        create: createCheckoutToken
    },
    billingAgreement: {
        create: createBillingToken
    },
    experience: {
        create: createExperienceProfile
    }
};

const PROXY_REST = `proxy_rest`;

if (postRobot.isBridge() || Button.isChild()) {
    postRobot.sendToParent(PROXY_REST, { createAccessToken, createExperienceProfile, createCheckoutToken, createBillingToken })
        .catch(() => {
            // pass
        });

} else {
    postRobot.on(PROXY_REST, { domain: config.paypal_domain_regex }, ({ data }) => {
        proxyRest = data;
    });
}
