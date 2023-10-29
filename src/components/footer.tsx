import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t px-5 py-6 text-sm text-muted-foreground">
      <div className="grid w-full grid-cols-2 place-items-center">
        <div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#start"
                className="font-medium underline underline-offset-4 transition-all hover:text-primary"
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                href="/#featured"
                className="font-medium underline underline-offset-4 transition-all hover:text-primary"
              >
                Featured in
              </Link>
            </li>
            <li>
              <Link
                href="/#getting-started"
                className="font-medium underline underline-offset-4 transition-all hover:text-primary"
              >
                Getting started
              </Link>
            </li>
            <li>
              <Link
                href="/#details"
                className="font-medium underline underline-offset-4 transition-all hover:text-primary"
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                href="/#cta"
                className="font-medium underline underline-offset-4 transition-all hover:text-primary"
              >
                Join
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          &copy; 2023 Cartapp inc.
          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/Vithrax" target="_blank">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-gajdulewicz-50137518b/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
