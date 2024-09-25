import crypto from "crypto";
import { eq } from "drizzle-orm";

import { database } from "@/db";
import { User, users } from "@/db/schema/auth";
import { UserId } from "@/use-cases/types";

const ITERATIONS = 10000;

export async function deleteUser(userId: UserId) {
  await database.delete(users).where(eq(users.id, userId));
}

export async function getUser(userId: UserId) {
  const user = await database.query.users.findFirst({
    where: eq(users.id, userId),
  });

  return user;
}

async function hashPassword(plainTextPassword: string, salt: string) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(
      plainTextPassword,
      salt,
      ITERATIONS,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString("hex"));
      }
    );
  });
}

export async function createUser(
  name: string,
  username: string,
  password: string
) {
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = await hashPassword(password, salt);
  const [user] = await database
    .insert(users)
    .values({
      name,
      username,
      password: hash,
      salt,
    })
    .returning();
  return user;
}

export async function verifyPassword(
  username: string,
  plainTextPassword: string
) {
  const user = await getUserByUsername(username);

  if (!user) {
    return false;
  }

  const salt = user.salt;
  const savedPassword = user.password;

  if (!salt || !savedPassword) {
    return false;
  }

  const hash = await hashPassword(plainTextPassword, salt);
  return user.password == hash;
}

export async function getUserByUsername(username: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.username, username),
  });

  return user;
}

export async function updateUser(userId: UserId, updatedUser: Partial<User>) {
  await database.update(users).set(updatedUser).where(eq(users.id, userId));
}
