import "@/styles/globals.css";

import { GeistSans } from "geist/font";
import { headers } from "next/headers";

import Providers from "@/components/providers";
import { Toaster } from "sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Carter | Home",
  description:
    "Ultimate shopping assistant. Record spendings, plan groceries, find the perfect balance. ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers headers={headers()}>
          <main className="overscroll-hidden grid min-h-[100dvh] w-full grid-rows-[auto,1fr,auto]">
            <Header />
            {children}
            <Footer />
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
