<script
  lang="ts"
  setup
>

  // TODO: create for other pages

  import type { Post } from '@prisma/client';
  import type { ArticleDescriptionOrWhatWeDidInterface, ArticleDocumentationImage } from '~/types/Article';

  const route = useRoute('pengabdian-masyarakat-articleId')
  const articleId = route.params.articleId

  const curArticle = ref<Post>()
  const curArticleDocumentationImgs = ref<{
    id: string;
    img_url: string;
    postId: string;
  }[]>()

  const curArticleDescriptionContentList = computed(() => {
    if (curArticle.value?.description) {
      return (JSON.parse(curArticle.value?.description) as ArticleDescriptionOrWhatWeDidInterface).blocks
    }
  })
  const curArticleWhatWeDidContentList = computed(() => {
    if (curArticle.value?.what_we_did_desc) {
      return (JSON.parse(curArticle.value?.what_we_did_desc) as ArticleDescriptionOrWhatWeDidInterface).blocks
    }
  })

  async function fetchArticle() {
    const articleResponse = await $fetch(`/api/articles/${articleId}`)
    curArticle.value = articleResponse as Post

    const articleDocumentationsResponse = await $fetch(`/api/articles/documentation-images`, {
      query: {
        postId: articleId
      }
    })
    curArticleDocumentationImgs.value = articleDocumentationsResponse as any
  }

  function getImgSliced(i: number) {
    const first = curArticleDocumentationImgs.value?.slice(i * 2 - 2)[0].img_url
    console.log(curArticleDocumentationImgs.value?.slice(i * 2 - 1)[0])
    if (curArticleDocumentationImgs.value?.slice(i * 2 - 1)[0]) {
      const second = curArticleDocumentationImgs.value?.slice(i * 2 - 1)[0].img_url || null
      return [first, second]
    }
    return [first, '']
  }
  onBeforeMount(async () => {
    await fetchArticle()
  })
</script>

<template>
  <div>
    <Header class="bg-primary lg:px-[6rem] px-4 !h-[5rem]"></Header>
    <div
      class="lg:px-[6rem] px-4 py-4 overflow-hidden text-black xl:pb-24"
      v-if="curArticle"
    >
      <h1 class="text-3xl text-center xl:mt-6 xl:font-semibold xl:text-start xl:text-4xl">{{ curArticle?.title }}
      </h1>
      <div class="relative mt-8 xl:mt-12">
        <div class="absolute left-1/2 -translate-x-1/2 -top-3 xl:-top-4 w-6/12 h-6 xl:h-8 bg-second"></div>
        <NuxtImg
          class="w-full aspect-video object-cover overflow-hidden rounded-lg mt-4"
          :src="curArticle?.img_url!"
        />
      </div>
      <div class="text-third mt-6 font-semibold xl:mt-4 xl:grid xl:grid-cols-4">
        <p>Kategori: {{ curArticle?.category }}</p>
        <p>Klien: {{ curArticle?.client }}</p>
        <p>HKI/Paten: {{ curArticle?.hki_paten }}</p>
        <p>Website: {{ curArticle?.website_link }}</p>
      </div>
      <div class="mt-4 xl:mt-8">
        <h2 class="text-2xl font-semibold xl:text-3xl">Penjelasan</h2>
        <div class="text-justify flex flex-col gap-3 mt-3">
          <ArticleDescriptionOrWhatWeDid
            v-if="curArticleDescriptionContentList"
            :curArticleDescriptionOrWhatWeDidContentList="curArticleDescriptionContentList"
          />
        </div>
      </div>
      <div class="mt-4 xl:mt-8">
        <h2 class="text-2xl font-semibold xl:text-3xl mb-3">Apa saja yang kami kerjakan</h2>
        <ArticleDescriptionOrWhatWeDid
          v-if="curArticleWhatWeDidContentList"
          :curArticleDescriptionOrWhatWeDidContentList="curArticleWhatWeDidContentList"
        />
      </div>
      <div class="mt-4 xl:mt-8">
        <h2 class="text-2xl font-semibold xl:text-3xl mb-3">Dokumentasi</h2>
        <div
          class="px-14 space-y-4"
          v-if="curArticleDocumentationImgs"
        >
          <div
            class="lg:even:flex-row-reverse lg:even:pl-[25%] lg:odd:flex-row lg:odd:pr-[25%] space-y-4 lg:space-y-0 lg:flex lg:h-72 gap-4"
            v-for="i in Math.ceil(curArticleDocumentationImgs?.length! / 2)"
            :key="i"
          >
            <div
              class="overflow-hidden w-full h-full object-center"
              v-for="img_url in getImgSliced(i)"
            >
              <NuxtImg
                v-if="img_url"
                :src="img_url"
                :key="img_url"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style></style>