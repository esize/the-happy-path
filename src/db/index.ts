import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env";

import * as schema from "./schema";

let database: PostgresJsDatabase<typeof schema>;
let pg: ReturnType<typeof postgres>;

if (env.NODE_ENV === "production") {
  pg = postgres(env.DATABASE_URL);
  database = drizzle(pg, { schema });
} else {
  if (
    !(global as unknown as { database: PostgresJsDatabase<typeof schema> })
      .database!
  ) {
    pg = postgres(env.DATABASE_URL);
    (
      global as unknown as { database: PostgresJsDatabase<typeof schema> }
    ).database = drizzle(pg, { schema });
  }
  database = (
    global as unknown as { database: PostgresJsDatabase<typeof schema> }
  ).database;
}

export { database, pg };
