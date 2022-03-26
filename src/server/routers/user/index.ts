import { createRouter } from "server/createRouter"
import { z } from "zod"
import { prisma } from "server/utils/prisma"
import bcrypt from "bcrypt"
import { signJwtToken } from "server/utils/jwt"
import { sendMail } from "server/utils/email"
import crypto from "crypto"

export const userRouter = createRouter()
  // get user by id
  .query("getUserById", {
    input: z.number(),

    async resolve({ input: id }) {
      const user = await prisma.user.findUnique({
        where: { id },
      })
      if (!user) throw new Error("User not found")

      return { user }
    },
  })
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

      // sign token
      const token = await signJwtToken(user, String(process.env.JWT_SECRET), "7d")

      return { token }
    },
  })
  // login
  .mutation("login", {
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
  // send verification email to user
  .mutation("sendVerificationEmail", {
    input: z.string().email(),

    async resolve({ input: email }) {
      const user = await prisma.user.findUnique({
        where: { email },
      })

      const token = await signJwtToken({ userId: user?.id }, String(process.env.JWT_TOKEN), "1h")
      const url = "http://localhost:3000/api/email-verification/" + token

      // send email
      const sent = sendMail({
        to: "oluwatoyosiadeleye4@gmail.com",
        from: "adekanmbitoyosi@yahoo.com",
        subject: "<verification email>",
        text: url,
      })

      return { sent }
    },
  })
  // send password reset link
  .mutation("sendPasswordResetEmail", {
    input: z.string().email(),

    async resolve({ input: email }) {
      const token = crypto.randomBytes(32).toString("hex")

      try {
        await prisma.user.update({
          where: { email },
          data: {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000, // 1hr
          },
        })
      } catch (err) {
        throw new Error("No account with that email address exists")
      }

      // send email
      const sent = sendMail({
        to: "oluwatoyosiadeleye4@gmail.com",
        from: "adekanmbitoyosi@yahoo.com",
        subject: "<reset password>",
        text: "http://localhost:3000/reset-password/" + token,
      })

      return { sent }
    },
  })
  // validate reset token
  .mutation("validatePasswordReset", {
    input: z.object({
      token: z.string(),
      newPassword: z.string().min(8),
      confirmPassword: z.string().min(8),
    }),

    async resolve({ input }) {
      const user = await prisma.user.findFirst({
        where: {
          resetPasswordToken: input.token,
          resetPasswordExpires: { gte: Date.now() },
        },
      })

      if (user) {
        if (input.newPassword === input.confirmPassword) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              password: input.newPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            },
          })
        } else {
          throw new Error("Passwords do not match")
        }
      } else {
        throw new Error("Reset token is no longer valid")
      }
    },
  })
