import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { AuthGuard } from "@/shared/guards/auth-guard";

interface Props {
  children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
  return (
    <AuthGuard>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </AuthGuard>
  );
};
