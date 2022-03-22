import { createRouter } from "server/createRouter"
import { z } from "zod"

export const appRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),

  resolve({ input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`,
    }
  },
})

// export type definition of API
export type AppRouter = typeof appRouter
