"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabStyles } from "@/util/styles";

export function SettingsTab() {
  const path = usePathname();
  const tabInUrl = path.split("/").pop();

  return (
    <div className={tabStyles}>
      <div className="container mx-auto">
        <Tabs value={tabInUrl} defaultValue={tabInUrl} activationMode="manual">
          <TabsList className="space-x-4 bg-inherit">
            <TabsTrigger asChild value="profile">
              <Link href={`/dashboard/settings/profile`}>Profile</Link>
            </TabsTrigger>

            <TabsTrigger asChild value="security">
              <Link href={`/dashboard/settings/security`}>Security</Link>
            </TabsTrigger>

            <TabsTrigger asChild value="danger">
              <Link href={`/dashboard/settings/danger`}>Danger</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
