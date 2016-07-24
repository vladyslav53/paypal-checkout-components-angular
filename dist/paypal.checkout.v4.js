(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define("ppxo", [], factory); else if (typeof exports === "object") exports["ppxo"] = factory(); else root["ppxo"] = factory();
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _components = __webpack_require__(/*! ./components */ 1);
        Object.keys(_components).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _components[key];
                }
            });
        });
        var _legacy = __webpack_require__(/*! ./legacy */ 78);
        Object.keys(_legacy).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _legacy[key];
                }
            });
        });
        var _setup = __webpack_require__(/*! ./setup */ 80);
        Object.keys(_setup).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _setup[key];
                }
            });
        });
        var _src = __webpack_require__(/*! xcomponent/src */ 4);
        var _src2 = _interopRequireDefault(_src);
        var _src3 = __webpack_require__(/*! post-robot/src */ 6);
        var _src4 = _interopRequireDefault(_src3);
        __webpack_require__(/*! ./bridge */ 81);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        module.exports.xcomponent = _src2["default"];
        module.exports.postRobot = _src4["default"];
    }, /*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _button = __webpack_require__(/*! ./button */ 2);
        Object.keys(_button).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _button[key];
                }
            });
        });
        var _checkout = __webpack_require__(/*! ./checkout */ 71);
        Object.keys(_checkout).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _checkout[key];
                }
            });
        });
    }, /*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _component = __webpack_require__(/*! ./component */ 3);
        Object.keys(_component).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _component[key];
                }
            });
        });
    }, /*!********************************************!*\
  !*** ./src/components/button/component.js ***!
  \********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PayPalButton = undefined;
        var _src = __webpack_require__(/*! xcomponent/src */ 4);
        var _src2 = _interopRequireDefault(_src);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var PayPalButton = exports.PayPalButton = _src2["default"].create({
            tag: "paypal-button",
            name: "ppbtn",
            defaultEnv: "production",
            envUrls: {
                local: "http://todo",
                sandbox: "http://todo",
                production: "https://todo",
                demo: "./button.htm"
            },
            props: {
                paymentToken: {
                    type: "string",
                    required: true,
                    getter: true,
                    queryParam: false
                },
                submitForm: {
                    type: "boolean",
                    def: false
                },
                onPaymentAuthorize: {
                    type: "function",
                    required: false,
                    once: true
                },
                onPaymentComplete: {
                    type: "function",
                    required: false,
                    once: true
                },
                onPaymentCancel: {
                    type: "function",
                    required: false,
                    once: true
                }
            },
            dimensions: {
                width: 100,
                height: 50
            }
        });
    }, /*!***********************************!*\
  !*** ./~/xcomponent/src/index.js ***!
  \***********************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.create = create;
        var _error = __webpack_require__(/*! ./error */ 5);
        Object.keys(_error).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _error[key];
                }
            });
        });
        var _src = __webpack_require__(/*! post-robot/src */ 6);
        var _src2 = _interopRequireDefault(_src);
        var _component = __webpack_require__(/*! ./component */ 34);
        var _constants = __webpack_require__(/*! ./constants */ 55);
        var CONSTANTS = _interopRequireWildcard(_constants);
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj["default"] = obj;
                return newObj;
            }
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function create(options) {
            return new _component.Component(options);
        }
        module.exports.CONSTANTS = CONSTANTS;
        module.exports.postRobot = _src2["default"];
        exports["default"] = module.exports;
    }, /*!***********************************!*\
  !*** ./~/xcomponent/src/error.js ***!
  \***********************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PopupOpenError = PopupOpenError;
        exports.IntegrationError = IntegrationError;
        function PopupOpenError(message) {
            this.message = message;
        }
        PopupOpenError.prototype = Object.create(Error.prototype);
        function IntegrationError(message) {
            this.message = message;
        }
        IntegrationError.prototype = Object.create(Error.prototype);
    }, /*!***********************************!*\
  !*** ./~/post-robot/src/index.js ***!
  \***********************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Promise = undefined;
        var _interface = __webpack_require__(/*! ./interface */ 7);
        Object.keys(_interface).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _interface[key];
                }
            });
        });
        var _lib = __webpack_require__(/*! ./lib */ 14);
        Object.defineProperty(exports, "Promise", {
            enumerable: true,
            get: function get() {
                return _lib.Promise;
            }
        });
        var _drivers = __webpack_require__(/*! ./drivers */ 12);
        var _compat = __webpack_require__(/*! ./compat */ 23);
        function init() {
            (0, _compat.registerGlobals)();
            _lib.util.listen(window, "message", _drivers.messageListener);
            (0, _lib.initOnReady)();
        }
        init();
        exports["default"] = module.exports;
    }, /*!*********************************************!*\
  !*** ./~/post-robot/src/interface/index.js ***!
  \*********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.linkUrl = exports.util = exports.openBridge = exports.reset = exports.parent = undefined;
        var _client = __webpack_require__(/*! ./client */ 8);
        Object.keys(_client).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _client[key];
                }
            });
        });
        var _server = __webpack_require__(/*! ./server */ 31);
        Object.keys(_server).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _server[key];
                }
            });
        });
        var _proxy = __webpack_require__(/*! ./proxy */ 32);
        Object.keys(_proxy).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _proxy[key];
                }
            });
        });
        var _config = __webpack_require__(/*! ./config */ 33);
        Object.keys(_config).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _config[key];
                }
            });
        });
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        Object.defineProperty(exports, "reset", {
            enumerable: true,
            get: function get() {
                return _drivers.resetListeners;
            }
        });
        var _bridge = __webpack_require__(/*! ../compat/bridge */ 24);
        Object.defineProperty(exports, "openBridge", {
            enumerable: true,
            get: function get() {
                return _bridge.openBridge;
            }
        });
        var _util = __webpack_require__(/*! ../lib/util */ 18);
        Object.defineProperty(exports, "util", {
            enumerable: true,
            get: function get() {
                return _util.util;
            }
        });
        var _windows = __webpack_require__(/*! ../lib/windows */ 20);
        Object.defineProperty(exports, "linkUrl", {
            enumerable: true,
            get: function get() {
                return _windows.linkUrl;
            }
        });
        var parent = exports.parent = (0, _windows.getParentWindow)();
    }, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/client.js ***!
  \**********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.request = request;
        exports.send = send;
        exports.sendToParent = sendToParent;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        var _lib = __webpack_require__(/*! ../lib */ 14);
        function request(options) {
            return _lib.promise.nodeify(new _lib.promise.Promise(function(resolve, reject) {
                if (!options.name) {
                    throw new Error("Expected options.name");
                }
                if (!options.window) {
                    throw new Error("Expected options.window");
                }
                if (_conf.CONFIG.MOCK_MODE) {
                    options.window = window;
                } else if (typeof options.window === "string") {
                    var el = document.getElementById(options.window);
                    if (!el) {
                        throw new Error("Expected options.window " + options.window + " to be a valid element id");
                    }
                    if (el.tagName.toLowerCase() !== "iframe") {
                        throw new Error("Expected options.window " + options.window + " to be an iframe");
                    }
                    options.window = el.contentWindow;
                    if (!options.window) {
                        throw new Error("Expected options.window");
                    }
                }
                var hash = options.name + "_" + _lib.util.uniqueID();
                _drivers.listeners.response[hash] = options;
                if ((0, _lib.isWindowClosed)(options.window)) {
                    throw new Error("Target window is closed");
                }
                var hasResult = false;
                options.respond = function(err, result) {
                    if (!err) {
                        hasResult = true;
                    }
                    return err ? reject(err) : resolve(result);
                };
                return _lib.promise.run(function() {
                    if ((0, _lib.getParentWindow)(options.window) === window) {
                        return (0, _lib.onWindowReady)(options.window);
                    }
                }).then(function() {
                    (0, _drivers.sendMessage)(options.window, {
                        hash: hash,
                        type: _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST,
                        name: options.name,
                        data: options.data,
                        fireAndForget: options.fireAndForget
                    }, options.domain || "*")["catch"](reject);
                    if (options.fireAndForget) {
                        return resolve();
                    }
                    var ackTimeout = _lib.util.intervalTimeout(_conf.CONFIG.ACK_TIMEOUT, 100, function(remaining) {
                        if (options.ack || (0, _lib.isWindowClosed)(options.window)) {
                            return ackTimeout.cancel();
                        }
                        if (!remaining) {
                            return reject(new Error("No ack for postMessage " + options.name + " in " + _conf.CONFIG.ACK_TIMEOUT + "ms"));
                        }
                    });
                    if (options.timeout) {
                        (function() {
                            var timeout = _lib.util.intervalTimeout(options.timeout, 100, function(remaining) {
                                if (hasResult || (0, _lib.isWindowClosed)(options.window)) {
                                    return timeout.cancel();
                                }
                                if (!remaining) {
                                    return reject(new Error("Post message response timed out after " + options.timeout + " ms"));
                                }
                            }, options.timeout);
                        })();
                    }
                })["catch"](reject);
            }), options.callback);
        }
        function send(window, name, data, options, callback) {
            if (!callback) {
                if (!options && data instanceof Function) {
                    callback = data;
                    options = {};
                    data = {};
                } else if (options instanceof Function) {
                    callback = options;
                    options = {};
                }
            }
            options = options || {};
            options.window = window;
            options.name = name;
            options.data = data;
            options.callback = callback;
            return request(options);
        }
        function sendToParent(name, data, options, callback) {
            var win = (0, _lib.getParentWindow)();
            if (!window) {
                throw new Error("Window does not have a parent");
            }
            return send(win, name, data, options, callback);
        }
    }, /*!****************************************!*\
  !*** ./~/post-robot/src/conf/index.js ***!
  \****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _config = __webpack_require__(/*! ./config */ 10);
        Object.keys(_config).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _config[key];
                }
            });
        });
        var _constants = __webpack_require__(/*! ./constants */ 11);
        Object.keys(_constants).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _constants[key];
                }
            });
        });
    }, /*!*****************************************!*\
  !*** ./~/post-robot/src/conf/config.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CONFIG = undefined;
        var _ALLOWED_POST_MESSAGE;
        var _constants = __webpack_require__(/*! ./constants */ 11);
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var CONFIG = exports.CONFIG = {
            ALLOW_POSTMESSAGE_POPUP: false,
            LOG_LEVEL: "info",
            ACK_TIMEOUT: 500,
            LOG_TO_PAGE: false,
            MOCK_MODE: false,
            ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, true), 
            _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.GLOBAL_METHOD, true), 
            _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.REMOTE_BRIDGE, true), 
            _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.LOCAL_BRIDGE, true), 
            _ALLOWED_POST_MESSAGE)
        };
    }, /*!********************************************!*\
  !*** ./~/post-robot/src/conf/constants.js ***!
  \********************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var CONSTANTS = exports.CONSTANTS = {
            POST_MESSAGE_TYPE: {
                REQUEST: "postrobot_message_request",
                RESPONSE: "postrobot_message_response",
                ACK: "postrobot_message_ack"
            },
            POST_MESSAGE_ACK: {
                SUCCESS: "success",
                ERROR: "error"
            },
            POST_MESSAGE_NAMES: {
                METHOD: "postrobot_method",
                READY: "postrobot_ready"
            },
            WINDOW_TYPES: {
                FULLPAGE: "fullpage",
                POPUP: "popup",
                IFRAME: "iframe"
            },
            WINDOW_PROPS: {
                POSTROBOT: "__postRobot__"
            },
            SERIALIZATION_TYPES: {
                METHOD: "postrobot_method"
            },
            SEND_STRATEGIES: {
                POST_MESSAGE: "postrobot_post_message",
                GLOBAL_METHOD: "postrobot_global_method",
                REMOTE_BRIDGE: "postrobot_remote_bridge",
                LOCAL_BRIDGE: "postrobot_local_bridge"
            }
        };
        var POST_MESSAGE_NAMES_LIST = exports.POST_MESSAGE_NAMES_LIST = Object.keys(CONSTANTS.POST_MESSAGE_NAMES).map(function(key) {
            return CONSTANTS.POST_MESSAGE_NAMES[key];
        });
    }, /*!*******************************************!*\
  !*** ./~/post-robot/src/drivers/index.js ***!
  \*******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _receive = __webpack_require__(/*! ./receive */ 13);
        Object.keys(_receive).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _receive[key];
                }
            });
        });
        var _send = __webpack_require__(/*! ./send */ 27);
        Object.keys(_send).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _send[key];
                }
            });
        });
        var _listeners = __webpack_require__(/*! ./listeners */ 29);
        Object.keys(_listeners).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _listeners[key];
                }
            });
        });
    }, /*!***************************************************!*\
  !*** ./~/post-robot/src/drivers/receive/index.js ***!
  \***************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.receiveMessage = receiveMessage;
        exports.messageListener = messageListener;
        var _conf = __webpack_require__(/*! ../../conf */ 9);
        var _lib = __webpack_require__(/*! ../../lib */ 14);
        var _compat = __webpack_require__(/*! ../../compat */ 23);
        var _send = __webpack_require__(/*! ../send */ 27);
        var _listeners = __webpack_require__(/*! ../listeners */ 29);
        var _types = __webpack_require__(/*! ./types */ 30);
        var receivedMessages = [];
        function parseMessage(message) {
            try {
                message = JSON.parse(message);
            } catch (err) {
                return;
            }
            if (!message.type) {
                return;
            }
            if (!_types.RECEIVE_MESSAGE_TYPES[message.type]) {
                return;
            }
            return message;
        }
        function getWindow(hint, windowID) {
            var windowTargets = {
                "window.parent": function windowParent(id) {
                    return window.parent;
                },
                "window.opener": function windowOpener(id) {
                    return (0, _lib.getOpener)(window);
                },
                "window.parent.opener": function windowParentOpener(id) {
                    return (0, _lib.getOpener)(window.parent);
                },
                "window.opener.parent": function windowOpenerParent(id) {
                    return (0, _lib.getOpener)(window).parent;
                }
            };
            var win = void 0;
            try {
                win = windowTargets[hint](windowID);
            } catch (err) {
                throw new Error("Can not get " + hint + ": " + err.message);
            }
            if (!win) {
                throw new Error("Can not get " + hint + ": not available");
            }
            return win;
        }
        function getProxy(source, message) {
            if (_conf.CONFIG.MOCK_MODE) {
                return;
            }
            if (!message) {
                return;
            }
            var listener = (0, _listeners.getRequestListener)(message.name, source);
            if (message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST && message.name && listener && listener.proxy === false) {
                return;
            }
            var isResponseOrAck = (message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK) && _listeners.listeners.response[message.hash];
            if (!isResponseOrAck) {
                for (var i = 0; i < _listeners.listeners.proxies.length; i++) {
                    var proxy = _listeners.listeners.proxies[i];
                    if (source === proxy.from) {
                        return proxy.to;
                    }
                }
            }
            if (message.targetHint) {
                var win = getWindow(message.targetHint, message.target);
                delete message.targetHint;
                return win;
            }
            if (message.target && message.target !== (0, _lib.getWindowId)(window)) {
                var _win = (0, _lib.getWindowById)(message.target);
                if (!_win) {
                    throw new Error("Unable to find window to proxy message to: " + message.target);
                }
                return _win;
            }
        }
        function receiveMessage(event) {
            try {
                event.source;
            } catch (err) {
                return;
            }
            var source = event.source;
            var origin = event.origin;
            var data = event.data;
            var message = parseMessage(data);
            if (!message) {
                return;
            }
            if (receivedMessages.indexOf(message.id) === -1) {
                receivedMessages.push(message.id);
            } else {
                return;
            }
            (0, _lib.registerWindow)(message.source, source, origin);
            var proxyWindow = void 0;
            try {
                proxyWindow = getProxy(source, message);
            } catch (err) {
                return _lib.log.debug(err.message);
            }
            var level = void 0;
            if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK || proxyWindow) {
                level = "debug";
            } else if (message.ack === "error") {
                level = "error";
            } else {
                level = "info";
            }
            _lib.log.logLevel(level, [ proxyWindow ? "#receiveproxy" : "#receive", message.type, message.name, message ]);
            if (proxyWindow) {
                if ((0, _lib.isWindowClosed)(proxyWindow)) {
                    return _lib.log.debug("Target window is closed: " + message.target + " - can not proxy " + message.type + " " + message.name);
                }
                delete message.target;
                return (0, _send.sendMessage)(proxyWindow, message, message.domain || "*", true);
            }
            var originalSource = source;
            if (message.originalSource !== message.source) {
                if (message.sourceHint) {
                    originalSource = getWindow(message.sourceHint, message.originalSource);
                    delete message.sourceHint;
                } else {
                    originalSource = (0, _lib.getWindowById)(message.originalSource);
                    if (!originalSource) {
                        throw new Error("Can not find original message source: " + message.originalSource);
                    }
                }
                (0, _lib.registerWindow)(message.originalSource, originalSource, message.originalSourceDomain);
            }
            if (originalSource !== source) {
                (0, _compat.registerBridge)(source, originalSource);
            }
            if ((0, _lib.isWindowClosed)(originalSource)) {
                return _lib.log.debug("Source window is closed: " + message.originalSource + " - can not send " + message.type + " " + message.name);
            }
            if (_conf.CONFIG.MOCK_MODE) {
                return _types.RECEIVE_MESSAGE_TYPES[message.type](originalSource, message, origin);
            }
            if (message.data) {
                message.data = (0, _lib.deserializeMethods)(originalSource, message.data);
            }
            _types.RECEIVE_MESSAGE_TYPES[message.type](originalSource, message, origin);
        }
        function messageListener(event) {
            try {
                event.source;
            } catch (err) {
                return;
            }
            event = {
                source: event.source || event.sourceElement,
                origin: event.origin || event.originalEvent.origin,
                data: event.data
            };
            try {
                (0, _compat.emulateIERestrictions)(event.source, window);
            } catch (err) {
                return;
            }
            receiveMessage(event);
        }
    }, /*!***************************************!*\
  !*** ./~/post-robot/src/lib/index.js ***!
  \***************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _promise = __webpack_require__(/*! ./promise */ 15);
        Object.keys(_promise).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _promise[key];
                }
            });
        });
        var _util = __webpack_require__(/*! ./util */ 18);
        Object.keys(_util).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _util[key];
                }
            });
        });
        var _log = __webpack_require__(/*! ./log */ 19);
        Object.keys(_log).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _log[key];
                }
            });
        });
        var _windows = __webpack_require__(/*! ./windows */ 20);
        Object.keys(_windows).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _windows[key];
                }
            });
        });
        var _methods = __webpack_require__(/*! ./methods */ 21);
        Object.keys(_methods).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _methods[key];
                }
            });
        });
        var _tick = __webpack_require__(/*! ./tick */ 17);
        Object.keys(_tick).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _tick[key];
                }
            });
        });
        var _ready = __webpack_require__(/*! ./ready */ 22);
        Object.keys(_ready).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _ready[key];
                }
            });
        });
    }, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/promise.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.promise = exports.Promise = undefined;
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _tick = __webpack_require__(/*! ./tick */ 17);
        var Promise = exports.Promise = _promise.SyncPromise;
        var promise = exports.promise = {
            Promise: Promise,
            run: function run(method) {
                return Promise.resolve().then(method);
            },
            nextTick: function nextTick(method) {
                return new Promise(function(resolve, reject) {
                    (0, _tick.nextTick)(function() {
                        return promise.run(method).then(resolve, reject);
                    });
                });
            },
            method: function method(_method) {
                return function promiseWrapper() {
                    var _this = this, _arguments = arguments;
                    return Promise.resolve().then(function() {
                        return _method.apply(_this, _arguments);
                    });
                };
            },
            nodeify: function nodeify(prom, callback) {
                if (!callback) {
                    return prom;
                }
                prom.then(function(result) {
                    callback(null, result);
                }, function(err) {
                    callback(err);
                });
            },
            deNodeify: function deNodeify(method) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                return new Promise(function(resolve, reject) {
                    try {
                        if (args.length < method.length) {
                            return method.apply(undefined, args.concat([ function(err, result) {
                                return err ? reject(err) : resolve(result);
                            } ]));
                        }
                        return promise.run(function() {
                            return method.apply(undefined, args);
                        }).then(resolve, reject);
                    } catch (err) {
                        return reject(err);
                    }
                });
            },
            map: function map(items, method) {
                var results = [];
                var _loop = function _loop(i) {
                    results.push(promise.run(function() {
                        return method(items[i]);
                    }));
                };
                for (var i = 0; i < items.length; i++) {
                    _loop(i);
                }
                return Promise.all(results);
            }
        };
    }, /*!*********************************************!*\
  !*** ./~/sync-browser-mocks/src/promise.js ***!
  \*********************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.patchPromise = patchPromise;
        function trycatch(method, successHandler, errorHandler) {
            var isCalled = false;
            var isSuccess = false;
            var isError = false;
            var err, res;
            function flush() {
                if (isCalled) {
                    if (isError) {
                        return errorHandler(err);
                    } else if (isSuccess) {
                        return successHandler(res);
                    }
                }
            }
            try {
                method(function(result) {
                    res = result;
                    isSuccess = true;
                    flush();
                }, function(error) {
                    err = error;
                    isError = true;
                    flush();
                });
            } catch (error) {
                return errorHandler(error);
            }
            isCalled = true;
            flush();
        }
        var possiblyUnhandledPromises = [];
        var possiblyUnhandledPromiseTimeout;
        function addPossiblyUnhandledPromise(promise) {
            possiblyUnhandledPromises.push(promise);
            possiblyUnhandledPromiseTimeout = possiblyUnhandledPromiseTimeout || setTimeout(flushPossiblyUnhandledPromises, 1);
        }
        function flushPossiblyUnhandledPromises() {
            possiblyUnhandledPromiseTimeout = null;
            var promises = possiblyUnhandledPromises;
            possiblyUnhandledPromises = [];
            for (var i = 0; i < promises.length; i++) {
                var promise = promises[i];
                if (!promise.hasHandlers) {
                    promise.handlers.push({
                        onError: function onError(err) {
                            if (!promise.hasHandlers) {
                                logError(err);
                            }
                        }
                    });
                    promise.dispatch();
                }
            }
        }
        function logError(err) {
            setTimeout(function() {
                throw err;
            });
        }
        function isPromise(item) {
            try {
                if (item && item.then instanceof Function) {
                    return true;
                }
            } catch (err) {
                return false;
            }
            return false;
        }
        var SyncPromise = exports.SyncPromise = function SyncPromise(handler, parent) {
            this.parent = parent;
            this.resolved = false;
            this.rejected = false;
            this.hasHandlers = false;
            this.handlers = [];
            addPossiblyUnhandledPromise(this);
            if (!handler) {
                return;
            }
            var self = this;
            trycatch(handler, function(res) {
                return self.resolve(res);
            }, function(err) {
                return self.reject(err);
            });
        };
        SyncPromise.resolve = function SyncPromiseResolve(value) {
            if (isPromise(value)) {
                return value;
            }
            return new SyncPromise().resolve(value);
        };
        SyncPromise.reject = function SyncPromiseResolve(error) {
            return new SyncPromise().reject(error);
        };
        SyncPromise.prototype.resolve = function(result) {
            if (this.resolved || this.rejected) {
                return this;
            }
            if (isPromise(result)) {
                throw new Error("Can not resolve promise with another promise");
            }
            this.resolved = true;
            this.value = result;
            this.dispatch();
            return this;
        };
        SyncPromise.prototype.reject = function(error) {
            if (this.resolved || this.rejected) {
                return this;
            }
            if (isPromise(error)) {
                throw new Error("Can not reject promise with another promise");
            }
            this.rejected = true;
            this.value = error;
            this.dispatch();
            return this;
        };
        SyncPromise.prototype.dispatch = function() {
            var _this = this;
            if (!this.resolved && !this.rejected) {
                return;
            }
            var _loop = function _loop() {
                var handler = _this.handlers.shift();
                try {
                    if (_this.resolved) {
                        result = handler.onSuccess ? handler.onSuccess(_this.value) : _this.value;
                    } else {
                        if (handler.onError) {
                            result = handler.onError(_this.value);
                        } else {
                            error = _this.value;
                        }
                    }
                } catch (err) {
                    error = err;
                }
                if (result === _this) {
                    throw new Error("Can not return a promise from the the then handler of the same promise");
                }
                if (!handler.promise) {
                    return "continue";
                }
                if (error) {
                    handler.promise.reject(error);
                } else if (isPromise(result)) {
                    result.then(function(res) {
                        handler.promise.resolve(res);
                    }, function(err) {
                        handler.promise.reject(err);
                    });
                } else {
                    handler.promise.resolve(result);
                }
            };
            while (this.handlers.length) {
                var result, error;
                var _ret = _loop();
                if (_ret === "continue") continue;
            }
        };
        SyncPromise.prototype.then = function(onSuccess, onError) {
            var promise = new SyncPromise(null, this);
            this.handlers.push({
                promise: promise,
                onSuccess: onSuccess,
                onError: onError
            });
            this.hasHandlers = true;
            this.dispatch();
            return promise;
        };
        SyncPromise.prototype["catch"] = function(onError) {
            return this.then(null, onError);
        };
        SyncPromise.prototype["finally"] = function(handler) {
            return this.then(function(result) {
                handler();
                return result;
            }, function(error) {
                handler();
                throw error;
            });
        };
        SyncPromise.all = function(promises) {
            var promise = new SyncPromise();
            var count = promises.length;
            var results = [];
            for (var i = 0; i < promises.length; i++) {
                promises[i].then(function(result) {
                    results[i] = result;
                    count -= 1;
                    if (count === 0) {
                        promise.resolve(results);
                    }
                }, function(err) {
                    promise.reject(err);
                });
            }
            return promise;
        };
        function patchPromise() {
            window.Promise = SyncPromise;
        }
    }, /*!**************************************!*\
  !*** ./~/post-robot/src/lib/tick.js ***!
  \**************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.nextTick = nextTick;
        var _util = __webpack_require__(/*! ./util */ 18);
        var tickMessageName = "__nextTick__postRobot__" + _util.util.uniqueID();
        var queue = [];
        window.addEventListener("message", function(event) {
            if (event.data === tickMessageName) {
                var method = queue.shift();
                method.call();
            }
        });
        function nextTick(method) {
            queue.push(method);
            window.postMessage(tickMessageName, "*");
        }
    }, /*!**************************************!*\
  !*** ./~/post-robot/src/lib/util.js ***!
  \**************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.util = undefined;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var util = exports.util = {
            isPopup: function isPopup() {
                return Boolean(window.opener);
            },
            isIframe: function isIframe() {
                return Boolean(window.parent && window !== window.parent);
            },
            isFullpage: function isFullpage() {
                return Boolean(!util.isIframe() && !util.isPopup());
            },
            getType: function getType() {
                if (util.isPopup()) {
                    return _conf.CONSTANTS.WINDOW_TYPES.POPUP;
                }
                if (util.isIframe()) {
                    return _conf.CONSTANTS.WINDOW_TYPES.IFRAME;
                }
                return _conf.CONSTANTS.WINDOW_TYPES.FULLPAGE;
            },
            once: function once(method) {
                if (!method) {
                    return method;
                }
                var called = false;
                return function onceWrapper() {
                    if (!called) {
                        called = true;
                        return method.apply(this, arguments);
                    }
                };
            },
            noop: function noop() {},
            safeHasProp: function safeHasProp(obj, name) {
                try {
                    if (obj[name]) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (err) {
                    return false;
                }
            },
            safeGetProp: function safeGetProp(obj, name) {
                try {
                    return obj[name];
                } catch (err) {
                    return;
                }
            },
            listen: function listen(win, event, handler) {
                if (win.addEventListener) {
                    win.addEventListener(event, handler);
                } else {
                    win.attachEvent("on" + event, handler);
                }
                return {
                    cancel: function cancel() {
                        if (win.removeEventListener) {
                            win.removeEventListener(event, handler);
                        } else {
                            win.detachEvent("on" + event, handler);
                        }
                    }
                };
            },
            apply: function apply(method, context, args) {
                if (method.apply instanceof Function) {
                    return method.apply(context, args);
                }
                return method(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
            },
            find: function find(collection, method, def) {
                if (!collection) {
                    return def;
                }
                for (var i = 0; i < collection.length; i++) {
                    if (method(collection[i])) {
                        return collection[i];
                    }
                }
                return def;
            },
            map: function map(collection, method) {
                var results = [];
                for (var i = 0; i < collection.length; i++) {
                    results.push(method(collection[i]));
                }
                return results;
            },
            some: function some(collection, method) {
                method = method || Boolean;
                for (var i = 0; i < collection.length; i++) {
                    if (method(collection[i])) {
                        return true;
                    }
                }
                return false;
            },
            keys: function keys(mapping) {
                var result = [];
                for (var key in mapping) {
                    if (mapping.hasOwnProperty(key)) {
                        result.push(key);
                    }
                }
                return result;
            },
            values: function values(mapping) {
                var result = [];
                for (var key in mapping) {
                    if (mapping.hasOwnProperty(key)) {
                        result.push(mapping[key]);
                    }
                }
                return result;
            },
            getByValue: function getByValue(mapping, value) {
                for (var key in mapping) {
                    if (mapping.hasOwnProperty(key) && mapping[key] === value) {
                        return key;
                    }
                }
            },
            uniqueID: function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            },
            memoize: function memoize(method) {
                var results = {};
                return function memoized() {
                    var args = JSON.stringify(Array.prototype.slice.call(arguments));
                    if (!results.hasOwnProperty(args)) {
                        results[args] = method.apply(this, arguments);
                    }
                    return results[args];
                };
            },
            extend: function extend(obj, source) {
                if (!source) {
                    return obj;
                }
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        obj[key] = source[key];
                    }
                }
                return obj;
            },
            each: function each(obj, callback) {
                if (obj instanceof Array) {
                    for (var i = 0; i < obj.length; i++) {
                        callback(obj[i], i);
                    }
                } else if (obj instanceof Object && !(obj instanceof Function)) {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            callback(obj[key], key);
                        }
                    }
                }
            },
            replaceObject: function replaceObject(obj, callback) {
                var newobj = obj instanceof Array ? [] : {};
                util.each(obj, function(item, key) {
                    var result = callback(item, key);
                    if (result !== undefined) {
                        newobj[key] = result;
                    } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                        newobj[key] = util.replaceObject(item, callback);
                    } else {
                        newobj[key] = item;
                    }
                });
                return newobj;
            },
            safeInterval: function safeInterval(method, time) {
                var timeout = void 0;
                function runInterval() {
                    timeout = setTimeout(runInterval, time);
                    method.call();
                }
                timeout = setTimeout(runInterval, time);
                return {
                    cancel: function cancel() {
                        clearTimeout(timeout);
                    }
                };
            },
            intervalTimeout: function intervalTimeout(time, interval, method) {
                var safeInterval = util.safeInterval(function() {
                    time -= interval;
                    time = time <= 0 ? 0 : time;
                    if (time === 0) {
                        safeInterval.cancel();
                    }
                    method(time);
                }, interval);
                return safeInterval;
            },
            getDomain: function getDomain(win) {
                win = win || window;
                return win.mockDomain || win.location.protocol + "//" + win.location.host;
            },
            getDomainFromUrl: function getDomainFromUrl(url) {
                var domain = void 0;
                if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
                    domain = url;
                } else {
                    return this.getDomain();
                }
                domain = domain.split("/").slice(0, 3).join("/");
                return domain;
            },
            isFrameOwnedBy: function isFrameOwnedBy(win, frame) {
                try {
                    if (frame.parent === win) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (err) {
                    try {
                        for (var i = 0; i < win.frames.length; i++) {
                            if (win.frames[i] === frame) {
                                return true;
                            }
                        }
                    } catch (err2) {
                        return false;
                    }
                }
                return false;
            }
        };
    }, /*!*************************************!*\
  !*** ./~/post-robot/src/lib/log.js ***!
  \*************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.log = undefined;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        var _util = __webpack_require__(/*! ./util */ 18);
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var LOG_LEVELS = [ "debug", "info", "warn", "error" ];
        if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
            [ "log", "info", "warn", "error" ].forEach(function(method) {
                console[method] = this.bind(console[method], console);
            }, Function.prototype.call);
        }
        var log = exports.log = {
            clearLogs: function clearLogs() {
                if (window.console && window.console.clear) {
                    window.console.clear();
                }
                if (_conf.CONFIG.LOG_TO_PAGE) {
                    var container = document.getElementById("postRobotLogs");
                    if (container) {
                        container.parentNode.removeChild(container);
                    }
                }
            },
            writeToPage: function writeToPage(level, args) {
                setTimeout(function() {
                    var container = document.getElementById("postRobotLogs");
                    if (!container) {
                        container = document.createElement("div");
                        container.id = "postRobotLogs";
                        container.style.cssText = "width: 800px; font-family: monospace; white-space: pre-wrap;";
                        document.body.appendChild(container);
                    }
                    var el = document.createElement("div");
                    var date = new Date().toString().split(" ")[4];
                    var payload = _util.util.map(args, function(item) {
                        if (typeof item === "string") {
                            return item;
                        }
                        if (!item) {
                            return toString.call(item);
                        }
                        var json = void 0;
                        try {
                            json = JSON.stringify(item, 0, 2);
                        } catch (e) {
                            json = "[object]";
                        }
                        return "\n\n" + json + "\n\n";
                    }).join(" ");
                    var msg = date + " " + level + " " + payload;
                    el.innerHTML = msg;
                    var color = {
                        log: "#ddd",
                        warn: "orange",
                        error: "red",
                        info: "blue",
                        debug: "#aaa"
                    }[level];
                    el.style.cssText = "margin-top: 10px; color: " + color + ";";
                    if (!container.childNodes.length) {
                        container.appendChild(el);
                    } else {
                        container.insertBefore(el, container.childNodes[0]);
                    }
                });
            },
            logLevel: function logLevel(level, args) {
                if (LOG_LEVELS.indexOf(level) < LOG_LEVELS.indexOf(_conf.CONFIG.LOG_LEVEL)) {
                    return;
                }
                args = Array.prototype.slice.call(args);
                args.unshift(window.location.pathname);
                args.unshift(window.location.host);
                args.unshift("<" + _util.util.getType().toLowerCase() + ">");
                args.unshift("[post-robot]");
                if (_conf.CONFIG.LOG_TO_PAGE) {
                    log.writeToPage(level, args);
                }
                if (!window.console) {
                    return;
                }
                if (!window.console[level]) {
                    level = "log";
                }
                if (!window.console[level]) {
                    return;
                }
                window.console[level].apply(window.console, args);
            },
            debug: function debug() {
                log.logLevel("debug", arguments);
            },
            info: function info() {
                log.logLevel("info", arguments);
            },
            warn: function warn() {
                log.logLevel("warn", arguments);
            },
            error: function error() {
                log.logLevel("error", arguments);
            }
        };
    }, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/windows.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isSameDomain = isSameDomain;
        exports.isWindowClosed = isWindowClosed;
        exports.getOpener = getOpener;
        exports.getParentWindow = getParentWindow;
        exports.getWindowId = getWindowId;
        exports.getWindowById = getWindowById;
        exports.getWindowDomain = getWindowDomain;
        exports.registerWindow = registerWindow;
        exports.isWindowEqual = isWindowEqual;
        exports.isSameTopWindow = isSameTopWindow;
        exports.linkUrl = linkUrl;
        var _util = __webpack_require__(/*! ./util */ 18);
        function safeGet(obj, prop) {
            var result = void 0;
            try {
                result = obj[prop];
            } catch (err) {}
            return result;
        }
        var domainMatches = [];
        function isSameDomain(win) {
            for (var _iterator = domainMatches, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var _match = _ref;
                if (_match.win === win) {
                    if (!_match.match) {
                        return false;
                    }
                    _match.match = false;
                    try {
                        _match.match = _util.util.getDomain(window) === _util.util.getDomain(win);
                    } catch (err) {
                        return;
                    }
                    return _match.match;
                }
            }
            var match = false;
            try {
                if (_util.util.getDomain(window) === _util.util.getDomain(win)) {
                    match = true;
                }
            } catch (err) {}
            domainMatches.push({
                win: win,
                match: match
            });
            return match;
        }
        function isWindowClosed(win) {
            try {
                return !win || win.closed || typeof win.closed === "undefined" || isSameDomain(win) && safeGet(win, "mockclosed");
            } catch (err) {
                return true;
            }
        }
        function getOpener(win) {
            if (!win) {
                return;
            }
            try {
                return win.opener;
            } catch (err) {
                return;
            }
        }
        function getParentWindow(win) {
            win = win || window;
            var opener = getOpener(win);
            if (opener) {
                return opener;
            }
            if (win.parent !== win) {
                return win.parent;
            }
        }
        var windows = [];
        var windowId = window.name || _util.util.getType() + "_" + _util.util.uniqueID();
        function getWindowId(win) {
            if (win === window) {
                return windowId;
            }
            for (var i = windows.length - 1; i >= 0; i--) {
                var map = windows[i];
                try {
                    if (map.win === win) {
                        return map.id;
                    }
                } catch (err) {
                    continue;
                }
            }
        }
        function getWindowById(id) {
            if (id === window.name || id === windowId) {
                return window;
            }
            if (window.frames && window.frames[id]) {
                return window.frames[id];
            }
            for (var i = windows.length - 1; i >= 0; i--) {
                var map = windows[i];
                try {
                    if (map.id === id) {
                        return map.win;
                    }
                } catch (err) {
                    continue;
                }
            }
        }
        function getWindowDomain(win) {
            if (win === window) {
                return _util.util.getDomain(window);
            }
            for (var i = windows.length - 1; i >= 0; i--) {
                var map = windows[i];
                try {
                    if (map.win === win && map.domain) {
                        return map.domain;
                    }
                } catch (err) {
                    continue;
                }
            }
        }
        function registerWindow(id, win, domain) {
            for (var _iterator2 = windows, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var map = _ref2;
                try {
                    if (map.id === id && map.win === win) {
                        map.domain = domain;
                        return;
                    }
                } catch (err) {
                    continue;
                }
                if (map.id === id && map.win !== win) {
                    if (!isWindowClosed(map.win)) {
                        throw new Error("Can not register a duplicate window with name " + id);
                    }
                }
            }
            windows.push({
                id: id,
                win: win,
                domain: domain
            });
        }
        function isWindowEqual(win1, win2) {
            if (win1 === win2) {
                return true;
            }
            var id1 = getWindowId(win1);
            var id2 = getWindowId(win2);
            if (id1 && id2 && id1 === id2) {
                return true;
            }
            return false;
        }
        function isSameTopWindow(win1, win2) {
            try {
                return win1.top === win2.top;
            } catch (err) {
                return false;
            }
        }
        function linkUrl(name, win, url) {
            var domain = _util.util.getDomainFromUrl(url);
            registerWindow(name, win, domain);
            domainMatches.push({
                win: win,
                match: _util.util.getDomain() === domain
            });
        }
        var openWindow = window.open;
        window.open = function(url, name, x, y) {
            if (!name) {
                name = _util.util.uniqueID();
                arguments[1] = name;
            }
            var win = _util.util.apply(openWindow, this, arguments);
            if (url) {
                linkUrl(name, win, url);
            } else {
                registerWindow(name, win);
            }
            return win;
        };
    }, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/methods.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.listenForMethods = undefined;
        exports.serializeMethod = serializeMethod;
        exports.serializeMethods = serializeMethods;
        exports.deserializeMethod = deserializeMethod;
        exports.deserializeMethods = deserializeMethods;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _util = __webpack_require__(/*! ./util */ 18);
        var _interface = __webpack_require__(/*! ../interface */ 7);
        var _log = __webpack_require__(/*! ./log */ 19);
        var _promise = __webpack_require__(/*! ./promise */ 15);
        var methods = {};
        var listenForMethods = exports.listenForMethods = _util.util.once(function() {
            (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, function(source, data) {
                if (!methods[data.id]) {
                    throw new Error("Could not find method with id: " + data.id);
                }
                if (methods[data.id].win !== source) {
                    throw new Error("Method window does not match");
                }
                var method = methods[data.id].method;
                _log.log.debug("Call local method", data.name, data.args);
                return _promise.promise.run(function() {
                    return method.apply(null, data.args);
                }).then(function(result) {
                    return {
                        result: result,
                        id: data.id,
                        name: data.name
                    };
                });
            });
        });
        function isSerializedMethod(item) {
            return item instanceof Object && item.__type__ === _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD && item.__id__;
        }
        function serializeMethod(destination, method, name) {
            var id = _util.util.uniqueID();
            methods[id] = {
                win: destination,
                method: method
            };
            return {
                __type__: _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD,
                __id__: id,
                __name__: name
            };
        }
        function serializeMethods(destination, obj) {
            listenForMethods();
            return _util.util.replaceObject({
                obj: obj
            }, function(item, key) {
                if (item instanceof Function) {
                    return serializeMethod(destination, item, key);
                }
            }).obj;
        }
        function deserializeMethod(source, obj) {
            function wrapper() {
                var args = Array.prototype.slice.call(arguments);
                _log.log.debug("Call foreign method", obj.__name__, args);
                return (0, _interface.send)(source, _conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                    id: obj.__id__,
                    name: obj.__name__,
                    args: args
                }).then(function(data) {
                    _log.log.debug("Got foreign method result", obj.__name__, data.result);
                    return data.result;
                });
            }
            wrapper.__name__ = obj.__name__;
            return wrapper;
        }
        function deserializeMethods(source, obj) {
            return _util.util.replaceObject({
                obj: obj
            }, function(item, key) {
                if (isSerializedMethod(item)) {
                    return deserializeMethod(source, item);
                }
            }).obj;
        }
    }, /*!***************************************!*\
  !*** ./~/post-robot/src/lib/ready.js ***!
  \***************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.initOnReady = initOnReady;
        exports.onWindowReady = onWindowReady;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _windows = __webpack_require__(/*! ./windows */ 20);
        var _interface = __webpack_require__(/*! ../interface */ 7);
        var _log = __webpack_require__(/*! ./log */ 19);
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var readyPromises = [];
        function initOnReady() {
            (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.READY, function(win, data) {
                for (var _iterator = readyPromises, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var item = _ref;
                    if (item.win === win) {
                        item.promise.resolve(win);
                        return;
                    }
                }
                readyPromises.push({
                    win: win,
                    promise: new _promise.SyncPromise().resolve(win)
                });
            });
            var parent = (0, _windows.getParentWindow)();
            if (parent) {
                (0, _interface.send)(parent, _conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {})["catch"](function(err) {
                    _log.log.debug(err.stack || err.toString());
                });
            }
        }
        function onWindowReady(win) {
            var timeout = arguments.length <= 1 || arguments[1] === undefined ? 5e3 : arguments[1];
            var name = arguments.length <= 2 || arguments[2] === undefined ? "Window" : arguments[2];
            for (var _iterator2 = readyPromises, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var item = _ref2;
                if (item.win === win) {
                    return item.promise;
                }
            }
            var promise = new _promise.SyncPromise();
            readyPromises.push({
                win: win,
                promise: promise
            });
            setTimeout(function() {
                return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
            }, timeout);
            return promise;
        }
    }, /*!******************************************!*\
  !*** ./~/post-robot/src/compat/index.js ***!
  \******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _bridge = __webpack_require__(/*! ./bridge */ 24);
        Object.keys(_bridge).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _bridge[key];
                }
            });
        });
        var _global = __webpack_require__(/*! ./global */ 25);
        Object.keys(_global).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _global[key];
                }
            });
        });
        var _ie = __webpack_require__(/*! ./ie */ 26);
        Object.keys(_ie).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _ie[key];
                }
            });
        });
    }, /*!*******************************************!*\
  !*** ./~/post-robot/src/compat/bridge.js ***!
  \*******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getLocalBridgeForDomain = getLocalBridgeForDomain;
        exports.getLocalBridgeForWindow = getLocalBridgeForWindow;
        exports.getRemoteBridgeForDomain = getRemoteBridgeForDomain;
        exports.getRemoteBridgeForWindow = getRemoteBridgeForWindow;
        exports.registerBridge = registerBridge;
        exports.openBridge = openBridge;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _lib = __webpack_require__(/*! ../lib */ 14);
        var BRIDGE_NAME_PREFIX = "__postrobot_bridge__";
        var pendingBridges = {};
        var bridges = [];
        var ZONES = {
            LOCAL: "local",
            REMOTE: "remote"
        };
        function documentReady() {
            return new _lib.promise.Promise(function(resolve) {
                if (window.document && window.document.body) {
                    return resolve(window.document);
                }
                window.document.addEventListener("DOMContentLoaded", function(event) {
                    return resolve(window.document);
                });
            });
        }
        function getBridgeForDomain(domain) {
            var zone = arguments.length <= 1 || arguments[1] === undefined ? ZONES.LOCAL : arguments[1];
            return _lib.promise.run(function() {
                if (zone === ZONES.LOCAL && pendingBridges[domain]) {
                    return pendingBridges[domain];
                }
                for (var _iterator = bridges, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var item = _ref;
                    if (item.domain === domain && item.zone === zone) {
                        return item.bridge;
                    }
                }
            }).then(function(bridge) {
                if (bridge && zone === ZONES.LOCAL) {
                    return (0, _lib.onWindowReady)(bridge);
                }
                return bridge;
            });
        }
        function getBridgeForWindow(win) {
            var zone = arguments.length <= 1 || arguments[1] === undefined ? ZONES.LOCAL : arguments[1];
            return _lib.promise.run(function() {
                if ((0, _lib.getOpener)(win) === window) {
                    return (0, _lib.onWindowReady)(win);
                }
            }).then(function() {
                for (var _iterator2 = bridges, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var item = _ref2;
                    if (item.win === win && item.zone === zone) {
                        return item.bridge;
                    }
                }
                var domain = (0, _lib.getWindowDomain)(win);
                if (domain) {
                    return getBridgeForDomain(domain, zone);
                }
            }).then(function(bridge) {
                if (bridge && zone === ZONES.LOCAL) {
                    return (0, _lib.onWindowReady)(bridge);
                }
                return bridge;
            });
        }
        function getLocalBridgeForDomain(domain) {
            return getBridgeForDomain(domain, ZONES.LOCAL);
        }
        function getLocalBridgeForWindow(win) {
            return getBridgeForWindow(win, ZONES.LOCAL);
        }
        function getRemoteBridgeForDomain(domain) {
            return getBridgeForDomain(domain, ZONES.REMOTE);
        }
        function getRemoteBridgeForWindow(win) {
            return _lib.promise.run(function() {
                return getBridgeForWindow(win, ZONES.REMOTE);
            }).then(function(bridge) {
                if (bridge) {
                    return bridge;
                }
                try {
                    if (!win || !win.frames || !win.frames.length) {
                        return;
                    }
                    for (var i = 0; i < win.frames.length; i++) {
                        try {
                            var frame = win.frames[i];
                            if (frame && frame !== window && (0, _lib.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                                return frame;
                            }
                        } catch (err) {
                            continue;
                        }
                    }
                } catch (err) {
                    return;
                }
            });
        }
        function registerBridge(bridge, win) {
            var result = void 0;
            for (var _iterator3 = bridges, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray3) {
                    if (_i3 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i3++];
                } else {
                    _i3 = _iterator3.next();
                    if (_i3.done) break;
                    _ref3 = _i3.value;
                }
                var item = _ref3;
                if (item.bridge === bridge) {
                    result = item;
                    break;
                }
            }
            if (!result) {
                var zone = _lib.util.isFrameOwnedBy(window, bridge) ? ZONES.LOCAL : ZONES.REMOTE;
                result = {
                    bridge: bridge,
                    domain: (0, _lib.getWindowDomain)(bridge),
                    windows: [],
                    zone: zone
                };
                bridges.push(result);
            }
            if (win && result.windows.indexOf(win) === -1) {
                result.windows.push(win);
            }
        }
        function openBridge(url, domain) {
            domain = domain || _lib.util.getDomainFromUrl(url);
            var bridgePromise = _lib.promise.run(function() {
                return getLocalBridgeForDomain(domain);
            }).then(function(existingBridge) {
                if (existingBridge) {
                    return existingBridge;
                }
                if (_lib.util.getDomain() === domain) {
                    return;
                }
                var id = BRIDGE_NAME_PREFIX + "_" + _lib.util.uniqueID();
                _lib.log.debug("Opening bridge:", url);
                var iframe = document.createElement("iframe");
                iframe.setAttribute("name", id);
                iframe.setAttribute("id", id);
                iframe.setAttribute("style", "margin: 0; padding: 0; border: 0px none; overflow: hidden;");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("border", "0");
                iframe.setAttribute("scrolling", "no");
                iframe.setAttribute("allowTransparency", "true");
                iframe.setAttribute("tabindex", "-1");
                iframe.setAttribute("hidden", "true");
                iframe.setAttribute("title", "");
                iframe.setAttribute("role", "presentation");
                iframe.src = url;
                return documentReady().then(function(document) {
                    document.body.appendChild(iframe);
                    var bridge = iframe.contentWindow;
                    (0, _lib.registerWindow)(id, bridge, domain);
                    registerBridge(bridge);
                    delete pendingBridges[domain];
                    return new _lib.promise.Promise(function(resolve, reject) {
                        iframe.onload = resolve;
                        iframe.onerror = reject;
                    }).then(function() {
                        return (0, _lib.onWindowReady)(bridge, 5e3, "Bridge " + url);
                    }).then(function() {
                        return bridge;
                    });
                });
            });
            pendingBridges[domain] = bridgePromise;
            return bridgePromise;
        }
    }, /*!*******************************************!*\
  !*** ./~/post-robot/src/compat/global.js ***!
  \*******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.registerGlobals = registerGlobals;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        function registerGlobals() {
            if (window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                throw new Error("Attempting to load postRobot twice on the same window");
            }
            window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] = {
                postMessage: function postMessage(event) {
                    (0, _drivers.receiveMessage)(event);
                }
            };
        }
    }, /*!***************************************!*\
  !*** ./~/post-robot/src/compat/ie.js ***!
  \***************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.emulateIERestrictions = emulateIERestrictions;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _lib = __webpack_require__(/*! ../lib */ 14);
        function emulateIERestrictions(sourceWindow, targetWindow) {
            if (!_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP) {
                if (!(0, _lib.isSameTopWindow)(sourceWindow, targetWindow)) {
                    throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)");
                }
            }
        }
    }, /*!************************************************!*\
  !*** ./~/post-robot/src/drivers/send/index.js ***!
  \************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.buildMessage = buildMessage;
        exports.sendMessage = sendMessage;
        var _conf = __webpack_require__(/*! ../../conf */ 9);
        var _lib = __webpack_require__(/*! ../../lib */ 14);
        var _strategies = __webpack_require__(/*! ./strategies */ 28);
        function buildMessage(win, message) {
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
            var id = _lib.util.uniqueID();
            var source = (0, _lib.getWindowId)(window);
            var type = _lib.util.getType();
            var target = (0, _lib.getWindowId)(win);
            var sourceDomain = _lib.util.getDomain(window);
            return _extends({}, message, options, {
                id: message.id || id,
                source: source,
                originalSource: message.originalSource || source,
                sourceDomain: sourceDomain,
                originalSourceDomain: message.sourceDomain || sourceDomain,
                windowType: type,
                originalWindowType: message.originalWindowType || type,
                target: message.target || target
            });
        }
        function sendMessage(win, message, domain, isProxy) {
            return _lib.promise.run(function() {
                message = buildMessage(win, message, {
                    data: (0, _lib.serializeMethods)(win, message.data),
                    domain: domain
                });
                var level = void 0;
                if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK || isProxy) {
                    level = "debug";
                } else if (message.ack === "error") {
                    level = "error";
                } else {
                    level = "info";
                }
                _lib.log.logLevel(level, [ isProxy ? "#sendproxy" : "#send", message.type, message.name, message ]);
                if (_conf.CONFIG.MOCK_MODE) {
                    delete message.target;
                    return window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].postMessage({
                        origin: _lib.util.getDomain(window),
                        source: window,
                        data: JSON.stringify(message)
                    });
                }
                if (win === window) {
                    throw new Error("Attemping to send message to self");
                }
                if ((0, _lib.isWindowClosed)(win)) {
                    throw new Error("Window is closed");
                }
                _lib.log.debug("Running send message strategies", message);
                var messages = [];
                return _lib.promise.map(_lib.util.keys(_strategies.SEND_MESSAGE_STRATEGIES), function(strategyName) {
                    return _lib.promise.run(function() {
                        if (!_conf.CONFIG.ALLOWED_POST_MESSAGE_METHODS[strategyName]) {
                            throw new Error("Strategy disallowed: " + strategyName);
                        }
                        return _strategies.SEND_MESSAGE_STRATEGIES[strategyName](win, message, domain);
                    }).then(function() {
                        messages.push(strategyName + ": success");
                        return true;
                    }, function(err) {
                        messages.push(strategyName + ": " + err.message);
                        return false;
                    });
                }).then(function(results) {
                    var success = _lib.util.some(results);
                    var status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                    _lib.log.debug(status);
                    if (!success) {
                        throw new Error(status);
                    }
                });
            });
        }
    }, /*!*****************************************************!*\
  !*** ./~/post-robot/src/drivers/send/strategies.js ***!
  \*****************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.SEND_MESSAGE_STRATEGIES = undefined;
        var _SEND_MESSAGE_STRATEG;
        var _conf = __webpack_require__(/*! ../../conf */ 9);
        var _lib = __webpack_require__(/*! ../../lib */ 14);
        var _compat = __webpack_require__(/*! ../../compat */ 23);
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var SEND_MESSAGE_STRATEGIES = exports.SEND_MESSAGE_STRATEGIES = (_SEND_MESSAGE_STRATEG = {}, 
        _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, function(win, message, domain) {
            (0, _compat.emulateIERestrictions)(window, win);
            return win.postMessage(JSON.stringify(message, 0, 2), domain);
        }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.GLOBAL_METHOD, function(win, message, domain) {
            if (!(0, _lib.isSameDomain)(win)) {
                throw new Error("Window is not on the same domain");
            }
            if ((0, _lib.isSameTopWindow)(window, win)) {
                throw new Error("Can only use global method to communicate between two different windows, not between frames");
            }
            var sourceDomain = _lib.util.getDomain(window);
            var targetDomain = void 0;
            try {
                targetDomain = _lib.util.getDomain(win);
            } catch (err) {
                throw new Error("Can not read target window domain: " + err.message);
            }
            if (sourceDomain !== targetDomain) {
                throw new Error("Can not send global message - source " + sourceDomain + " does not match target " + targetDomain);
            }
            if (domain !== "*" && targetDomain !== domain) {
                throw new Error("Can post post through global method - specified domain " + domain + " does not match target domain " + targetDomain);
            }
            if (!_lib.util.safeHasProp(win, _conf.CONSTANTS.WINDOW_PROPS.POSTROBOT)) {
                throw new Error("post-robot not available on target window at " + targetDomain);
            }
            win[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].postMessage({
                origin: _lib.util.getDomain(window),
                source: window,
                data: JSON.stringify(message, 0, 2)
            });
        }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.REMOTE_BRIDGE, function(win, message, domain) {
            if ((0, _lib.isSameTopWindow)(window, win)) {
                throw new Error("Can only use bridge to communicate between two different windows, not between frames");
            }
            return (0, _compat.getRemoteBridgeForWindow)(win).then(function(bridge) {
                if (!bridge) {
                    throw new Error("No bridge available in window");
                }
                var sourceDomain = _lib.util.getDomain(window);
                var targetDomain = void 0;
                try {
                    targetDomain = _lib.util.getDomain(bridge);
                } catch (err) {
                    throw new Error("Can not read bridge window domain: " + err.message);
                }
                if (sourceDomain !== targetDomain) {
                    throw new Error("Can not accept global message through bridge - source " + sourceDomain + " does not match bridge " + targetDomain);
                }
                if (!_lib.util.safeHasProp(bridge, _conf.CONSTANTS.WINDOW_PROPS.POSTROBOT)) {
                    throw new Error("post-robot not available on bridge at " + targetDomain);
                }
                message.targetHint = "window.parent";
                if (window === (0, _lib.getOpener)(win)) {
                    message.sourceHint = "window.opener";
                }
                bridge[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].postMessage({
                    origin: _lib.util.getDomain(window),
                    source: window,
                    data: JSON.stringify(message, 0, 2)
                });
            });
        }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.LOCAL_BRIDGE, function(win, message, domain) {
            if ((0, _lib.isSameTopWindow)(window, win)) {
                throw new Error("Can only use bridge to communicate between two different windows, not between frames");
            }
            if (win === (0, _lib.getOpener)(window)) {
                message.targetHint = "window.parent.opener";
            }
            if (!message.target && !message.targetHint) {
                throw new Error("Can not post message down through bridge without target or targetHint");
            }
            var opener = (0, _lib.getOpener)(win);
            if (opener && window === opener) {
                message.sourceHint = "window.opener";
            }
            if (opener && window === opener.parent) {
                message.sourceHint = "window.opener.parent";
            }
            return (0, _compat.getLocalBridgeForWindow)(win).then(function(bridge) {
                if (!bridge) {
                    throw new Error("Bridge not initialized");
                }
                if (win === bridge) {
                    throw new Error("Message target is bridge");
                }
                bridge.postMessage(JSON.stringify(message, 0, 2), domain);
            });
        }), _SEND_MESSAGE_STRATEG);
    }, /*!***********************************************!*\
  !*** ./~/post-robot/src/drivers/listeners.js ***!
  \***********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.listeners = undefined;
        exports.resetListeners = resetListeners;
        exports.getRequestListener = getRequestListener;
        exports.removeRequestListener = removeRequestListener;
        exports.addRequestListener = addRequestListener;
        var _lib = __webpack_require__(/*! ../lib */ 14);
        var listeners = exports.listeners = void 0;
        function resetListeners() {
            exports.listeners = listeners = {
                request: [],
                response: {},
                proxies: []
            };
        }
        function getRequestListener(name, win) {
            for (var _iterator = listeners.request, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var requestListener = _ref;
                if (requestListener.name !== name) {
                    continue;
                }
                if (!requestListener.win) {
                    return requestListener.options;
                }
                if (win && (0, _lib.isWindowEqual)(win, requestListener.win)) {
                    return requestListener.options;
                }
            }
        }
        function removeRequestListener(options) {
            var listener = void 0;
            for (var _iterator2 = listeners.request, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var requestListener = _ref2;
                if (requestListener.options === options) {
                    listener = requestListener;
                    break;
                }
            }
            if (listener) {
                listeners.request.splice(listeners.request.indexOf(listener), 1);
            }
        }
        function addRequestListener(name, win, options, override) {
            var listener = getRequestListener(name, win);
            if (listener) {
                if (override) {
                    removeRequestListener(listener);
                } else {
                    throw new Error("Request listener already exists for " + name);
                }
            }
            listeners.request.push({
                name: name,
                win: win,
                options: options
            });
        }
        resetListeners();
    }, /*!***************************************************!*\
  !*** ./~/post-robot/src/drivers/receive/types.js ***!
  \***************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.RECEIVE_MESSAGE_TYPES = undefined;
        var _RECEIVE_MESSAGE_TYPE;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _conf = __webpack_require__(/*! ../../conf */ 9);
        var _lib = __webpack_require__(/*! ../../lib */ 14);
        var _send = __webpack_require__(/*! ../send */ 27);
        var _listeners = __webpack_require__(/*! ../listeners */ 29);
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var RECEIVE_MESSAGE_TYPES = exports.RECEIVE_MESSAGE_TYPES = (_RECEIVE_MESSAGE_TYPE = {}, 
        _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK, function(source, message, origin) {
            var options = _listeners.listeners.response[message.hash];
            if (!options) {
                throw new Error("No handler found for post message ack for message: " + message.name + " in " + window.location.href);
            }
            options.ack = true;
        }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST, function(source, message, origin) {
            var options = (0, _listeners.getRequestListener)(message.name, source);
            function respond(data) {
                if (message.fireAndForget || (0, _lib.isWindowClosed)(source)) {
                    return _lib.promise.Promise.resolve();
                }
                return (0, _send.sendMessage)(source, _extends({
                    target: message.originalSource,
                    hash: message.hash,
                    name: message.name
                }, data), "*");
            }
            return _lib.promise.Promise.all([ respond({
                type: _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK
            }), _lib.promise.run(function() {
                if (!options) {
                    throw new Error("No postmessage request handler for " + message.name + " in " + window.location.href);
                }
                if (options.domain) {
                    var match = typeof options.domain === "string" && origin === options.domain || options.domain instanceof RegExp && origin.match(options.domain);
                    if (!match) {
                        throw new Error("Message origin " + origin + " does not match domain " + options.domain);
                    }
                }
                return _lib.promise.deNodeify(options.handler, source, message.data);
            }).then(function(data) {
                return respond({
                    type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                    ack: _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS,
                    data: data
                });
            }, function(err) {
                return respond({
                    type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                    ack: _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR,
                    error: err.stack ? err.message + "\n" + err.stack : err.toString()
                });
            }) ])["catch"](function(err) {
                if (options && options.handleError) {
                    return options.handleError(err);
                } else {
                    _lib.log.error(err.stack || err.toString());
                }
            });
        }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE, function(source, message, origin) {
            var options = _listeners.listeners.response[message.hash];
            if (!options) {
                throw new Error("No response handler found for post message response " + message.name + " in " + window.location.href);
            }
            delete _listeners.listeners.response[message.hash];
            if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR) {
                return options.respond(new Error(message.error));
            } else if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS) {
                return options.respond(null, message.data || message.response);
            }
        }), _RECEIVE_MESSAGE_TYPE);
    }, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/server.js ***!
  \**********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.listen = listen;
        exports.on = on;
        exports.once = once;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        var _lib = __webpack_require__(/*! ../lib */ 14);
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        function listen(options) {
            if (!options.name) {
                throw new Error("Expected options.name");
            }
            options.handler = options.handler || _lib.util.noop;
            options.errorHandler = options.errorHandler || function(err) {
                throw err;
            };
            if (options.once) {
                (function() {
                    var handler = options.handler;
                    options.handler = _lib.util.once(function() {
                        (0, _drivers.removeRequestListener)(options);
                        return handler.apply(this, arguments);
                    });
                })();
            }
            var override = options.override || _conf.CONFIG.MOCK_MODE;
            (0, _drivers.addRequestListener)(options.name, options.window, options, override);
            options.handleError = function(err) {
                options.errorHandler(err);
            };
            if (options.window && options.errorOnClose) {
                (function() {
                    var interval = _lib.util.safeInterval(function() {
                        if ((0, _lib.isWindowClosed)(options.window)) {
                            interval.cancel();
                            options.handleError(new Error("Post message target window is closed"));
                        }
                    }, 50);
                })();
            }
            return {
                cancel: function cancel() {
                    (0, _drivers.removeRequestListener)(options);
                }
            };
        }
        function on(name, options, handler, errorHandler) {
            if (options instanceof Function) {
                errorHandler = handler;
                handler = options;
                options = {};
            }
            options = options || {};
            options.name = name;
            options.handler = handler || options.handler;
            options.errorHandler = errorHandler || options.errorHandler;
            return listen(options);
        }
        function once(name, options, handler, errorHandler) {
            if (options instanceof Function) {
                errorHandler = handler;
                handler = options;
                options = {};
            }
            options = options || {};
            options.name = name;
            options.handler = handler || options.handler;
            options.errorHandler = errorHandler || options.errorHandler;
            options.once = true;
            var prom = new _lib.promise.Promise(function(resolve, reject) {
                options.handler = options.handler || function(source, data) {
                    return resolve(data);
                };
                options.errorHandler = options.errorHandler || reject;
            });
            var listener = listen(options);
            _lib.util.extend(prom, listener);
            return prom;
        }
    }, /*!*********************************************!*\
  !*** ./~/post-robot/src/interface/proxy.js ***!
  \*********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.proxy = proxy;
        exports.unproxy = unproxy;
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        function proxy(window1, window2) {
            _drivers.listeners.proxies.push({
                from: window1,
                to: window2
            });
            _drivers.listeners.proxies.push({
                from: window2,
                to: window1
            });
        }
        function unproxy(window1, window2) {
            var toRemove = [];
            for (var i = 0; i < _drivers.listeners.proxies.length; i++) {
                var prox = _drivers.listeners.proxies[i];
                if (prox.to === window1 && prox.from === window2 || prox.to === window2 && prox.from === window1) {
                    toRemove.push(prox);
                }
            }
            for (var _i = 0; _i < toRemove.length; _i++) {
                _drivers.listeners.proxies.splice(_drivers.listeners.proxies.indexOf(toRemove[_i]), 1);
            }
        }
    }, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/config.js ***!
  \**********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.CONSTANTS = exports.CONFIG = undefined;
        exports.enableMockMode = enableMockMode;
        exports.disableMockMode = disableMockMode;
        var _conf = __webpack_require__(/*! ../conf */ 9);
        Object.defineProperty(exports, "CONFIG", {
            enumerable: true,
            get: function get() {
                return _conf.CONFIG;
            }
        });
        Object.defineProperty(exports, "CONSTANTS", {
            enumerable: true,
            get: function get() {
                return _conf.CONSTANTS;
            }
        });
        exports.disable = disable;
        var _drivers = __webpack_require__(/*! ../drivers */ 12);
        function enableMockMode() {
            _conf.CONFIG.MOCK_MODE = true;
        }
        function disableMockMode() {
            _conf.CONFIG.MOCK_MODE = false;
        }
        function disable() {
            delete window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
            window.removeEventListener("message", _drivers.messageListener);
        }
    }, /*!*********************************************!*\
  !*** ./~/xcomponent/src/component/index.js ***!
  \*********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _component = __webpack_require__(/*! ./component */ 35);
        Object.keys(_component).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _component[key];
                }
            });
        });
        var _parent = __webpack_require__(/*! ./parent */ 58);
        Object.keys(_parent).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _parent[key];
                }
            });
        });
        var _child = __webpack_require__(/*! ./child */ 46);
        Object.keys(_child).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _child[key];
                }
            });
        });
    }, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/component/index.js ***!
  \*******************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Component = exports.components = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _client = __webpack_require__(/*! beaver-logger/client */ 36);
        var _client2 = _interopRequireDefault(_client);
        var _child = __webpack_require__(/*! ../child */ 46);
        var _parent = __webpack_require__(/*! ../parent */ 58);
        var _props = __webpack_require__(/*! ./props */ 62);
        var _window = __webpack_require__(/*! ../window */ 54);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        var _validate2 = __webpack_require__(/*! ./validate */ 63);
        var _parent2 = __webpack_require__(/*! ./templates/parent.htm */ 64);
        var _parent3 = _interopRequireDefault(_parent2);
        var _component = __webpack_require__(/*! ./templates/component.htm */ 65);
        var _component2 = _interopRequireDefault(_component);
        var _drivers = __webpack_require__(/*! ../../drivers */ 66);
        var drivers = _interopRequireWildcard(_drivers);
        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj["default"] = obj;
                return newObj;
            }
        }
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var components = exports.components = {};
        var Component = exports.Component = function() {
            function Component() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                _classCallCheck(this, Component);
                this.validate(options);
                if (options.dimensions) {
                    if (typeof options.dimensions.width !== "number") {
                        throw new Error("[" + options.tag + "] Expected options.dimensions.width to be a number");
                    }
                    if (typeof options.dimensions.height !== "number") {
                        throw new Error("[" + options.tag + "] Expected options.dimensions.height to be a number");
                    }
                }
                this.tag = options.tag;
                this.name = options.name || options.tag.replace(/-/g, "_");
                this.props = _extends({}, options.props, _props.internalProps);
                this.dimensions = options.dimensions || {};
                this.defaultEnv = options.defaultEnv;
                this.envUrls = options.envUrls || {};
                this.url = options.url || options.envUrls[options.defaultEnv];
                this.contexts = options.contexts || {};
                for (var _iterator = _constants.CONTEXT_TYPES_LIST, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var context = _ref;
                    this.contexts[context] = this.contexts[context] === undefined ? true : Boolean(this.contexts[context]);
                }
                this.closeDelay = options.closeDelay;
                this.defaultContext = options.defaultContext;
                this.singleton = options.singleton;
                this.autoResize = options.autoResize || false;
                this.parentTemplate = options.parentTemplate || _parent3["default"];
                this.componentTemplate = options.componentTemplate || _component2["default"];
                components[this.tag] = this;
                for (var _iterator2 = Object.keys(drivers), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var driverName = _ref2;
                    var driver = drivers[driverName];
                    if (driver.isActive()) {
                        driver.register(this);
                    }
                }
            }
            _createClass(Component, [ {
                key: "isXComponent",
                value: function isXComponent() {
                    return (0, _window.isXComponentWindow)(window.name);
                }
            }, {
                key: "parent",
                value: function parent(options) {
                    return new _parent.ParentComponent(this, options);
                }
            }, {
                key: "child",
                value: function child(options) {
                    return new _child.ChildComponent(this, options);
                }
            }, {
                key: "attach",
                value: function attach(options) {
                    var component = this.child(options);
                    component.init();
                    return component;
                }
            }, {
                key: "init",
                value: function init(props) {
                    return new _parent.ParentComponent(this, {
                        props: props
                    });
                }
            }, {
                key: "render",
                value: function render(props, element) {
                    return this.init(props).render(element);
                }
            }, {
                key: "getByTag",
                value: function getByTag(tag) {
                    return components[tag];
                }
            }, {
                key: "validate",
                value: function validate(options) {
                    return (0, _validate2.validate)(options);
                }
            }, {
                key: "log",
                value: function log(event) {
                    var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    payload.host = window.location.host;
                    payload.path = window.location.pathname;
                    _client2["default"].info("xc_" + this.name + "_" + event, payload);
                }
            }, {
                key: "logWarning",
                value: function logWarning(event, payload) {
                    _client2["default"].warn("xc_" + this.name + "_" + event, payload);
                }
            }, {
                key: "logError",
                value: function logError(event, payload) {
                    _client2["default"].error("xc_" + this.name + "_" + event, payload);
                }
            } ]);
            return Component;
        }();
    }, /*!*****************************************!*\
  !*** ./~/beaver-logger/client/index.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _logger = __webpack_require__(/*! ./logger */ 37);
        Object.keys(_logger).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _logger[key];
                }
            });
        });
        var _init = __webpack_require__(/*! ./init */ 43);
        Object.keys(_init).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _init[key];
                }
            });
        });
        var _transitions = __webpack_require__(/*! ./transitions */ 45);
        Object.keys(_transitions).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _transitions[key];
                }
            });
        });
        var _builders = __webpack_require__(/*! ./builders */ 41);
        Object.keys(_builders).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _builders[key];
                }
            });
        });
        exports["default"] = module.exports;
    }, /*!******************************************!*\
  !*** ./~/beaver-logger/client/logger.js ***!
  \******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.flush = exports.tracking = exports.buffer = undefined;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.print = print;
        exports.immediateFlush = immediateFlush;
        exports.log = log;
        exports.debug = debug;
        exports.info = info;
        exports.warn = warn;
        exports.error = error;
        exports.track = track;
        var _util = __webpack_require__(/*! ./util */ 38);
        var _builders = __webpack_require__(/*! ./builders */ 41);
        var _config = __webpack_require__(/*! ./config */ 42);
        var buffer = exports.buffer = [];
        var tracking = exports.tracking = {};
        if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
            [ "log", "info", "warn", "error" ].forEach(function(method) {
                console[method] = this.bind(console[method], console);
            }, Function.prototype.call);
        }
        function print(level, event, payload) {
            if (!window.console || !window.console.log) {
                return;
            }
            payload = payload || {};
            var args = [ event ];
            args.push(payload);
            if (payload.error || payload.warning) {
                args.push("\n\n", payload.error || payload.warning);
            }
            if (window.console) {
                if (window.console[level] && window.console[level].apply) {
                    window.console[level].apply(window.console, args);
                } else if (window.console.log && window.console.log.apply) {
                    window.console.log.apply(window.console, args);
                }
            }
        }
        function immediateFlush() {
            var async = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            if (!_config.config.uri) {
                return;
            }
            var hasBuffer = buffer.length;
            var hasTracking = Object.keys(tracking).length;
            if (!hasBuffer && !hasTracking) {
                return;
            }
            if (hasTracking) {
                print("info", "tracking", tracking);
            }
            var meta = {};
            for (var _iterator = _builders.metaBuilders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var builder = _ref;
                try {
                    (0, _util.extend)(meta, builder(), false);
                } catch (err) {
                    console.error("Error in custom meta builder:", err.stack || err.toString());
                }
            }
            for (var _iterator2 = _builders.trackingBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var _builder = _ref2;
                try {
                    (0, _util.extend)(tracking, _builder(), false);
                } catch (err) {
                    console.error("Error in custom tracking builder:", err.stack || err.toString());
                }
            }
            var headers = {};
            for (var _iterator3 = _builders.headerBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray3) {
                    if (_i3 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i3++];
                } else {
                    _i3 = _iterator3.next();
                    if (_i3.done) break;
                    _ref3 = _i3.value;
                }
                var _builder2 = _ref3;
                try {
                    (0, _util.extend)(headers, _builder2(), false);
                } catch (err) {
                    console.error("Error in custom header builder:", err.stack || err.toString());
                }
            }
            var events = buffer;
            var req = (0, _util.ajax)("post", _config.config.uri, headers, {
                events: events,
                meta: meta,
                tracking: tracking
            }, async);
            exports.buffer = buffer = [];
            exports.tracking = tracking = {};
            return req;
        }
        var flush = exports.flush = (0, _util.promiseDebounce)(immediateFlush, _config.config.debounceInterval);
        function enqueue(level, event, payload) {
            buffer.push({
                level: level,
                event: event,
                payload: payload
            });
            if (_config.config.autoLog.indexOf(level) > -1) {
                flush();
            }
        }
        function log(level, event, payload) {
            payload = payload || {};
            if (typeof payload === "string") {
                payload = {
                    message: payload
                };
            } else if (payload instanceof Error) {
                payload = {
                    error: payload.stack || payload.toString()
                };
            }
            payload.timestamp = Date.now();
            for (var _iterator4 = _builders.payloadBuilders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                var _ref4;
                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }
                var builder = _ref4;
                try {
                    (0, _util.extend)(payload, builder(), false);
                } catch (err) {
                    console.error("Error in custom payload builder:", err.stack || err.toString());
                }
            }
            print(level, event, payload);
            if (buffer.length === _config.config.sizeLimit) {
                enqueue("info", "logger_max_buffer_length");
            } else if (buffer.length < _config.config.sizeLimit) {
                enqueue(level, event, payload);
            }
        }
        function debug(event, payload) {
            return log("debug", event, payload);
        }
        function info(event, payload) {
            return log("info", event, payload);
        }
        function warn(event, payload) {
            return log("warn", event, payload);
        }
        function error(event, payload) {
            return log("error", event, payload);
        }
        function track(payload) {
            (0, _util.extend)(tracking, payload || {}, false);
        }
    }, /*!****************************************!*\
  !*** ./~/beaver-logger/client/util.js ***!
  \****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.windowReady = undefined;
        exports.extend = extend;
        exports.isSameDomain = isSameDomain;
        exports.ajax = ajax;
        exports.promiseDebounce = promiseDebounce;
        exports.safeInterval = safeInterval;
        exports.uniqueID = uniqueID;
        var _es6PromiseMin = __webpack_require__(/*! es6-promise-min */ 39);
        function extend(dest, src) {
            var over = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
            dest = dest || {};
            src = src || {};
            for (var i in src) {
                if (src.hasOwnProperty(i)) {
                    if (over || !dest.hasOwnProperty(i)) {
                        dest[i] = src[i];
                    }
                }
            }
            return dest;
        }
        function isSameDomain(url) {
            var match = url.match(/https?:\/\/[^\/]+/);
            if (!match) {
                return true;
            }
            return match[0] === window.location.protocol + "//" + window.location.host;
        }
        function ajax(method, url) {
            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
            var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
            var async = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];
            return new _es6PromiseMin.Promise(function(resolve) {
                var XRequest = window.XMLHttpRequest || window.ActiveXObject;
                if (window.XDomainRequest && !isSameDomain(url)) {
                    XRequest = window.XDomainRequest;
                }
                var req = new XRequest("MSXML2.XMLHTTP.3.0");
                req.open(method.toUpperCase(), url, async);
                req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                req.setRequestHeader("Content-type", "application/json");
                for (var headerName in headers) {
                    if (headers.hasOwnProperty(headerName)) {
                        req.setRequestHeader(headerName, headers[headerName]);
                    }
                }
                req.onreadystatechange = function() {
                    if (req.readyState > 3) {
                        resolve();
                    }
                };
                req.send(JSON.stringify(data).replace(/&/g, "%26"));
            });
        }
        function promiseDebounce(method, interval) {
            var debounce = {};
            return function() {
                var args = arguments;
                if (debounce.timeout) {
                    clearTimeout(debounce.timeout);
                    delete debounce.timeout;
                }
                debounce.timeout = setTimeout(function() {
                    var resolver = debounce.resolver;
                    var rejector = debounce.rejector;
                    delete debounce.promise;
                    delete debounce.resolver;
                    delete debounce.rejector;
                    delete debounce.timeout;
                    return _es6PromiseMin.Promise.resolve().then(function() {
                        return method.apply(null, args);
                    }).then(resolver, rejector);
                }, interval);
                debounce.promise = debounce.promise || new _es6PromiseMin.Promise(function(resolver, rejector) {
                    debounce.resolver = resolver;
                    debounce.rejector = rejector;
                });
                return debounce.promise;
            };
        }
        var windowReady = exports.windowReady = new _es6PromiseMin.Promise(function(resolve) {
            if (document.readyState === "complete") {
                resolve();
            }
            window.addEventListener("load", resolve);
        });
        function safeInterval(method, time) {
            var timeout = void 0;
            function loop() {
                timeout = setTimeout(function() {
                    method();
                    loop();
                }, time);
            }
            loop();
            return {
                cancel: function cancel() {
                    clearTimeout(timeout);
                }
            };
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "xxxxxxxxxx".replace(/./g, function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            });
        }
    }, /*!***************************************************!*\
  !*** ./~/es6-promise-min/dist/es6-promise.min.js ***!
  \***************************************************/
    function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        (function(process, global) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
            };
            /*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.0.1
	 */
            (function() {
                function r(a, b) {
                    n[l] = a;
                    n[l + 1] = b;
                    l += 2;
                    2 === l && A();
                }
                function s(a) {
                    return "function" === typeof a;
                }
                function F() {
                    return function() {
                        process.nextTick(t);
                    };
                }
                function G() {
                    var a = 0, b = new B(t), c = document.createTextNode("");
                    b.observe(c, {
                        characterData: !0
                    });
                    return function() {
                        c.data = a = ++a % 2;
                    };
                }
                function H() {
                    var a = new MessageChannel();
                    a.port1.onmessage = t;
                    return function() {
                        a.port2.postMessage(0);
                    };
                }
                function I() {
                    return function() {
                        setTimeout(t, 1);
                    };
                }
                function t() {
                    for (var a = 0; a < l; a += 2) {
                        (0, n[a])(n[a + 1]), n[a] = void 0, n[a + 1] = void 0;
                    }
                    l = 0;
                }
                function p() {}
                function J(a, b, c, d) {
                    try {
                        a.call(b, c, d);
                    } catch (e) {
                        return e;
                    }
                }
                function K(a, b, c) {
                    r(function(a) {
                        var e = !1, f = J(c, b, function(c) {
                            e || (e = !0, b !== c ? q(a, c) : m(a, c));
                        }, function(b) {
                            e || (e = !0, g(a, b));
                        });
                        !e && f && (e = !0, g(a, f));
                    }, a);
                }
                function L(a, b) {
                    1 === b.a ? m(a, b.b) : 2 === a.a ? g(a, b.b) : u(b, void 0, function(b) {
                        q(a, b);
                    }, function(b) {
                        g(a, b);
                    });
                }
                function q(a, b) {
                    if (a === b) g(a, new TypeError("You cannot resolve a promise with itself")); else if ("function" === typeof b || "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
                        if (b.constructor === a.constructor) L(a, b); else {
                            var c;
                            try {
                                c = b.then;
                            } catch (d) {
                                v.error = d, c = v;
                            }
                            c === v ? g(a, v.error) : void 0 === c ? m(a, b) : s(c) ? K(a, b, c) : m(a, b);
                        }
                    } else m(a, b);
                }
                function M(a) {
                    a.f && a.f(a.b);
                    x(a);
                }
                function m(a, b) {
                    void 0 === a.a && (a.b = b, a.a = 1, 0 !== a.e.length && r(x, a));
                }
                function g(a, b) {
                    void 0 === a.a && (a.a = 2, a.b = b, r(M, a));
                }
                function u(a, b, c, d) {
                    var e = a.e, f = e.length;
                    a.f = null;
                    e[f] = b;
                    e[f + 1] = c;
                    e[f + 2] = d;
                    0 === f && a.a && r(x, a);
                }
                function x(a) {
                    var b = a.e, c = a.a;
                    if (0 !== b.length) {
                        for (var d, e, f = a.b, g = 0; g < b.length; g += 3) {
                            d = b[g], e = b[g + c], d ? C(c, d, e, f) : e(f);
                        }
                        a.e.length = 0;
                    }
                }
                function D() {
                    this.error = null;
                }
                function C(a, b, c, d) {
                    var e = s(c), f, k, h, l;
                    if (e) {
                        try {
                            f = c(d);
                        } catch (n) {
                            y.error = n, f = y;
                        }
                        f === y ? (l = !0, k = f.error, f = null) : h = !0;
                        if (b === f) {
                            g(b, new TypeError("A promises callback cannot return that same promise."));
                            return;
                        }
                    } else f = d, h = !0;
                    void 0 === b.a && (e && h ? q(b, f) : l ? g(b, k) : 1 === a ? m(b, f) : 2 === a && g(b, f));
                }
                function N(a, b) {
                    try {
                        b(function(b) {
                            q(a, b);
                        }, function(b) {
                            g(a, b);
                        });
                    } catch (c) {
                        g(a, c);
                    }
                }
                function k(a, b, c, d) {
                    this.n = a;
                    this.c = new a(p, d);
                    this.i = c;
                    this.o(b) ? (this.m = b, this.d = this.length = b.length, this.l(), 0 === this.length ? m(this.c, this.b) : (this.length = this.length || 0, 
                    this.k(), 0 === this.d && m(this.c, this.b))) : g(this.c, this.p());
                }
                function h(a) {
                    O++;
                    this.b = this.a = void 0;
                    this.e = [];
                    if (p !== a) {
                        if (!s(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                        if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        N(this, a);
                    }
                }
                var E = Array.isArray ? Array.isArray : function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a);
                }, l = 0, w = "undefined" !== typeof window ? window : {}, B = w.MutationObserver || w.WebKitMutationObserver, w = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel, n = Array(1e3), A;
                A = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? F() : B ? G() : w ? H() : I();
                var v = new D(), y = new D();
                k.prototype.o = function(a) {
                    return E(a);
                };
                k.prototype.p = function() {
                    return Error("Array Methods must be provided an Array");
                };
                k.prototype.l = function() {
                    this.b = Array(this.length);
                };
                k.prototype.k = function() {
                    for (var a = this.length, b = this.c, c = this.m, d = 0; void 0 === b.a && d < a; d++) {
                        this.j(c[d], d);
                    }
                };
                k.prototype.j = function(a, b) {
                    var c = this.n;
                    "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a ? a.constructor === c && void 0 !== a.a ? (a.f = null, 
                    this.g(a.a, b, a.b)) : this.q(c.resolve(a), b) : (this.d--, this.b[b] = this.h(a));
                };
                k.prototype.g = function(a, b, c) {
                    var d = this.c;
                    void 0 === d.a && (this.d--, this.i && 2 === a ? g(d, c) : this.b[b] = this.h(c));
                    0 === this.d && m(d, this.b);
                };
                k.prototype.h = function(a) {
                    return a;
                };
                k.prototype.q = function(a, b) {
                    var c = this;
                    u(a, void 0, function(a) {
                        c.g(1, b, a);
                    }, function(a) {
                        c.g(2, b, a);
                    });
                };
                var O = 0;
                h.all = function(a, b) {
                    return new k(this, a, !0, b).c;
                };
                h.race = function(a, b) {
                    function c(a) {
                        q(e, a);
                    }
                    function d(a) {
                        g(e, a);
                    }
                    var e = new this(p, b);
                    if (!E(a)) return g(e, new TypeError("You must pass an array to race.")), e;
                    for (var f = a.length, h = 0; void 0 === e.a && h < f; h++) {
                        u(this.resolve(a[h]), void 0, c, d);
                    }
                    return e;
                };
                h.resolve = function(a, b) {
                    if (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this) return a;
                    var c = new this(p, b);
                    q(c, a);
                    return c;
                };
                h.reject = function(a, b) {
                    var c = new this(p, b);
                    g(c, a);
                    return c;
                };
                h.prototype = {
                    constructor: h,
                    then: function then(a, b) {
                        var c = this.a;
                        if (1 === c && !a || 2 === c && !b) return this;
                        var d = new this.constructor(p), e = this.b;
                        if (c) {
                            var f = arguments[c - 1];
                            r(function() {
                                C(c, d, f, e);
                            });
                        } else u(this, d, a, b);
                        return d;
                    },
                    "catch": function _catch(a) {
                        return this.then(null, a);
                    }
                };
                var z = {
                    Promise: h,
                    polyfill: function polyfill() {
                        var a;
                        a = "undefined" !== typeof global ? global : "undefined" !== typeof window && window.document ? window : self;
                        "Promise" in a && "resolve" in a.Promise && "reject" in a.Promise && "all" in a.Promise && "race" in a.Promise && function() {
                            var b;
                            new a.Promise(function(a) {
                                b = a;
                            });
                            return s(b);
                        }() || (a.Promise = h);
                    }
                };
                true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return z;
                }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = z : "undefined" !== typeof this && (this.ES6Promise = z);
            }).call(undefined);
        }).call(exports, __webpack_require__(/*! ./~/process/browser.js */ 40), function() {
            return this;
        }());
    }, /*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
    function(module, exports) {
        "use strict";
        var process = module.exports = {};
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }
        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = setTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            clearTimeout(timeout);
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                setTimeout(drainQueue, 0);
            }
        };
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.binding = function(name) {
            throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
            return "/";
        };
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
            return 0;
        };
    }, /*!********************************************!*\
  !*** ./~/beaver-logger/client/builders.js ***!
  \********************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.addPayloadBuilder = addPayloadBuilder;
        exports.addMetaBuilder = addMetaBuilder;
        exports.addTrackingBuilder = addTrackingBuilder;
        exports.addHeaderBuilder = addHeaderBuilder;
        var payloadBuilders = exports.payloadBuilders = [];
        var metaBuilders = exports.metaBuilders = [];
        var trackingBuilders = exports.trackingBuilders = [];
        var headerBuilders = exports.headerBuilders = [];
        function addPayloadBuilder(builder) {
            payloadBuilders.push(builder);
        }
        function addMetaBuilder(builder) {
            metaBuilders.push(builder);
        }
        function addTrackingBuilder(builder) {
            trackingBuilders.push(builder);
        }
        function addHeaderBuilder(builder) {
            headerBuilders.push(builder);
        }
    }, /*!******************************************!*\
  !*** ./~/beaver-logger/client/config.js ***!
  \******************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var config = exports.config = {
            uri: "",
            initial_state_name: "init",
            flushInterval: 10 * 60 * 1e3,
            debounceInterval: 10,
            sizeLimit: 300,
            heartbeat: true,
            heartbeatConsoleLog: true,
            heartbeatInterval: 5e3,
            hearbeatMaxThreshold: 50,
            heartbeatTooBusyThreshold: 1e4,
            autoLog: [ "warn", "error" ],
            logUnload: true,
            logUnloadSync: false,
            logPerformance: true
        };
    }, /*!****************************************!*\
  !*** ./~/beaver-logger/client/init.js ***!
  \****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.init = init;
        var _config = __webpack_require__(/*! ./config */ 42);
        var _util = __webpack_require__(/*! ./util */ 38);
        var _performance = __webpack_require__(/*! ./performance */ 44);
        var _logger = __webpack_require__(/*! ./logger */ 37);
        var initiated = false;
        function init(conf) {
            (0, _util.extend)(_config.config, conf || {});
            if (initiated) {
                return;
            }
            initiated = true;
            if (_config.config.logPerformance) {
                (0, _performance.initPerformance)();
            }
            if (_config.config.heartbeat) {
                (0, _performance.initHeartBeat)();
            }
            if (_config.config.logUnload) {
                (function() {
                    var async = !_config.config.logUnloadSync;
                    window.addEventListener("beforeunload", function() {
                        (0, _logger.info)("window_beforeunload");
                        (0, _logger.immediateFlush)(async);
                    });
                    window.addEventListener("unload", function() {
                        (0, _logger.info)("window_unload");
                        (0, _logger.immediateFlush)(async);
                    });
                })();
            }
            if (_config.config.flushInterval) {
                setInterval(_logger.flush, _config.config.flushInterval);
            }
            if (window.beaverLogQueue) {
                window.beaverLogQueue.forEach(function(payload) {
                    (0, _logger.log)(payload.level, payload.event, payload);
                });
                delete window.beaverLogQueue;
            }
        }
    }, /*!***********************************************!*\
  !*** ./~/beaver-logger/client/performance.js ***!
  \***********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.reqTimer = exports.clientTimer = undefined;
        exports.now = now;
        exports.reqStartElapsed = reqStartElapsed;
        exports.initHeartBeat = initHeartBeat;
        exports.initPerformance = initPerformance;
        var _config = __webpack_require__(/*! ./config */ 42);
        var _logger = __webpack_require__(/*! ./logger */ 37);
        var _builders = __webpack_require__(/*! ./builders */ 41);
        var _util = __webpack_require__(/*! ./util */ 38);
        var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;
        function now() {
            if (enablePerformance) {
                return performance.now();
            } else {
                return Date.now();
            }
        }
        function timer(startTime) {
            startTime = startTime !== undefined ? startTime : now();
            return {
                startTime: startTime,
                elapsed: function elapsed() {
                    return parseInt(now() - startTime, 10);
                },
                reset: function reset() {
                    startTime = now();
                }
            };
        }
        function reqStartElapsed() {
            if (enablePerformance) {
                var timing = window.performance.timing;
                return parseInt(timing.connectEnd - timing.navigationStart, 10);
            }
        }
        var clientTimer = exports.clientTimer = timer();
        var reqTimer = exports.reqTimer = timer(reqStartElapsed());
        function initHeartBeat() {
            var heartBeatTimer = timer();
            var heartbeatCount = 0;
            (0, _util.safeInterval)(function() {
                if (!_logger.buffer.length || _logger.buffer[_logger.buffer.length - 1].event !== "heartbeat") {
                    heartbeatCount = 0;
                }
                if (!_logger.buffer.length || heartbeatCount > _config.config.hearbeatMaxThreshold) {
                    return;
                }
                heartbeatCount += 1;
                var elapsed = heartBeatTimer.elapsed();
                var lag = elapsed - _config.config.heartbeatInterval;
                if (lag >= _config.config.heartbeatTooBusyThreshold) {
                    (0, _logger.info)("toobusy", {
                        count: heartbeatCount,
                        elapsed: elapsed,
                        lag: lag
                    }, {
                        noConsole: !_config.config.heartbeatConsoleLog
                    });
                }
                (0, _logger.info)("heartbeat", {
                    count: heartbeatCount,
                    elapsed: elapsed,
                    lag: lag
                }, {
                    noConsole: !_config.config.heartbeatConsoleLog
                });
            }, _config.config.heartbeatInterval);
        }
        function initPerformance() {
            if (!enablePerformance) {
                return (0, _logger.info)("no_performance_data");
            }
            (0, _builders.addPayloadBuilder)(function() {
                var payload = {};
                payload.client_elapsed = clientTimer.elapsed();
                if (enablePerformance) {
                    payload.req_elapsed = reqTimer.elapsed();
                }
                return payload;
            });
            _util.windowReady.then(function() {
                var keys = [ "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart" ];
                var timing = {};
                keys.forEach(function(key) {
                    timing[key] = parseInt(window.performance.timing[key], 10) || 0;
                });
                var offset = timing.connectEnd - timing.navigationStart;
                if (timing.connectEnd) {
                    Object.keys(timing).forEach(function(name) {
                        var time = timing[name];
                        if (time) {
                            (0, _logger.info)("timing_" + name, {
                                client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                                req_elapsed: parseInt(time - timing.connectEnd, 10)
                            });
                        }
                    });
                }
                (0, _logger.info)("timing", timing);
                (0, _logger.info)("memory", window.performance.memory);
                (0, _logger.info)("navigation", window.performance.navigation);
                if (window.performance.getEntries) {
                    window.performance.getEntries().forEach(function(resource) {
                        if ([ "link", "script", "img", "css" ].indexOf(resource.initiatorType) > -1) {
                            (0, _logger.info)(resource.initiatorType, resource);
                        }
                    });
                }
            });
        }
    }, /*!***********************************************!*\
  !*** ./~/beaver-logger/client/transitions.js ***!
  \***********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.startTransition = startTransition;
        exports.endTransition = endTransition;
        exports.transition = transition;
        var _performance = __webpack_require__(/*! ./performance */ 44);
        var _logger = __webpack_require__(/*! ./logger */ 37);
        var _builders = __webpack_require__(/*! ./builders */ 41);
        var _util = __webpack_require__(/*! ./util */ 38);
        var _config = __webpack_require__(/*! ./config */ 42);
        var windowID = (0, _util.uniqueID)();
        var pageID = (0, _util.uniqueID)();
        var currentState = _config.config.initial_state_name;
        var startTime = void 0;
        function startTransition() {
            startTime = (0, _performance.now)();
        }
        function endTransition(toState) {
            startTime = startTime || (0, _performance.reqStartElapsed)();
            var currentTime = (0, _performance.now)();
            var elapsedTime = void 0;
            if (startTime !== undefined) {
                elapsedTime = parseInt(currentTime - startTime, 0);
            }
            var transitionName = "transition_" + currentState + "_to_" + toState;
            (0, _logger.info)(transitionName, {
                duration: elapsedTime
            });
            (0, _logger.track)({
                transition: transitionName,
                transition_time: elapsedTime
            });
            (0, _logger.immediateFlush)();
            startTime = currentTime;
            currentState = toState;
            pageID = (0, _util.uniqueID)();
        }
        function transition(toState) {
            startTransition();
            endTransition(toState);
        }
        (0, _builders.addPayloadBuilder)(function() {
            return {
                windowID: windowID,
                pageID: pageID
            };
        });
        (0, _builders.addMetaBuilder)(function() {
            return {
                state: "ui_" + currentState
            };
        });
    }, /*!***************************************************!*\
  !*** ./~/xcomponent/src/component/child/index.js ***!
  \***************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ChildComponent = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _src = __webpack_require__(/*! post-robot/src */ 6);
        var _src2 = _interopRequireDefault(_src);
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _base = __webpack_require__(/*! ../base */ 47);
        var _window = __webpack_require__(/*! ../window */ 54);
        var _lib = __webpack_require__(/*! ../../lib */ 48);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        var _props = __webpack_require__(/*! ../props */ 56);
        var _props2 = __webpack_require__(/*! ./props */ 57);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ChildComponent = exports.ChildComponent = function(_BaseComponent) {
            _inherits(ChildComponent, _BaseComponent);
            function ChildComponent(component) {
                var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                _classCallCheck(this, ChildComponent);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChildComponent).call(this, component, options));
                _this.component = component;
                _this.component.log("construct_child");
                _this.validate(options);
                _this.onEnter = _this.tryCatch(options.onEnter || _lib.noop);
                _this.onClose = _this.tryCatch(options.onClose || _lib.noop);
                _this.onProps = _this.tryCatch(options.onProps || _lib.noop, false);
                _this.onError = _this.tryCatch(options.onError || function(err) {
                    throw err;
                });
                _this.setProps((0, _props.normalizeProps)(_this.component, _this, options.defaultProps || {}), false);
                _this.standalone = options.standalone;
                return _this;
            }
            _createClass(ChildComponent, [ {
                key: "init",
                value: function init() {
                    var _this2 = this;
                    this.component.log("init_child");
                    if (!(0, _window.isXComponentWindow)(window.name) && this.standalone) {
                        this.component.log("child_standalone");
                        return;
                    }
                    this.setWindows();
                    if (this.standalone && !(0, _window.getParentWindow)()) {
                        return _promise.SyncPromise.resolve();
                    }
                    if (this.component.autoResize) {
                        this.watchForResize();
                    }
                    return this.sendToParent(_constants.POST_MESSAGE.INIT, {
                        exports: this.exports()
                    }).then(function(data) {
                        _this2.context = data.context;
                        _this2.setProps(data.props);
                        _this2.onEnter.call(_this2);
                    })["catch"](function(err) {
                        return _this2.onError(err);
                    });
                }
            }, {
                key: "setProps",
                value: function setProps() {
                    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                    var onProps = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                    this.props = this.props || {};
                    (0, _lib.extend)(this.props, (0, _props2.normalizeChildProps)(this.component, props));
                    if (onProps) {
                        this.onProps.call(this);
                    }
                }
            }, {
                key: "sendToParent",
                value: function sendToParent(name, data) {
                    this.component.log("send_to_parent_" + name);
                    return _src2["default"].send((0, _window.getParentWindow)(), name, data);
                }
            }, {
                key: "setWindows",
                value: function setWindows() {
                    if (window.__activeXComponent__) {
                        throw new Error("[" + this.component.tag + "] Can not attach multiple components to the same window");
                    }
                    window.__activeXComponent__ = this;
                    if (!(0, _window.getParentWindow)()) {
                        throw new Error("[" + this.component.tag + "] Can not find parent window");
                    }
                    var winProps = (0, _window.parseWindowName)(window.name);
                    this.component.log("child_win_props", winProps);
                    if (winProps.tag !== this.component.tag) {
                        throw new Error("[" + this.component.tag + "] Parent is " + winProps.tag + " - can not attach " + this.component.tag);
                    }
                    this.watchForClose();
                }
            }, {
                key: "watchForClose",
                value: function watchForClose() {
                    var _this3 = this;
                    (0, _lib.onCloseWindow)(_window.getParentWindow, function() {
                        _this3.component.log("parent_window_closed");
                        _this3.onClose(_constants.CLOSE_REASONS.PARENT_CLOSE_DETECTED);
                        if (_this3.context === _constants.CONTEXT_TYPES.POPUP) {
                            _this3.destroy();
                        }
                    });
                    if ((0, _window.getParentComponentWindow)() && (0, _window.getParentComponentWindow)() !== (0, 
                    _window.getParentWindow)()) {
                        (0, _lib.onCloseWindow)((0, _window.getParentComponentWindow)(), function() {
                            _this3.component.log("parent_component_window_closed");
                            _this3.close(_constants.CLOSE_REASONS.PARENT_CLOSE_DETECTED);
                        });
                    }
                    (0, _lib.addEventListener)(window, "beforeunload", function() {
                        return _this3.onClose();
                    });
                }
            }, {
                key: "validate",
                value: function validate(options) {}
            }, {
                key: "watchForResize",
                value: function watchForResize() {
                    var _this4 = this;
                    var elm = document.body;
                    if (!elm) {
                        return;
                    }
                    var lastWidth = elm.scrollWidth;
                    var newWidth = void 0;
                    var lastHeight = elm.scrollHeight;
                    var newHeight = void 0;
                    setInterval(function() {
                        newWidth = elm.scrollWidth;
                        newHeight = elm.scrollHeight;
                        if (lastHeight !== newHeight || lastWidth !== newWidth) {
                            _this4.resize(newWidth, newHeight);
                        }
                        lastWidth = newWidth;
                        lastHeight = newHeight;
                    }, 50);
                }
            }, {
                key: "exports",
                value: function exports() {
                    var _this5 = this;
                    return {
                        updateProps: function updateProps(props) {
                            return _this5.setProps(props);
                        },
                        close: function close() {
                            return window.close();
                        }
                    };
                }
            }, {
                key: "resize",
                value: function resize(width, height) {
                    var _this6 = this;
                    return _promise.SyncPromise.resolve().then(function() {
                        _this6.component.log("resize", {
                            width: width,
                            height: height
                        });
                        if (_this6.context === _constants.CONTEXT_TYPES.POPUP) {
                            return window.resizeTo(width, height);
                        }
                        return _this6.sendToParent(_constants.POST_MESSAGE.RESIZE, {
                            width: width,
                            height: height
                        });
                    });
                }
            }, {
                key: "hide",
                value: function hide() {
                    return this.sendToParent(_constants.POST_MESSAGE.HIDE);
                }
            }, {
                key: "close",
                value: function close() {
                    var reason = arguments.length <= 0 || arguments[0] === undefined ? _constants.CLOSE_REASONS.CHILD_CALL : arguments[0];
                    this.component.log("close_child");
                    this.onClose.call(this, reason);
                    this.sendToParent(_constants.POST_MESSAGE.CLOSE, {
                        reason: reason
                    }, {
                        fireAndForget: true
                    });
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    window.close();
                }
            }, {
                key: "focus",
                value: function focus() {
                    this.component.log("focus");
                    window.focus();
                }
            }, {
                key: "error",
                value: function error(err) {
                    this.component.log("error", {
                        error: err.stack || err.toString()
                    });
                    return this.sendToParent(_constants.POST_MESSAGE.ERROR, {
                        error: err.stack ? err.message + "\n" + err.stack : err.toString()
                    });
                }
            } ]);
            return ChildComponent;
        }(_base.BaseComponent);
    }, /*!********************************************!*\
  !*** ./~/xcomponent/src/component/base.js ***!
  \********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.BaseComponent = undefined;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _src = __webpack_require__(/*! post-robot/src */ 6);
        var _src2 = _interopRequireDefault(_src);
        var _lib = __webpack_require__(/*! ../lib */ 48);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var BaseComponent = exports.BaseComponent = function() {
            function BaseComponent() {
                _classCallCheck(this, BaseComponent);
            }
            _createClass(BaseComponent, [ {
                key: "registerForCleanup",
                value: function registerForCleanup(task) {
                    this.cleanupTasks = this.cleanupTasks || [];
                    this.cleanupTasks.push(task);
                    return this;
                }
            }, {
                key: "cleanup",
                value: function cleanup() {
                    while (this.cleanupTasks && this.cleanupTasks.length) {
                        var task = this.cleanupTasks.pop();
                        task();
                    }
                }
            }, {
                key: "hasCleanupTasks",
                value: function hasCleanupTasks() {
                    return Boolean(this.cleanupTasks.length);
                }
            }, {
                key: "setForCleanup",
                value: function setForCleanup(key, value) {
                    var _this = this;
                    this[key] = value;
                    this.registerForCleanup(function() {
                        delete _this[key];
                    });
                }
            }, {
                key: "tryCatch",
                value: function tryCatch(method, doOnce) {
                    var self = this;
                    var errored = false;
                    var wrapper = function wrapper() {
                        if (errored) {
                            return;
                        }
                        try {
                            return method.apply(this, arguments);
                        } catch (err) {
                            errored = true;
                            return self.error(err);
                        }
                    };
                    if (doOnce !== false) {
                        wrapper = (0, _lib.once)(wrapper);
                    }
                    return wrapper;
                }
            }, {
                key: "listen",
                value: function listen(win) {
                    var _this2 = this;
                    if (!win) {
                        throw new Error("[" + this.component.tag + "] window to listen to not set");
                    }
                    if (!this.listeners) {
                        return;
                    }
                    var listeners = this.listeners();
                    var _loop = function _loop() {
                        if (_isArray) {
                            if (_i >= _iterator.length) return "break";
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) return "break";
                            _ref = _i.value;
                        }
                        var listenerName = _ref;
                        var listener = _src2["default"].on(listenerName, {
                            window: win,
                            errorHandler: function errorHandler(err) {
                                return _this2.error(err);
                            }
                        }, function(source, data) {
                            _this2.component.log("listener_" + listenerName.replace(/^xcomponent_/, ""));
                            return listeners[listenerName].call(_this2, source, data);
                        });
                        _this2.registerForCleanup(function() {
                            listener.cancel();
                        });
                    };
                    for (var _iterator = Object.keys(listeners), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        var _ret = _loop();
                        if (_ret === "break") break;
                    }
                }
            } ]);
            return BaseComponent;
        }();
    }, /*!***************************************!*\
  !*** ./~/xcomponent/src/lib/index.js ***!
  \***************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dom = __webpack_require__(/*! ./dom */ 49);
        Object.keys(_dom).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _dom[key];
                }
            });
        });
        var _fn = __webpack_require__(/*! ./fn */ 50);
        Object.keys(_fn).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _fn[key];
                }
            });
        });
        var _promise = __webpack_require__(/*! ./promise */ 53);
        Object.keys(_promise).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _promise[key];
                }
            });
        });
        var _util = __webpack_require__(/*! ./util */ 51);
        Object.keys(_util).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _util[key];
                }
            });
        });
    }, /*!*************************************!*\
  !*** ./~/xcomponent/src/lib/dom.js ***!
  \*************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getElement = getElement;
        exports.popup = popup;
        exports.iframe = iframe;
        exports.isWindowClosed = isWindowClosed;
        exports.onCloseWindow = onCloseWindow;
        exports.addEventListener = addEventListener;
        exports.getParentWindow = getParentWindow;
        exports.getParentNode = getParentNode;
        exports.scanForJavascript = scanForJavascript;
        exports.createElement = createElement;
        exports.hijackButton = hijackButton;
        exports.addEventToClass = addEventToClass;
        exports.template = template;
        exports.getUrlParams = getUrlParams;
        exports.getUrlParam = getUrlParam;
        exports.getDomain = getDomain;
        var _fn = __webpack_require__(/*! ./fn */ 50);
        var _util = __webpack_require__(/*! ./util */ 51);
        function getElement(id) {
            if (id instanceof window.Element) {
                return id;
            }
            if (typeof id === "string") {
                var element = document.getElementById(id);
                if (element) {
                    return element;
                }
                if (document.querySelector) {
                    return document.querySelector(id);
                }
            }
        }
        function popup(url, options) {
            var params = Object.keys(options).map(function(key) {
                if (options[key]) {
                    return key + "=" + options[key];
                }
            }).filter(Boolean).join(",");
            var win = window.open(url, options.name, params, true);
            return win;
        }
        function iframe(container, url, options) {
            container = getElement(container);
            var frame = document.createElement("iframe");
            for (var _iterator = Object.keys(options), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                frame[key] = options[key];
            }
            frame.frameBorder = "0";
            frame.allowTransparency = "true";
            container.appendChild(frame);
            return frame;
        }
        function isWindowClosed(win) {
            try {
                return !win || win.closed || typeof win.closed === "undefined" || (0, _util.safeGet)(win, "mockclosed");
            } catch (err) {
                return true;
            }
        }
        function onCloseWindow(win, callback) {
            callback = (0, _fn.once)(callback);
            var isFunction = win instanceof Function;
            var interval = void 0;
            var checkWindowClosed = function checkWindowClosed() {
                var myWin = void 0;
                try {
                    myWin = isFunction ? win() : win;
                } catch (err) {}
                if (isWindowClosed(myWin)) {
                    clearInterval(interval);
                    return callback();
                }
            };
            interval = (0, _util.safeInterval)(checkWindowClosed, 50);
            checkWindowClosed();
            var close = win.close;
            try {
                win.close = function() {
                    close.apply(this, arguments);
                    checkWindowClosed();
                };
            } catch (err) {}
            return {
                cancel: function cancel() {
                    interval.cancel();
                    callback = _fn.noop;
                }
            };
        }
        function addEventListener(obj, event, handler) {
            obj.addEventListener(event, handler);
            return {
                cancel: function cancel() {
                    obj.removeEventListener(event, handler);
                }
            };
        }
        function getParentWindow(win) {
            win = win || window;
            if (win.opener) {
                return win.opener;
            }
            if (win.parent && win.parent !== win) {
                return win.parent;
            }
        }
        function getParentNode(el, tag) {
            tag = tag.toLowerCase();
            while (el.parentNode) {
                el = el.parentNode;
                if (el.tagName.toLowerCase() === tag) {
                    return el;
                }
            }
        }
        function scanForJavascript(str) {
            if (!str) {
                return str;
            }
            if (str.match(/<script|on\w+\s*=|javascript:|expression\s*\(|eval\(|new\s*Function/)) {
                throw new Error("HTML contains potential javascript: " + str);
            }
            return str;
        }
        function createElement() {
            var tag = arguments.length <= 0 || arguments[0] === undefined ? "div" : arguments[0];
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var container = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
            var element = document.createElement(tag);
            if (options.style) {
                (0, _util.extend)(element.style, options.style);
            }
            if (options.html) {
                element.innerHTML = options.html;
            }
            if (options["class"]) {
                element.className = options["class"].join(" ");
            }
            if (options.attributes) {
                for (var _iterator2 = Object.keys(options.attributes), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var key = _ref2;
                    element.setAttribute(key, options.attributes[key]);
                }
            }
            if (options.styleSheet) {
                if (element.styleSheet) {
                    element.styleSheet.cssText = options.styleSheet;
                } else {
                    element.appendChild(document.createTextNode(options.styleSheet));
                }
            }
            if (container) {
                container.appendChild(element);
            }
            return element;
        }
        function hijackButton(element, callback) {
            var el = getElement(element);
            if (!el) {
                throw new Error("Can not find element: " + element);
            }
            var targetElement = el.form ? el.form : el;
            el.addEventListener("click", function(event) {
                callback(event, targetElement);
            });
        }
        function addEventToClass(element, className, eventName, handler) {
            for (var _iterator3 = Array.prototype.slice.call(element.getElementsByClassName(className)), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray3) {
                    if (_i3 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i3++];
                } else {
                    _i3 = _iterator3.next();
                    if (_i3.done) break;
                    _ref3 = _i3.value;
                }
                var el = _ref3;
                el.addEventListener(eventName, function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    handler();
                });
            }
        }
        function template(html, context) {
            return html.replace(/\{([\w_\.]+)\}/g, function(variable) {
                return (0, _util.get)(context, variable.slice(1, variable.length - 1), "");
            });
        }
        function getUrlParams(queryString) {
            queryString = queryString || window.location.search.slice(1);
            var params = {};
            if (!queryString) {
                return params;
            }
            for (var _iterator4 = queryString.split("&"), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                var _ref4;
                if (_isArray4) {
                    if (_i4 >= _iterator4.length) break;
                    _ref4 = _iterator4[_i4++];
                } else {
                    _i4 = _iterator4.next();
                    if (_i4.done) break;
                    _ref4 = _i4.value;
                }
                var pair = _ref4;
                pair = pair.split("=");
                if (pair[0] && pair[1]) {
                    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
            }
            return params;
        }
        function getUrlParam(name) {
            return getUrlParams()[name];
        }
        function getDomain(url) {
            var domain = void 0;
            if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
                domain = url;
            } else {
                domain = window.location.href;
            }
            domain = domain.split("/").slice(0, 3).join("/");
            return domain;
        }
    }, /*!************************************!*\
  !*** ./~/xcomponent/src/lib/fn.js ***!
  \************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.noop = noop;
        exports.once = once;
        exports.memoize = memoize;
        function noop() {}
        function once(method) {
            var called = false;
            return function() {
                if (!called) {
                    called = true;
                    return method.apply(this, arguments);
                }
            };
        }
        function memoize(method) {
            var results = {};
            return function() {
                var args = void 0;
                try {
                    args = JSON.stringify(arguments);
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
                if (!results.hasOwnProperty(args)) {
                    results[args] = method.apply(this, arguments);
                }
                return results[args];
            };
        }
    }, /*!**************************************!*\
  !*** ./~/xcomponent/src/lib/util.js ***!
  \**************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.urlEncode = urlEncode;
        exports.camelToDasherize = camelToDasherize;
        exports.dasherizeToCamel = dasherizeToCamel;
        exports.extend = extend;
        exports.values = values;
        exports.uniqueID = uniqueID;
        exports.b64encode = b64encode;
        exports.b64decode = b64decode;
        exports.stringifyWithFunctions = stringifyWithFunctions;
        exports.safeGet = safeGet;
        exports.capitalizeFirstLetter = capitalizeFirstLetter;
        exports.get = get;
        exports.safeInterval = safeInterval;
        exports.safeTimeout = safeTimeout;
        var _Base = __webpack_require__(/*! Base64 */ 52);
        var _Base2 = _interopRequireDefault(_Base);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function urlEncode(str) {
            return str.replace(/\?/g, "%3F").replace(/\&/g, "%26");
        }
        function camelToDasherize(string) {
            return string.replace(/([A-Z])/g, function(g) {
                return "-" + g.toLowerCase();
            });
        }
        function dasherizeToCamel(string) {
            return string.replace(/-([a-z])/g, function(g) {
                return g[1].toUpperCase();
            });
        }
        function extend(obj, source) {
            if (!source) {
                return obj;
            }
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    obj[key] = source[key];
                }
            }
            return obj;
        }
        function values(obj) {
            var results = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    results.push(obj[key]);
                }
            }
            return results;
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "xxxxxxxxxx".replace(/./g, function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            });
        }
        function b64encode(str) {
            return (window.btoa ? window.btoa(str) : _Base2["default"].btoa(str)).replace(/[=]/g, "_");
        }
        function b64decode(str) {
            str = str.replace(/[_]/g, "=");
            return window.atob ? window.atob(str) : _Base2["default"].atob(str);
        }
        function stringifyWithFunctions(obj) {
            return JSON.stringify(obj, function(key, val) {
                if (typeof val === "function") {
                    return val.toString();
                }
                return val;
            });
        }
        function safeGet(obj, prop) {
            var result = void 0;
            try {
                result = obj[prop];
            } catch (err) {}
            return result;
        }
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        function get(item, path, def) {
            if (!path) {
                return def;
            }
            path = path.split(".");
            for (var i = 0; i < path.length; i++) {
                if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                    item = item[path[i]];
                } else {
                    return def;
                }
            }
            return item === undefined ? def : item;
        }
        function safeInterval(method, time) {
            var timeout = void 0;
            function runInterval() {
                timeout = setTimeout(runInterval, time);
                method.call();
            }
            timeout = setTimeout(runInterval, time);
            return {
                cancel: function cancel() {
                    clearTimeout(timeout);
                }
            };
        }
        function safeTimeout(method, time) {
            var interval = safeInterval(function() {
                time -= 100;
                if (time <= 0) {
                    interval.cancel();
                    method();
                }
            }, 100);
        }
    }, /*!*****************************************!*\
  !*** ./~/xcomponent/~/Base64/base64.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        (function() {
            var object = true ? exports : self;
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            function InvalidCharacterError(message) {
                this.message = message;
            }
            InvalidCharacterError.prototype = new Error();
            InvalidCharacterError.prototype.name = "InvalidCharacterError";
            object.btoa || (object.btoa = function(input) {
                var str = String(input);
                for (var block, charCode, idx = 0, map = chars, output = ""; str.charAt(idx | 0) || (map = "=", 
                idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                    charCode = str.charCodeAt(idx += 3 / 4);
                    if (charCode > 255) {
                        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    }
                    block = block << 8 | charCode;
                }
                return output;
            });
            object.atob || (object.atob = function(input) {
                var str = String(input).replace(/=+$/, "");
                if (str.length % 4 == 1) {
                    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
                }
                for (var bc = 0, bs, buffer, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, 
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
                    buffer = chars.indexOf(buffer);
                }
                return output;
            });
        })();
    }, /*!*****************************************!*\
  !*** ./~/xcomponent/src/lib/promise.js ***!
  \*****************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.denodeify = denodeify;
        exports.promisify = promisify;
        exports.getter = getter;
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        function denodeify(method) {
            return function() {
                var self = this;
                var args = Array.prototype.slice.call(arguments);
                if (args.length >= method.length) {
                    return _promise.SyncPromise.resolve(method.apply(self, args));
                }
                return new _promise.SyncPromise(function(resolve, reject) {
                    args.push(function(err, result) {
                        if (err && !(err instanceof Error)) {
                            throw new Error("Passed non-Error object in callback: [ " + err + " ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).");
                        }
                        return err ? reject(err) : resolve(result);
                    });
                    return method.apply(self, args);
                });
            };
        }
        function promisify(method) {
            var prom = _promise.SyncPromise.resolve();
            return function() {
                var _this = this, _arguments = arguments;
                return prom.then(function() {
                    return method.apply(_this, _arguments);
                });
            };
        }
        function getter(method) {
            return function() {
                var _this2 = this;
                return new _promise.SyncPromise(function(resolve, reject) {
                    var result = method.call(_this2, resolve, reject);
                    if (result && result.then instanceof Function) {
                        return result.then(resolve, reject);
                    }
                    if (result !== undefined) {
                        return resolve(result);
                    }
                });
            };
        }
    }, /*!**********************************************!*\
  !*** ./~/xcomponent/src/component/window.js ***!
  \**********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getParentComponentWindow = exports.getParentWindow = exports.isXComponentWindow = exports.parseWindowName = undefined;
        exports.buildChildWindowName = buildChildWindowName;
        exports.getPosition = getPosition;
        var _lib = __webpack_require__(/*! ../lib */ 48);
        var _constants = __webpack_require__(/*! ../constants */ 55);
        function buildChildWindowName(prefix) {
            var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            props.id = (0, _lib.uniqueID)();
            var name = (0, _lib.b64encode)(JSON.stringify(props));
            return _constants.XCOMPONENT + "_" + prefix.replace(/_/g, "") + "_" + name;
        }
        var parseWindowName = exports.parseWindowName = (0, _lib.memoize)(function(name) {
            var winProps = void 0;
            if (!name) {
                return;
            }
            var segments = name.split("_");
            var props = segments.slice(2).join("_");
            if (segments[0] !== _constants.XCOMPONENT) {
                return;
            }
            try {
                winProps = JSON.parse((0, _lib.b64decode)(props));
            } catch (err) {
                return;
            }
            if (!winProps) {
                return;
            }
            return winProps;
        });
        var isXComponentWindow = exports.isXComponentWindow = (0, _lib.memoize)(function(name) {
            return Boolean(parseWindowName(name));
        });
        var getParentWindow = exports.getParentWindow = (0, _lib.memoize)(function() {
            var win = void 0;
            if (window.opener) {
                win = window.opener;
            } else if (window.parent && window.parent !== window) {
                win = window.parent;
            } else {
                throw new Error("Can not find parent window");
            }
            var winProps = parseWindowName(window.name);
            if (!winProps) {
                throw new Error("Window has not been rendered by xcomponent");
            }
            if (!win.parent || win.parent === win) {
                return win;
            }
            if (winProps.sibling && win.parent.frames && win.parent.frames[winProps.parent] === win) {
                return win.parent;
            }
            return win;
        });
        var getParentComponentWindow = exports.getParentComponentWindow = (0, _lib.memoize)(function() {
            var winProps = parseWindowName(window.name);
            if (!winProps) {
                throw new Error("Window has not been rendered by xcomponent - can not attach here");
            }
            var parentWindow = getParentWindow();
            if (winProps.sibling) {
                return parentWindow.frames[winProps.parent];
            }
            return parentWindow;
        });
        function getPosition(options) {
            var left = void 0;
            var top = void 0;
            var width = options.width;
            var height = options.height;
            if (window.outerWidth) {
                left = Math.round((window.outerWidth - width) / 2) + window.screenX;
                top = Math.round((window.outerHeight - height) / 2) + window.screenY;
            } else if (window.screen.width) {
                left = Math.round((window.screen.width - width) / 2);
                top = Math.round((window.screen.height - height) / 2);
            }
            return {
                x: left,
                y: top
            };
        }
    }, /*!***************************************!*\
  !*** ./~/xcomponent/src/constants.js ***!
  \***************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PROP_DEFER_TO_URL = exports.MAX_Z_INDEX = exports.CONTEXT_TYPES_LIST = exports.CLOSE_REASONS = exports.EVENT_NAMES = exports.CLASS_NAMES = exports.CONTEXT_TYPES = exports.PROP_TYPES_LIST = exports.PROP_TYPES = exports.POST_MESSAGE = exports.XCOMPONENT = undefined;
        var _lib = __webpack_require__(/*! ./lib */ 48);
        var XCOMPONENT = exports.XCOMPONENT = "xcomponent";
        var POST_MESSAGE = exports.POST_MESSAGE = {
            INIT: XCOMPONENT + "_init",
            PROPS: XCOMPONENT + "_props",
            PROP_CALLBACK: XCOMPONENT + "_prop_callback",
            CLOSE: XCOMPONENT + "_close",
            REDIRECT: XCOMPONENT + "_redirect",
            RESIZE: XCOMPONENT + "_resize",
            RENDER: XCOMPONENT + "_render",
            ERROR: XCOMPONENT + "_error",
            HIDE: XCOMPONENT + "_hide"
        };
        var PROP_TYPES = exports.PROP_TYPES = {
            STRING: "string",
            OBJECT: "object",
            FUNCTION: "function",
            BOOLEAN: "boolean",
            NUMBER: "number"
        };
        var PROP_TYPES_LIST = exports.PROP_TYPES_LIST = (0, _lib.values)(PROP_TYPES);
        var CONTEXT_TYPES = exports.CONTEXT_TYPES = {
            IFRAME: "iframe",
            LIGHTBOX: "lightbox",
            POPUP: "popup"
        };
        var CLASS_NAMES = exports.CLASS_NAMES = {
            XCOMPONENT: "" + XCOMPONENT,
            COMPONENT: XCOMPONENT + "-component",
            CLOSE: XCOMPONENT + "-close",
            FOCUS: XCOMPONENT + "-focus",
            ELEMENT: XCOMPONENT + "-element",
            IFRAME: XCOMPONENT + "-iframe",
            LIGHTBOX: XCOMPONENT + "-lightbox",
            POPUP: XCOMPONENT + "-popup",
            CLOSING: XCOMPONENT + "-closing"
        };
        var EVENT_NAMES = exports.EVENT_NAMES = {
            CLICK: "click"
        };
        var CLOSE_REASONS = exports.CLOSE_REASONS = {
            TEMPLATE_BUTTON: "template_button",
            PARENT_CALL: "parent_call",
            CHILD_CALL: "child_call",
            AUTOCLOSE: "autoclose",
            CLOSE_DETECTED: "close_detected",
            PARENT_CLOSE_DETECTED: "parent_close_detected"
        };
        var CONTEXT_TYPES_LIST = exports.CONTEXT_TYPES_LIST = (0, _lib.values)(CONTEXT_TYPES);
        var MAX_Z_INDEX = exports.MAX_Z_INDEX = 2147483647;
        var PROP_DEFER_TO_URL = exports.PROP_DEFER_TO_URL = "xcomponent_prop_defer_to_url";
    }, /*!*********************************************!*\
  !*** ./~/xcomponent/src/component/props.js ***!
  \*********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.normalizeProp = normalizeProp;
        exports.normalizeProps = normalizeProps;
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _lib = __webpack_require__(/*! ../lib */ 48);
        var _constants = __webpack_require__(/*! ../constants */ 55);
        function normalizeProp(component, instance, props, key) {
            var prop = component.props[key];
            var value = props[key];
            var hasProp = props.hasOwnProperty(key) && value !== null && value !== undefined && value !== "";
            if (!hasProp && prop.def) {
                value = prop.def instanceof Function && prop.type !== "function" ? prop.def() : prop.def;
            }
            if (value === _constants.PROP_DEFER_TO_URL) {} else if (prop.type === "boolean") {
                value = Boolean(value);
            } else if (prop.type === "function") {
                if (!value) {
                    if (!value && prop.noop) {
                        value = _lib.noop;
                        if (prop.denodeify) {
                            value = (0, _lib.denodeify)(value);
                        }
                        if (prop.promisify) {
                            value = (0, _lib.promisify)(value);
                        }
                    }
                } else {
                    (function() {
                        value = value.bind(instance);
                        if (prop.denodeify) {
                            value = (0, _lib.denodeify)(value);
                        }
                        if (prop.promisify) {
                            value = (0, _lib.promisify)(value);
                        }
                        var original = value;
                        value = function value() {
                            component.log("call_prop_" + key);
                            return original.apply(this, arguments);
                        };
                        if (prop.once) {
                            value = (0, _lib.once)(value);
                        }
                        if (prop.memoize) {
                            value = (0, _lib.memoize)(value);
                        }
                    })();
                }
            } else if (prop.type === "string") {
                value = value || "";
            } else if (prop.type === "object") {} else if (prop.type === "number") {
                value = parseInt(value || 0, 10);
            }
            if (prop.getter && value !== _constants.PROP_DEFER_TO_URL) {
                if (value instanceof Function) {
                    value = (0, _lib.getter)(value.bind(instance));
                } else {
                    (function() {
                        var val = value;
                        value = function value() {
                            return _promise.SyncPromise.resolve(val);
                        };
                    })();
                }
                value = (0, _lib.memoize)(value);
            }
            return value;
        }
        function normalizeProps(component, instance, props) {
            props = props || {};
            var result = {};
            for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                result[key] = normalizeProp(component, instance, props, key);
            }
            return result;
        }
    }, /*!***************************************************!*\
  !*** ./~/xcomponent/src/component/child/props.js ***!
  \***************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.normalizeChildProps = normalizeChildProps;
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _lib = __webpack_require__(/*! ../../lib */ 48);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        function normalizeChildProps(component, props) {
            var result = {};
            for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                var prop = component.props[key];
                var value = props[key];
                if (value === _constants.PROP_DEFER_TO_URL) {
                    var queryParam = key;
                    if (typeof prop.queryParam === "string") {
                        queryParam = prop.queryParam;
                    }
                    value = (0, _lib.getUrlParam)(queryParam);
                    if (prop.getter) {
                        (function() {
                            var val = _promise.SyncPromise.resolve(value);
                            value = function value() {
                                return val;
                            };
                        })();
                    }
                }
                result[key] = value;
            }
            return result;
        }
    }, /*!****************************************************!*\
  !*** ./~/xcomponent/src/component/parent/index.js ***!
  \****************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ParentComponent = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _client = __webpack_require__(/*! beaver-logger/client */ 36);
        var _client2 = _interopRequireDefault(_client);
        var _src = __webpack_require__(/*! post-robot/src */ 6);
        var _src2 = _interopRequireDefault(_src);
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _base = __webpack_require__(/*! ../base */ 47);
        var _window = __webpack_require__(/*! ../window */ 54);
        var _lib = __webpack_require__(/*! ../../lib */ 48);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        var _drivers = __webpack_require__(/*! ./drivers */ 59);
        var _validate = __webpack_require__(/*! ./validate */ 60);
        var _props = __webpack_require__(/*! ./props */ 61);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var activeComponents = [];
        var ParentComponent = exports.ParentComponent = function(_BaseComponent) {
            _inherits(ParentComponent, _BaseComponent);
            function ParentComponent(component) {
                var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                _classCallCheck(this, ParentComponent);
                var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParentComponent).call(this, component, options));
                (0, _validate.validate)(component, options);
                _this.component = component;
                _this.id = (0, _lib.uniqueID)();
                if (component.singleton && activeComponents.some(function(comp) {
                    return comp.component === component;
                })) {
                    throw new Error(component.tag + " is a singleton, and an only be instantiated once");
                }
                activeComponents.push(_this);
                _this.registerForCleanup(function() {
                    activeComponents.splice(activeComponents.indexOf(_this), 1);
                });
                _this.childWindowName = options.childWindowName || (0, _window.buildChildWindowName)(_this.component.name, {
                    tag: _this.component.tag,
                    parent: window.name
                });
                _this.setProps(options.props || {});
                _this.component.log("construct_parent");
                _this.onInit = new _promise.SyncPromise();
                return _this;
            }
            _createClass(ParentComponent, [ {
                key: "setProps",
                value: function setProps(props) {
                    (0, _validate.validateProps)(this.component, props);
                    this.props = (0, _props.normalizeParentProps)(this.component, this, props);
                }
            }, {
                key: "buildUrl",
                value: function buildUrl() {
                    var _this2 = this;
                    return (0, _props.propsToQuery)(this.component.props, this.props).then(function(queryString) {
                        var url = void 0;
                        if (_this2.props.url) {
                            url = _this2.props.url;
                        } else if (_this2.props.env) {
                            url = _this2.component.envUrls[_this2.props.env];
                        } else {
                            url = _this2.component.url;
                        }
                        if (queryString) {
                            var base = void 0;
                            var query = void 0;
                            var hash = void 0;
                            var _url$split = url.split("#");
                            var _url$split2 = _slicedToArray(_url$split, 2);
                            base = _url$split2[0];
                            hash = _url$split2[1];
                            var _base$split = base.split("?");
                            var _base$split2 = _slicedToArray(_base$split, 2);
                            base = _base$split2[0];
                            query = _base$split2[1];
                            if (query) {
                                query = query + "&" + queryString;
                            } else {
                                query = queryString;
                            }
                            url = base;
                            if (query) {
                                url = url + "?" + query;
                            }
                            if (hash) {
                                url = url + "#" + hash;
                            }
                            return url;
                        }
                        return url;
                    });
                }
            }, {
                key: "updateProps",
                value: function updateProps(props) {
                    var _this3 = this;
                    return _promise.SyncPromise.resolve().then(function() {
                        var oldProps = (0, _lib.stringifyWithFunctions)(_this3.props);
                        _this3.setProps(_extends({}, _this3.props, props));
                        if (!_this3.initialPropsSent) {
                            return;
                        }
                        return _this3.onInit.then(function() {
                            if (oldProps !== (0, _lib.stringifyWithFunctions)(_this3.props)) {
                                _this3.component.log("parent_update_props");
                                return _this3.childExports.updateProps(_this3.props);
                            }
                        });
                    });
                }
            }, {
                key: "getRenderContext",
                value: function getRenderContext(el, context) {
                    if (el) {
                        if (context && context !== _constants.CONTEXT_TYPES.IFRAME) {
                            throw new Error("[" + this.component.tag + "] " + context + " context can not be rendered into element");
                        }
                        context = _constants.CONTEXT_TYPES.IFRAME;
                    }
                    if (context) {
                        if (!this.component.contexts[context]) {
                            throw new Error("[" + this.component.tag + "] " + context + " context not allowed by component");
                        }
                        return context;
                    }
                    if (this.component.defaultContext) {
                        return this.component.defaultContext;
                    }
                    var _arr = [ _constants.CONTEXT_TYPES.LIGHTBOX, _constants.CONTEXT_TYPES.POPUP ];
                    for (var _i = 0; _i < _arr.length; _i++) {
                        var renderContext = _arr[_i];
                        if (this.component.contexts[renderContext]) {
                            return renderContext;
                        }
                    }
                    throw new Error("[" + this.component.tag + "] No context options available for render");
                }
            }, {
                key: "validateRender",
                value: function validateRender(context) {
                    if (this.window && !this.preRendered) {
                        throw new Error("[" + this.component.tag + "] Can not render: component is already rendered");
                    }
                    if (context && !this.component.contexts[context]) {
                        throw new Error("Invalid context: " + context);
                    }
                }
            }, {
                key: "render",
                value: function render(element, context) {
                    var _this4 = this;
                    return _promise.SyncPromise.resolve().then(function() {
                        _this4.validateRender(context);
                        context = _this4.getRenderContext(element, context);
                        _this4.component.log("render_" + context, {
                            context: context,
                            element: element
                        });
                        if (_drivers.RENDER_DRIVERS[context].render) {
                            _drivers.RENDER_DRIVERS[context].render.call(_this4, element);
                        }
                        _this4.setForCleanup("context", context);
                        _this4.preRender(element, context);
                        _this4.listen(_this4.window);
                        _this4.watchForClose();
                        return _this4.buildUrl().then(function(url) {
                            _this4.loadUrl(context, url);
                            _this4.runTimeout();
                            return _this4.onInit;
                        });
                    })["catch"](function(err) {
                        _this4.destroy();
                        throw err;
                    });
                }
            }, {
                key: "open",
                value: function open(element, context) {
                    context = this.getRenderContext(element, context);
                    this.component.log("open_" + context, {
                        element: element,
                        windowName: this.childWindowName
                    });
                    _drivers.RENDER_DRIVERS[context].open.call(this, element);
                }
            }, {
                key: "preRender",
                value: function preRender(element, context) {
                    if (this.preRendered) {
                        return;
                    }
                    context = this.getRenderContext(element, context);
                    this.component.log("preRender_" + context, {
                        element: element,
                        windowName: this.childWindowName
                    });
                    this.setForCleanup("context", context);
                    this.createParentTemplate(context);
                    this.open(element, context);
                    this.watchForClose();
                    this.createComponentTemplate();
                    this.setForCleanup("preRendered", true);
                }
            }, {
                key: "renderToParent",
                value: function renderToParent(element, context) {
                    var _this5 = this;
                    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                    return _promise.SyncPromise.resolve().then(function() {
                        _this5.validateRender(context);
                        context = _this5.getRenderContext(element, context);
                        var parentWindow = (0, _lib.getParentWindow)();
                        if (!parentWindow) {
                            throw new Error("[" + _this5.component.tag + "] Can not render to parent - no parent exists");
                        }
                        if (!window.name) {
                            throw new Error("[" + _this5.component.tag + "] Can not render to parent - not in a child component window");
                        }
                        _this5.component.log("render_" + context + "_to_parent", {
                            element: element,
                            context: context
                        });
                        _this5.childWindowName = (0, _window.buildChildWindowName)(_this5.component.name, {
                            tag: _this5.component.tag,
                            parent: window.name,
                            sibling: 1
                        });
                        _this5.setForCleanup("context", context);
                        if (_drivers.RENDER_DRIVERS[context].renderToParent) {
                            _drivers.RENDER_DRIVERS[context].renderToParent.call(_this5, element);
                        }
                        return _src2["default"].sendToParent(_constants.POST_MESSAGE.RENDER, _extends({}, options, {
                            tag: _this5.component.tag,
                            context: context,
                            element: element,
                            options: {
                                renderedToParent: true,
                                childWindowName: _this5.childWindowName,
                                props: _this5.props
                            }
                        })).then(function(data) {
                            _this5.childExports = data.childExports;
                            _this5.close = data.close;
                            if (!_this5.window) {
                                _this5.setForCleanup("window", parentWindow.frames[_this5.childWindowName]);
                            }
                            return _this5;
                        });
                    });
                }
            }, {
                key: "watchForClose",
                value: function watchForClose() {
                    var _this6 = this;
                    var closeWindowListener = (0, _lib.onCloseWindow)(this.window, function() {
                        _this6.component.log("detect_close_child");
                        _this6.props.onClose(_constants.CLOSE_REASONS.CLOSE_DETECTED)["finally"](function() {
                            _this6.destroy();
                        });
                    });
                    var unloadListener = (0, _lib.addEventListener)(window, "beforeunload", function() {
                        _this6.component.log("navigate_away");
                        _client2["default"].flush();
                        if (_this6.context === _constants.CONTEXT_TYPES.POPUP) {
                            _this6.destroy();
                        }
                    });
                    this.registerForCleanup(function() {
                        closeWindowListener.cancel();
                        unloadListener.cancel();
                    });
                }
            }, {
                key: "loadUrl",
                value: function loadUrl(context, url) {
                    this.component.log("load_url");
                    _src2["default"].linkUrl(this.childWindowName, this.window, url);
                    return _drivers.RENDER_DRIVERS[context].loadUrl.call(this, url);
                }
            }, {
                key: "hijackButton",
                value: function hijackButton(button, element, context) {
                    var _this7 = this;
                    this.component.log("hijack_button", {
                        element: element
                    });
                    return new _promise.SyncPromise(function(resolve, reject) {
                        (0, _lib.hijackButton)(button, function(event, targetElement) {
                            context = _this7.getRenderContext(element, context);
                            if (_this7.window && !_this7.preRendered) {
                                event.preventDefault();
                                throw new Error("[" + _this7.component.tag + "] Component is already rendered");
                            }
                            _this7.renderHijack(targetElement, element, context).then(resolve, reject);
                        });
                    });
                }
            }, {
                key: "renderHijack",
                value: function renderHijack(targetElement, element, context) {
                    var _this8 = this;
                    return _promise.SyncPromise.resolve().then(function() {
                        context = _this8.getRenderContext(element, context);
                        _this8.component.log("render_hijack_" + context);
                        _this8.validateRender(context);
                        _this8.setForCleanup("context", context);
                        targetElement.target = _this8.childWindowName;
                        _this8.preRender(element, context);
                        _this8.listen(_this8.window);
                        _this8.runTimeout();
                        return _this8.onInit;
                    });
                }
            }, {
                key: "hijackSubmitParentForm",
                value: function hijackSubmitParentForm(element, context) {
                    context = this.getRenderContext(element, context);
                    this.component.log("hijack_submit_parent_form_" + context);
                    return this.renderToParent(element, context, {
                        hijackSubmitParentForm: true
                    });
                }
            }, {
                key: "runTimeout",
                value: function runTimeout() {
                    var _this9 = this;
                    if (this.props.timeout) {
                        setTimeout(function() {
                            var error = new Error("[" + _this9.component.tag + "] Loading component " + _this9.component.tag + " timed out after " + _this9.props.timeout + " milliseconds");
                            _this9.onInit.reject(error)["catch"](function(err) {
                                return _this9.props.onTimeout(err)["finally"](function() {
                                    _this9.component.log("timed_out", {
                                        timeout: _this9.props.timeout
                                    });
                                });
                            });
                        }, this.props.timeout);
                    }
                }
            }, {
                key: "listeners",
                value: function listeners() {
                    var _ref;
                    return _ref = {}, _defineProperty(_ref, _constants.POST_MESSAGE.INIT, function(source, data) {
                        var _this10 = this;
                        this.childExports = data.exports;
                        this.onInit.resolve(this);
                        return this.props.onEnter().then(function() {
                            _this10.setForCleanup("initialPropsSent", true);
                            return {
                                context: _this10.context,
                                props: _this10.props
                            };
                        });
                    }), _defineProperty(_ref, _constants.POST_MESSAGE.CLOSE, function(source, data) {
                        this.close(data.reason);
                    }), _defineProperty(_ref, _constants.POST_MESSAGE.RENDER, function(source, data) {
                        var _this11 = this;
                        var component = this.component.getByTag(data.tag);
                        var instance = component.parent(data.options);
                        this.registerForCleanup(function() {
                            instance.destroy();
                        });
                        return _promise.SyncPromise.resolve().then(function() {
                            if (data.hijackSubmitParentForm) {
                                var form = (0, _lib.getParentNode)(_this11.iframe, "form");
                                var promise = instance.renderHijack(form, data.element, data.context);
                                form.submit();
                                return promise;
                            } else {
                                return instance.render(data.element, data.context);
                            }
                        }).then(function() {
                            return {
                                childExports: instance.childExports,
                                close: function close(reason) {
                                    return instance.close(reason);
                                }
                            };
                        });
                    }), _defineProperty(_ref, _constants.POST_MESSAGE.RESIZE, function(source, data) {
                        if (this.context === _constants.CONTEXT_TYPES.POPUP) {
                            return;
                        }
                        return this.resize(data.width, data.height);
                    }), _defineProperty(_ref, _constants.POST_MESSAGE.HIDE, function(source, data) {
                        this.hide();
                    }), _defineProperty(_ref, _constants.POST_MESSAGE.ERROR, function(source, data) {
                        this.error(new Error(data.error));
                    }), _ref;
                }
            }, {
                key: "resize",
                value: function resize(width, height) {
                    this.component.log("resize", {
                        height: height,
                        width: width
                    });
                    return _drivers.RENDER_DRIVERS[this.context].resize.call(this, width, height);
                }
            }, {
                key: "restyle",
                value: function restyle() {
                    return _drivers.RENDER_DRIVERS[this.context].restyle.call(this);
                }
            }, {
                key: "hide",
                value: function hide() {
                    if (this.parentTemplate) {
                        this.parentTemplate.style.display = "none";
                    }
                    return _drivers.RENDER_DRIVERS[this.context].hide.call(this);
                }
            }, {
                key: "close",
                value: function close() {
                    var _this12 = this;
                    var reason = arguments.length <= 0 || arguments[0] === undefined ? _constants.CLOSE_REASONS.PARENT_CALL : arguments[0];
                    this.component.log("close");
                    if (this.parentTemplate) {
                        this.parentTemplate.className += " " + _constants.CLASS_NAMES.CLOSING;
                    }
                    return this.props.onClose(reason).then(function() {
                        return new _promise.SyncPromise(function(resolve) {
                            if (_this12.component.closeDelay && _this12.context !== _constants.CONTEXT_TYPES.POPUP) {
                                setTimeout(resolve, _this12.component.closeDelay);
                            } else {
                                resolve();
                            }
                        }).then(function() {
                            if (_this12.childExports && !(0, _lib.isWindowClosed)(_this12.window)) {
                                _this12.childExports.close()["catch"](_lib.noop);
                            }
                            _this12.destroy();
                        });
                    });
                }
            }, {
                key: "focus",
                value: function focus() {
                    this.component.log("focus");
                    if (this.window) {
                        this.window.focus();
                    }
                    return this;
                }
            }, {
                key: "createComponentTemplate",
                value: function createComponentTemplate() {
                    var html = (0, _lib.template)(this.component.componentTemplate, {
                        id: _constants.CLASS_NAMES.XCOMPONENT + "-" + this.id,
                        CLASS: _constants.CLASS_NAMES
                    });
                    try {
                        this.window.document.open();
                        this.window.document.write(html);
                        this.window.document.close();
                    } catch (err) {
                        try {
                            this.window.location = "javascript: document.open(); document.write(JSON.stringify(html)); document.close();";
                        } catch (err2) {}
                    }
                }
            }, {
                key: "createParentTemplate",
                value: function createParentTemplate(context) {
                    var _this13 = this;
                    if (!_drivers.RENDER_DRIVERS[context].parentTemplate) {
                        return;
                    }
                    this.parentTemplate = (0, _lib.createElement)("div", {
                        html: (0, _lib.template)(this.component.parentTemplate, {
                            id: _constants.CLASS_NAMES.XCOMPONENT + "-" + this.id,
                            CLASS: _constants.CLASS_NAMES
                        }),
                        attributes: {
                            id: _constants.CLASS_NAMES.XCOMPONENT + "-" + this.id
                        },
                        "class": [ _constants.CLASS_NAMES.XCOMPONENT, _constants.CLASS_NAMES.XCOMPONENT + "-" + this.context ],
                        style: {
                            zIndex: _constants.MAX_Z_INDEX - 1
                        }
                    }, document.body);
                    (0, _lib.addEventToClass)(this.parentTemplate, _constants.CLASS_NAMES.FOCUS, _constants.EVENT_NAMES.CLICK, function(event) {
                        return _this13.focus();
                    });
                    (0, _lib.addEventToClass)(this.parentTemplate, _constants.CLASS_NAMES.CLOSE, _constants.EVENT_NAMES.CLICK, function(event) {
                        return _this13.close(_constants.CLOSE_REASONS.TEMPLATE_BUTTON);
                    });
                    this.registerForCleanup(function() {
                        document.body.removeChild(_this13.parentTemplate);
                        delete _this13.parentTemplate;
                    });
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    if (this.hasCleanupTasks()) {
                        this.component.log("destroy");
                        this.cleanup();
                    }
                }
            }, {
                key: "error",
                value: function error(err) {
                    this.component.logError("error", {
                        error: err.stack || err.toString()
                    });
                    this.onInit.reject(err);
                    return this.props.onError(err);
                }
            } ]);
            return ParentComponent;
        }(_base.BaseComponent);
        var _loop = function _loop() {
            if (_isArray) {
                if (_i2 >= _iterator.length) return "break";
                _ref2 = _iterator[_i2++];
            } else {
                _i2 = _iterator.next();
                if (_i2.done) return "break";
                _ref2 = _i2.value;
            }
            var context = _ref2;
            var contextName = (0, _lib.capitalizeFirstLetter)(context);
            ParentComponent.prototype["render" + contextName] = function(element) {
                return this.render(element, context);
            };
            ParentComponent.prototype["render" + contextName + "ToParent"] = function(element) {
                return this.renderToParent(element, context);
            };
            ParentComponent.prototype["hijackButtonTo" + contextName] = function(button, element) {
                return this.hijackButton(button, element, context);
            };
        };
        for (var _iterator = _constants.CONTEXT_TYPES_LIST, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref2;
            var _ret = _loop();
            if (_ret === "break") break;
        }
    }, /*!******************************************************!*\
  !*** ./~/xcomponent/src/component/parent/drivers.js ***!
  \******************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.RENDER_DRIVERS = undefined;
        var _RENDER_DRIVERS;
        var _error = __webpack_require__(/*! ../../error */ 5);
        var _lib = __webpack_require__(/*! ../../lib */ 48);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        var _window = __webpack_require__(/*! ../window */ 54);
        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        }
        var RENDER_DRIVERS = exports.RENDER_DRIVERS = (_RENDER_DRIVERS = {}, _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.IFRAME, {
            parentTemplate: false,
            render: function render(element) {
                if (!element) {
                    throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
                }
            },
            open: function open(element) {
                var _this = this;
                if (!element) {
                    throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
                }
                this.iframe = (0, _lib.iframe)(element, null, {
                    name: this.childWindowName
                });
                var dimensions = this.component.dimensions || {};
                this.resize(dimensions.width, dimensions.height);
                this.restyle();
                this.window = this.iframe.contentWindow;
                this.registerForCleanup(function() {
                    _this.window.close();
                    delete _this.window;
                    if (_this.iframe) {
                        if (_this.iframe.parentNode) {
                            _this.iframe.parentNode.removeChild(_this.iframe);
                        }
                        delete _this.iframe;
                    }
                });
                return this;
            },
            resize: function resize(width, height) {
                this.iframe.style.width = width + "px";
                this.iframe.style.height = height + "px";
            },
            hide: function hide() {
                this.iframe.style.display = "none";
            },
            restyle: function restyle() {
                this.iframe.style.backgroundColor = "transparent";
            },
            renderToParent: function renderToParent(element) {
                if (!element) {
                    throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
                }
            },
            loadUrl: function loadUrl(url) {
                this.iframe.src = url;
            }
        }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.POPUP, {
            parentTemplate: true,
            open: function open() {
                var _this2 = this;
                var dimensions = this.component.dimensions || {};
                var pos = (0, _window.getPosition)({
                    x: dimensions.x,
                    y: dimensions.y,
                    width: dimensions.width,
                    height: dimensions.height
                });
                this.window = (0, _lib.popup)("", {
                    name: this.childWindowName,
                    width: dimensions.width,
                    height: dimensions.height,
                    top: pos.y,
                    left: pos.x
                });
                this.registerForCleanup(function() {
                    if (_this2.window) {
                        _this2.window.close();
                        delete _this2.window;
                    }
                });
                if ((0, _lib.isWindowClosed)(this.window)) {
                    var err = new _error.PopupOpenError("[" + this.component.tag + "] Can not open popup window - blocked");
                    throw err;
                }
                return this;
            },
            resize: function resize() {},
            hide: function hide() {
                throw new Error("Can not hide popup");
            },
            restyle: function restyle() {},
            renderToParent: function renderToParent() {
                this.open(null, _constants.CONTEXT_TYPES.POPUP);
                this.createComponentTemplate();
            },
            loadUrl: function loadUrl(url) {
                this.window.location = url;
            }
        }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.LIGHTBOX, {
            parentTemplate: true,
            open: function open() {
                var element = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || document.body;
                RENDER_DRIVERS[_constants.CONTEXT_TYPES.IFRAME].open.call(this, element);
                return this;
            },
            resize: function resize(width, height) {
                var container = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || this.iframe;
                container.style.zIndex = _constants.MAX_Z_INDEX;
                container.style.position = "fixed";
                if (width) {
                    this.parentTemplate.className += " set-width";
                    this.iframe.style.width = "100%";
                    container.style.width = width + "px";
                    container.style.left = "50%";
                    container.style.marginLeft = "-" + Math.floor(width / 2) + "px";
                } else {
                    this.parentTemplate.className += " max-width";
                    this.iframe.style.width = "100%";
                    container.style.width = "100%";
                    container.style.left = 0;
                    container.style.marginLeft = "0px";
                    container.width = "100%";
                }
                if (height) {
                    this.parentTemplate.className += " set-height";
                    this.iframe.style.height = "100%";
                    container.style.height = height + "px";
                    container.style.top = "50%";
                    container.style.marginTop = "-" + Math.floor(height / 2) + "px";
                } else {
                    this.parentTemplate.className += " max-height";
                    this.iframe.style.height = "100%";
                    container.style.height = "100%";
                    container.style.top = 0;
                    container.style.marginTop = "0px";
                    container.height = "100%";
                }
            },
            hide: function hide() {
                this.iframe.style.display = "none";
            },
            restyle: function restyle() {},
            loadUrl: function loadUrl(url) {
                this.iframe.src = url;
            }
        }), _RENDER_DRIVERS);
    }, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/parent/validate.js ***!
  \*******************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.validateProp = validateProp;
        exports.validateProps = validateProps;
        exports.validate = validate;
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        function validateProp(prop, key, value) {
            var hasProp = value !== null && value !== undefined && value !== "";
            if (!hasProp) {
                if (prop.required !== false && !prop.hasOwnProperty("def")) {
                    throw new Error("Prop is required: " + key);
                }
                return;
            }
            if (value === _constants.PROP_DEFER_TO_URL) {
                return;
            }
            if (prop.type === "function") {
                if (!(value instanceof Function)) {
                    throw new Error("Prop is not of type function: " + key);
                }
            } else if (prop.type === "string") {
                if (typeof value !== "string") {
                    if (!(prop.getter && value instanceof Function)) {
                        throw new Error("Prop is not of type string: " + key);
                    }
                }
            } else if (prop.type === "object") {
                try {
                    JSON.stringify(value);
                } catch (err) {
                    throw new Error("Unable to serialize prop: " + key);
                }
            } else if (prop.type === "number") {
                if (isNaN(parseInt(value, 10))) {
                    throw new Error("Prop is not a number: " + key);
                }
            }
        }
        function validateProps(component, props) {
            props = props || {};
            for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                if (!component.props.hasOwnProperty(key)) {
                    throw new Error("[" + component.tag + "] Invalid prop: " + key);
                }
            }
            for (var _iterator2 = Object.keys(component.props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var _key = _ref2;
                var prop = component.props[_key];
                var value = props[_key];
                validateProp(prop, _key, value);
            }
        }
        function validate(component, options) {
            var props = options.props || {};
            if (props.env && !component.envUrls[props.env]) {
                throw new Error("Invalid env: " + props.env);
            }
        }
    }, /*!****************************************************!*\
  !*** ./~/xcomponent/src/component/parent/props.js ***!
  \****************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.propsToQuery = propsToQuery;
        exports.normalizeParentProps = normalizeParentProps;
        var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 16);
        var _validate = __webpack_require__(/*! ./validate */ 60);
        var _lib = __webpack_require__(/*! ../../lib */ 48);
        var _props = __webpack_require__(/*! ../props */ 56);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        function propsToQuery(propsDef, props) {
            var params = [];
            return _promise.SyncPromise.all(Object.keys(props).map(function(key) {
                var prop = propsDef[key];
                var queryParam = key;
                if (typeof prop.queryParam === "string") {
                    queryParam = prop.queryParam;
                }
                return _promise.SyncPromise.resolve().then(function() {
                    var value = props[key];
                    if (!value) {
                        return;
                    }
                    if (prop.queryParam === false) {
                        return;
                    }
                    if (value === _constants.PROP_DEFER_TO_URL) {
                        return;
                    }
                    if (prop.getter) {
                        return value.call().then(function(result) {
                            (0, _validate.validateProp)(prop, key, result);
                            return result;
                        });
                    }
                }).then(function(value) {
                    if (!value) {
                        return;
                    }
                    var result = void 0;
                    if (typeof value === "boolean") {
                        result = "1";
                    } else if (typeof value === "string") {
                        result = value.toString();
                    } else if (typeof value === "function") {
                        return;
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        result = JSON.stringify(value);
                    } else if (typeof value === "number") {
                        result = value.toString();
                    }
                    params.push((0, _lib.urlEncode)(queryParam) + "=" + (0, _lib.urlEncode)(result));
                });
            })).then(function() {
                return params.join("&");
            });
        }
        function normalizeParentProps(component, instance, props) {
            props = (0, _props.normalizeProps)(component, instance, props);
            var _loop = function _loop() {
                if (_isArray) {
                    if (_i >= _iterator.length) return "break";
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) return "break";
                    _ref = _i.value;
                }
                var key = _ref;
                var value = props[key];
                if (value) {
                    var prop = component.props[key];
                    if (prop.autoClose) {
                        props[key] = function() {
                            var _this = this, _arguments = arguments;
                            instance.component.log("autoclose", {
                                prop: key
                            });
                            return instance.close(_constants.CLOSE_REASONS.AUTOCLOSE).then(function() {
                                return value.apply(_this, _arguments);
                            });
                        };
                    }
                }
            };
            for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                var _ret = _loop();
                if (_ret === "break") break;
            }
            return props;
        }
    }, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/component/props.js ***!
  \*******************************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var internalProps = exports.internalProps = {
            url: {
                type: "string",
                required: false,
                queryParam: false
            },
            env: {
                type: "string",
                required: false
            },
            timeout: {
                type: "number",
                required: false,
                queryParam: false
            },
            onEnter: {
                type: "function",
                required: false,
                noop: true,
                promisify: true
            },
            onClose: {
                type: "function",
                required: false,
                noop: true,
                memoize: true,
                promisify: true
            },
            onTimeout: {
                type: "function",
                required: false,
                memoize: true,
                autoClose: true,
                promisify: true,
                def: function def(err) {
                    return this.props.onError(err);
                }
            },
            onError: {
                type: "function",
                required: false,
                autoClose: true,
                promisify: true,
                def: function def(err) {
                    console.error(err.message, "\n", err.stack || err.toString());
                },
                once: true
            }
        };
    }, /*!**********************************************************!*\
  !*** ./~/xcomponent/src/component/component/validate.js ***!
  \**********************************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.validate = validate;
        var _props = __webpack_require__(/*! ./props */ 62);
        var _constants = __webpack_require__(/*! ../../constants */ 55);
        function validateProps(options) {
            if (options.props && !(_typeof(options.props) === "object")) {
                throw new Error("[" + options.tag + "] Expected options.props to be an object");
            }
            if (options.props) {
                for (var _iterator = Object.keys(options.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var key = _ref;
                    var prop = options.props[key];
                    if (_props.internalProps.hasOwnProperty(key)) {
                        throw new Error("[" + options.tag + "] Reserved prop name: " + key);
                    }
                    if (!prop || !((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object")) {
                        throw new Error("[" + options.tag + "] Expected options.props." + key + " to be an object");
                    }
                    if (!prop.type) {
                        throw new Error("[" + options.tag + "] Expected prop.type");
                    }
                    if (_constants.PROP_TYPES_LIST.indexOf(prop.type) === -1) {
                        throw new Error("[" + options.tag + "] Expected prop.type to be one of " + _constants.PROP_TYPES_LIST.join(", "));
                    }
                    if (prop.required && prop.def) {
                        throw new Error("[" + options.tag + "] Required prop can not have a default value");
                    }
                }
            }
        }
        function validate(options) {
            if (!options.tag || !options.tag.match(/^[a-z0-9-]+$/)) {
                throw new Error("Invalid options.tag: " + options.tag);
            }
            validateProps(options);
            if (options.contexts) {
                var anyEnabled = false;
                for (var _iterator2 = Object.keys(options.contexts), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var context = _ref2;
                    if (_constants.CONTEXT_TYPES_LIST.indexOf(context) === -1) {
                        throw new Error("[" + options.tag + "] Unsupported context type: " + context);
                    }
                    if (options.contexts[context] || options.contexts[context] === undefined) {
                        anyEnabled = true;
                    }
                }
                if (!anyEnabled) {
                    throw new Error("[" + options.tag + "] No context type is enabled");
                }
                if (options.contexts.iframe !== false) {
                    if (!options.dimensions || !options.dimensions.width || !options.dimensions.height) {
                        throw new Error("[" + options.tag + "] dimesions.width and dimensions.height required for rendering to iframe");
                    }
                }
            }
            if (options.defaultContext) {
                if (_constants.CONTEXT_TYPES_LIST.indexOf(options.defaultContext) === -1) {
                    throw new Error("[" + options.tag + "] Unsupported context type: " + options.defaultContext);
                }
                if (options.contexts && !options.contexts[options.defaultContext]) {
                    throw new Error("[" + options.tag + "] Disallowed default context type: " + options.defaultContext);
                }
            }
            if (options.envUrls) {
                for (var _iterator3 = Object.keys(options.envUrls), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                    var _ref3;
                    if (_isArray3) {
                        if (_i3 >= _iterator3.length) break;
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) break;
                        _ref3 = _i3.value;
                    }
                    var env = _ref3;
                    if (!options.envUrls[env]) {
                        throw new Error("[" + options.tag + "] No url specified for env: " + env);
                    }
                }
            }
            if (options.defaultEnv && !options.envUrls) {
                throw new Error("[" + options.tag + "] options.envUrls must be set if passing in a defaultEnv");
            }
            if (options.defaultEnv && !options.envUrls[options.defaultEnv]) {
                throw new Error("[" + options.tag + "] Invalid default env: " + options.defaultEnv);
            }
            if (!options.url || !(typeof options.url === "string")) {
                if (!options.defaultEnv || typeof options.defaultEnv !== "string") {
                    if (options.envUrls) {
                        throw new Error("[" + options.tag + "] Expected options.defaultEnv to be a string");
                    } else {
                        throw new Error("[" + options.tag + "] Expected options.url to be a string");
                    }
                }
            }
        }
    }, /*!*******************************************************************!*\
  !*** ./~/xcomponent/src/component/component/templates/parent.htm ***!
  \*******************************************************************/
    function(module, exports) {
        module.exports = '<div class="{CLASS.XCOMPONENT}-overlay {CLASS.FOCUS}">\n    <a href="#{CLASS.CLOSE}" class="{CLASS.CLOSE}"></a>\n\n    <div class="{CLASS.ELEMENT}"></div>\n</div>\n\n<style>\n    #{id} .{CLASS.XCOMPONENT}-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n\n    #{id}.{CLASS.POPUP} .{CLASS.XCOMPONENT}-overlay {\n        cursor: pointer;\n    }\n\n    #{id} .{CLASS.CLOSE} {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n    }\n\n    #{id} .{CLASS.CLOSE}:hover {\n        opacity: 1;\n    }\n\n    #{id} .{CLASS.CLOSE}:before, .{CLASS.CLOSE}:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 16px;\n        width: 2px;\n        background-color: white;\n    }\n\n    #{id} .{CLASS.CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #{id} .{CLASS.CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n</style>';
    }, /*!**********************************************************************!*\
  !*** ./~/xcomponent/src/component/component/templates/component.htm ***!
  \**********************************************************************/
    function(module, exports) {
        module.exports = "";
    }, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/index.js ***!
  \*******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _script = __webpack_require__(/*! ./script */ 67);
        Object.keys(_script).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _script[key];
                }
            });
        });
        var _react = __webpack_require__(/*! ./react */ 68);
        Object.keys(_react).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _react[key];
                }
            });
        });
        var _angular = __webpack_require__(/*! ./angular */ 69);
        Object.keys(_angular).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _angular[key];
                }
            });
        });
        var _ember = __webpack_require__(/*! ./ember */ 70);
        Object.keys(_ember).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _ember[key];
                }
            });
        });
    }, /*!********************************************!*\
  !*** ./~/xcomponent/src/drivers/script.js ***!
  \********************************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var htmlComponent = exports.htmlComponent = {
            isActive: function isActive() {
                return true;
            },
            register: function register(component) {
                function render(element) {
                    if (!element || !element.tagName || element.tagName.toLowerCase() !== "script") {
                        return;
                    }
                    if (!element.attributes.type || element.attributes.type.value !== "application/x-component") {
                        return;
                    }
                    if (!element.attributes["data-component"] || element.attributes["data-component"].value !== component.tag) {
                        return;
                    }
                    component.log("instantiate_script_component");
                    var props = void 0;
                    eval("props = " + element.innerText);
                    var container = document.createElement("div");
                    element.parentNode.replaceChild(container, element);
                    component.init(props).render(container);
                }
                function scan() {
                    var scriptTags = Array.prototype.slice.call(document.getElementsByTagName("script"));
                    for (var _iterator = scriptTags, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var element = _ref;
                        render(element);
                    }
                }
                scan();
                document.addEventListener("DOMContentLoaded", scan);
                window.addEventListener("load", scan);
                document.addEventListener("DOMNodeInserted", function(event) {
                    render(event.target);
                });
            }
        };
    }, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/react.js ***!
  \*******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.react = undefined;
        var _lib = __webpack_require__(/*! ../lib */ 48);
        var react = exports.react = {
            isActive: function isActive() {
                return Boolean(window.React);
            },
            register: function register(component) {
                component.react = window.React.createClass({
                    render: function render() {
                        return window.React.createElement("div", null);
                    },
                    componentDidMount: function componentDidMount() {
                        component.log("instantiate_react_component");
                        var parent = component.init((0, _lib.extend)({}, this.props));
                        this.setState({
                            parent: parent
                        });
                        parent.renderIframe(window.ReactDOM.findDOMNode(this));
                    },
                    componentDidUpdate: function componentDidUpdate() {
                        if (this.state && this.state.parent) {
                            this.state.parent.updateProps((0, _lib.extend)({}, this.props));
                        }
                    }
                });
            }
        };
    }, /*!*********************************************!*\
  !*** ./~/xcomponent/src/drivers/angular.js ***!
  \*********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.angular = undefined;
        var _lib = __webpack_require__(/*! ../lib */ 48);
        var angular = exports.angular = {
            isActive: function isActive() {
                return Boolean(window.angular);
            },
            register: function register(component) {
                var register = (0, _lib.once)(function(moduleName) {
                    window.angular.module(moduleName).directive((0, _lib.dasherizeToCamel)(component.tag), function() {
                        var scope = {};
                        for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var key = _ref;
                            var prop = component.props[key];
                            if (prop.type === "function" || prop.type === "object") {
                                scope[key] = "=";
                            } else if (prop.type === "string" || prop.type === "boolean" || prop.type === "number") {
                                scope[key] = "@";
                            } else {
                                throw new Error("Unrecognized prop type: " + prop.type);
                            }
                        }
                        return {
                            scope: scope,
                            controller: function controller($scope, $element) {
                                component.log("instantiate_angular_component");
                                function getProps() {
                                    var instanceProps = {};
                                    for (var _iterator2 = Object.keys(scope), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                                        var _ref2;
                                        if (_isArray2) {
                                            if (_i2 >= _iterator2.length) break;
                                            _ref2 = _iterator2[_i2++];
                                        } else {
                                            _i2 = _iterator2.next();
                                            if (_i2.done) break;
                                            _ref2 = _i2.value;
                                        }
                                        var key = _ref2;
                                        instanceProps[key] = $scope[key];
                                    }
                                    return instanceProps;
                                }
                                var parent = component.init(getProps());
                                parent.render($element[0]);
                                $scope.$watch(function() {
                                    parent.updateProps(getProps());
                                });
                            }
                        };
                    });
                });
                var bootstrap = window.angular.bootstrap;
                window.angular.bootstrap = function(el, modules) {
                    register(modules[0]);
                    return bootstrap.apply(this, arguments);
                };
                var module = window.angular.module;
                window.angular.module = function(moduleName) {
                    var result = module.apply(this, arguments);
                    register(moduleName);
                    return result;
                };
            }
        };
    }, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/ember.js ***!
  \*******************************************/
    function(module, exports) {
        "use strict";
    }, /*!******************************************!*\
  !*** ./src/components/checkout/index.js ***!
  \******************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _component = __webpack_require__(/*! ./component */ 72);
        Object.keys(_component).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _component[key];
                }
            });
        });
    }, /*!**********************************************!*\
  !*** ./src/components/checkout/component.js ***!
  \**********************************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PayPalCheckout = undefined;
        var _src = __webpack_require__(/*! xcomponent/src */ 4);
        var _src2 = _interopRequireDefault(_src);
        var _parentTemplate = __webpack_require__(/*! ./parentTemplate.htm */ 73);
        var _parentTemplate2 = _interopRequireDefault(_parentTemplate);
        var _componentTemplate = __webpack_require__(/*! ./componentTemplate.htm */ 74);
        var _componentTemplate2 = _interopRequireDefault(_componentTemplate);
        var _lib = __webpack_require__(/*! ../../lib */ 75);
        var _config = __webpack_require__(/*! ../../config */ 77);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var PayPalCheckout = exports.PayPalCheckout = _src2["default"].create({
            tag: "paypal-checkout",
            name: "ppxo",
            get defaultEnv() {
                return _config.config.env || "production";
            },
            envUrls: {
                local: "http://localhost.paypal.com:8000/webapps/hermes",
                sandbox: "https://www.sandbox.paypal.com/checkoutnow",
                production: "https://www.paypal.com/checkoutnow",
                demo: "./checkout.htm"
            },
            contexts: {
                iframe: false,
                lightbox: false,
                popup: true
            },
            parentTemplate: _parentTemplate2["default"],
            componentTemplate: _componentTemplate2["default"],
            autoResize: false,
            closeDelay: 1e3,
            props: {
                init: {
                    type: "function",
                    required: false,
                    once: true
                },
                paymentToken: {
                    type: "string",
                    required: true,
                    getter: true,
                    queryParam: "token"
                },
                onPaymentAuthorize: {
                    type: "function",
                    required: false,
                    once: true,
                    autoClose: true
                },
                onPaymentComplete: {
                    type: "function",
                    required: false,
                    once: true,
                    autoClose: true
                },
                onPaymentCancel: {
                    type: "function",
                    required: false,
                    once: true,
                    autoClose: true
                }
            },
            dimensions: (0, _lib.isDevice)() ? null : {
                width: 450,
                height: 535
            }
        });
    }, /*!****************************************************!*\
  !*** ./src/components/checkout/parentTemplate.htm ***!
  \****************************************************/
    function(module, exports) {
        module.exports = '\n<div class="paypal-checkout-overlay {CLASS.FOCUS}">\n    <a href="#{CLASS.CLOSE}" class="{CLASS.CLOSE}"></a>\n    <div class="paypal-checkout-modal">\n        <div class="paypal-checkout-logo"></div>\n        <div class="paypal-checkout-message" >\n            Don\'t see the secure PayPal browser? We\'ll help you re-launch the window to complete your purchase.\n        </div>\n        <div class="paypal-checkout-continue">\n            <a href="#{CLASS.CLOSE}" class="{CLASS.FOCUS}">Continue</a>\n        </div>\n    </div>\n\n    <div class="{CLASS.ELEMENT} paypal-checkout-lightbox-wrapper"></div>\n</div>\n\n<style>\n\n    #{id} .paypal-checkout-overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.8);\n\n        -webkit-animation-duration: 0.5s;\n        animation-duration: 0.5s;\n        -webkit-animation-name: fadeIn;\n        animation-name: fadeIn;\n    }\n\n    #{id}.{CLASS.CLOSING} .paypal-checkout-overlay {\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-name: fadeOut;\n        animation-name: fadeOut;\n    }\n\n    #{id}.{CLASS.POPUP} .paypal-checkout-overlay {\n        cursor: pointer;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal {\n        font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n        font-size: 14px;\n        text-align: center;\n        color: #fff;\n        z-index: 1000000002;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 350px;\n        top: 50%;\n        left: 50%;\n        position: fixed;\n        margin-left: -165px;\n        margin-top: -80px;\n        cursor: pointer;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {\n        background: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite.png") no-repeat -18px -16px;\n        width: 132px;\n        height: 36px;\n        cursor: pointer;\n        margin: 26px 0 0 109px;\n        margin-bottom: 30px;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-message {\n        font-size: 15px;\n        line-height: 1.35;\n        padding: 25px 0;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .paypal-checkout-modal {\n        display: none;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.max-width.max-height .{CLASS.CLOSE} {\n        display: none;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-continue {\n        font-size: 15px;\n        line-height: 1.35;\n        padding: 10px 0;\n    }\n\n    #{id} .{CLASS.CLOSE} {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n    }\n\n    #{id} .{CLASS.CLOSE}:hover {\n        opacity: 1;\n    }\n\n    #{id} .{CLASS.CLOSE}:before, .{CLASS.CLOSE}:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 16px;\n        width: 2px;\n        background-color: white;\n    }\n\n    #{id} .{CLASS.CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #{id} .{CLASS.CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n\n    #{id} a {\n        color: white;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.set-width.set-height .paypal-checkout-lightbox-wrapper {\n        padding: 5px;\n        border-radius: 10px;\n    }\n\n    #{id} .paypal-checkout-lightbox-wrapper {\n        display: none;\n        background-color: white;\n\n        -webkit-transition: all 0.6s ease;\n        -moz-transition: all 0.6s ease;\n        -ms-transition: all 0.6s ease;\n        -o-transition: all 0.6 ease;\n        transition: all 0.6s ease;\n\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-fill-mode: both;\n        animation-fill-mode: both;\n\n        -webkit-animation-name: bounceInUp;\n        animation-name: bounceInUp;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.{CLASS.CLOSING} .paypal-checkout-lightbox-wrapper {\n\n        -webkit-animation-name: bounceOutDown;\n        animation-name: bounceOutDown;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .paypal-checkout-lightbox-wrapper {\n        display: block;\n    }\n\n\n\n    /*!\n     * animate.css -http://daneden.me/animate\n     * Version - 3.5.1\n     * Licensed under the MIT license - http://opensource.org/licenses/MIT\n     *\n     * Copyright (c) 2016 Daniel Eden\n     */\n\n    @-webkit-keyframes bounceInUp {\n        from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n        }\n\n        from {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n        }\n\n        60% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        75% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        90% {\n            -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n        }\n\n        to {\n            -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n    }\n\n    @keyframes bounceInUp {\n        from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n        }\n\n        from {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n        }\n\n        60% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        75% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        90% {\n            -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n        }\n\n        to {\n            -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n    }\n\n    @-webkit-keyframes bounceOutDown {\n        20% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        40%, 45% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        to {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n        }\n    }\n\n    @keyframes bounceOutDown {\n        20% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        40%, 45% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        to {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n        }\n    }\n\n    @-webkit-keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @-webkit-keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        50% {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        50% {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n</style>\n';
    }, /*!*******************************************************!*\
  !*** ./src/components/checkout/componentTemplate.htm ***!
  \*******************************************************/
    function(module, exports) {
        module.exports = '<style>\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .loading #main {\n        opacity: .1\n    }\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n    .spinner .spinWrap {\n        width: 200px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        height: 48px;\n        margin-top: -24px\n    }\n    .framed .spinner {\n        position: fixed\n    }\n    .framed .spinner .spinWrap {\n        position: fixed;\n        top: 50%;\n        height: 75px;\n        margin-top: -37.5px\n    }\n    .spinner .loader {\n        height: 30px;\n        width: 30px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        margin: 0 0 0 -23px;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        background-color: rgba(255, 255, 255, .701961);\n        -webkit-animation: rotation .7s infinite linear;\n        -moz-animation: rotation .7s infinite linear;\n        -o-animation: rotation .7s infinite linear;\n        animation: rotation .7s infinite linear;\n        border-left: 8px solid rgba(0, 0, 0, .2);\n        border-right: 8px solid rgba(0, 0, 0, .2);\n        border-bottom: 8px solid rgba(0, 0, 0, .2);\n        border-top: 8px solid #2180c0;\n        border-radius: 100%\n    }\n    .spinner .loadingMessage {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 100%;\n        margin-top: 55px;\n        text-align: center;\n        z-index: 100;\n        outline: 0\n    }\n    .spinner .loadingSubHeading {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 150%;\n        margin-top: 10px;\n        margin-left: -42px;\n        text-align: center;\n        z-index: 100;\n        outline: 0\n    }\n    @-webkit-keyframes rotation {\n        from {\n            -webkit-transform: rotate(0deg)\n        }\n        to {\n            -webkit-transform: rotate(359deg)\n        }\n    }\n    @-moz-keyframes rotation {\n        from {\n            -moz-transform: rotate(0deg)\n        }\n        to {\n            -moz-transform: rotate(359deg)\n        }\n    }\n    @-o-keyframes rotation {\n        from {\n            -o-transform: rotate(0deg)\n        }\n        to {\n            -o-transform: rotate(359deg)\n        }\n    }\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n</style>\n\n<div id="preloaderSpinner" class="preloader spinner">\n    <div class="spinWrap">\n        <p class="loader"></p>\n        <p class="loadingMessage" id="spinnerMessage"></p>\n        <p class="loadingSubHeading" id="spinnerSubHeading"></p>\n    </div>\n</div>\n';
    }, /*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _device = __webpack_require__(/*! ./device */ 76);
        Object.keys(_device).forEach(function(key) {
            if (key === "default") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _device[key];
                }
            });
        });
    }, /*!***************************!*\
  !*** ./src/lib/device.js ***!
  \***************************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isDevice = isDevice;
        exports.isWebView = isWebView;
        exports.getAgent = getAgent;
        function isDevice() {
            var userAgent = window.navigator.userAgent;
            if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
                return true;
            }
            return false;
        }
        function isWebView() {
            var userAgent = window.navigator.userAgent;
            return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
        }
        function getAgent(agent) {
            var ua = window.navigator.userAgent;
            var tem = void 0;
            var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return [ "IE", tem[1] || "" ];
            }
            if (M[1] === "Chrome") {
                tem = ua.match(/\bOPR\/(\d+)/);
                if (tem !== null) {
                    return [ "Opera", tem[1] ];
                }
            }
            M = M[2] ? [ M[1], M[2] ] : [ window.navigator.appName, window.navigator.appVersion, "-?" ];
            if ((tem = ua.match(/version\/(\d+(\.\d{1,2}))/i)) !== null) {
                M.splice(1, 1, tem[1]);
            }
            return M;
        }
    }, /*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var config = exports.config = {
            env: "production",
            locale: {
                country: "US",
                lang: "en"
            },
            enableBridge: true,
            bridgeUrls: {
                local: "http://localhost.paypal.com:8000/webapps/hermes/component-meta",
                sandbox: "https://www.sandbox.paypal.com/webapps/hermes/component-meta",
                production: "https://www.paypal.com/webapps/hermes/component-meta",
                demo: "./checkout.htm"
            }
        };
    }, /*!*****************************!*\
  !*** ./src/legacy/index.js ***!
  \*****************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _components = __webpack_require__(/*! ../components */ 1);
        var _src = __webpack_require__(/*! xcomponent/src */ 4);
        var _src2 = _interopRequireDefault(_src);
        var _eligibility = __webpack_require__(/*! ./eligibility */ 79);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        var PROD_BASE_URL = "https://www.paypal.com/checkoutnow";
        var env = "production";
        function redirect(url) {
            window.location = url;
        }
        function matchToken(token) {
            return token && token.match(/^(EC-)?[A-Z0-9]{17}$/);
        }
        function parseToken(token) {
            if (!token) {
                return;
            }
            if (token.match(/^(EC-)?[A-Z0-9]{17}$/)) {
                return token;
            }
            var match = token.match(/token=((EC-)?[A-Z0-9]{17})/);
            if (match) {
                return match[1];
            }
        }
        function getFullpageRedirectUrl(token) {
            var baseUrl = env && _components.PayPalCheckout.envUrls[env] || PROD_BASE_URL;
            var url = matchToken(token) ? baseUrl + "?token=" + token : token;
            return url;
        }
        function getPaymentToken(resolve, reject) {
            var _this = this;
            function reset() {
                window.paypal.checkout.initXO = initXO;
                window.paypal.checkout.startFlow = startFlow;
                window.paypal.checkout.closeFlow = closeFlow;
            }
            window.paypal.checkout.initXO = function() {};
            window.paypal.checkout.startFlow = function(token) {
                reset();
                var ecToken = parseToken(token);
                if (!ecToken) {
                    throw new Error('Expected "' + token + '" passed to window.paypal.checkout.startFlow to contain express-checkout payment token');
                }
                if (!(0, _eligibility.isEligible)()) {
                    return redirect(getFullpageRedirectUrl(token));
                }
                if (!matchToken(token)) {
                    _this.updateProps({
                        url: token
                    });
                }
                resolve(ecToken);
            };
            window.paypal.checkout.closeFlow = function() {
                reset();
                reject(new Error("Close Flow Called"));
                _this.close();
            };
        }
        function drawButton(container) {
            var button = document.createElement("button");
            button.innerHTML = "PayPal Checkout";
            document.getElementById(container).appendChild(button);
            return button;
        }
        function initPayPalCheckout() {
            var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var initialCancelUrl = void 0;
            return _components.PayPalCheckout.init(_extends({
                env: env,
                paymentToken: getPaymentToken,
                init: function init(data) {
                    initialCancelUrl = data.cancelUrl;
                },
                onPaymentAuthorize: function onPaymentAuthorize(_ref) {
                    var returnUrl = _ref.returnUrl;
                    return redirect(returnUrl);
                },
                onPaymentCancel: function onPaymentCancel(_ref2) {
                    var cancelUrl = _ref2.cancelUrl;
                    return redirect(cancelUrl);
                },
                onClose: function onClose(reason) {
                    if (!initialCancelUrl) {
                        return;
                    }
                    var CLOSE_REASONS = _src2["default"].CONSTANTS.CLOSE_REASONS;
                    if ([ CLOSE_REASONS.TEMPLATE_BUTTON, CLOSE_REASONS.CLOSE_DETECTED ].indexOf(reason) !== -1) {
                        return this.props.onPaymentCancel({
                            cancelUrl: initialCancelUrl
                        });
                    }
                }
            }, props));
        }
        function setup(id, options) {
            options = options || {};
            env = options.environment;
            if (options.container) {
                var button = drawButton(options.container);
                if (!(0, _eligibility.isEligible)()) {
                    return;
                }
                if (options.click) {
                    button.addEventListener("click", function(event) {
                        event.preventDefault();
                        initPayPalCheckout().render();
                        options.click.call();
                    });
                } else {
                    initPayPalCheckout({
                        paymentToken: _src2["default"].CONSTANTS.PROP_DEFER_TO_URL
                    }).hijackButton(button);
                }
            }
        }
        function initXO() {
            if (!(0, _eligibility.isEligible)()) {
                return;
            }
            initPayPalCheckout().render();
        }
        function startFlow(token) {
            var ecToken = parseToken(token);
            if (!ecToken) {
                throw new Error('Expected "' + token + '" passed to window.paypal.checkout.startFlow to contain express-checkout payment token');
            }
            if (!(0, _eligibility.isEligible)()) {
                return redirect(getFullpageRedirectUrl(token));
            }
            initPayPalCheckout({
                url: matchToken(token) ? null : token,
                paymentToken: ecToken
            }).render();
        }
        function closeFlow() {
            console.warn("Checkout is not open, can not be closed");
        }
        var documentLoaded = document.readyState === "complete" || document.readyState === "loaded";
        function onDocumentReady(method) {
            if (documentLoaded) {
                return method();
            }
            return document.addEventListener("DOMContentLoaded", function(event) {
                documentLoaded = true;
                return method();
            });
        }
        if (window.paypalCheckoutReady instanceof Function) {
            onDocumentReady(window.paypalCheckoutReady);
        }
        onDocumentReady(function() {
            if (!(0, _eligibility.isEligible)()) {
                return;
            }
            var buttons = document.querySelectorAll("[data-paypal-button]");
            for (var _iterator = Array.prototype.slice.call(buttons), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref3 = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref3 = _i.value;
                }
                var button = _ref3;
                var buttonEnv = button.attributes["data-env"] && button.attributes["data-env"].value;
                if (!env && button.attributes["data-sandbox"]) {
                    buttonEnv = "sandbox";
                }
                initPayPalCheckout({
                    env: buttonEnv,
                    paymentToken: _src2["default"].CONSTANTS.PROP_DEFER_TO_URL
                }).hijackButton(button);
            }
        });
        window.paypal = window.paypal || {};
        window.paypal.checkout = window.paypal.checkout || {};
        window.paypal.checkout.setup = setup;
        window.paypal.checkout.initXO = initXO;
        window.paypal.checkout.startFlow = startFlow;
        window.paypal.checkout.closeFlow = closeFlow;
    }, /*!***********************************!*\
  !*** ./src/legacy/eligibility.js ***!
  \***********************************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        exports.isEligible = isEligible;
        var _lib = __webpack_require__(/*! ../lib */ 75);
        var SUPPORTED_AGENTS = {
            Chrome: 27,
            IE: 9,
            MSIE: 9,
            Firefox: 30,
            Safari: 5.1,
            Opera: 23
        };
        function isOldIE() {
            return window.navigator.userAgent.match(/MSIE [5678]\./i);
        }
        function isEligible() {
            var currentAgent = (0, _lib.getAgent)();
            if ((typeof currentAgent === "undefined" ? "undefined" : _typeof(currentAgent)) === "object" && currentAgent.length === 2) {
                if (parseFloat(currentAgent[1]) < SUPPORTED_AGENTS[currentAgent[0]]) {
                    return false;
                }
            }
            return !((0, _lib.isWebView)() || isOldIE());
        }
    }, /*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.setup = setup;
        var _config = __webpack_require__(/*! ./config */ 77);
        var _bridge = __webpack_require__(/*! ./bridge */ 81);
        function setup(options) {
            _config.config.env = options.env || _config.config.env;
            _config.config.bridgeUrl = options.bridgeUrl;
            if (options.noBridge) {
                _config.config.enableBridge = false;
            }
            if (_config.config.enableBridge) {
                (0, _bridge.setupBridge)(_config.config.env, _config.config.bridgeUrl);
            }
        }
        if (document.currentScript) {
            var script = document.currentScript;
            setup({
                env: script.getAttribute("data-env"),
                bridgeUrl: script.getAttribute("data-bridge-url"),
                noBridge: script.hasAttribute("no-bridge")
            });
        }
    }, /*!***********************!*\
  !*** ./src/bridge.js ***!
  \***********************/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.setupBridge = setupBridge;
        var _src = __webpack_require__(/*! post-robot/src */ 6);
        var _src2 = _interopRequireDefault(_src);
        var _components = __webpack_require__(/*! ./components */ 1);
        var _config = __webpack_require__(/*! ./config */ 77);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            };
        }
        _src2["default"].once("meta").then(function(data) {
            _components.PayPalCheckout.contexts.lightbox = data.iframeEligible;
            _config.config.locale.country = data.locale.country;
            _config.config.locale.lang = data.locale.lang;
        });
        function setupBridge(env, bridgeUrl) {
            bridgeUrl = bridgeUrl || _config.config.bridgeUrls[env];
            if (!bridgeUrl) {
                throw new Error("Can not find bridge url for env: " + env);
            }
            _src2["default"].openBridge(bridgeUrl);
        }
    } ]);
});

