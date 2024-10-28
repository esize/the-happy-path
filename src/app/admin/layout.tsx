import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AdminSidebar } from "./_sidebar/admin-sidebar";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
        <SidebarTrigger className="fixed bottom-0 m-2" />
        {children}
      </main>
    </SidebarProvider>
  );
}
