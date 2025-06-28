"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core"); // ✅ ADDED text
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    firstName: (0, pg_core_1.varchar)("first_name", { length: 100 }),
    middleName: (0, pg_core_1.varchar)("middle_name", { length: 100 }),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 100 }),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).notNull(),
    idNumber: (0, pg_core_1.varchar)("id_number", { length: 20 }),
    kraPin: (0, pg_core_1.varchar)("kra_pin", { length: 20 }),
    ntsaPhone: (0, pg_core_1.varchar)("ntsa_phone", { length: 20 }),
    phoneNumber: (0, pg_core_1.varchar)("phone_number", { length: 20 }),
    password: (0, pg_core_1.varchar)("password", { length: 255 }),
    // ✅ Added role field with default
    role: (0, pg_core_1.text)("role").default("guest"),
});
