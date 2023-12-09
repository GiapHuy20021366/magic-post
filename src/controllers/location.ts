import { NextFunction, Request, Response } from "express";
import { AuthLike, LocationCategory, UnauthorizationError, isValidLocationCategory, throwErrorIfInvalidFormat, throwErrorIfNotFound, toResponseSuccessData } from "../data";

import {
    createLocation as createLocationService
} from "../services";

interface ICreateLocationBody {
    name?: string;
    address?: string;
    category?: string;
}

const validateCreateLocationBody = (data: ICreateLocationBody): void => {
    const { address, category, name } = data;
    throwErrorIfNotFound("address", address);
    throwErrorIfNotFound("category", category);
    throwErrorIfNotFound("name", name);

    throwErrorIfInvalidFormat(
        "category",
        category,
        [isValidLocationCategory]
    )

    // check more...
}

export const createLocation = async (req: Request<{}, {}, ICreateLocationBody, {}>, res: Response, next: NextFunction) => {
    const auth = req.authContext as AuthLike;
    if (auth.role !== "DIRECTOR") {
        return next(new UnauthorizationError({
            message: "Not permited"
        }))
    }
    try {
        validateCreateLocationBody(req.body);
    } catch (error) {
        return next(error);
    }

    const { address, category, name } = req.body;
    // call service
    createLocationService({
        address: address as string,
        category: category as LocationCategory,
        name: name as string
    })
        .then((data) => res.status(200).json(toResponseSuccessData(data)))
        .catch(next);
}