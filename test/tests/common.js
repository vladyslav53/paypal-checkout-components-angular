/* @flow */
/* eslint max-lines: 0 */

import { ZalgoPromise } from 'zalgo-promise/src';
import { $mockEndpoint, patchXmlHttpRequest } from 'sync-browser-mocks/src/xhr';
import { isWindowClosed, type CrossDomainWindowType, type SameDomainWindowType } from 'cross-domain-utils/src';
import { getPayPalLoggerUrl, getAuthAPIUrl, getOrderAPIUrl } from '@paypal/sdk-client/src';

for (const level of [ 'log', 'debug', 'info', 'warn', 'error' ]) {
    const original = window.console[level];

    window.console[level] = function log() : void {

        const date = new Date();
        const args = Array.prototype.slice.call(arguments);

        args.unshift(`${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }:${ date.getMilliseconds() }`);

        return original.apply(this, args);
    };
}

export function onHashChange() : ZalgoPromise<string> {
    return new ZalgoPromise(resolve => {
        const currentHash = window.location.hash;

        function listener() {
            if (window.location.hash !== currentHash) {
                window.removeEventListener('hashchange', listener);
                resolve(window.location.hash);
            }
        }

        window.addEventListener('hashchange', listener);
    });
}

export function delay(time : number) : ZalgoPromise<void> {
    return new ZalgoPromise(resolve => {
        setTimeout(resolve, time);
    });
}

export function uniqueID(length : number = 8, chars : string = '0123456789abcdefhijklmnopqrstuvwxyz') : string {
    return new Array(length + 1).join('x').replace(/x/g, () => {
        return chars.charAt(Math.floor(Math.random() * chars.length));
    });
}

export function generateOrderID() : string {
    return `${ uniqueID(20).toUpperCase() }`;
}

export const IE8_USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)';
export const IE11_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko';
export const IPHONE6_USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';
export const WEBVIEW_USER_AGENT = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36';

export const MERCHANT_CLIENT_ID = 'abcxyz123';
export const MERCHANT_ACCESS_TOKEN = 'xxxyyy987';
export const MERCHANT_BRAINTREE_AUTH = 'aaabbb456';

export function createElement(options : Object) : HTMLElement {

    const element = document.createElement(options.tag || 'div');

    if (options.id) {
        element.setAttribute('id', options.id);
    }

    if (options.props) {
        for (const key of Object.keys(options.props)) {
            element.setAttribute(key, options.props[key]);
        }
    }

    if (options.style) {
        for (const key of Object.keys(options.style)) {
            element.style[key] = options.style[key];
        }
    }

    if (options.children) {
        for (const child of options.children) {
            element.appendChild(createElement(child));
        }
    }

    if (options.container) {

        let container;
        const containerName = options.container;

        if (typeof containerName === 'string') {
            container = document.getElementById(containerName) || document.querySelector(containerName);
        } else {
            container = containerName;
        }

        if (!container) {
            throw new Error(`Could not find container: ${ containerName }`);
        }

        container.appendChild(element);
    }

    if (options.html) {
        element.innerHTML = options.html;
    }

    return element;
}

