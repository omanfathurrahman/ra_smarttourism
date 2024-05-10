import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')!
  const member = prisma.member.findUnique({where: {id: id}})
  return member
})
