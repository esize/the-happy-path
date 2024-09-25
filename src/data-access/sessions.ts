import { eq } from "drizzle-orm";

import { database } from "@/db";
import { sessions } from "@/db/schema";
import { UserId } from "@/use-cases/types";

export async function deleteSessionForUser(userId: UserId, trx = database) {
  await trx.delete(sessions).where(eq(sessions.userId, userId));
}
