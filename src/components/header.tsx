import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 w-full border-b px-2 py-1">
      <nav className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <ThemeToggle />
          <Button asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
