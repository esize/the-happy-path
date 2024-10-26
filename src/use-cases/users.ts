import { animals, colors, uniqueNamesGenerator } from "unique-names-generator";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  getUserByUsername,
  verifyPassword,
} from "@/data-access/users";
import { getCurrentUser } from "@/lib/session";
import { UserId, UserSession } from "@/use-cases/types";

import { AuthenticationError, LoginError, PublicError } from "./errors";

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

export async function getUserRoleUseCase(id: number) {
  const user = await getUser(id);
  return user?.role;
}

export async function listAllUsersUseCase(): Promise<SafeUser[]> {
  const authenticatedUser = await getCurrentUser();

  if (!authenticatedUser) {
    throw new AuthenticationError();
  }
  const role = await getUserRoleUseCase(authenticatedUser.id);
  if (role !== "global_admin") {
    throw new PublicError("Only global admins can list all users");
  }
  return await getAllUsers();
}

export type SafeUser = {
  id: number;
  name: string;
  username: string;
  role: string;
};
