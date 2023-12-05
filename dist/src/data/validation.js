"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = exports.validatePassword = exports.validateEmail = exports.validateAccountRegisterMethod = void 0;
const invalid_data_error_1 = require("./invalid-data-error");
const validateAccountRegisterMethod = (method) => __awaiter(void 0, void 0, void 0, function* () {
    const methods = ["manual", "google-oauth", "facebook-oauth"];
    if (method == undefined || !methods.includes(method)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: `Invalid method "${method}" for Account register.`,
            data: {
                target: "method",
                reason: "invalid-method"
            }
        });
    }
    return true;
});
exports.validateAccountRegisterMethod = validateAccountRegisterMethod;
const validateEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email === undefined) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Email can not be undefined",
            data: {
                target: "email",
                reason: "empty-email"
            }
        });
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid email format",
            data: {
                target: "email",
                reason: "invalid-email-format"
            }
        });
    }
    return true;
});
exports.validateEmail = validateEmail;
const validatePassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    if (password == undefined) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Password can not be undefined",
            data: {
                target: "password",
                reason: "empty-password"
            }
        });
    }
    if (password.length < 8) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid password format: Length have to larger or equal to 8",
            data: {
                target: "password",
                reason: "invalid-password-length"
            }
        });
    }
    if (!/[A-Z]/.test(password)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid password format: At least one upper case character",
            data: {
                target: "password",
                reason: "invalid-password-character-upper"
            }
        });
    }
    if (!/[a-z]/.test(password)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid password format: At least one lower case character",
            data: {
                target: "password",
                reason: "invalid-password-character-lower"
            }
        });
    }
    if (!/[0-9]/.test(password)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid password format: At least one digit character",
            data: {
                target: "password",
                reason: "invalid-password-character-digit"
            }
        });
    }
    if (!/[!@#$%^&*]/.test(password)) {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Invalid password format: At least one special character",
            data: {
                target: "password",
                reason: "invalid-password-character-special"
            }
        });
    }
    return true;
});
exports.validatePassword = validatePassword;
const validateName = (firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    if (firstName === undefined || firstName === "") {
        throw new invalid_data_error_1.InvalidDataError({
            message: "First name cannot be empty",
            data: {
                target: "firstName",
                reason: "empty-first-name"
            }
        });
    }
    if (lastName === undefined || lastName === "") {
        throw new invalid_data_error_1.InvalidDataError({
            message: "Last name cannot be empty",
            data: {
                target: "lastName",
                reason: "empty-last-name"
            }
        });
    }
    return true;
});
exports.validateName = validateName;
