import { getServerAuthSession } from "@/server/auth";
import Image from "next/image";
import React from "react";

const Page = async () => {
  const session = (await getServerAuthSession())!;

  return (
    <div className="flex flex-col">
      <div className="relative h-36 w-full bg-indigo-800">
        <div className="absolute bottom-[0%] right-[50%] h-32 w-32 translate-x-[50%] translate-y-[50%] overflow-hidden rounded-full border-8 border-background bg-white">
          <Image
            src={session.user.image ?? ""}
            alt="User avatar"
            width={128}
            height={128}
          />
        </div>
      </div>
      <h2 className="mt-20 text-center text-3xl">{session.user.name}</h2>
    </div>
  );
};

export default Page;
