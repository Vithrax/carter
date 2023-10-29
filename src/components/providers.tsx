"use client";

import React from "react";
import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";

import { type ThemeProviderProps } from "next-themes/dist/types";

interface ProvidersProps extends ThemeProviderProps {
  headers: Headers;
}

const Providers = ({ children, headers, ...props }: ProvidersProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" {...props}>
      <TRPCReactProvider headers={headers}>{children}</TRPCReactProvider>
    </ThemeProvider>
  );
};

export default Providers;
