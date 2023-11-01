"use client";

import { cn } from "@/lib/utils";
import { Home, Library, ListTodo, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";

const MobileNav = () => {
  const path = usePathname();

  return (
    <div className="absolute bottom-0 h-20 w-full border-t">
      <div className="flex h-full items-center justify-around">
        <MobileNavLink href="/app" path={path}>
          <Home />
          <span>Home</span>
        </MobileNavLink>
        <MobileNavLink href="/app/lists" path={path}>
          <ListTodo />
          <span>Lists</span>
        </MobileNavLink>
        <MobileNavLink href="/app/products" path={path}>
          <Library />
          <span>Products</span>
        </MobileNavLink>
        <MobileNavLink href="/app/account" path={path}>
          <Settings />
          <span>Settings</span>
        </MobileNavLink>
      </div>
    </div>
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
        "flex flex-col items-center justify-center rounded-lg px-3 py-1.5",
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
