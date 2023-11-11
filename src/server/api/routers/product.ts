import { NewProductValidator } from "@/lib/validators/NewProduct";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { products } from "@/server/db/schema/product";
import { eq } from "drizzle-orm";

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
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    return await ctx.db
      .select()
      .from(products)
      .where(eq(products.userId, userId));
  }),
});
