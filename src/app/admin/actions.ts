"use server";

import { redirect } from "next/navigation";

import { invalidateSession, validateRequest } from "@/auth";

export async function signOutAction() {
  const { session } = await validateRequest();

  if (!session) {
    redirect("/sign-in");
  }

  await invalidateSession(session.id);
  redirect("/signed-out");
}
