export { default as postRobot } from 'post-robot/src';
export { PopupOpenError } from 'xcomponent/src';

import { SyncPromise } from 'sync-browser-mocks/src/promise';
export { SyncPromise as Promise } from 'sync-browser-mocks/src/promise';

export { rest } from '../api';
export { Button } from '../components';
export { checkout, apps } from '../legacy';
export { setup } from '../setup';
export { config, ENV, USERS } from '../config';
export { request, isEligible, isWebView } from '../lib';

export let onPossiblyUnhandledException = SyncPromise.onPossiblyUnhandledException;

export let version = __MINOR_VERSION__;

module.exports.default = module.exports;
