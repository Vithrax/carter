"use client";

import { Drawer } from "vaul";
import { Button, type ButtonProps } from "./ui/button";
import { type ReactNode } from "react";
import { useSheetStore } from "@/state/sheet-state";

interface SheetProps extends ButtonProps {
  triggerContent: ReactNode;
}

const Sheet = ({ triggerContent, children, ...props }: SheetProps) => {
  const { isOpen, setIsOpen } = useSheetStore();

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild {...props}>
        <Drawer.Trigger>{triggerContent}</Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 grid h-fit max-h-[90%] min-h-[50%] grid-rows-[auto,auto,auto,1fr] rounded-t-[10px] bg-muted px-4 pb-2">
          <div className="inset-0 mb-4 flex h-8 items-center justify-center">
            <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          </div>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Sheet;
