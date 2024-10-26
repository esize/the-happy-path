import { icons } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getCurrentUser } from "@/lib/session";

import { SidebarLinks } from "./sidebar-links";
import { TeamSwitcher } from "./team-switcher";
import { UserDropdown } from "./user-dropdown";

const tenants: {
  id: string;
  name: string;
  logo: keyof typeof icons;
  plan: string;
}[] = [
  {
    id: "tenant-1",
    name: "Acme Inc",
    logo: "GalleryVerticalEnd",
    plan: "Enterprise",
  },
  {
    id: "tenant-2",
    name: "Acme Corp.",
    logo: "AudioWaveform",
    plan: "Startup",
  },
  {
    id: "tenant-3",
    name: "Evil Corp.",
    logo: "Command",
    plan: "Free",
  },
];

export async function AdminSidebar() {
  const user = await getCurrentUser();

  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <TeamSwitcher teams={tenants} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="mx-2">
          <SidebarLinks />
        </SidebarContent>
        <SidebarFooter>
          <UserDropdown user={user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  );
}
