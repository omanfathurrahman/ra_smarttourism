import jwt from 'jsonwebtoken'
import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {

  const { email, password } = await readBody(event)
  console.log(email, password)
  const user = await prisma.user.findUnique({ where: { email: email } })
  const privateKey = process.env.PRIVATE_KEY || 'SMARTTOURISMANDHOSPITALITY'
  console.log(user, privateKey)
  if (!user) {
    return new Response('User not found', { status: 404 })
  }
  if (user.password !== password) {
    return new Response('Invalid password', { status: 401 })
  }
  const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '24h' })
  console.log(token)
  return token
})
