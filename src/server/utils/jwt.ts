import jwt from "jsonwebtoken"

export async function signJwtToken(user: object, secret: jwt.Secret, duration: string) {
  return jwt.sign(user, secret, { expiresIn: duration })
}

export async function decodeJwtToken(token: string, secretOrPublicKey: jwt.Secret) {
  const decodedToken = jwt.verify(token, secretOrPublicKey)
  console.log(decodedToken)
}
