"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserRouters = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const userRouter = express_1.default.Router();
const initUserRouters = (app) => {
    userRouter.use(middlewares_1.errorHandler);
    app.use("/", userRouter);
};
exports.initUserRouters = initUserRouters;
