"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsApi = exports.DestinationsApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var apis_1 = require("./apis");
var defaultBasePath = 'https://api.segmentapis.com';
var DestinationsApiApiKeys;
(function (DestinationsApiApiKeys) {
})(DestinationsApiApiKeys = exports.DestinationsApiApiKeys || (exports.DestinationsApiApiKeys = {}));
var DestinationsApi = (function () {
    function DestinationsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            default: new models_1.VoidAuth(),
            token: new models_2.HttpBearerAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DestinationsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DestinationsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DestinationsApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    DestinationsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DestinationsApi.prototype.setApiKey = function (key, value) {
        this.authentications[DestinationsApiApiKeys[key]].apiKey =
            value;
    };
    Object.defineProperty(DestinationsApi.prototype, "accessToken", {
        set: function (accessToken) {
            this.authentications.token.accessToken = accessToken;
        },
        enumerable: false,
        configurable: true
    });
    DestinationsApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    DestinationsApi.prototype.createDestinationAlpha = function (CreateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateDestinationV1Input === null ||
                    CreateDestinationV1Input === undefined) {
                    throw new Error('Required parameter CreateDestinationV1Input was null or undefined when calling createDestinationAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateDestinationV1Input, 'CreateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.createDestinationBeta = function (CreateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateDestinationV1Input === null ||
                    CreateDestinationV1Input === undefined) {
                    throw new Error('Required parameter CreateDestinationV1Input was null or undefined when calling createDestinationBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateDestinationV1Input, 'CreateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.createDestinationCurrent = function (CreateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateDestinationV1Input === null ||
                    CreateDestinationV1Input === undefined) {
                    throw new Error('Required parameter CreateDestinationV1Input was null or undefined when calling createDestinationCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateDestinationV1Input, 'CreateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_3 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_3(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.createDestinationSubscription = function (destinationId, CreateDestinationSubscriptionAlphaInput, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_4, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/subscriptions'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling createDestinationSubscription.');
                }
                if (CreateDestinationSubscriptionAlphaInput === null ||
                    CreateDestinationSubscriptionAlphaInput === undefined) {
                    throw new Error('Required parameter CreateDestinationSubscriptionAlphaInput was null or undefined when calling createDestinationSubscription.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateDestinationSubscriptionAlphaInput, 'CreateDestinationSubscriptionAlphaInput'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_4 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_4(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateDestinationSubscription200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.createDestinationV1 = function (CreateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_5, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (CreateDestinationV1Input === null ||
                    CreateDestinationV1Input === undefined) {
                    throw new Error('Required parameter CreateDestinationV1Input was null or undefined when calling createDestinationV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(CreateDestinationV1Input, 'CreateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_5 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_5(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'CreateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.deleteDestinationAlpha = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_6, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling deleteDestinationAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_6 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_6(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.deleteDestinationBeta = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_7, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling deleteDestinationBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_7 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_7(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.deleteDestinationCurrent = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_8, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling deleteDestinationCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_8 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_8(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.deleteDestinationV1 = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_9, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling deleteDestinationV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_9 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_9(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'DeleteDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.getDestinationAlpha = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_10, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling getDestinationAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_10 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_10(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.getDestinationBeta = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_11, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling getDestinationBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_11 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_11(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.getDestinationCurrent = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_12, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling getDestinationCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_12 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_12(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.getDestinationV1 = function (destinationId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_13, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling getDestinationV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_13 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_13(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.getSubscriptionFromDestination = function (destinationId, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_14, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/subscriptions/{id}'
                        .replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)))
                        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling getSubscriptionFromDestination.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling getSubscriptionFromDestination.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_14 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_14(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'GetSubscriptionFromDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDeliveryMetricsSummaryFromDestinationAlpha = function (destinationId, sourceId, startTime, endTime, granularity, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_15, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/delivery-metrics'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling listDeliveryMetricsSummaryFromDestinationAlpha.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling listDeliveryMetricsSummaryFromDestinationAlpha.');
                }
                if (sourceId !== undefined) {
                    localVarQueryParameters['sourceId'] = models_1.ObjectSerializer.serialize(sourceId, 'string');
                }
                if (startTime !== undefined) {
                    localVarQueryParameters['startTime'] = models_1.ObjectSerializer.serialize(startTime, 'string');
                }
                if (endTime !== undefined) {
                    localVarQueryParameters['endTime'] = models_1.ObjectSerializer.serialize(endTime, 'string');
                }
                if (granularity !== undefined) {
                    localVarQueryParameters['granularity'] = models_1.ObjectSerializer.serialize(granularity, "'DAY' | 'HOUR' | 'MINUTE'");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_15 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_15(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDeliveryMetricsSummaryFromDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDeliveryMetricsSummaryFromDestinationBeta = function (destinationId, sourceId, startTime, endTime, granularity, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_16, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/delivery-metrics'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling listDeliveryMetricsSummaryFromDestinationBeta.');
                }
                if (sourceId === null || sourceId === undefined) {
                    throw new Error('Required parameter sourceId was null or undefined when calling listDeliveryMetricsSummaryFromDestinationBeta.');
                }
                if (sourceId !== undefined) {
                    localVarQueryParameters['sourceId'] = models_1.ObjectSerializer.serialize(sourceId, 'string');
                }
                if (startTime !== undefined) {
                    localVarQueryParameters['startTime'] = models_1.ObjectSerializer.serialize(startTime, 'string');
                }
                if (endTime !== undefined) {
                    localVarQueryParameters['endTime'] = models_1.ObjectSerializer.serialize(endTime, 'string');
                }
                if (granularity !== undefined) {
                    localVarQueryParameters['granularity'] = models_1.ObjectSerializer.serialize(granularity, "'DAY' | 'HOUR' | 'MINUTE'");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_16 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_16(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDeliveryMetricsSummaryFromDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDestinationsAlpha = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_17, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listDestinationsAlpha.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_17 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_17(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDestinations200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDestinationsBeta = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_18, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listDestinationsBeta.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_18 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_18(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDestinations200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDestinationsCurrent = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_19, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listDestinationsCurrent.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_19 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_19(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDestinations200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listDestinationsV1 = function (pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_20, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/destinations';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listDestinationsV1.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_20 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_20(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListDestinations200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.listSubscriptionsFromDestination = function (destinationId, pagination, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_21, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/subscriptions'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling listSubscriptionsFromDestination.');
                }
                if (pagination === null || pagination === undefined) {
                    throw new Error('Required parameter pagination was null or undefined when calling listSubscriptionsFromDestination.');
                }
                if (pagination !== undefined) {
                    localVarQueryParameters['pagination'] = models_1.ObjectSerializer.serialize(pagination, 'PaginationInput');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_21 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_21(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'ListSubscriptionsFromDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.removeSubscriptionFromDestination = function (destinationId, id, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_22, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/subscriptions/{id}'
                        .replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)))
                        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling removeSubscriptionFromDestination.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling removeSubscriptionFromDestination.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_22 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_22(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'RemoveSubscriptionFromDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.updateDestinationAlpha = function (destinationId, UpdateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_23, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling updateDestinationAlpha.');
                }
                if (UpdateDestinationV1Input === null ||
                    UpdateDestinationV1Input === undefined) {
                    throw new Error('Required parameter UpdateDestinationV1Input was null or undefined when calling updateDestinationAlpha.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateDestinationV1Input, 'UpdateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_23 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_23(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.updateDestinationBeta = function (destinationId, UpdateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_24, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1beta+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling updateDestinationBeta.');
                }
                if (UpdateDestinationV1Input === null ||
                    UpdateDestinationV1Input === undefined) {
                    throw new Error('Required parameter UpdateDestinationV1Input was null or undefined when calling updateDestinationBeta.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateDestinationV1Input, 'UpdateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_24 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_24(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.updateDestinationCurrent = function (destinationId, UpdateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_25, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling updateDestinationCurrent.');
                }
                if (UpdateDestinationV1Input === null ||
                    UpdateDestinationV1Input === undefined) {
                    throw new Error('Required parameter UpdateDestinationV1Input was null or undefined when calling updateDestinationCurrent.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateDestinationV1Input, 'UpdateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_25 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_25(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.updateDestinationV1 = function (destinationId, UpdateDestinationV1Input, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_26, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}'.replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling updateDestinationV1.');
                }
                if (UpdateDestinationV1Input === null ||
                    UpdateDestinationV1Input === undefined) {
                    throw new Error('Required parameter UpdateDestinationV1Input was null or undefined when calling updateDestinationV1.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateDestinationV1Input, 'UpdateDestinationV1Input'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_26 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_26(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    DestinationsApi.prototype.updateSubscriptionForDestination = function (destinationId, id, UpdateSubscriptionForDestinationAlphaInput, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_27, _i, _a, interceptor;
            var _this = this;
            return __generator(this, function (_b) {
                localVarPath = this.basePath +
                    '/destinations/{destinationId}/subscriptions/{id}'
                        .replace('{' + 'destinationId' + '}', encodeURIComponent(String(destinationId)))
                        .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = [
                    'application/vnd.segment.v1alpha+json',
                    'application/json',
                ];
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = produces[0];
                }
                else {
                    localVarHeaderParams.Accept = 'application/json';
                }
                localVarFormParams = {};
                if (destinationId === null || destinationId === undefined) {
                    throw new Error('Required parameter destinationId was null or undefined when calling updateSubscriptionForDestination.');
                }
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling updateSubscriptionForDestination.');
                }
                if (UpdateSubscriptionForDestinationAlphaInput === null ||
                    UpdateSubscriptionForDestinationAlphaInput === undefined) {
                    throw new Error('Required parameter UpdateSubscriptionForDestinationAlphaInput was null or undefined when calling updateSubscriptionForDestination.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PATCH',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(UpdateSubscriptionForDestinationAlphaInput, 'UpdateSubscriptionForDestinationAlphaInput'),
                };
                authenticationPromise = Promise.resolve();
                if (this.authentications.token.accessToken) {
                    authenticationPromise = authenticationPromise.then(function () {
                        return _this.authentications.token.applyToRequest(localVarRequestOptions);
                    });
                }
                authenticationPromise = authenticationPromise.then(function () {
                    return _this.authentications.default.applyToRequest(localVarRequestOptions);
                });
                interceptorPromise = authenticationPromise;
                _loop_27 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () {
                        return interceptor(localVarRequestOptions);
                    });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_27(interceptor);
                }
                return [2, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode &&
                                        response.statusCode >= 200 &&
                                        response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, 'UpdateSubscriptionForDestination200Response');
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new apis_1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return DestinationsApi;
}());
exports.DestinationsApi = DestinationsApi;
//# sourceMappingURL=destinationsApi.js.map