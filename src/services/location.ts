import { Location } from "../db/model";
import { LocationCategory } from "../data";


interface ILocationData {
    name: string;
    address: string;
    category: LocationCategory
}

interface ICreateLocationReturn extends ILocationData {
    _id: string;
    name: string;
}

export const createLocation = async (data: ILocationData): Promise<ICreateLocationReturn> => {
    const location = new Location(data);
    await location.save();
    return {
        _id: location._id.toString(),
        address: location.address,
        category: location.category,
        name: location.name
    }
}