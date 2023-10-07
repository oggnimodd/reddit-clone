import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import { appRouter } from "./playground/root";
import { clerkPlugin } from "./playground/plugins/clerk";
import { cors } from "@elysiajs/cors";
import { createTRPCContext } from "./playground/trpc";

const app = new Elysia()
  .use(cors())
  .use(clerkPlugin())
  .use(
    trpc(appRouter, {
      createContext: createTRPCContext,
    }),
  )
  .listen(8080);

console.log("server is running on port 8080");