export function destroyElement(element : string | ?HTMLElement) {

    if (typeof element === 'string') {
        element = document.getElementById(element) || document.querySelector(element);
    }

    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

export function doOnClick<T>(handler : () => T) : T {
    const testButton = createElement({ tag: 'button', id: 'testButton', container: 'testContainer' });
    let didError = false;
    let result;
    let error;
    testButton.addEventListener('click', () => {
        try {
            result = handler();
        } catch (err) {
            didError = true;
            error = err;
        }
    });
    testButton.click();
    if (didError) {
        throw error;
    } else {
        // $FlowFixMe
        return result;
    }
}

export function createFrame(options : Object) : HTMLIFrameElement {

    let html;

    if (options.html) {
        html = options.html;
        delete options.html;
    }

    const frame = createElement({
        tag: 'iframe',
        ...options
    });

    if (html) {
        // $FlowFixMe
        frame.contentWindow.document.write(html);
    }

    // $FlowFixMe
    return frame;
}

export function once<T : Function>(method : T) : T {
    let called = false;
    // $FlowFixMe
    return function onceWrapper() : mixed {
        if (!called) {
            called = true;
            return method.apply(this, arguments);
        }
    };
}

export function getElement(el : string | HTMLElement, container : HTMLElement | Document = document) : HTMLElement {

    if (!el) {
        throw new Error(`No element passed`);
    }

    let element;

    if (typeof el === 'string') {
        element = container.querySelector(el);

        if (!element) {
            throw new Error(`Can not find element: ${ el }`);
        }
    } else {
        element = el;
    }

    return element;
}

export function getElements(selector : string, container : HTMLElement | Document = document) : $ReadOnlyArray<HTMLElement> {

    if (!selector) {
        throw new Error(`No element passed`);
    }

    const elements = Array.prototype.slice.call(container.querySelectorAll(selector));

    if (!elements) {
        throw new Error(`Can not find element: ${ selector }`);
    }

    return elements;
}

export function getElementRecursive(selector : string, win : SameDomainWindowType = window) : HTMLElement {

    try {
        return getElement(selector, win.document);
    } catch (err) {
        // pass
    }

    for (let i = 0; i < win.frames.length; i++) {
        try {
            return getElementRecursive(selector, win.frames[i]);
        } catch (err) {
            continue;
        }
    }

    throw new Error(`Can not find element: ${ selector }`);
}


export function createTestContainer() : HTMLElement {
    return createElement({
        id:        'testContainer',
        container: document.body
    });
}

export function destroyTestContainer() : void {
    return destroyElement('testContainer');
}

patchXmlHttpRequest();

export const loggerApiMock = $mockEndpoint.register({
    method: 'POST',
    uri:    getPayPalLoggerUrl(),
    data:   {}
});

export const authApiMock = $mockEndpoint.register({
    method: 'POST',
    uri:    getAuthAPIUrl(),
    handler({ headers, data }) : { access_token : string } {

        if (!headers.authorization) {
            throw new Error(`Expected authorization header for auth api request`);
        }

        if (!headers.authorization.match(/^Basic .+$/)) {
            throw new Error(`Expected authorization header to be Basic XXXX, got "${ headers.authorization }"`);
        }

        if (data !== 'grant_type=client_credentials') {
            throw new Error(`Expected grant_type to be client_credentials, got "${ data.grant_type }"`);
        }

        const clientID = window.atob(headers.authorization.replace('Basic ', '')).split(':')[0];

        if (clientID !== MERCHANT_CLIENT_ID) {
            throw new Error(`Expected client id to be ${ MERCHANT_CLIENT_ID }, got ${ clientID }`);
        }

        return {
            access_token: MERCHANT_ACCESS_TOKEN
        };
    }
});

export const orderApiMock = $mockEndpoint.register({
    method: 'POST',
    uri:    getOrderAPIUrl(),
    handler({ data, headers }) : { id : string } {

        if (!headers.authorization) {
            throw new Error(`Expected authorization header for auth api request`);
        }

        if (!headers.authorization.match(/^Bearer .+$/)) {
            throw new Error(`Expected authorization header to be Bearer XXXX, got "${ headers.authorization }"`);
        }

        if (!data.intent) {
            throw new Error(`Expected data.intent to be passed`);
        }

        if (!data.intent) {
            throw new Error(`Expected data.intent to be passed`);
        }

        if (!data.purchase_units) {
            throw new Error(`Expected data.purchase_units to be passed`);
        }

        data.purchase_units.forEach(unit => {
            if (!unit.amount) {
                throw new Error(`Expected unit.amount to be passed`);
            }

            if (!unit.amount.currency_code) {
                throw new Error(`Expected unit.amount.currency_code to be passed`);
            }

            if (!unit.amount.value) {
                throw new Error(`Expected unit.amount.total to be passed`);
            }
        });

        return {
            id: generateOrderID()
        };
    }
});

loggerApiMock.listen();
authApiMock.listen();
orderApiMock.listen();

window.karma = window.karma || (window.top && window.top.karma) || (window.parent && window.parent.karma) || (window.opener && window.opener.karma);

window.console.karma = function consoleKarma() {
    if (window.karma) {
        window.karma.log('debug', arguments);
    }
    console.log.apply(console, arguments); // eslint-disable-line no-console
};

window.debug = () => {
    debugger; // eslint-disable-line no-debugger
};

let isClick = false;
let clickTimeout;

function doClick() {
    isClick = true;

    clearTimeout(clickTimeout);
    clickTimeout = setTimeout(() => {
        isClick = false;
    }, 1);
}


const HTMLElementClick = window.HTMLElement.prototype.click;
window.HTMLElement.prototype.click = function overrideHTMLElementClick() : void {
    doClick();
    return HTMLElementClick.apply(this, arguments);
};

const windowOpen = window.open;
window.open = function patchedWindowOpen() : CrossDomainWindowType {

    if (!isClick) {
        const win : Object = {
            closed: true,
            close() {
                // pass
            },
            location: {
                href:     '',
                pathname: '',
                protocol: '',
                host:     '',
                hostname: ''
            }
        };

        win.parent = win.top = win;
        win.opener = window;

        return win;
    }

    return windowOpen.apply(this, arguments);
};

export function preventOpenWindow(flow : string, win : SameDomainWindowType = window) {

    if (flow === 'popup') {
        const winOpen = win.open;
        win.open = () => {
            win.open = winOpen;
            return {
                closed: true,
                close() {
                    // pass
                }
            };
        };
    } else if (flow === 'iframe') {

        const documentCreateElement = win.document.createElement;
        // $FlowFixMe
        win.document.createElement = () => { // $FlowFixMe
            win.document.createElement = documentCreateElement;
            throw new Error('Can not create element');
        };

    } else {

        throw new Error(`Flow not recognized: ${ flow }`);
    }
}

export function onWindowOpen({ time = 500 } : { time? : number } = {}) : ZalgoPromise<CrossDomainWindowType> {
    return new ZalgoPromise((resolve, reject) => {

        const winOpen = window.open;
        const documentCreateElement = document.createElement;

        const reset = () => {
            window.open = winOpen;
            // $FlowFixMe
            document.createElement = documentCreateElement;
        };

        window.open = function patchedWindowOpen() : CrossDomainWindowType {
            const win = winOpen.apply(this, arguments);
            reset();
            resolve(win);
            return win;
        };

        // $FlowFixMe
        document.createElement = function docCreateElement(tagName) : HTMLElement {
            const el = documentCreateElement.apply(this, arguments);

            if (tagName && tagName.toLowerCase() === 'iframe') {

                let interval = null;
                let timeout = null;

                interval = setInterval(() => {
                    // $FlowFixMe
                    if (el.contentWindow) {
                        reset();
                        if (timeout) {
                            clearTimeout(timeout);
                        }
                        if (interval) {
                            clearInterval(interval);
                        }
                        // $FlowFixMe
                        resolve(el.contentWindow);
                    }
                }, 10);

                timeout = setTimeout(() => {
                    if (interval) {
                        clearInterval(interval);
                    }
                    return reject(new Error(`Window not opened in ${ time }ms`));
                }, time);
            }

            return el;
        };
    }).then(win => {

        if (!win || isWindowClosed(win)) {
            throw new Error(`Expected win to be open`);
        }

        return win;
    });
}

export function onWindowClose(win : CrossDomainWindowType) : ZalgoPromise<void> {
    return new ZalgoPromise(resolve => {
        if (isWindowClosed(win)) {
            return resolve();
        }

        const interval = setInterval(() => {
            if (isWindowClosed(win)) {
                clearInterval(interval);
                return resolve();
            }
        }, 50);
    });
}

export function errorOnWindowOpen(win : CrossDomainWindowType = window) {

    if (win.open.reset) {
        win.open.reset();
    }

    const open = win.open;

    win.open = () => {
        throw new Error(`Can not open window`);
    };

    win.open.reset = () => {
        win.open = open;
    };
}

function parseUrl(url : string) : Object {

    const [ serverUrl, hash ] = url.split('#');
    const [ , query ] = serverUrl.split('?');

    const params = {};

    if (query) {
        for (const keypair of query.split('&')) {
            const [ key, val ] = keypair.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(val);
        }
    }

    return {
        url:   serverUrl,
        query: params,
        hash
    };
}

export function noop() {
    // pass
}

export function setupPopupBridge({ win = window, isAuthorize = true } : { win? : window, isAuthorize? : boolean } = {}) {

    errorOnWindowOpen(win);

    win.popupBridge = {

        getReturnUrlPrefix() : string {
            return 'app://foobar';
        },

        open(url) {
            setTimeout(() => {

                const { query, hash } = parseUrl(url);

                const queryItems : Object = {};
                queryItems.token = query.token;

                if (isAuthorize) {
                    queryItems.opType = 'payment';
                    queryItems.PayerID = 'YYYYYYYYYYYYY';
                    queryItems.return_uri = `#return?token=${ queryItems.token }&PayerID=YYYYYYYYYYYYY`;
                    queryItems.intent = 'commit';
                    if (hash) {
                        queryItems.return_uri = `${ queryItems.return_uri }&hash=${ hash }`;
                    }

                } else {
                    queryItems.opType = 'cancel';
                    queryItems.cancel_uri = `#cancel?token=${ queryItems.token }`;
                    if (hash) {
                        queryItems.cancel_uri = `${ queryItems.cancel_uri }&hash=${ hash }`;
                    }
                }

                if (win.popupBridge.action === 'cancel') {
                    win.popupBridge.onCancel();
                } else {
                    return win.popupBridge.onComplete(null, {
                        queryItems
                    });
                }

            }, 200);
        }
    };
}

export function destroyPopupBridge(win : SameDomainWindowType = window) {
    delete win.popupBridge;

    if (window.popupBridge) {
        delete window.popupBridge;
    }

    if (win.open.reset) {
        win.open.reset();
    }
}

export function onElementResize(el : HTMLElement) : ZalgoPromise<void> {
    return new ZalgoPromise(resolve => {

        const originalWidth = el.offsetWidth;
        const originalHeight = el.offsetHeight;

        const interval = setInterval(() => {
            if (el.offsetWidth !== originalWidth || el.offsetHeight !== originalHeight) {
                clearInterval(interval);
                resolve();
            }
        }, 50);
    });
}

export function mockProp<T>(namespace : Object, name : string, value : T) : { cancel : () => void } {
    const descriptor = Object.getOwnPropertyDescriptor(namespace, name);
    delete namespace[name];
    namespace[name] = value;
    return {
        cancel: () => {
            delete namespace[name];
            // $FlowFixMe
            Object.defineProperty(namespace, name, descriptor);
        }
    };
}

export function stringify(item : mixed) : string {
    if (typeof item === 'string') {
        return item;
    }

    if (item && typeof item.toString === 'function') {
        return item.toString();
    }

    return Object.prototype.toString.call(item);
}

export const assert = {
    ok(item : mixed, message? : string) {
        if (!item) {
            throw new Error(message || `Expected truthy value, got ${ stringify(item) }`);
        }
    },
    equal(one : mixed, two : mixed, message? : string) {
        if (one !== two) {
            throw new Error(message || `Expected "${ stringify(one) }" to equal "${ stringify(two) }"`);
        }
    },
    notEqual(one : mixed, two : mixed, message? : string) {
        if (one === two) {
            throw new Error(message || `Expected "${ stringify(one) }" to not equal "${ stringify(two) }"`);
        }
    }
};
