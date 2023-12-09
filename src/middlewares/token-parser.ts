import { NextFunction, Request, Response } from "express";
import { AuthLike, UnauthorizationError } from "../data";
import { verifyToken } from "../utils";

export const tokenParser = (request: Request<{}, {}, {}, {}>, response: Response, next: NextFunction) => {
    const verified = verifyToken(request.headers.authorization);
    if (verified == null || typeof verified === "string") {
        return response.status(400).json({
            err: {
                message: "Invalid token",
                data: {
                    target: "token",
                    reason: "invalid-token"
                }
            }
        })
    }
    const auth = verified.data;
    if (auth?.role == null || auth?._id == null) {
        return next(new UnauthorizationError({
            message: "Invalid token",
            data: {
                reason: "invalid-token",
                target: "token"
            }
        }))
    }
    request.authContext = auth as AuthLike;
    next();
}