import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-8 items-center justify-between border-t px-5 py-1 text-sm text-muted-foreground">
      <span>&copy; 2023 Carter</span>
      <div className="flex items-center justify-center gap-2">
        <Github className="h-4 w-4" />
        <Linkedin className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default Footer;
