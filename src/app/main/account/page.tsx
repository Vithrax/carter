import { api } from "@/trpc/server";
import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";
import { Calendar } from "lucide-react";
import AccountManageButtons from "@/components/account-manage";

const Page = async () => {
  const user = await api.user.getUserData.query();
  if (!user) redirect("/sign-in");

  console.log(user);

  return (
    <div className="flex h-full w-full flex-col pb-4">
      <div className="relative h-32 w-full bg-zinc-700">
        <div className="absolute bottom-[0%] right-[50%] h-24 w-24 translate-x-[50%] translate-y-[50%] overflow-hidden rounded-full border-8 border-muted bg-white">
          <Image
            src={user.image ?? ""}
            alt="User avatar"
            width={128}
            height={128}
          />
        </div>
      </div>
      <h2 className="mt-16 text-center text-3xl">{user.name}</h2>
      <div className="mt-4 flex items-center justify-center">
        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-5 w-5 text-primary" />
          {user.created_at?.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
      <AccountManageButtons />
    </div>
  );
};

export default Page;
