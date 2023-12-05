require('dotenv').config();

// environment variable
export const PORT = process.env.PORT as string;
export const MONGODB_LOCAL_URI = process.env.MONGODB_LOCAL_URI as string;
export const SALT_ROUNDS = +(process.env.SALT_ROUNDS || 10) as number;
export const JWT_PRIVATE_KEY = (process.env.JWT_PRIVATE_KEY || "json-web-token") as string;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// other configs
export { logger as consoleLogger } from "./logger";