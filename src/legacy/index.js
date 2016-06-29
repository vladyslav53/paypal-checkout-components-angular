
import { PayPalCheckout } from '../components';


/*  Global State
    ------------

    The legacy integration used global window.paypal.checkout.* methods which kept (essentially) global state
    regarding open windows, component, etc.

    Since we're emulating that integration, we have to store a little bit of global state, including the currently
    active component and any config that needs to be persisted from the setup() call.
*/

var component;

var config = {
    env: 'production'
};


/*  Match Token
    -----------

    We are passed either a token, or a url containing the token. In order to run the new checkout component we need to
    strip out the token from the url in order to pass it down as a prop
*/

function matchToken(token) {

    if (!token) {
        return;
    }

    // We may get lucky and be passed a token straight off the bar

    if (token.match(/^(EC-)?[A-Z0-9]{17}$/)) {
        return token;
    }

    // Otherwise strip the token from the url we're sent

    let match = token.match(/token=((EC-)?[A-Z0-9]{17})$/);

    if (match) {
        return match[1];
    }
}


/*  Get Token
    ---------

    Normally in the component world, getToken would be a user-provided function which passes a callback, and expects
    that callback to be called with either an error, or an EC token.

    In our case, we can emulate these callback calls by setting over the startFlow and closeFlow globals, and using
    them as our success and failure cases.

    Note: this method is set to `precall: true` mode. This means that it will be called the moment the component is
    inited on the page. This means that the moment we initialize, we're ready to start accepting a token via one of the
    global methods.
*/

function getToken(callback) {

    function cb() {

        // Once our callback has been called, we can set the global methods to their original values

        window.paypal.checkout.initXO = initXO;
        window.paypal.checkout.startFlow = startFlow;
        window.paypal.checkout.closeFlow = closeFlow;

        // Then call the original callback

        callback.apply(this, arguments);
    }

    // We don't want initXO to do anything during this process. We've already opened the window so we're good to go.

    window.paypal.checkout.initXO = function() {
        // pass
    };

    // startFlow is our 'success' case - we get a token, and we can pass it back to the caller

    window.paypal.checkout.startFlow = token => {
        cb(null, matchToken(token));
    };

    // closeFlow is our 'error' case - we can call our callback with an error

    window.paypal.checkout.closeFlow = function() {
        cb(new Error('Close Flow Called'));

        // We also want to close the component at this point, to preserve the original legacy behavior

        component.close();
    };
}


/*  Draw Button
    -----------

    The legacy script was responsible for drawing a button directly onto the page. We need to preserve this functionality
    for now. Eventually we can migrate this into the PayPalButton component
*/

function drawButton(container) {

    let button = document.createElement('button');
    button.innerText = 'PayPal Checkout';

    document.getElementById(container).appendChild(button);

    return button;
}


/*  Init PayPal Checkout
    --------------------

    Initialize the PayPalCheckout component with some standard props:

    - Pass in env from global state (saved during setup() call)
    - Return to success url on payment authorize
    - Return to cancel url on cancel
*/

function initPayPalCheckout(props = {}) {

    component = PayPalCheckout.init({

        env: config.env,

        onPaymentAuthorize({ returnUrl, token, payerID }) {
            window.location = `${returnUrl}?token=${token}&payerID=${payerID}`;
        },

        onCancel({ cancelUrl, token }) {
            window.location = `${cancelUrl}?token=${token}`;
        },

        ...props
    });

    return component;
}


/*  Setup
    -----

    Emulate window.paypal.checkout.setup.

    The purpose of this method is to:

    - Set up configuration for the incontext flow
    - Render a button to initiate the checkout window
*/

function setup(id, options) {
    options = options || {};
    config.env = options.environment;

    // If we're given a container element, the merchant expects us to render a button to the page

    if (options.container) {

        // Render button to the container

        let button = drawButton(options.container);

        // Handle button click

        if (options.click) {
            button.addEventListener('click', event => {
                event.preventDefault();

                // Open the checkout component

                initPayPalCheckout({
                    env: options.environment,
                    getToken
                }).render();

                // Call options.click, which should call one or both of initXO / startFlow

                options.click.call();
            });

        } else {

            // Hijack the button we created, assuming it will submit the parent form

            initPayPalCheckout({
                env: options.environment
            }).hijackButton(button);
        }
    }
}


/*  Init XO
    -------

    Emulate paypal.checkout.initXO

    Normally this would be used only to open the checkout page. But here we can just kick off the whole flow, since
    getToken will handle loading the token into the window for us.
*/

function initXO() {
    initPayPalCheckout({
        getToken
    }).render();
}


/*  Start Flow
    ----------

    Emulate paypal.checkout.startFlow

    Normally this would be used to load the url into the browser after the window has already been opened. Again, we
    can just kick off the whole flow here, on the off chance that a merchant calls us on button click. Normally this
    method will have been patched over in getToken.
*/

function startFlow(token) {
    initPayPalCheckout({
        token: matchToken(token)
    }).render();
}


/*  Close Flow
    ----------

    Emulate paypal.checkout.closeFlow

    Close the component in case of any error on the merchant side.
*/

function closeFlow() {
    component.close();
}



/*  On Document Ready
    -----------------

    Call the callback when the document is ready, or immediately if the document has already loaded
*/

let documentLoaded = document.readyState === 'complete' || document.readyState === 'loaded';

function onDocumentReady(method) {

    if (documentLoaded) {
        return method();
    }

    return document.addEventListener('DOMContentLoaded', event => {
        documentLoaded = true;
        return method();
    });
}


/*  PayPal Checkout Ready
    ---------------------

    Call window.paypalCheckoutReady on document ready, if it has been defined by the merchant
*/

if (window.paypalCheckoutReady instanceof Function) {
    onDocumentReady(window.paypalCheckoutReady);
}


/*  Scan for buttons
    ----------------

    Scan for any buttons on the page with a data-paypal-button attribute and auto-attach the PaypalCheckout component to them
*/

onDocumentReady(() => {
    let buttons = document.querySelectorAll('[data-paypal-button]');

    for (let button of buttons) {

        let env = button.attributes['data-env'] && button.attributes['data-env'].value;

        if (!env && button.attributes['data-sandbox']) {
            env = 'sandbox';
        }

        initPayPalCheckout({ env }).hijackButton(button);
    }
});


/*  paypal.checkout
    ---------------

    Set paypal.checkout global functions to support legacy integrations
*/

window.paypal = window.paypal || {};
window.paypal.checkout = window.paypal.checkout || {};

window.paypal.checkout.setup = setup;
window.paypal.checkout.initXO = initXO;
window.paypal.checkout.startFlow = startFlow;
