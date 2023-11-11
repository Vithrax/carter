"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NewProductValidator,
  type NewProductRequest,
} from "@/lib/validators/NewProduct";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { api } from "@/trpc/react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { parseError } from "@/lib/trpcErrorParser";
import { useRouter } from "next/navigation";
import { type Product } from "@/server/db/schema/product";

interface NewProductFormProps {
  setIsSheetOpen: (state: boolean) => void;
  initialData?: Product;
}

const NewProductForm = ({ setIsSheetOpen }: NewProductFormProps) => {
  const router = useRouter();

  const { mutate: createProduct, isLoading } = api.product.create.useMutation({
    onSuccess: () => {
      router.refresh();
      toast.success("Product created successfully!");
      setIsSheetOpen(false);
    },
    onError: (err) => {
      toast.error(parseError(err.message));
    },
  });

  const form = useForm<NewProductRequest>({
    resolver: zodResolver(NewProductValidator),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => createProduct(data))}
        className="flex h-full w-full flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Tomato" {...field} />
              </FormControl>
              <FormDescription>
                This will be product display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="mt-auto" type="submit">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default NewProductForm;
