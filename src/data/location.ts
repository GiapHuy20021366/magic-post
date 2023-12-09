import { LocationCategory } from "./location-category";

export interface ILocation {
    name: string,
    address: string,
    category: LocationCategory,
    createdAt: Date,
}