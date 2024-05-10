import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const articleData = await readBody<{
    postId: string
    img_path: string
    img_url: string
    img_url_expired_time: Date
  }>(event)
  const res = await prisma.post_documentation.create({
    data: articleData
  })

  console.log(res)
  return {
    status: 200,
    body: res
  }
})
