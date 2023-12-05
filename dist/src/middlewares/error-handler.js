"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const data_1 = require("../data");
const errorHandler = (error, _request, response, _next) => {
    if (error instanceof data_1.InternalError) {
        return response.status(error.code).json({
            error: {
                message: error.message,
                code: error.code,
                data: error.data
            }
        });
    }
    else {
        console.error(error);
        return response.status(500).json({ message: "An unkown error occured" });
    }
};
exports.errorHandler = errorHandler;
