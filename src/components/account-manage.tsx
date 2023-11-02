"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

const AccountManageButtons = () => {
  const { mutate: deleteAccount } = api.user.deleteUser.useMutation();
  const router = useRouter();

  return (
    <>
      <Button
        className="mx-5 mt-auto"
        variant="outline"
        onClick={() => signOut()}
      >
        Log out
      </Button>
      <Button
        className="mx-5 mt-4"
        variant="destructive"
        onClick={() => {
          deleteAccount();
          router.push("/");
        }}
      >
        Delete Account
      </Button>
    </>
  );
};

export default AccountManageButtons;
