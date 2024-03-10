<template>
  <div class="">
    <div class="px-24">
      <Header />
      <div
        class="absolute w-full h-[24rem] bg-primary top-0 left-0 -z-10"
      ></div>
      <div class="h-[calc(100dvh-4.5rem)] flex items-center justify-center">
        <img src="~/assets/visi-dan-misi.png" alt="" class="w-full" />
        <h1
          class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] text-6xl font-semibold"
        >
          Riset dan Publikasi
        </h1>
        <div
          class="w-[20rem] h-[2rem] bg-orange-400 absolute top-[7.5rem]"
        ></div>
      </div>
      <div class="border-b pb-10 border-zinc-700 relative">
        <h2 class="text-black text-6xl font-semibold">
          Kegiatan Riset dan Publikasi Apa Saja yang Dilakukan Oleh CoE Smart
          Tourism and Hospitality?
        </h2>
        <p class="text-black text-justify font-thin text-2xl mt-8">
          Dalam CoE Smart Tourism & Hospitality, kami mempersembahkan dunia
          riset yang menginspirasi dan berdaya guna. Berpegang pada prinsip
          inovasi dan keberlanjutan, kami meneliti dan mengembangkan solusi
          cerdas yang mengubah paradigma dalam industri pariwisata dan
          perhotelan.
        </p>
        <p class="text-black text-justify font-thin text-2xl mt-4">
          Dari analitika data untuk memahami perilaku pelanggan hingga
          penggunaan kecerdasan buatan dalam meningkatkan pengalaman wisatawan,
          kami mengeksplorasi dan menciptakan solusi-solusi terdepan yang
          membentuk masa depan industri ini.
        </p>
        <p class="text-black text-justify font-thin text-2xl mt-4">
          Bersama-sama, kami memimpin arah baru dalam penelitian yang
          menghubungkan teknologi dengan keramahan untuk menciptakan destinasi
          yang lebih pintar, lebih inklusif, dan lebih berkelanjutan bagi semua.
        </p>
        <div
          class="size-[28rem] rounded-full bg-second absolute top-[-8rem] right-[-2rem] -z-10"
        />
      </div>
      <div class="py-24">
        <div class="">
          <div class="size-[7rem] bg-third rounded-tl-full"></div>
        </div>
        <div class="text-black mt-12">
          <h2 class="text-6xl font-semibold">
            Beberapa Hasil Riset & Publikasi Yang Telah Kami Kerjakan
          </h2>
          <p class="w-[90%] text-2xl font-thin text-balance mt-6">
            Selamat datang di era Smart Tourism dan Hospitality! Kami
            menghadirkan pengalaman perjalanan yang lebih cerdas dan terhubung.
            Temukan tujuan dengan cepat, nikmati layanan yang disesuaikan, dan
            jelajahi dunia dengan cara baru. Selamat datang di masa depan wisata
            dan perhotelan yang cerdas!
          </p>
        </div>
      </div>
    </div>
    <div class="p-24 bg-primary grid grid-cols-2 gap-x-8 gap-y-16">
      <div class="relative" v-for="i in 4">
        <div class="aspect-[3/2] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-[16rem] h-[2.8rem] bg-second absolute -top-6 z-10 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
