<template>
  <div class="">
    <div class="px-24">
      <Header />
      <div
        class="absolute w-full h-[24rem] bg-primary top-0 left-0 -z-10"
      ></div>
      <div class="h-[calc(100dvh-4.5rem)] flex items-center justify-center relative -z-10">
        <img src="~/assets/visi-dan-misi.png" alt="" class="w-full" />
        <h1
          class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] text-6xl font-semibold"
        >
          Inovasi
        </h1>
        <div class="w-[20rem] h-[2rem] bg-orange-400 absolute top-[3.3rem]"></div>
      </div>
      <div class="border-b pb-10 border-zinc-700 relative">
        <h2 class="text-black text-6xl font-semibold">
          Inovasi Pada Coe Smart Tourism and Hospitality
        </h2>
        <p class="text-black text-justify font-thin text-2xl mt-8">
          Di dunia yang terus berubah, industri pariwisata dan perhotelan
          memerlukan inovasi yang cerdas dan progresif untuk memimpin jalan ke
          depan. Pusat Keunggulan (COE) Smart Tourism dan Hospitality hadir
          sebagai wahana bagi kolaborasi, eksperimen, dan pemikiran kreatif
          dalam menghadapi tantangan dan peluang di era digital ini.
        </p>
        <p class="text-black text-justify font-thin text-2xl mt-4">
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
          <h2 class="text-6xl font-semibold">
            Beberapa Hasil Inovasi Yang Telah CoE Smart Tourism & Hospitality
            Lakukan
          </h2>
          <p class="w-[90%] text-2xl font-thin text-balance mt-6">
            Terdapat beberapa inovasi yang telah kami lakukan untuk dapat
            mengembangkan pariwisata dan perhotelan.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-24 py-20">
          <div class="relative" v-for="i in 2">
            <div class="aspect-[3/2] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="w-[16rem] h-[2.8rem] bg-second absolute -top-6 z-10 left-1/2 -translate-x-1/2"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
