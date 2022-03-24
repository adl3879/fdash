import { createRouter } from "server/createRouter"
import { z } from "zod"
import { prisma } from "server/utils/prisma"
import bcrypt from "bcrypt"
import { signJwtToken } from "server/utils/jwt"

export const userRouter = createRouter()
  // sign up
  .mutation("signUp", {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      password: z.string().min(8, "Password should have at least 8 characters."),
      phone: z.string().min(11),
    }),

    async resolve({ input }) {
      // check if email is unique
      const checkUser = await prisma.user.findUnique({
        where: { email: input.email },
      })
      if (checkUser) {
        throw new Error("An account with this email address already exists, please input a new one")
      }

      const user = await prisma.user.create({
        data: {
          email: input.email,
          lastName: input.lastName,
          firstName: input.firstName,
          password: await bcrypt.hash(input.password, 10),
          phone: input.phone,
        },
      })

      // TODO!
      // send verification email to user

      // sign token
      const token = await signJwtToken(user, String(process.env.JWT_SECRET), "7d")

      return { token }
    },
  })
  // login
  .query("login", {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, "Password should have at least 8 characters."),
    }),

    async resolve({ input }) {
      // find email in db
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      })
      if (!user) {
        throw new Error("The email address that you entered does not match any account")
      }

      // check if password is correct
      const valid = await bcrypt.compare(input.password, user.password)
      if (!valid) {
        throw new Error("The password that you entered is not correct")
      }

      // sign token
      const token = await signJwtToken(user, String(process.env.JWT_SECRET), "7d")

      return { token }
    },
  })
