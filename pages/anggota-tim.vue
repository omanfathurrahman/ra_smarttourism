<template>
  <div>
    <div class="px-[6rem]">
      <Header />
      <div class="absolute w-full h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="h-[calc(100dvh-4.5rem)] flex items-center justify-center">
        <img src="~/assets/anggota-tim.png" alt="" class="w-full">
        <h1 class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] text-6xl font-semibold">Anggota Tim
        </h1>
        <div class="w-[20rem] h-[2rem] bg-orange-400 absolute top-[5.5rem]"></div>
      </div>
      <div class="pb-10">
        <h2 class="text-primary text-5xl font-semibold">Visi dan Misi CoE Smart Tourism and Hospitality</h2>
        <div class="flex mt-12 gap-[8rem] mr-[5rem]">
          <p class="text-black text-justify text-2xl w-[80%]">Selamat datang di pusat keunggulan (Center of Excellence -
            CoE) Smart Tourism and Hospitality! Di era di mana
            teknologi memainkan peran sentral dalam semua aspek kehidupan, industri pariwisata dan perhotelan tidak
            terkecuali. Kami berkomitmen untuk menjadi garda terdepan dalam menggabungkan inovasi teknologi dengan
            pengalaman pariwisata dan perhotelan yang unggul. Visi dan misi kami tidak hanya tentang menciptakan destinasi
            yang cerdas secara teknologi, tetapi juga memberikan pengalaman yang tak terlupakan bagi para wisatawan dan
            pelanggan kami.</p>
          <img src="/img/logo-lingian2.png" alt="" class="w-[25%]">
        </div>
      </div>
    </div>
    <div class="bg-primary px-[6rem] py-[8rem] relative z-10">

      <h2 class="text-4xl font-semibold text-center">Tim Kami</h2>
      <div class="grid grid-cols-3 gap-8 mt-[6rem]">
        <div class="aspect-square" v-for="i in 9"> 
          <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="h-full w-full object-cover" />
        </div>
      </div>

      <div class="">
        <img src="/img/Polygon1.svg" alt="" class="absolute top-[10rem]">
        <div class="size-[24rem] bg-second absolute top-[9rem] right-0 -z-10"></div>
        <div class="size-[38rem] bg-second rounded-full absolute bottom-[3rem] left-[3.4rem] -z-10"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>