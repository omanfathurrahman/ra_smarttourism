import { User } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare module 'h3' {
  interface H3EventContext {
    auth: { id: string };
  }
}
export default defineEventHandler(async (event) => {
  const headers = getHeaders(event)
  const privateKey = process.env.PRIVATE_KEY || 'privateKey'
  if (headers.authorization) {
    // TODO: add a middleware for accessing the authenticated user in my api endpoints easier
    event.context.auth = { id: (jwt.verify(headers.authorization.split(' ')[1], privateKey) as JwtPayload as User).id }
  }
})
