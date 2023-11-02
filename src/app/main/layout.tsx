import MobileNav from "@/components/mobile-nav";
import { getServerAuthSession } from "@/server/auth";
import type { LayoutProps } from "@/types";
import { redirect } from "next/navigation";

const Layout = async ({ children }: LayoutProps) => {
  const session = await getServerAuthSession();
  if (!session) return redirect("/sign-in");

  return (
    <div className="relative">
      <main className="h-[calc(100dvh-7rem)] overflow-auto bg-muted dark:bg-zinc-950">
        {children}
      </main>
      <MobileNav />
    </div>
  );
};

export default Layout;
