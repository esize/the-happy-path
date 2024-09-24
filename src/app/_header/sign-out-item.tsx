"use client";

import { LogOut } from "lucide-react";
import * as NProgress from "nprogress";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function SignOutItem() {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={async () => {
        NProgress.start();
        await new Promise((r) => setTimeout(r, 1000));
        NProgress.done();
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </DropdownMenuItem>
  );
}
