export interface ICustomer {
    name: string,
    birth?: number,
    sex?: "Male" | "Female",
    phone: string,
    address: string,
    email?: string,
    createdAt: Date,
}