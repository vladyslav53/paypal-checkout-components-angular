/* @flow */
/* eslint max-lines: 0 */

import { COUNTRY_LANGS } from 'paypal-braintree-web-client/src';

import { mockProp, createTestContainer, destroyTestContainer } from '../common';

describe.skip(`paypal button component locales`, () => {

    beforeEach(() => {
        createTestContainer();
    });

    afterEach(() => {
        destroyTestContainer();
        window.location.hash = '';
    });

    let client = window.paypal.client();

    for (let country of Object.keys(COUNTRY_LANGS)) {
        for (let lang of COUNTRY_LANGS[country]) {
            it(`should render the button for ${ lang }_${ country }`, () => {
                let mockCountry = mockProp(window.__TEST_LOCALE__, '__COUNTRY__', country);
                let mockLang = mockProp(window.__TEST_LOCALE__, '__LANG__', lang);

                return client.Button.render({
                    payment() {
                        // pass
                    },
                    onAuthorize() {
                        // pass
                    }
                }, '#testContainer').then(() => {
                    mockCountry.cancel();
                    mockLang.cancel();
                });
            });
        }
    }
});
