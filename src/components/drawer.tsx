"use client";

import { Drawer } from "vaul";
import { Button, type ButtonProps } from "./ui/button";

interface SheetProps extends ButtonProps {
  buttonText: string;
}

const Sheet = ({ buttonText, children, ...props }: SheetProps) => {
  return (
    <Drawer.Root>
      <Button asChild {...props}>
        <Drawer.Trigger>{buttonText}</Drawer.Trigger>
      </Button>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-muted">
          <div className="inset-0 flex h-8 items-center justify-center">
            <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          </div>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Sheet;
