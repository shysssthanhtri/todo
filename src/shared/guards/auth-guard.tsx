import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { LoadingPage } from "@/shared/components/loading-page";
import { Routes } from "@/shared/config/routes";
import { useCurrentUser } from "@/shared/hooks/use-current-user";

interface Props {
  children: React.ReactNode;
}
export const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const { status } = useCurrentUser();

  useEffect(() => {
    if (status === "unauthenticated") {
      void router.push(Routes.authentication.url);
    }
  }, [router, status]);

  return <LoadingPage isLoading={status === "loading"}>{children}</LoadingPage>;
};
