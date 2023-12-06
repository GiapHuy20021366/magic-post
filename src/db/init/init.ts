import { hashText } from "../../utils";
import { Account } from "../model";
import accounts from "./accounts.json";

export const init = () => {
    Promise.all(accounts.map(async (account) => {
        const existedAccount = await Account.findOne({
            username: account.username
        });
        if (existedAccount == null) {
            return Account.create({
                ...account,
                password: hashText(account.password)
            });
        }
    }));
}