import MobileNav from "@/components/mobile-nav";
import { cn } from "@/lib/utils";
import { getServerAuthSession } from "@/server/auth";
import type { LayoutProps } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerAuthSession();
  if (!session) return redirect("/sign-in");

  return (
    <main className="relative overflow-auto">
      {children}
      <MobileNav />
    </main>
  );
};

export default Layout;
