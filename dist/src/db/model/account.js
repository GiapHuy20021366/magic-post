"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collections"));
const accountSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    location: mongoose_1.Schema.ObjectId,
});
// Statics
accountSchema.static('sampleMethod', function () {
    console.log("sampleMethod");
});
// Methods
accountSchema.method('sampleStaticMethod', function () {
    console.log("sampleStaticMethod");
});
exports.Account = (0, mongoose_1.model)('Account', accountSchema, collections_1.default.accounts);
exports.default = exports.Account;
