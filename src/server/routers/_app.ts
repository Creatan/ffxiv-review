import { publicProcedure, router } from "../trpc";

// Add created routes here
export const appRouter = router({
  greeting: publicProcedure.query(async () => {
    return `Hello from trpc`;
  }),
});

export type AppRouter = typeof appRouter;
