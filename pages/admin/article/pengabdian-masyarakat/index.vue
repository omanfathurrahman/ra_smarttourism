<script
  setup
  lang="ts"
>
import type { Post } from '@prisma/client';

  definePageMeta({
    layout: 'admin'
  })
  const { getArticleFromDatabase, updateExpiredArticleImgUrl } = useMyArticleStore()
  const { getAllArticles } = storeToRefs(useMyArticleStore())

  const getCommunityServiceArticles = computed(() => {
    return getAllArticles.value.filter((article) => article.type === 'community_service')
  })

  async function updateImgUrl(article: Post) {
    await updateExpiredArticleImgUrl(article)
  }
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-2xl">Artikel Pengabdian Masyarakat</h1>
      <NuxtLink
        to="/admin/article/pengabdian-masyarakat/add"
        class="px-4 py-1 rounded-md border border-sky-400 text-slate-600"
      >Tambah Artikel Pengabdian Masyarakat</NuxtLink>
    </div>
    <div class="mt-4 grid grid-cols-4 gap-3">
      <div
        class="flex flex-col gap-2 border rounded-md overflow-hidden"
        v-for="article in getCommunityServiceArticles"
        :key="article.id"
      >
        <NuxtImg
          :src="article.img_url!"
          @error="updateImgUrl(article)"
          alt="article.title"
          class="w-full aspect-square object-cover"
        />
        <div class="space-y-1 px-3 py-1">
          <h2 class="text-lg text-center">{{ article.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>