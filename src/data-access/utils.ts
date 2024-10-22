import crypto from "crypto";
import { ExtractTablesWithRelations } from "drizzle-orm";
import { PgTransaction } from "drizzle-orm/pg-core";
import { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js";

import { database } from "@/db";
import * as schema from "@/db/schema";

export async function generateRandomToken(length: number) {
  const buf = await new Promise<Buffer>((resolve, reject) => {
    crypto.randomBytes(Math.ceil(length / 2), (err, buf) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(buf);
      }
    });
  });

  return buf.toString("hex").slice(0, length);
}

export async function createTransaction(
  cb: (
    tx: PgTransaction<
      PostgresJsQueryResultHKT,
      typeof schema,
      ExtractTablesWithRelations<typeof schema>
    >
  ) => Promise<void>
) {
  await database.transaction(cb);
}
