import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("hp_user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username").unique(),
  password: text("password"),
  salt: text("salt"),
  role: text("role", { enum: ["user", "admin", "global_admin"] })
    .default("user")
    .notNull(),
});

export const sessions = pgTable(
  "hp_session",
  {
    id: text("id").primaryKey(),
    userId: serial("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", {
      withTimezone: true,
      mode: "date",
    }).notNull(),
  },
  (table) => ({
    userIdIdx: index("sessions_user_id_idx").on(table.userId),
  })
);

export type User = typeof users.$inferSelect;
export type Session = typeof sessions.$inferSelect;
