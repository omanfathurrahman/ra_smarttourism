import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')!
  console.log('id', id)
  await prisma.member.delete({where: {id}})
})
