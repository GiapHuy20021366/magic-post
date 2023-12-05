"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collections"));
const orderSchema = new mongoose_1.Schema({
    sender: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
    },
    receiver: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    teller: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
    },
    currentLocation: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
    }
});
// Statics
orderSchema.static('sampleMethod', function () {
    console.log("sampleMethod");
});
// Methods
orderSchema.method('sampleStaticMethod', function () {
    console.log("sampleStaticMethod");
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema, collections_1.default.orders);
exports.default = exports.Order;
