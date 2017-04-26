/* @flow */

import { createTestContainer, destroyTestContainer, getElement, createElement } from '../common';

describe(`paypal button component sizes`, () => {

    beforeEach(() => {
        createTestContainer();
    });

    afterEach(() => {
        destroyTestContainer();
    });

    it('should render a tiny button', (done) => {

        let expectedWidth = 80;
        let expectedHeight = 22;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'tiny'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, '#testContainer');
    });

    it('should render a small button', (done) => {

        let expectedWidth = 148;
        let expectedHeight = 42;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'small'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, '#testContainer');
    });

    it('should render a medium button', (done) => {

        let expectedWidth = 230;
        let expectedHeight = 48;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'medium'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, '#testContainer');
    });

    it('should render a large button', (done) => {

        let expectedWidth = 380;
        let expectedHeight = 60;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'large'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, '#testContainer');
    });

    it('should render a responsive button in the tiny spectrum', (done) => {

        let container = createElement({
            style: {
                width: '90px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 90;
        let expectedHeight = 22;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the small spectrum', (done) => {

        let container = createElement({
            style: {
                width: '140px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 140;
        let expectedHeight = 42;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the medium spectrum', (done) => {

        let container = createElement({
            style: {
                width: '250px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 250;
        let expectedHeight = 48;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the large spectrum', (done) => {

        let container = createElement({
            style: {
                width: '350px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 350;
        let expectedHeight = 60;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button below the tiny spectrum', (done) => {

        let container = createElement({
            style: {
                width: '30px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 80;
        let expectedHeight = 22;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button above the large spectrum', (done) => {

        let container = createElement({
            style: {
                width: '700px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 500;
        let expectedHeight = 60;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a tiny button into an element below the minimum height', (done) => {

        let expectedWidth = 80;
        let expectedHeight = 22;

        let container = createElement({
            style: {
                width: '100px',
                height: '15px'
            },
            container: '#testContainer'
        });

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'tiny'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a small button into an element below the minimum height', (done) => {

        let expectedWidth = 148;
        let expectedHeight = 42;

        let container = createElement({
            style: {
                width: '160px',
                height: '20px'
            },
            container: '#testContainer'
        });

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'small'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a medium button into an element below the minimum height', (done) => {

        let expectedWidth = 230;
        let expectedHeight = 48;

        let container = createElement({
            style: {
                width: '260px',
                height: '40px'
            },
            container: '#testContainer'
        });

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'medium'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a large button into an element below the minimum height', (done) => {

        let expectedWidth = 380;
        let expectedHeight = 60;

        let container = createElement({
            style: {
                width: '450px',
                height: '45px'
            },
            container: '#testContainer'
        });

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'large'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the tiny spectrum into an element below the minimum height', (done) => {

        let container = createElement({
            style: {
                width: '98px',
                height: '5px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 98;
        let expectedHeight = 22;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the small spectrum into an element below the minimum height', (done) => {

        let container = createElement({
            style: {
                width: '155px',
                height: '22px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 155;
        let expectedHeight = 42;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the medium spectrum into an element below the minimum height', (done) => {

        let container = createElement({
            style: {
                width: '235px',
                height: '27px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 235;
        let expectedHeight = 48;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive button in the large spectrum into an element below the minimum height', (done) => {

        let container = createElement({
            style: {
                width: '370px',
                height: '40px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 370;
        let expectedHeight = 60;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive credit button below the small spectrum', (done) => {

        let container = createElement({
            style: {
                width: '100px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 148;
        let expectedHeight = 42;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive',
                label: 'credit'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });

    it('should render a responsive pay button below the small spectrum', (done) => {

        let container = createElement({
            style: {
                width: '100px',
                height: '100px'
            },
            container: '#testContainer'
        });

        let expectedWidth = 148;
        let expectedHeight = 42;

        return window.paypal.Button.render({

            test: {},

            style: {
                size: 'responsive',
                label: 'pay'
            },

            payment() {
                done(new Error('Expected payment() to not be called'));
            },

            onAuthorize() {
                done(new Error('Expected onAuthorize() to not be called'));
            },

            onEnter() {
                setTimeout(() => {
                    let frame = getElement('#testContainer iframe');
                    let width = frame.offsetWidth;
                    let height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${expectedWidth}px, got ${width}`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${expectedHeight}px, got ${height}`));
                    }

                    return done();
                }, 100);
            }

        }, container);
    });
});
