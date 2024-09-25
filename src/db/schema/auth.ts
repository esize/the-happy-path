import {
  index,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["member", "admin"]);
export const accountTypeEnum = pgEnum("type", ["username"]);

export const users = pgTable(
  "hp_user",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    accountType: accountTypeEnum("accountType").notNull().default("username"),
    username: text("username").unique(),
    password: text("password"),
    salt: text("salt"),
  },
  (table) => ({
    userIdAccountTypeIdx: index("user_id_account_type_idx").on(
      table.accountType
    ),
  })
);

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
