import { Type } from "@prisma/client"
import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const { type }: {type: Type} = getQuery(event)
  return await prisma.post.findMany({where: {type: type}})
})
