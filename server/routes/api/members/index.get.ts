import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  return await prisma.member.findMany()
})
