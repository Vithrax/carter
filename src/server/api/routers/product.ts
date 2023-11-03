import { NewProductValidator } from "@/lib/validators/NewProduct";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { products } from "@/server/db/schema";

export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(NewProductValidator)
    .mutation(async ({ ctx, input }) => {
      const data = {
        ...input,
        userId: ctx.session.user.id,
      };
      await ctx.db.insert(products).values(data);
    }),
});
