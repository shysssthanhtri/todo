import React from "react";

import { AuthGuard } from "@/shared/guards/auth-guard";

const Page = () => {
  return <AuthGuard>Home page</AuthGuard>;
};

export default Page;
