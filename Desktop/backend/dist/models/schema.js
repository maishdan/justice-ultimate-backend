"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
// src/models/schema.ts
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).notNull().unique(),
    password: (0, pg_core_1.text)("password").notNull(),
    firstName: (0, pg_core_1.varchar)("first_name", { length: 255 }).notNull(),
    middleName: (0, pg_core_1.varchar)("middle_name", { length: 255 }),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 255 }).notNull(),
    idNumber: (0, pg_core_1.varchar)("id_number", { length: 100 }).notNull(),
    kraPin: (0, pg_core_1.varchar)("kra_pin", { length: 100 }).notNull(),
    ntsaPhoneNumber: (0, pg_core_1.varchar)("ntsa_phone", { length: 100 }).notNull(),
    phoneNumber: (0, pg_core_1.varchar)("phone", { length: 100 }).notNull(),
});
