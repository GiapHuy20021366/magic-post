import express, { Express } from "express";
import { errorHandler, tokenParser } from "../middlewares";
import { createLocation, login } from "../controllers";

const userRouter = express.Router();

export const initUserRouters = (app: Express): void => {
    userRouter.post("/api/login", login);
    userRouter.post("/api/location", tokenParser, createLocation);
    userRouter.use(errorHandler);
    app.use("/", userRouter);

}
