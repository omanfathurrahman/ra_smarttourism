import { prisma } from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const articles = await prisma.post.findMany()
  console.log(typeof articles)
  console.log(articles.length)
  if (articles.length == 0) return
  const tes = articles.map((article) => {
    return {
      ...article,
      img_url_expired_time: article.img_url_expired_time
    }
  })
  console.log(tes)
  return articles
})
