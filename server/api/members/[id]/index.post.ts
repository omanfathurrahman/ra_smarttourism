import { Member } from "@prisma/client"
import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const member = await readBody<Member>(event)

  const res = await prisma.member.update({data: member, where: {id}})
  return res
})
