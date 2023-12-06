import { signToken } from "../utils"
import { Role } from "./role";

export interface AuthLike {
    _id: string;
    role: Role;
}

export const toAuthToken = (auth: AuthLike): string => {
    return signToken({
        _id: auth._id,
        role: auth.role
    })
}