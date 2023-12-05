"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collections"));
const customerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    birth: String,
    sex: String,
    phone: {
        type: String,
        required: true,
        index: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: String
});
// Statics
customerSchema.static('sampleMethod', function () {
    console.log("sampleMethod");
});
// Methods
customerSchema.method('sampleStaticMethod', function () {
    console.log("sampleStaticMethod");
});
exports.Customer = (0, mongoose_1.model)('Customer', customerSchema, collections_1.default.customers);
exports.default = exports.Customer;
