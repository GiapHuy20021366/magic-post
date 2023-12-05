"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleLogger = exports.JWT_EXPIRES_IN = exports.JWT_PRIVATE_KEY = exports.SALT_ROUNDS = exports.MONGODB_LOCAL_URI = exports.PORT = void 0;
require('dotenv').config();
// environment variable
exports.PORT = process.env.PORT;
exports.MONGODB_LOCAL_URI = process.env.MONGODB_LOCAL_URI;
exports.SALT_ROUNDS = +(process.env.SALT_ROUNDS || 10);
exports.JWT_PRIVATE_KEY = (process.env.JWT_PRIVATE_KEY || "json-web-token");
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
// other configs
var logger_1 = require("./logger");
Object.defineProperty(exports, "consoleLogger", { enumerable: true, get: function () { return logger_1.logger; } });
