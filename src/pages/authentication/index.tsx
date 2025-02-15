import { useRouter } from "next/router";
import { useEffect } from "react";

import { LoginForm } from "@/features/authentication/components/login-form";
import { LoadingPage } from "@/shared/components/loading-page";
import { Routes } from "@/shared/config/routes";
import { useCurrentUser } from "@/shared/hooks/use-current-user";

export default function Page() {
  const router = useRouter();
  const { status } = useCurrentUser();

  useEffect(() => {
    if (status === "authenticated") {
      void router.push(Routes.home.url);
    }
  }, [router, status]);

  return (
    <LoadingPage isLoading={status === "loading"}>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </LoadingPage>
  );
}
