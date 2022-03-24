import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { decodeJwtToken } from "server/utils/jwt"

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    if (opts?.req.headers.authorization) {
      const user = await decodeJwtToken(opts?.req.headers.authorization.split(" ")[1], String(process.env.JWT_SECRET))
      return user
    }
    return null
  }
  const user = await getUserFromHeader()

  return {
    user,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
