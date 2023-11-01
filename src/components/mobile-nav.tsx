"use client";

import { cn } from "@/lib/utils";
import { BookText, Home, Library, ListTodo, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";

const MobileNav = () => {
  const path = usePathname();

  return (
    <nav className="absolute bottom-0 h-14 w-full border-t">
      <div className="grid h-full grid-cols-5">
        <MobileNavLink href="/main" path={path}>
          <Home className="h-5 w-5" />
          <span>Home</span>
        </MobileNavLink>
        <MobileNavLink href="/main/recipes" path={path}>
          <BookText className="h-5 w-5" />
          <span>Recipes</span>
        </MobileNavLink>
        <MobileNavLink href="/main/lists" path={path}>
          <ListTodo className="h-5 w-5" />
          <span>Lists</span>
        </MobileNavLink>
        <MobileNavLink href="/main/products" path={path}>
          <Library className="h-5 w-5" />
          <span>Products</span>
        </MobileNavLink>
        <MobileNavLink href="/main/account" path={path}>
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </MobileNavLink>
      </div>
    </nav>
  );
};

interface MobileNavLinkProps {
  path: string;
  href: string;
  children: ReactNode;
}

const isActive = (path: string, href: string): boolean => {
  const segments = path.split("/");

  // path should always have at least 2 segments, something went wrong
  if (segments.length < 2) return false;

  if (segments.length === 2) {
    return href === `/${segments[1]}`;
  } else {
    return href === `/${segments[1]}/${segments[2]}`;
  }
};

const MobileNavLink = ({ path, href, children }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 px-3 py-1.5 text-xs transition-all",
        {
          "bg-primary/10 text-primary": isActive(path, href),
        },
      )}
    >
      {children}
    </Link>
  );
};

export default MobileNav;
