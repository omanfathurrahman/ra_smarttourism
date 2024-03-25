import { prisma } from "~/prisma/db";

export default defineEventHandler(async (event) => {
  return prisma.user.findUnique({ where: { id: event.context.auth.id } })
});