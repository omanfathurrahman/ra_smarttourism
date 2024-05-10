import jwt from 'jsonwebtoken'
import { prisma } from '~/prisma/db'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  const user = await prisma.user.findUnique({ where: { email: email } })
  console.log(user)
  const privateKey = process.env.PRIVATE_KEY!
  if (!user) {
    return new Response('User not found', { status: 404, statusText: 'User Not Found'})
  }
  if (user.password !== password) {
    return new Response('Invalid password', { status: 401 })
  }
  const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '1h' })
  return token
})
