import { animals, colors, uniqueNamesGenerator } from "unique-names-generator";

import {
  createUser,
  deleteUser,
  getUser,
  getUserByUsername,
  verifyPassword,
} from "@/data-access/users";
import { UserId, UserSession } from "@/use-cases/types";

import { LoginError, PublicError } from "./errors";

export async function deleteUserUseCase(
  authenticatedUser: UserSession,
  userToDeleteId: UserId
): Promise<void> {
  if (authenticatedUser.id !== userToDeleteId) {
    throw new PublicError("You can only delete your own account");
  }

  await deleteUser(userToDeleteId);
}

export async function registerUserUseCase(username: string, password: string) {
  const existingUser = await getUserByUsername(username);
  if (existingUser) {
    throw new PublicError("That username is already taken!");
  }

  const displayName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: " ",
    style: "capital",
  });
  const user = await createUser(displayName, username, password);

  return { id: user.id };
}

export async function signInUseCase(username: string, password: string) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new LoginError();
  }

  const isPasswordCorrect = await verifyPassword(username, password);

  if (!isPasswordCorrect) {
    throw new LoginError();
  }

  return { id: user.id };
}

export async function getUserDisplayNameUseCase(id: number) {
  const user = await getUser(id);
  return user?.name;
}
