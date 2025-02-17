import React, { useCallback, useEffect, useState } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { AuthGuard } from "@/shared/guards/auth-guard";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";

interface Props {
  children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
  const persistedValue = useLocalStorage("app-sidebar", false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (persistedValue.value !== isOpen) {
        setIsOpen(persistedValue.value);
      }
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [persistedValue.value, isOpen]);

  const onOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      persistedValue.setValue(open);
    },
    [persistedValue],
  );

  return (
    <AuthGuard>
      <SidebarProvider open={isOpen} onOpenChange={onOpenChange}>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </AuthGuard>
  );
};
