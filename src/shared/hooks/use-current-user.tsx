import { useSession } from "next-auth/react";

import { type TUserEntity } from "@/shared/entities/user.entities";
import { api } from "@/utils/api";

type UseCurrentUserValue =
  | {
      status: "authenticated";
      user: TUserEntity;
    }
  | {
      status: "loading";
      user?: unknown;
    }
  | {
      status: "unauthenticated";
      user?: unknown;
    };

export const useCurrentUser = (): UseCurrentUserValue => {
  const { status } = useSession();
  const { data: user, isLoading } = api.user.getCurrentUser.useQuery(
    undefined,
    {
      enabled: status === "authenticated",
    },
  );
  if (status !== "authenticated") {
    return { status };
  }
  if (isLoading) {
    return { status: "loading" };
  }
  if (!user) {
    return { status: "unauthenticated" };
  }

  return {
    status,
    user,
  };
};
