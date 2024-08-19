<script
  lang="ts"
  setup
>


  definePageMeta({
    layout: 'admin'
  })

  import type { Post } from '@prisma/client';
  import type { ArticleDescriptionOrWhatWeDidInterface } from '~/types/Article';

  onBeforeMount(async () => {
    await fetchArticle()
  })
  const route = useRoute('admin-article-innovation-id')
  const param = route.params

  const curArticle = ref<Post>()

  const curArticleDescriptionContentList = computed(() => {
    if (curArticle.value?.description) {
      return (JSON.parse(curArticle.value?.description) as ArticleDescriptionOrWhatWeDidInterface).blocks
    }
  })

  async function fetchArticle() {
    const res = await $fetch(`/api/articles/${param.id}`)
    curArticle.value = res as Post
  }

</script>


<template>
  <div>
    <button
      @click="navigateTo('/admin/article/innovation')"
      class="px-6 py-1 border rounded-full"
    >Back</button>
    <div class="flex gap-6 items-center">
      <NuxtImg
        :src="curArticle?.img_url"
        v-if="curArticle?.img_url"
        class="aspect-video object-cover w-4/12 mt-3 rounded-lg border-4 border-sky-200"
      />
      <div class="w-4/12">
        <h1 class="text-3xl font-bold mt-3">{{ curArticle?.title }}</h1>
        <p>Category: {{ curArticle?.category }}</p>
        <p>Client: {{ curArticle?.client }}</p>
        <p>Hki / Paten: {{ curArticle?.hki_paten }}</p>
        <p>Link Website: {{ curArticle?.website_link }}</p>
      </div>
    </div>
    <ArticleDescriptionOrWhatWeDid
      :curArticleDescriptionOrWhatWeDidContentList="curArticleDescriptionContentList!"
      v-if="curArticleDescriptionContentList"
    />
    {{ curArticle?.what_we_did_desc }}
  </div>
</template>
