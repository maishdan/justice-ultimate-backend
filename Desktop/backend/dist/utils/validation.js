"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
// src/utils/validation.ts
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    idNumber: zod_1.z.string().min(4),
    kraPin: zod_1.z.string().min(5),
    ntsaPhone: zod_1.z.string().min(10),
    phoneNumber: zod_1.z.string().min(10), // ✅ must be 10 digits minimum
    password: zod_1.z.string().min(6),
});
