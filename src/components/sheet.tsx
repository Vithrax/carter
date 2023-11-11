"use client";

import { Drawer } from "vaul";
import { type PropsWithChildren } from "react";

interface SheetProps extends PropsWithChildren {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title: string;
  description?: string;
}

const Sheet = ({
  title,
  description,
  children,
  isOpen,
  setIsOpen,
}: SheetProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 grid h-fit max-h-[90%] min-h-[10%] grid-rows-[auto,auto,auto,1fr] rounded-t-[10px] bg-muted px-4 pb-2">
          <div className="inset-0 mb-4 flex h-8 items-center justify-center">
            <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          </div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mb-4 text-muted-foreground">{description}</p>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Sheet;
