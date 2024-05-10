import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const members = await prisma.member.findMany()
  return members
})
