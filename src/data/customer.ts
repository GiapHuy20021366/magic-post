export interface ICustomer {
    name: string;
    birth?: Date;
    sex?: "Male" | "Female";
    phone: string;
    address: string;
    email?: string;
}