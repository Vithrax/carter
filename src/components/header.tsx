import React from "react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className={cn("h-14 w-full border-b px-3 py-1")}>
      <nav className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
