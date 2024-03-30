<script
  setup
  lang="ts"
>
  definePageMeta({
    layout: 'admin'
  })

  import type { Post } from '@prisma/client';

  const articlesList = ref<Post[]>([])

  async function getArticles() {
    const articles = await $fetch('/api/articles/type', {
      query: {
        type: 'research'
      }
    })
    articlesList.value = articles
  }

  onMounted(() => {
    getArticles()
  })
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-2xl">Artikel Riset</h1>
      <NuxtLink
        to="/admin/article/research/add"
        class="px-4 py-1 rounded-md border border-sky-400 text-slate-600"
      >Tambah Artikel Riset</NuxtLink>
    </div>
    <div class="mt-4 grid grid-cols-4 gap-3">
      <div
        class="flex flex-col gap-2 border rounded-md overflow-hidden"
        v-for="article in articlesList"
        :key="article.id"
      >
        <NuxtImg
          :src="article.img_url!"
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