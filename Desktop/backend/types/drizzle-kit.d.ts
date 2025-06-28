declare module "drizzle-kit" {
  interface DrizzleDBCredentials {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
  }

  interface Config {
    schema: string;
    out: string;
    driver: "pg";
    dbCredentials: DrizzleDBCredentials;
  }

  export function defineConfig(config: Config): Config;
}
