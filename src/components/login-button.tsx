"use client";

import type { Session } from "next-auth";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface LoginButtonProps {
  session: Session | null;
}

const LoginButton = ({ session }: LoginButtonProps) => {
  if (session) {
    return <Button onClick={() => signOut()}>Log out</Button>;
  }

  return (
    <Button asChild>
      <Link href="/sign-in">Sign in</Link>
    </Button>
  );
};

export default LoginButton;
