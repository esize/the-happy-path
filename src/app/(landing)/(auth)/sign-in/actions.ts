"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

import { afterLoginUrl } from "@/app-config";
import { unauthenticatedAction } from "@/lib/safe-action";
import { setSession } from "@/lib/session";
import { signInUseCase } from "@/use-cases/users";

export const signInAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      username: z.string().min(2).max(32),
      password: z.string().min(8),
    })
  )
  .handler(async ({ input }) => {
    const user = await signInUseCase(input.username, input.password);
    await setSession(user.id);
    revalidatePath(afterLoginUrl);
    redirect(afterLoginUrl);
  });
