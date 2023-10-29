"use client";
import React from "react";
import { Button } from "./ui/button";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div className="mx-4 mt-20 flex h-fit flex-col items-center gap-8 rounded-lg border px-4 py-12">
      <h2 className="text-2xl">Sign in to your account</h2>
      <Button className="flex gap-2" onClick={() => signIn("google")}>
        <Chrome />
        Authenticate using Google
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        By creating Carter account you are accepting our{" "}
        <span className="font-medium underline underline-offset-4 transition-all hover:text-primary">
          Terms
        </span>{" "}
        and{" "}
        <span className="font-medium underline underline-offset-4 transition-all hover:text-primary">
          Policy
        </span>
      </p>
    </div>
  );
};

export default SignIn;
