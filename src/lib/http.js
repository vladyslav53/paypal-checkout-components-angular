/* @flow */

import { SyncPromise } from 'sync-browser-mocks/src/promise';

type RequestOptionsType = {
    url : string,
    method? : string,
    headers? : { [key : string] : string },
    json? : Object,
    data? : { [key : string] : string },
    body? : string,
    win? : any,
    timeout? : number
};

const HEADERS = {
    CONTENT_TYPE: 'content-type',
    ACCEPT: 'accept'
};

let headerBuilders = [];

export function request({ url, method = 'get', headers = {}, json, data, body, win = window, timeout = 0 } : RequestOptionsType) : SyncPromise<Object> {

    return new SyncPromise((resolve, reject) => {

        if (json && data || json && body || data && json) {
            throw new Error(`Only options.json or options.data or options.body should be passed`);
        }

        let normalizedHeaders = {};

        for (let key of Object.keys(headers)) {
            normalizedHeaders[key.toLowerCase()] = headers[key];
        }

        if (json) {
            normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/json';
        } else if (data || body) {
            normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || 'application/x-www-form-urlencoded; charset=utf-8';
        }

        normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || 'application/json';

        for (let headerBuilder of headerBuilders) {
            let builtHeaders = headerBuilder();

            for (let key of Object.keys(builtHeaders)) {
                normalizedHeaders[key.toLowerCase()] = builtHeaders[key];
            }
        }

        let xhr = new win.XMLHttpRequest();

        xhr.addEventListener('load', function() : void {

            if (!this.status) {
                return reject(new Error(`Request to ${method.toLowerCase()} ${url} failed: no response status code`));
            }

            if (this.status >= 400) {
                let message = `Request to ${method.toLowerCase()} ${url} failed with ${this.status} error`;

                if (this.responseText) {
                    let res = this.responseText;

                    try {
                        let resJSON = JSON.parse(res);
                        res = JSON.stringify(resJSON, null, 4);
                    } catch (err) {
                        // pass
                    }

                    message = `${message}\n\n${res}\n`;
                }

                return reject(new Error(message));
            }

            let result;

            try {
                result = JSON.parse(this.responseText);
            } catch (err) {
                return reject(err);
            }

            return resolve(result);

        }, false);

        xhr.addEventListener('error', (evt) => {
            reject(new Error(`Request to ${method.toLowerCase()} ${url} failed: ${evt.toString()}`));
        }, false);

        xhr.open(method, url, true);

        for (let key in normalizedHeaders) {
            xhr.setRequestHeader(key, normalizedHeaders[key]);
        }

        if (json) {
            body = JSON.stringify(json);
        } else if (data) {
            body = Object.keys(data).map(key => {
                return `${encodeURIComponent(key)}=${data ? encodeURIComponent(data[key]) : ''}`;
            }).join('&');
        }

        xhr.timeout = timeout;
        xhr.ontimeout = function () {
            reject(new Error(`Request to ${method.toLowerCase()} ${url} has timed out`));
        };

        xhr.send(body);
    });
}

request.get = (url : string, options = {}) => {
    return request({ method: 'get', url, ...options });
};

request.post = (url : string, data, options = {}) => {
    return request({ method: 'post', url, data, ...options });
};

request.addHeaderBuilder = (method) => {
    headerBuilders.push(method);
};
