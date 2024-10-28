"use server";

import { revalidatePath } from "next/cache";

import { z } from "zod";

import { unauthenticatedAction } from "@/lib/safe-action";
import { addUserUseCase } from "@/use-cases/users";

export const signUpAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      name: z.string().min(2).max(32),
      username: z.string().min(2).max(32),
      password: z.string().min(8),
      role: z.enum(["user", "admin", "global_admin"]),
    })
  )
  .handler(async ({ input }) => {
    await addUserUseCase(
      input.username,
      input.password,
      input.name,
      input.role
    );
    revalidatePath("/admin/users");
  });
