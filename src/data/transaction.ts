import { IAccount } from "./account";
import { ILocation } from "./location";
import { IOrder } from "./order";
import { Status } from "./status";
import { Type } from "./type";

export interface ITransaction {
    order: IOrder,
    type: Type,
    postLocation: ILocation,
    getLocation: ILocation,
    postStaff: IAccount,
    getStaff: IAccount,
    shipper: IAccount,
    status: Status,
    note: String,
    refuseStatus: boolean,
}