import type { Post } from "@prisma/client"

export default async (data: Post) => {
  const res = await $fetch('/api/articles', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  return res.body.id
}
