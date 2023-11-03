import z from "zod";

export const NewProductValidator = z.object({
  name: z
    .string()
    .min(5, { message: "Product name should be at least 5 characters." })
    .max(255, { message: "Product name should be at most 255 characters" }),
});

export type NewProductRequest = z.infer<typeof NewProductValidator>;
