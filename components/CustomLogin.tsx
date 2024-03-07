// app/login/page.tsx - Custom <Authenticator>

"use client";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function CustomAuthenticator() {
  const { user, error } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (error) {
      console.error("Error:", error);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);

  return <Authenticator />;
}

export default function Login() {
  return (
    <Authenticator.Provider>
      <CustomAuthenticator />
    </Authenticator.Provider>
  );
}
