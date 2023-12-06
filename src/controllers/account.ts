import { NextFunction, Request, Response } from "express";
import { InvalidDataError, toResponseSuccessData } from "../data";
import { login as loginService } from "../services";

interface IRequestLoginBody {
    username?: string;
    password?: string;
}

export const login = (req: Request<{}, {}, IRequestLoginBody, {}>, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (username == null) {
        return next(new InvalidDataError({
            message: "Username cannot be empty",
            data: {
                target: "username",
                reason: "username-not-found"
            }
        }));
    }
    if (password == null) {
        return next(new InvalidDataError({
            message: "Password cannot be empty",
            data: {
                target: "password",
                reason: "password-not-found"
            }
        }));
    }
    // Call service login
    loginService(username, password)
        .then((data) => res.status(200).json(toResponseSuccessData(data)))
        .catch(next);
}