"use client";

import { cn } from "@/lib/utils";
import { Home, ListTodo, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const isActive = (path: string, href: string): boolean => {
  const segments = path.split("/");

  console.log({ segments });

  // path should always have at least 2 segments, something went wrong
  if (segments.length === 1) return false;

  if (segments.length === 2) {
    return href === `/${segments[1]}`;
  } else {
    return href === `/${segments[0]}/${segments[1]}`;
  }
};

const MobileNav = () => {
  const path = usePathname();

  return (
    <div className="absolute bottom-0 h-20 w-full border-t">
      <div className="flex h-full items-center justify-around">
        <Link
          href="/app"
          className={cn(
            "flex flex-col items-center justify-center rounded-lg bg-primary/10 px-3 py-1.5",
            {
              "text-primary": isActive(path, "/app"),
            },
          )}
        >
          <Home />
          <span>Home</span>
        </Link>
        <Link
          href="/app/lists"
          className={cn(
            "flex flex-col items-center justify-center px-3 py-1.5",
            {
              "text-primary": isActive(path, "/app/lists"),
            },
          )}
        >
          <ListTodo />
          <span>Lists</span>
        </Link>
        <Link
          href="/app/search"
          className={cn(
            "flex flex-col items-center justify-center px-3 py-1.5",
            {
              "text-primary": isActive(path, "/app/search"),
            },
          )}
        >
          <Search />
          <span>Search</span>
        </Link>
        <Link
          href="/app/settings"
          className={cn(
            "flex flex-col items-center justify-center px-3 py-1.5",
            {
              "text-primary": isActive(path, "/app/settings"),
            },
          )}
        >
          <Settings />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
