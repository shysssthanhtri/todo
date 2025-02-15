import React from "react";

import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebarContent } from "@/shared/components/app-sidebar/sidebar-content";
import { AppSidebarFooter } from "@/shared/components/app-sidebar/sidebar-footer";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
};
