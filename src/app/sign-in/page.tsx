import SignIn from "@/components/sign-in";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carter | Sign In",
};

const Page = async () => {
  const session = await getServerAuthSession();
  if (session) return redirect("/app");

  return <SignIn />;
};

export default Page;
