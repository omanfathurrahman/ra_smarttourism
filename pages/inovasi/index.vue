<script setup lang="ts">
  import type { Post } from '@prisma/client';

  const { getArticleFromDatabase, updateExpiredArticleImgUrl } = useMyArticleStore()
  const { getAllArticles } = storeToRefs(useMyArticleStore())

  const getInovasiArticles = computed(() => {
    return getAllArticles.value.filter((article) => article.type === 'innovation')
  })

  async function updateImgUrl(article: Post) {
    await updateExpiredArticleImgUrl(article)
  }
</script>

<template>
  <div class="">
    <div class="lg:px-[6rem] px-4 overflow-hidden">
      <Header />
      <div class="absolute w-full h-[12rem] lg:h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="lg:h-[calc(100dvh-4.5rem)] flex items-center -z-10 py-12 lg:py-0">
        <Hero
          imgFile="visi-dan-misi.png"
          title="Inovasi"
          class=""
        />
      </div>
      <div class="border-b pb-10 border-zinc-700 relative">
        <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
          Inovasi Pada Coe Smart Tourism and Hospitality
        </h2>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-8">
          Di dunia yang terus berubah, industri pariwisata dan perhotelan
          memerlukan inovasi yang cerdas dan progresif untuk memimpin jalan ke
          depan. Pusat Keunggulan (COE) Smart Tourism dan Hospitality hadir
          sebagai wahana bagi kolaborasi, eksperimen, dan pemikiran kreatif
          dalam menghadapi tantangan dan peluang di era digital ini.
        </p>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-4">
          Dalam COE ini, kami mengundang Anda untuk memasuki dunia inovasi yang
          tak terbatas, di mana teknologi, kreativitas, dan kebijaksanaan
          bertemu untuk menciptakan pengalaman wisata yang lebih cerdas, lebih
          berkelanjutan, dan lebih memikat bagi pengunjung dari seluruh dunia.
        </p>
        <div class="flex justify-start mt-20">
          <div class="size-[7rem] bg-third rounded-tr-full"></div>
        </div>
      </div>
      <div class="pb-24 pt-8">
        <div class="text-black mt-12">
          <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
            Beberapa Hasil Inovasi Yang Telah CoE Smart Tourism & Hospitality
            Lakukan
          </h2>
          <p class="w-full lg:w-[90%] text-lg lg:text-2xl font-thin text-justify lg:text-start text-balance mt-6">
            Terdapat beberapa inovasi yang telah kami lakukan untuk dapat
            mengembangkan pariwisata dan perhotelan.
          </p>
        </div>
        <div class="py-16 lg:py-24 bg-transparent grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          <div
            @click="navigateTo(`/inovasi/${article.id}`)"
            class="relative cursor-pointer"
            v-for="article in getInovasiArticles"
            :key="article.id"
          >
            <div class="aspect-[3/2] overflow-hidden">
              <NuxtImg
                :src="article.img_url!"
                @error="updateImgUrl(article)"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="w-[8rem] lg:w-[16rem] h-[1.6rem] lg:h-[2rem] bg-second absolute -top-3 lg:-top-4 z-10 left-1/2 -translate-x-1/2"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
