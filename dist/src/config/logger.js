"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const Level = {
    info: "INFO",
    warn: "WARN",
    err: "ERR"
};
const getHeaderLogger = (level) => {
    let header = "";
    header += "[" + (new Date()).toUTCString() + "] ";
    header += "[" + level + "]  ";
    return header;
};
const getParamsLogger = (...params) => {
    let message = "";
    for (const param of params) {
        if (typeof param === "object") {
            message += "\n";
        }
        else {
            message += " ";
        }
        message += param.toString();
    }
    return message;
};
const info = (...params) => {
    let message = getHeaderLogger(Level.info) + getParamsLogger(...params);
    console.log(message);
};
const warn = (...params) => {
    let message = getHeaderLogger(Level.warn) + getParamsLogger(...params);
    console.log(message);
};
const err = (...params) => {
    let message = getHeaderLogger(Level.err) + getParamsLogger(...params);
    console.log(message);
};
exports.logger = {
    info: info,
    err: err,
    warn: warn
};
