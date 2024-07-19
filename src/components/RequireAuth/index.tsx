"use client";

import React, { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getTokenFromLocalStorage } from "@/localstorage/tokenStorage";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = getTokenFromLocalStorage();
    if (!accessToken) {
      router.push("/auth/sign-in");
      return;
    }
  }, []);

  return <>{children}</>;
};

export default RequireAuth;
