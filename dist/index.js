"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./src/config");
const db_1 = require("./src/db");
const route_1 = require("./src/route");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_2 = require("./src/config");
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// init endpoints
(0, route_1.initUserRouters)(app);
app.listen(config_1.PORT, () => {
    config_2.consoleLogger.info(`Server is listening to Port ${config_1.PORT}`);
});
