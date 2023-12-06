import express, { Express } from "express";
import { errorHandler } from "../middlewares";
import {login } from "../controllers";

const userRouter = express.Router();

export const initUserRouters = (app: Express): void => {
    userRouter.post("/api/login", login);
    userRouter.use(errorHandler);
    app.use("/", userRouter);

}
