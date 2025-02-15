import { Calendar, ChartArea, Check, Settings } from "lucide-react";
import React from "react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const AppSidebarContent = () => {
  const items = [
    {
      title: "Today",
      url: "/",
      icon: Check,
    },
    {
      title: "Planing",
      url: "/",
      icon: Calendar,
    },
    {
      title: "Analytics",
      url: "/",
      icon: ChartArea,
    },
    {
      title: "Setting",
      url: "/",
      icon: Settings,
    },
  ];

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};
