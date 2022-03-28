import { createRouter } from "server/createRouter"
import { createProtectedRouter } from "server/createProtectedRouter"
import { prisma } from "server/utils/prisma"
import { uploadImage } from "server/utils/cloudinary"
import { z } from "zod"

export const protectedStoreRouter = createProtectedRouter()
  // create new store
  .mutation("createStore", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      domain: z.string(),
      logo: z.string(),
    }),

    async resolve({ ctx, input }) {
      // const logoUrl = await uploadImage(input.logo)

      const store = await prisma.store.create({
        data: {
          // user: ctx.user,
          name: input.name,
          description: input.description,
          domain: input.domain,
          logoUrl: "brrrrrrr",
        },
      })

      return { store }
    },
  })

export const storeRouter = createRouter()
