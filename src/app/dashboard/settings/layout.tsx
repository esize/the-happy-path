import Link from "next/link";
import { Suspense } from "react";

import { SquareUser } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";

import { SettingsTab } from "./tabs-section";

export default async function SettingsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={cn("py-8")}>
        <div className="container mx-auto">
          <div className="flex justify-between">
            <h1 className={cn()}>Account Settings</h1>

            <Suspense
              fallback={<Skeleton className="h-[40px] w-[160px] rounded" />}
            >
              <SwitchProfileButton />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<Skeleton className="h-[40px] w-full rounded" />}>
        <SettingsTab />
      </Suspense>

      <div className="container mx-auto py-12">{children}</div>
    </>
  );
}

async function SwitchProfileButton() {
  const user = await getCurrentUser();
  return (
    <Button asChild>
      <Link href={`/users/${user!.id}`}>
        <SquareUser /> Switch to Profile
      </Link>
    </Button>
  );
}
