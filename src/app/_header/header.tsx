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

import { HeaderLinks } from "./header-links";
import { MenuButton } from "./menu-button";
import { SignOutItem } from "./sign-out-item";

export async function Header() {
  return (
    <div className="px-5 md:px-6">
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

          <HeaderLinks isAuthenticated={false} />
        </div>

        <div className="flex items-center justify-between gap-5">
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}

async function ProfileAvatar() {
  return (
    <Avatar>
      <AvatarFallback>{"AA"}</AvatarFallback>
    </Avatar>
  );
}

async function HeaderActions() {
  const isSignedIn = true;
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
          <Button asChild variant="secondary">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </>
      )}
    </>
  );
}
