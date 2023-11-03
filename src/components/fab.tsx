import { Plus } from "lucide-react";
import React, { type ReactNode } from "react";
import Sheet from "./sheet";

interface FabProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Fab = ({
  title = "mock title",
  description = "mock description",
  children = <p>Mock content</p>,
}: FabProps) => {
  return (
    <Sheet
      className="fixed bottom-20 right-5"
      size="icon"
      triggerContent={<Plus />}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mb-4 text-muted-foreground">{description}</p>
      {children}
    </Sheet>
  );
};

export default Fab;
