import { ReactNode } from "react";

import { getCurrentUser } from "@/lib/session";

export async function SignedIn({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  return user && <>{children}</>;
}

export async function SignedOut({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  return !user && <>{children}</>;
}
