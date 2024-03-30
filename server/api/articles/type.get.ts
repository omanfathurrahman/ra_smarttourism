import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const { type } = getQuery(event)
  return await prisma.post.findMany({where: {type: type?.toString()}})
})
