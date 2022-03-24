import { createRouter } from "server/createRouter"
import { userRouter } from "./user"

export const appRouter = createRouter()
  // routes
  .merge("user.", userRouter)

export type AppRouter = typeof appRouter
