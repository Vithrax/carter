"use client";

import React, { useState } from "react";
import { type Product } from "@/server/db/schema/product";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react";
import { Button } from "./ui/button";
import Sheet from "./sheet";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, name } = product;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <li
      key={id}
      className="overflow-hidden rounded-sm border bg-background py-1 shadow-sm"
    >
      <div
        className="flex items-center justify-between px-2"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <span className="px-2 py-1">{name}</span>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isExpanded && (
        <div className="flex w-full items-center gap-2 border-t px-2 py-1">
          <Button
            size="icon"
            variant="outline"
            className="w-16"
            onClick={() => setIsSheetOpen(true)}
          >
            <Pencil className="text-primary" />
            <Sheet
              isOpen={isSheetOpen}
              setIsOpen={setIsSheetOpen}
              title="Edit Product"
              description="Edit existing product information"
            />
          </Button>
        </div>
      )}
    </li>
  );
};

export default ProductItem;
