import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  console.log(id)
  return await prisma.post.findUnique({where: {id: id?.toString()}})
})
