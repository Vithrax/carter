import React from "react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";
import { getServerAuthSession } from "@/server/auth";
import LoginButton from "./login-button";

const Header = async () => {
  const session = await getServerAuthSession();

  return (
    <header className={cn("h-14 w-full border-b px-3 py-1")}>
      <nav className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <ThemeToggle />
          <LoginButton session={session} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
