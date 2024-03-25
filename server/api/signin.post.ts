import jwt from 'jsonwebtoken';
import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {

  const { email, password } = await readBody(event)
  const user = await prisma.user.findUnique({ where: { email: email } })
  const privateKey = process.env.PRIVATE_KEY || 'SMARTTOURISMANDHOSPITALITY'
  if (!user) {
    return new Response('User not found', { status: 404 })
  }
  if (user.password !== password) {
    return new Response('Invalid password', { status: 401 })
  }
  const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '24h' })
  return token
})
