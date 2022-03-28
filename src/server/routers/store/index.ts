import { createRouter } from "server/createRouter"
import { createProtectedRouter } from "server/createProtectedRouter"
import { prisma } from "server/utils/prisma"
import { z } from "zod"

export const protectedStoreRouter = createProtectedRouter()
  // create new store
  .mutation("createStore", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      domain: z.string(),
      logo: z.any(),
    }),

    async resolve({ input }) {
      const store = await prisma.store.create({
        data: {
          name: input.name,
          description: input.description,
          domain: input.domain,
          logoUrl: input.logo,
        },
      })
    },
  })

export const storeRouter = createRouter()
