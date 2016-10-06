
import $logger from 'beaver-logger/client';

function warn(err) {
    if (window.console) {
        if (window.console.warn) {
            return window.console.warn(err);
        }

        if (window.console.log) {
            return window.console.log(err);
        }
    }
}

export function checkForCommonErrors() {

    if (JSON.stringify([]) !== '[]') {
        if (Array.prototype.toJSON) {
            warn(`Custom Array.prototype.toJSON is causing incorrect json serialization of arrays. This is likely to cause issues. Probable cause is Prototype.js`);
        } else {
            warn(`JSON.stringify is doing incorrect serialization of arrays. This is likely to cause issues.`);
        }

        $logger.warn(`json_stringify_array_broken`);
    }

    if (JSON.stringify({}) !== '{}') {
        warn(`JSON.stringify is doing incorrect serialization of objects. This is likely to cause issues.`);

        $logger.warn(`json_stringify_object_broken`);
    }
}
