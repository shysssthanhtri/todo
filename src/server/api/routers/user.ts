import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirstOrThrow({
      where: { id: ctx.session.user.id },
    });
    return user;
  }),
});
