"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import useMediaQuery from "@/hooks/use-media-query";
import { BookIcon, SearchIcon, UsersIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeaderLinks({ isAuthenticated }: { isAuthenticated: boolean }) {
  const path = usePathname();
  // const { isMobile } = useMediaQuery();
  const isLandingPage = path === "/";

  // if (isMobile) return null;

  return (
    <>
      {!isLandingPage && isAuthenticated && (
        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant={"ghost"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/dashboard"}>
              <UsersIcon className="h-4 w-4" /> Your Groups
            </Link>
          </Button>

          <Button
            variant={"ghost"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/browse"}>
              <SearchIcon className="h-4 w-4" /> Browse Groups
            </Link>
          </Button>

          <Button
            variant={"ghost"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/docs"}>
              <BookIcon className="h-4 w-4" /> API Docs
            </Link>
          </Button>
        </div>
      )}

      {(isLandingPage || !isAuthenticated) && (
        <div className="hidden gap-4 md:flex">
          <Button variant={"link"} asChild>
            <Link href="/#features">Features</Link>
          </Button>

          <Button variant={"link"} asChild>
            <Link href="/#pricing">Pricing</Link>
          </Button>

          <Button variant={"link"} asChild>
            <Link href={"/browse"}>Browse Groups</Link>
          </Button>
        </div>
      )}
    </>
  );
}
