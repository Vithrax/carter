import { getServerAuthSession } from "@/server/auth";
import React from "react";

const Page = async () => {
  const session = await getServerAuthSession();
  const { user } = session!;

  return (
    <div className="py-2">
      <h2 className="text-center text-2xl">
        Welcome back {user.name?.split(" ")[0]}!
      </h2>
    </div>
  );
};

export default Page;
