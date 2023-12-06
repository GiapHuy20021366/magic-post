import { ILocation } from "./location";
import { Role } from "./role";


export interface IAccount {
    username: string,
    password: string,
    role: Role,
    location?: ILocation,
    createdAt: Date,
    name: string,
    birth?: Date,
    sex?: "Male" | "Female",
    phone: string,
    address: string,
    email?: string
}