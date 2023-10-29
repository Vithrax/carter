import React from "react";
import { Acme } from "next/font/google";
import Link from "next/link";

const font = Acme({
  weight: ["400"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link href="/" className="flex items-end justify-center">
      <span className={`text-4xl ${font.className} leading-6 text-primary`}>
        cart
      </span>
      <span className="font-extrabold leading-4">APP</span>
    </Link>
  );
};

export default Logo;
