import Fab from "@/components/fab";
import NewProductForm from "@/components/forms/new-product";
import React from "react";

const Page = () => {
  return (
    <div className="h-full">
      <Fab
        description="Create a new entry in your library!"
        title="New Product"
      >
        <NewProductForm />
      </Fab>
    </div>
  );
};

export default Page;
