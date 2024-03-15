<template>
  <div>
    <div class="px-[6rem]">
      <Header />
      <div class="absolute w-full h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="h-[calc(100dvh-4.5rem)] flex items-center justify-center relative -z-10">
        <Hero imgFile="anggota-tim.png" title="Anggota Tim" class="" />
      </div>
      <div class="pb-10">
        <h2 class="text-black text-5xl font-semibold">
          Visi dan Misi CoE Smart Tourism and Hospitality
        </h2>
        <div class="flex mt-12 gap-[8rem] mr-[5rem]">
          <p class="text-black text-justify text-2xl w-[80%]">
            Selamat datang di pusat keunggulan (Center of Excellence - CoE)
            Smart Tourism and Hospitality! Di era di mana teknologi memainkan
            peran sentral dalam semua aspek kehidupan, industri pariwisata dan
            perhotelan tidak terkecuali. Kami berkomitmen untuk menjadi garda
            terdepan dalam menggabungkan inovasi teknologi dengan pengalaman
            pariwisata dan perhotelan yang unggul. Visi dan misi kami tidak
            hanya tentang menciptakan destinasi yang cerdas secara teknologi,
            tetapi juga memberikan pengalaman yang tak terlupakan bagi para
            wisatawan dan pelanggan kami.
          </p>
          <img src="/img/logo-lingian2.png" alt="" class="w-[25%]" />
        </div>
      </div>
    </div>
    <div class="bg-primary px-[6rem] py-[8rem] relative z-10">
      <h2 class="text-4xl font-semibold text-center">Tim Kami</h2>
      <div class="grid grid-cols-3 gap-8 mt-[6rem]">
        <div class="aspect-square relative group overflow-hidden" v-for="i in 9">
          <img
            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="h-full w-full object-cover object-center transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:rotate-[3deg]" />
          <div
            class="absolute pt-20 pb-2 px-4 w-full bottom-0 left-0 bg-gradient-to-t from-black to-black/0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 ease-out">
            <h3 class="text-3xl">Richad Robert</h3>
            <span class="text-lg text-third">Ketua Tim</span>
          </div>
        </div>
      </div>

      <div class="">
        <img src="/img/Polygon1.svg" alt="" class="absolute top-[10rem]" />
        <div class="size-[24rem] bg-second absolute top-[9rem] right-0 -z-10"></div>
        <div class="size-[38rem] bg-second rounded-full absolute bottom-[3rem] left-[3.4rem] -z-10"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
