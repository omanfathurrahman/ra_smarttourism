import type { ArticleDocumentationImage } from "~/types/Article"

export default async (data: ArticleDocumentationImage) => {
  for (const article of data.img_url) {
    await $fetch('/api/articles/documentation-images', {
      method: 'POST',
      body: JSON.stringify({postId: data.postId, img_url: article})
    })
  }
}