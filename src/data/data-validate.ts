import { locationCategories } from "./location-category";
import { roles } from "./role";

export const isObjectId = (value: any): boolean => {
    return typeof value === "string" && value.length === 24;
};

export const isAllObjectId = (value: any): boolean => {
    if (!Array.isArray(value)) return false;
    return value.every(v => isObjectId(v));
}

export const isString = (value: any): boolean => {
    return typeof value == "string";
};

export const isEmptyString = (value: any): boolean => {
    return typeof value === "string" && value.length === 0;
};

export const isNotEmptyString = (value: any): boolean => {
    return !isEmptyString(value);
}

export const isAllNotEmptyString = (value: any): boolean => {
    if (!Array.isArray(value)) return false;
    return value.every(v => isNotEmptyString(v));
}

export const isNumber = (value: any): boolean => {
    return typeof value === "number";
};

export const isArray = (value: any): boolean => {
    return Array.isArray(value);
}

export const isInteger = (value: any): boolean => {
    return Number.isInteger(value);
};

export const isCoordinates = (value: any): boolean => {
    if (typeof value !== "object") return false;
    if (value.lat == null || value.lng == null) return false;
    if (typeof value.lat !== "number" || typeof value.lng !== "number") {
        return false;
    }
    return true;
};

export const isNotEmptyStringArray = (value: any) => {
    if (!Array.isArray(value)) return false;
    return value.every((v) => typeof v === "string" && v.length > 0);
};

export const isValidRole = (value: any) => {
    return roles.includes(value);
}

export const isValidLocationCategory = (value: any): boolean => {
    return locationCategories.includes(value);
}
