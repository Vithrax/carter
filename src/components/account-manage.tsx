"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const AccountManageButtons = () => {
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
        onClick={() => toast("Not implemented yet :)")}
      >
        Delete Account
      </Button>
    </>
  );
};

export default AccountManageButtons;
