/* @flow */
/* eslint max-lines: 0 */

import { createTestContainer, destroyTestContainer, getElement, createElement, onElementResize } from '../common';

describe(`paypal button component sizes`, () => {

    beforeEach(() => {
        createTestContainer();
    });

    afterEach(() => {
        destroyTestContainer();
    });

    it('should render a responsive button in the small spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '162px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 162;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the medium spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '250px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 250;
        const expectedHeight = 53;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the large spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '350px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 350;
        const expectedHeight = 68;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button below the tiny spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '30px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 150;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button above the large spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '800px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 750;
        const expectedHeight = 83;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the tiny spectrum into an element below the minimum height', (done) => {

        const container = createElement({
            style: {
                width:  '68px',
                height: '5px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 150;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the small spectrum into an element below the minimum height', (done) => {

        const container = createElement({
            style: {
                width:  '155px',
                height: '22px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 155;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the medium spectrum into an element below the minimum height', (done) => {

        const container = createElement({
            style: {
                width:  '235px',
                height: '27px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 235;
        const expectedHeight = 53;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button in the large spectrum into an element below the minimum height', (done) => {

        const container = createElement({
            style: {
                width:  '370px',
                height: '40px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 370;
        const expectedHeight = 68;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive pay button below the small spectrum', (done) => {

        const container = createElement({
            style: {
                width:  '40px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 150;
        const expectedHeight = 38;


        window.paypal.Buttons({

            test: {},

            style: {
                layout: 'horizontal',
                label:  'pay'
            },

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it.skip('should render a responsive button and resize it', (done) => {

        const container = createElement({
            style: {
                width:  '162px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 255;
        const expectedHeight = 53;


        window.paypal.Buttons({

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                const frame = getElement('#testContainer iframe');

                onElementResize(frame).then(() => {

                    const height = frame.offsetHeight;

                    if (height === 42) {
                        return onElementResize(frame);
                    }

                }).then(() => {

                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                });

                container.style.width = '255px';
            }

        }).render(container);
    });

    it('should render a responsive button in a hidden element then display it', (done) => {

        const container = createElement({
            style: {
                width:   '172px',
                height:  '100px',
                display: 'none'
            },
            container: '#testContainer'
        });

        const expectedWidth = 172;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                container.style.display = 'block';

                const frame = getElement('#testContainer iframe');

                onElementResize(frame).then(() => {
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                });
            }

        }).render(container);
    });

    it('should render a responsive button in a floated div without a width', (done) => {

        const container = createElement({
            style: {
                height: '100px',
                float:  'right'
            },
            container: '#testContainer'
        });

        const expectedWidth = 150;
        const expectedHeight = 38;


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button centered', (done) => {

        const container = createElement({
            style: {
                height:    '100px',
                width:     '800px',
                textAlign: 'center'
            },
            container: '#testContainer'
        });


        window.paypal.Buttons({

            style: {
                layout: 'horizontal'
            },

            test: {},

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {

                    const c = container.getBoundingClientRect();
                    const e = getElement('#testContainer iframe').getBoundingClientRect();

                    const expectedPosition = c.left + Math.floor(c.width / 2) - Math.floor(e.width / 2);
                    const actualPosition = e.left;

                    if (expectedPosition !== actualPosition) {
                        return done(new Error(`Expected button to have left position of ${ expectedPosition }, found ${ actualPosition }`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });

    it('should render a responsive button with a custon height', (done) => {

        const container = createElement({
            style: {
                width:  '162px',
                height: '100px'
            },
            container: '#testContainer'
        });

        const expectedWidth = 162;
        const expectedHeight = 54;


        window.paypal.Buttons({

            test: {},

            style: {
                height: 36,
                layout: 'horizontal'
            },

            createOrder() {
                done(new Error('Expected createOrder() to not be called'));
            },

            onApprove() {
                done(new Error('Expected onApprove() to not be called'));
            },

            onRendered() {
                setTimeout(() => {
                    const frame = getElement('#testContainer iframe');
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;

                    if (width !== expectedWidth) {
                        return done(new Error(`Expected button to have width of ${ expectedWidth }px, got ${ width }px`));
                    }

                    if (height !== expectedHeight) {
                        return done(new Error(`Expected button to have height of ${ expectedHeight }px, got ${ height }px`));
                    }

                    return done();
                }, 100);
            }

        }).render(container);
    });
});
