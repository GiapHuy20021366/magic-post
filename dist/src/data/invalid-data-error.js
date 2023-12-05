"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDataError = void 0;
const http_response_code_1 = require("./http-response-code");
const internal_error_1 = require("./internal-error");
class InvalidDataError extends internal_error_1.InternalError {
    constructor(info) {
        var _a;
        super(info);
        this.code = (_a = info === null || info === void 0 ? void 0 : info.code) !== null && _a !== void 0 ? _a : http_response_code_1.HttpResponseCode.BAD_REQUEST;
    }
}
exports.InvalidDataError = InvalidDataError;
