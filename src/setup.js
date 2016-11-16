
import $logger from 'beaver-logger/client';

import { config } from './config';
import { initLogger, checkForCommonErrors, once } from './lib';
import { enableCheckoutIframe } from './components';
import { setupBridge } from './compat';

function domainToEnv(domain) {
    for (let env of Object.keys(config.paypalUrls)) {
        if (config.paypalUrls[env] === domain) {
            return env;
        }
    }
}

function setDomainEnv(domain) {
    let currentDomainEnv = domainToEnv(domain);

    if (currentDomainEnv && currentDomainEnv !== 'test') {
        config.env = currentDomainEnv;
    }
}

setDomainEnv(`${window.location.protocol}//${window.location.host}`);

initLogger();

export let setup = once(function setup(options = {}) {

    checkForCommonErrors();

    if (options.env) {
        if (!config.paypalUrls[options.env]) {
            throw new Error(`Invalid env: ${options.env}`);
        }

        delete config.env;
        config.env = options.env;
    }

    if (options.stage) {
        delete config.stage;
        config.stage = options.stage;
        if (!options.env) {
            delete config.env;
            config.env = 'stage';
        }
    }

    if (options.apiStage) {
        delete config.apiStage;
        config.apiStage = options.apiStage;
    }

    if (options.paypalUrl) {
        delete config.paypalUrl;
        config.paypalUrl = options.paypalUrl;
        setDomainEnv(config.paypalUrl);
    }

    if (options.state) {
        delete config.state;
        config.state = options.state;
    }

    if (options.ppobjects) {
        config.ppobjects = true;
    }

    if (options.lightbox) {
        enableCheckoutIframe();
    }

    if (options.bridge) {
        setupBridge(config.env, config.bridgeUrl);
    }

    $logger.info(`setup_${config.env}`);
});

function getCurrentScript() {

    let scripts = Array.prototype.slice.call(document.getElementsByTagName('script'));

    for (let script of scripts) {
        if (script.src && script.src.replace(/^https?:/, '').split('?')[0] === config.scriptUrl || script.hasAttribute('data-paypal-checkout')) {
            return script;
        }

        if (script.src && script.src.indexOf('paypal.checkout.v4.js') !== -1) {
            return script;
        }
    }

    if (document.currentScript) {
        $logger.debug(`current_script_not_recognized`);
    }
}

let currentScript = getCurrentScript();

if (currentScript) {

    setup({
        env:       currentScript.getAttribute('data-env'),
        stage:     currentScript.getAttribute('data-stage'),
        apiStage:  currentScript.getAttribute('data-api-stage'),
        paypalUrl: currentScript.getAttribute('data-paypal-url'),
        state:     currentScript.getAttribute('data-state'),
        lightbox:  currentScript.hasAttribute('data-enable-lightbox'),
        bridge:    currentScript.hasAttribute('data-enable-bridge'),
        ppobjects: true
    });

} else {
    $logger.debug(`no_current_script`);
}
