import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const { postId } = getQuery(event)
  const res = await prisma.post_documentation.findMany({ where: { 'postId': postId?.toString() } })

  console.log(postId)
  // console.log(res)
  console.log(res.length)
  return res
})
