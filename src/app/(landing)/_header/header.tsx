import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Settings2Icon } from "lucide-react";

import { applicationName } from "@/app-config";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/lib/session";
import { getUserDisplayNameUseCase } from "@/use-cases/users";

import { HeaderLinks } from "./header-links";
import { MenuButton } from "./menu-button";
import { SignOutItem } from "./sign-out-item";

export async function Header() {
  const user = await getCurrentUser();

  return (
    <div className="bg-muted/70 px-5 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl justify-between py-4">
        <div className="flex items-center justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/forest-icon.svg"
              alt="Group Finder Logo"
              width={40}
              height={40}
              className="rounded-full"
            />

            <span className="text-sm font-bold md:text-base lg:text-2xl">
              {applicationName}
            </span>
          </Link>

          <HeaderLinks isAuthenticated={!!user} />
        </div>

        <div className="flex items-center justify-between gap-5">
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}

async function ProfileAvatar() {
  const user = await getCurrentUser();
  const name =
    user?.id !== undefined ? await getUserDisplayNameUseCase(user?.id) : "";

  return (
    <Avatar className="">
      <AvatarFallback className="bg-primary text-primary-foreground">
        {name?.substring(0, 2).toUpperCase() ?? "BB"}
      </AvatarFallback>
    </Avatar>
  );
}

async function HeaderActions() {
  const user = await getCurrentUser();
  const isSignedIn = !!user;
  return (
    <>
      {isSignedIn ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Suspense
                fallback={
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-800">
                    ..
                  </div>
                }
              >
                <ProfileAvatar />
              </Suspense>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-2">
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/settings"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Settings2Icon className="h-4 w-4" /> Settings
                </Link>
              </DropdownMenuItem>
              <SignOutItem />
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="md:hidden">
            <MenuButton />
          </div>
        </>
      ) : (
        <>
          <Button asChild variant="default">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </>
      )}
    </>
  );
}
