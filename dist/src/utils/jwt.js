"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const signToken = (payload, expiresIn = config_1.JWT_EXPIRES_IN) => {
    const token = jsonwebtoken_1.default.sign({
        data: payload
    }, config_1.JWT_PRIVATE_KEY, {
        expiresIn: expiresIn
    });
    return token;
};
exports.signToken = signToken;
const verifyToken = (token) => {
    if (token == null)
        return null;
    let result = null;
    try {
        result = jsonwebtoken_1.default.verify(token, config_1.JWT_PRIVATE_KEY);
    }
    catch (error) {
        // Do nothing
    }
    finally {
        return result;
    }
};
exports.verifyToken = verifyToken;
