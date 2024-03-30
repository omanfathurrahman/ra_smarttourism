import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  if (event.context.auth) {
    return prisma.user.findUnique({ where: { id: event.context.auth.id } })
  }
})