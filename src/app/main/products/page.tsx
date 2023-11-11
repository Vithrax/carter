import AddProductButton from "@/components/add-product-btn";
import ProductItem from "@/components/product-item";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/server";
import React from "react";

const Page = async () => {
  const data = await api.product.getAll.query();

  return (
    <>
      <div className="h-full max-h-full overflow-auto px-1 py-2">
        <div className="flex items-center gap-2">
          <Input type="text" placeholder="🔍 Search products..." />
          <AddProductButton />
        </div>
        <ul className="mt-1 space-y-2 p-1">
          {data.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
