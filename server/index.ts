import { z } from "zod";
import { initTRPC } from "@trpc/server";
import { config } from "dotenv";

config({
  path: ".env.local",
});
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create();
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `Hello, ${opts.input.text}!`,
      };
    }),
});

export type AppRouter = typeof appRouter;
