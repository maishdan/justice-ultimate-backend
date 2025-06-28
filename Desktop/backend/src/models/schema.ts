// src/models/schema.ts
import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),

  firstName: varchar("first_name", { length: 255 }).notNull(),
  middleName: varchar("middle_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }).notNull(),

  idNumber: varchar("id_number", { length: 100 }).notNull(),
  kraPin: varchar("kra_pin", { length: 100 }).notNull(),

  ntsaPhoneNumber: varchar("ntsa_phone", { length: 100 }).notNull(),
  phoneNumber: varchar("phone", { length: 100 }).notNull(),
});
