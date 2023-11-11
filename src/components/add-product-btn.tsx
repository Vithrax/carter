"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import Sheet from "./sheet";
import NewProductForm from "./forms/new-product";

const AddProductButton = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Button
      size="icon"
      variant="outline"
      className="w-14"
      onClick={() => setIsSheetOpen(true)}
    >
      <PlusCircle />
      <Sheet
        isOpen={isSheetOpen}
        setIsOpen={setIsSheetOpen}
        title="New Product"
        description="Create a new entry in your library!"
      >
        <NewProductForm setIsSheetOpen={setIsSheetOpen} />
      </Sheet>
    </Button>
  );
};

export default AddProductButton;
