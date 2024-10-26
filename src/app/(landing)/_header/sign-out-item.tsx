"use client";

import { LogOut } from "lucide-react";
import * as NProgress from "nprogress";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import { signOutAction } from "./actions";

export function SignOutItem() {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={async () => {
        NProgress.start();
        signOutAction().then(() => {
          NProgress.done();
        });
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </DropdownMenuItem>
  );
}
