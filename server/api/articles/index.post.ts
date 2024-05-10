import { Post } from "@prisma/client"
import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const articleData = await readBody<Post>(event)
  const res = await prisma.post.create({
    data: articleData
  })

  console.log(res)
  return {
    status: 200,
    body: res
  }
})
