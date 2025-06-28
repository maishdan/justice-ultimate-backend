// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/models",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    user: "postgres",
    password: "Wh0@0p0s0t?!/$#",
    host: "localhost",
    port: 5432,
    database: "justice_auto",
    ssl: false
  }
});
