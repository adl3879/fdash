import { createRouter } from "server/createRouter"
import { userRouter, protectedUserRouter } from "./user"
import { storeRouter, protectedStoreRouter } from "./store"

export const appRouter = createRouter()
  // routes
  .merge("user.", userRouter)
  .merge("store.", storeRouter)

  // protected routes
  .merge("store.", protectedStoreRouter)
  .merge("user.", protectedUserRouter)

export type AppRouter = typeof appRouter
