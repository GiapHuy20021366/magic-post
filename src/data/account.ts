import { ILocation } from "./location";
import { Role } from "./role";


export interface IAccount {
    username: string,
    password: string,
    role: Role,
    location?: ILocation,
    createdAt: Date,
}