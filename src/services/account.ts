import { ResourceNotExistedError, Role, UnauthorizationError } from "../data";
import { Account } from "../db/model"
import { compareHash, signToken } from "../utils";

interface ILoginReturn {
    token: string;
    username: string;
    name: string;
    role: Role
}

export const login = async (username: string, password: string): Promise<ILoginReturn> => {
    const existedAccount = await Account.findOne({ username: username });
    if (existedAccount == null) {
        throw new ResourceNotExistedError({
            message: `No account with username ${username} found`,
            data: {
                target: "username",
                reason: "username-not-found"
            }
        })
    }
    if (!compareHash(password, existedAccount.password)) {
        throw new UnauthorizationError({
            message: "Password incorrect",
            data: {
                target: "password",
                reason: "incorrect-password"
            }
        })
    }
    const token = signToken({
        _id: existedAccount._id,
        role: existedAccount.role
    });

    return {
        token: token,
        name: existedAccount.name,
        role: existedAccount.role,
        username: existedAccount.role
    }
}