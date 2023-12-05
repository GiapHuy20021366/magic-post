"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAuthToken = void 0;
const utils_1 = require("../utils");
const toAuthToken = (auth) => {
    return (0, utils_1.signToken)({
        email: auth.email
    });
};
exports.toAuthToken = toAuthToken;
