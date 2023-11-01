import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const session = (await getServerAuthSession())!;

  return (
    <div className="flex flex-col">
      <div className="relative h-52 w-full bg-indigo-800">
        <div className="absolute bottom-[0%] right-[50%] h-48 w-48 translate-x-[50%] translate-y-[50%] overflow-hidden rounded-full border-8 border-background bg-white">
          <Image
            src={session.user.image ?? ""}
            alt="User avatar"
            width={200}
            height={200}
          />
        </div>
      </div>
      <h2 className="mt-28 text-center text-3xl">{session.user.name}</h2>
    </div>
  );
};

export default Page;
