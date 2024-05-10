import type { ArticleDocumentationImage } from "~/types/Article"

export default async (data: ArticleDocumentationImage) => {
  for (const img of data.img_url) {
    await $fetch('/api/articles/documentation-images', {
      method: 'POST',
      body: JSON.stringify({
        postId: data.postId,
        img_url: img.img_url,
        img_path: img.img_path,
        img_url_expired_time: img.img_url_expired_time
      })
    })
  }
}