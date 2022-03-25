import jwt from "jsonwebtoken"

export async function signJwtToken(user: object, secret: jwt.Secret, duration: string) {
  return jwt.sign(user, secret, { expiresIn: duration })
}

export function decodeJwtToken(token: string, secretOrPublicKey: jwt.Secret): any {
  const decodedToken = jwt.verify(token, secretOrPublicKey)
  return decodedToken
}
