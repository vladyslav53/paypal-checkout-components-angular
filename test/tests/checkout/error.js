/* @flow */

import { ZalgoPromise } from 'zalgo-promise/src';

import { generateOrderID, createElement, createTestContainer, destroyTestContainer, assert, WEBVIEW_USER_AGENT } from '../common';

for (const flow of [ 'popup', 'iframe' ]) {

    describe(`paypal checkout component error cases on ${ flow }`, () => {

        beforeEach(() => {
            createTestContainer();

            if (flow === 'iframe') {
                window.navigator.mockUserAgent = WEBVIEW_USER_AGENT;
            }
        });

        afterEach(() => {
            destroyTestContainer();
        });

        it('should render checkout and return a blank token in payment', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : string {
                        return '';
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onAuthorize to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout and return a promise for a blank token in payment', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : ZalgoPromise<string> {
                        return ZalgoPromise.resolve('');
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout and throw an error in payment', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() {
                        throw new Error('error');
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout and return a rejected promise in payment', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : string | ZalgoPromise<string> {
                        return ZalgoPromise.reject(new Error('error'));
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });
        
        it('should render checkout, then error out', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    test: { action: 'error' },

                    payment() : string | ZalgoPromise<string> {
                        return generateOrderID();
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout, then throw an error in onAuthorize', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : string | ZalgoPromise<string> {
                        return generateOrderID();
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() {
                        throw new Error('error');
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout, then return a rejected promise in onAuthorize', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : string | ZalgoPromise<string> {
                        return generateOrderID();
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : ZalgoPromise<void> {
                        return new ZalgoPromise((resolve, reject) => {
                            return reject(new Error('error'));
                        });
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        it('should render checkout, then return an undefined rejected promise in onAuthorize', (done) => {

            const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

            testButton.addEventListener('click', () => {


                return window.paypal.Checkout({

                    payment() : string | ZalgoPromise<string> {
                        return generateOrderID();
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : ZalgoPromise<void> {
                        return new ZalgoPromise((resolve, reject) => {
                            return reject();
                        });
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });

            testButton.click();
        });

        if (flow === 'iframe') {
            it('should render checkout, window.open the iframe name, then complete the payment', (done) => {

                const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });

                testButton.addEventListener('click', () => {
                    let name;


                    window.paypal.Checkout({

                        onRender() {
                            name = this.childWindowName;
                        },

                        payment() : string | ZalgoPromise<string> {
                            return generateOrderID();
                        },

                        onAuthorize() : void {
                            return done();
                        },

                        onCancel() : void {
                            return done(new Error('Expected onCancel to not be called'));
                        }
                    }).render('body');

                    window.open('', name);
                });

                testButton.click();
            });
        }

        if (flow === 'popup') {
            it('should render checkout without a click event and error out', (done) => {


                window.paypal.Checkout({
                    payment() : string | ZalgoPromise<string> {
                        return generateOrderID();
                    },

                    onError(err) : void {
                        assert.ok(err instanceof Error);
                        return done();
                    },

                    onAuthorize() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    },

                    onCancel() : void {
                        return done(new Error('Expected onCancel to not be called'));
                    }

                }).render('body');
            });
        }
    });
}
