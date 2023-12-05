"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenParser = void 0;
const data_1 = require("../data");
const tokenParser = (request, _response, next) => {
    const jsonToken = request.headers.authorization;
    if (jsonToken == null) {
        return next(new data_1.UnauthorizationError({
            message: "No token found",
            data: {
                reason: "no-token-found",
                target: "token"
            }
        }));
    }
    try {
        const parsed = JSON.parse(jsonToken);
        if (parsed.email == null) {
            return next(new data_1.UnauthorizationError({
                message: "Invalid token",
                data: {
                    reason: "invalid-token",
                    target: "token"
                }
            }));
        }
        request.authContext = parsed;
        next();
    }
    catch (error) {
        return next(new data_1.UnauthorizationError({
            message: "No token found",
            data: {
                reason: "no-token-found",
                target: "token"
            }
        }));
    }
};
exports.tokenParser = tokenParser;
