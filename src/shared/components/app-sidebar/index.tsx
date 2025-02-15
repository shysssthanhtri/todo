import React from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebarHeader } from "@/shared/components/app-sidebar/app-sidebar-header";
import { AppSidebarContent } from "@/shared/components/app-sidebar/sidebar-content";
import { AppSidebarFooter } from "@/shared/components/app-sidebar/sidebar-footer";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
};
