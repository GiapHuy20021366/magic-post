"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const mongoose_1 = require("mongoose");
const collections_1 = __importDefault(require("../collections"));
const locationSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});
// Statics
locationSchema.static('sampleMethod', function () {
    console.log("sampleMethod");
});
// Methods
locationSchema.method('sampleStaticMethod', function () {
    console.log("sampleStaticMethod");
});
exports.Location = (0, mongoose_1.model)('Location', locationSchema, collections_1.default.locations);
exports.default = exports.Location;
