import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

export default async function HomePage() {
  const user = await getCurrentUser();

  if (user) {
    return redirect("/dashboard");
  }

  return <div>Create your account today!</div>;
}
