"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
const http_response_code_1 = require("./http-response-code");
class InternalError extends Error {
    constructor(infor) {
        var _a;
        super(infor === null || infor === void 0 ? void 0 : infor.message);
        this._code = (_a = infor === null || infor === void 0 ? void 0 : infor.code) !== null && _a !== void 0 ? _a : http_response_code_1.HttpResponseCode.INTERNAL_SERVER_ERROR;
        this._data = infor === null || infor === void 0 ? void 0 : infor.data;
        Object.setPrototypeOf(this, InternalError.prototype);
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get data() {
        return this._data;
    }
}
exports.InternalError = InternalError;
