<template>
  <div class="">
    <div class="lg:px-[6rem] px-4 overflow-hidden">
      <Header />
      <div class="absolute w-full h-[12rem] lg:h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="lg:h-[calc(100dvh-4.5rem)] flex items-center -z-10 py-12 lg:py-0">
        <Hero imgFile="visi-dan-misi.png" title="Riset dan Publikasi" class="" />
      </div>
      <div class="border-b pb-10 border-zinc-700 relative">
        <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
          Bisnis Pada Coe Smart Tourism and Hospitality
        </h2>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-8">
          Dalam CoE Smart Tourism & Hospitality, publikasi adalah jendela yang
          membuka wawasan dunia terhadap inovasi dan penemuan terkini dalam
          industri pariwisata dan perhotelan. Melalui publikasi-publikasi kami,
          kami membagikan pengetahuan yang kami peroleh melalui
          penelitian-penelitian kami yang mendalam, menjelajahi tren, tantangan,
          dan peluang di masa depan.
        </p>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-8">
          Kami mengundang para akademisi, praktisi industri, dan pengambil
          keputusan untuk bergabung dalam diskusi dan berbagi pemikiran melalui
          publikasi kami, dengan harapan bahwa kolaborasi ini akan memperkaya
          pemahaman kita semua tentang cara meningkatkan pengalaman wisatawan
          dan menjadikan industri pariwisata dan perhotelan lebih cerdas dan
          berkelanjutan.
        </p>
        <!-- <div
          class="size-[22rem] rounded-full bg-second absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[36%] -z-10" /> -->
      </div>
      <div class="pb-24 pt-8">
        <div class="flex justify-end">
          <div class="size-12 lg:size-[7rem] bg-third rounded-bl-full"></div>
        </div>
        <div class="text-black mt-12">
          <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
            Beberapa Hasil Riset & Publikasi Yang Telah Kami Kerjakan
          </h2>
          <p class="w-full lg:w-[90%] text-lg lg:text-2xl font-thin text-justify lg:text-start text-balance mt-6">
            Selamat datang di era Smart Tourism dan Hospitality! Kami
            menghadirkan pengalaman perjalanan yang lebih cerdas dan terhubung.
            Temukan tujuan dengan cepat, nikmati layanan yang disesuaikan, dan
            jelajahi dunia dengan cara baru. Selamat datang di masa depan wisata
            dan perhotelan yang cerdas!
          </p>
        </div>
        <div class="flex flex-col items-center gap-24 py-20">
          <div class="block lg:flex odd:justify-start even:justify-end" v-for="i in 4">
            <div class="relative w-full lg:w-[60%]">
              <div class="aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="w-full h-full object-cover" />
              </div>
              <div class="w-[8rem] lg:w-[16rem] h-[1.6rem] lg:h-[2.8rem] bg-second absolute -top-3 lg:-top-6 z-10 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
