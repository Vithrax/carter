import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
  getUserData: protectedProcedure.query(({ ctx }) => {
    const id = ctx.session.user.id;
    const user = ctx.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
    return user;
  }),
  deleteUser: protectedProcedure.mutation(async ({ ctx }) => {
    const id = ctx.session.user.id;
    await ctx.db.delete(users).where(eq(users.id, id));
  }),
});
