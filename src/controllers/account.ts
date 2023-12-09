import { NextFunction, Request, Response } from "express";
import {
    AuthLike,
    InvalidDataError,
    Role,
    UnauthorizationError,
    isValidRole,
    throwErrorIfInvalidFormat,
    throwErrorIfNotFound,
    toResponseSuccessData,
    toRoleLevel,
} from "../data";
import { login as loginService } from "../services";

interface IRequestLoginBody {
    username?: string;
    password?: string;
}

export const login = (
    req: Request<{}, {}, IRequestLoginBody, {}>,
    res: Response,
    next: NextFunction
) => {
    const { username, password } = req.body;
    if (username == null) {
        return next(
            new InvalidDataError({
                message: "Username cannot be empty",
                data: {
                    target: "username",
                    reason: "username-not-found",
                },
            })
        );
    }
    if (password == null) {
        return next(
            new InvalidDataError({
                message: "Password cannot be empty",
                data: {
                    target: "password",
                    reason: "password-not-found",
                },
            })
        );
    }
    // Call service login
    loginService(username, password)
        .then((data) => res.status(200).json(toResponseSuccessData(data)))
        .catch(next);
};

interface ICreateAccountBody {
    username?: string;
    password?: string;
    role?: string;
    locationID?: string;
    name?: string;
    birth?: number;
    sex?: string;
    phone?: string;
    address?: string;
    email?: string;
}

const validateCreateAccountBody = (data: ICreateAccountBody): void => {
    const {
        username,
        password,
        role,
        locationID,
        phone,
    } = data;

    // check role
    throwErrorIfNotFound("role", role);
    throwErrorIfInvalidFormat(
        "role",
        role,
        [isValidRole]
    );

    throwErrorIfNotFound("username", username);
    throwErrorIfNotFound("password", password);
    throwErrorIfNotFound("location", locationID);
    throwErrorIfNotFound("phone", phone);

    // check more
    // ...
}

export const createAccount = (
    req: Request<{}, {}, ICreateAccountBody, {}>,
    res: Response,
    next: NextFunction
) => {
    const auth = req.authContext as AuthLike;

    const {
        role,
    } = req.body;

    // check role
    if (toRoleLevel(auth.role) <= toRoleLevel(role as Role)) {
        return next(
            new UnauthorizationError({
                message: "Not permission",
            })
        );
    }
    try {
        validateCreateAccountBody(req.body);
    } catch (error) {
        return next(error);
    }

    return res.status(200).json(toResponseSuccessData({ msg: "implementing" }));
};
