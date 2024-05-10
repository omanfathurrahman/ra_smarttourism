import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  if (event.context.auth) {
    const user = prisma.user.findUnique({ where: { id: event.context.auth.id } })
    if (user) {
      return user
    }
  }
  return null
})