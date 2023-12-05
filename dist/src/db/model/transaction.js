"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collections"));
const transactionSchema = new mongoose_1.Schema({
    order: {
        type: mongoose_1.Schema.ObjectId,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    postLocation: {
        type: mongoose_1.Schema.ObjectId,
    },
    getLocation: {
        type: mongoose_1.Schema.ObjectId,
    },
    postStaff: {
        type: mongoose_1.Schema.ObjectId,
    },
    getStaff: {
        type: mongoose_1.Schema.ObjectId,
    },
    shipper: {
        type: mongoose_1.Schema.ObjectId,
    },
    status: {
        type: String,
        required: true,
    },
    refuseStatus: {
        type: Boolean,
        required: true,
    }
});
// Statics
transactionSchema.static('sampleMethod', function () {
    console.log("sampleMethod");
});
// Methods
transactionSchema.method('sampleStaticMethod', function () {
    console.log("sampleStaticMethod");
});
exports.Transaction = (0, mongoose_1.model)('Transaction', transactionSchema, collections_1.default.transactions);
exports.default = exports.Transaction;
