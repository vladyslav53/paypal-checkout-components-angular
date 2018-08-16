/* @flow */

import { logger } from 'paypal-braintree-web-client/src';
import { isIEIntranet, getUserAgent, once } from 'belter/src';

import { SUPPORTED_BROWSERS } from '../config';

let bowserCache = {};

function getBowser() : Object {

    let userAgent = getUserAgent();

    if (bowserCache[userAgent]) {
        return bowserCache[userAgent];
    }

    delete require.cache[require.resolve('bowser/bowser.min')];
    let bowser = require('bowser/bowser.min');

    bowserCache[userAgent] = bowser;

    return bowser;
}

export function getBrowser() : { browser? : string, version? : string } {

    let bowser = getBowser();

    for (let browser of Object.keys(SUPPORTED_BROWSERS)) {
        if (bowser[browser]) {
            return { browser, version: bowser.version };
        }
    }

    return {};
}

function isBrowserEligible() : boolean {

    if (isIEIntranet()) {
        return false;
    }

    let bowser = getBowser();
    let { browser, version } = getBrowser();

    if (browser && version && bowser.compareVersions([ version, SUPPORTED_BROWSERS[browser] ]) === -1) {
        return false;
    }

    return true;
}

let eligibilityResults = {};

export function isEligible() : boolean {

    if (isIEIntranet()) {
        return false;
    }

    let userAgent = window.navigator.userAgent;

    if (userAgent && eligibilityResults.hasOwnProperty(userAgent)) {
        return eligibilityResults[userAgent];
    }

    let result = isBrowserEligible();

    eligibilityResults[userAgent] = result;

    return result;
}

export let checkRecognizedBrowser = once((state : string) => {

    let { browser } = getBrowser();

    if (!browser) {
        let { name, version, mobile, android, ios } = getBowser();
        logger.info(`unrecognized_browser_${ state }`, { name, version, mobile, android, ios });
        logger.flush();
    }
});
