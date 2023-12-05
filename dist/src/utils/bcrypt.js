"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.hashText = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../config");
const hashText = (text) => {
    let result = null;
    try {
        result = bcrypt_1.default.hashSync(text, config_1.SALT_ROUNDS);
    }
    finally {
        return result;
    }
};
exports.hashText = hashText;
const compareHash = (plainText, encryptedText) => {
    let result = null;
    try {
        result = bcrypt_1.default.compareSync(plainText, encryptedText);
    }
    finally {
        return result;
    }
};
exports.compareHash = compareHash;
