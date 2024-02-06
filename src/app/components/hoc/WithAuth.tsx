"use client";
import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();

  useEffect(() => {
    if (authStatus !== "authenticated") {
      router.push("/");
    }
  });

  return <>{children}</>;
};

export default WithAuth;
