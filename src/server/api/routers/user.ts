import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserData: protectedProcedure.query(({ ctx }) => {
    const id = ctx.session.user.id;
    const user = ctx.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });
    return user;
  }),
});
