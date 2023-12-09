export const roles = <const>["DIRECTOR", "GATHERING_MANAGER", "TRANSACTION_MANAGER", "TELLER", "SHIPPER", "GATHEREING_STAFF", "ADMIN"]

export type Role = typeof roles[number];

export const toRoleLevel = (role: string): number => {
    switch(role) {
        case "ADMIN":
            return 100;
        case "DIRECTOR":
            return 99;
        case "GATHERING_MANAGER":
            return 98;
        case "TRANSACTION_MANAGER":
            return 98;
        case "TELLER":
            return 97;
        case "SHIPPER":
            return 97;
        case "GATHEREING_STAFF":
            return 97;
    }
    return 9999;
} 