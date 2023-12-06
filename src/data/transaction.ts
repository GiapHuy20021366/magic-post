import { IAccount } from "./account";
import { ILocation } from "./location";
import { IOrder } from "./order";
import { Status } from "./status";
import { TransactionType } from "./transaction-type";

export interface ITransaction {
    order: IOrder,
    transactionType: TransactionType,
    postLocation?: ILocation,
    getLocation?: ILocation,
    postStaff?: IAccount,
    getStaff?: IAccount,
    shipper?: IAccount,
    status: Status,
    note: string,
    refuseStatus: boolean,
    createdAt: Date,
}