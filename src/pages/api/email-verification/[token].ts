import { NextApiRequest, NextApiResponse } from "next"
import { decodeJwtToken } from "server/utils/jwt"
import { prisma } from "server/utils/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.url?.split("/")[3]

  try {
    // decode token
    const data = decodeJwtToken(String(token), String(process.env.JWT_TOKEN))

    // check if id is in db
    const updatedUser = await prisma.user.update({
      where: { id: data.userId },
      data: { verified: true },
    })
    if (updatedUser) res.redirect("/set-up/" + data.userId)
  } catch (err) {
    console.log(err)
    throw new Error("something went wrong")
  }
}
