import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core"; // ✅ ADDED text

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }),
  middleName: varchar("middle_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  email: varchar("email", { length: 255 }).notNull(),
  idNumber: varchar("id_number", { length: 20 }),
  kraPin: varchar("kra_pin", { length: 20 }),
  ntsaPhone: varchar("ntsa_phone", { length: 20 }),
  phoneNumber: varchar("phone_number", { length: 20 }),
  password: varchar("password", { length: 255 }),

  // ✅ Added role field with default
  role: text("role").default("guest"),
});
