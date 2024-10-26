"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Building2, FolderKey, Users } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function SidebarLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isActive("/admin/users")}>
            <Link href="/admin/users">
              <Users className="mr-2 h-4 w-4" />
              <span>User Management</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isActive("/admin/tenants")}>
            <Link href="/admin/teams">
              <Building2 className="mr-2 h-4 w-4" />
              Team Management
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isActive("/admin/roles")}>
            <Link href="/admin/roles">
              <FolderKey className="mr-2 h-4 w-4" />
              Role Management
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
