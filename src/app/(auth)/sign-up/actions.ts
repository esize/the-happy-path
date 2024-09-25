"use server";

import { redirect } from "next/navigation";

import { z } from "zod";

import { afterLoginUrl } from "@/app-config";
import { unauthenticatedAction } from "@/lib/safe-action";
import { setSession } from "@/lib/session";
import { registerUserUseCase } from "@/use-cases/users";

export const signUpAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      username: z.string().min(2).max(32),
      password: z.string().min(8),
    })
  )
  .handler(async ({ input }) => {
    const user = await registerUserUseCase(input.username, input.password);
    await setSession(user.id);
    return redirect(afterLoginUrl);
  });
