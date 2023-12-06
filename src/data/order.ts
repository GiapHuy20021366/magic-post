import { IAccount } from "./account";
import { ICustomer } from "./customer";
import { ILocation } from "./location";


export interface IOrder {
    sender: ICustomer,
    receiver: ICustomer,
    createdAt: Date,
    teller: IAccount,
    currentLocation: ILocation,
}