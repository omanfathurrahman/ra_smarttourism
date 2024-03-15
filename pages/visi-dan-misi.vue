<template>
  <div class="">
    <div class="px-[6rem]">
      <Header />
      <div class="absolute w-full h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="h-[calc(100dvh-4.5rem)] flex items-center -z-10">
        <Hero imgFile="visi-dan-misi.png" title="Visi dan Misi" class="" />
      </div>
      <div class="border-b pb-10 border-zinc-700">
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
      <div class="grid grid-cols-2 py-[4rem]">
        <div class="">
          <div class="bg-second px-14 py-8 h-[18rem] relative">
            <h3 class="text-3xl font-bold mb-2">Visi</h3>
            <p>
              "Menjadi pusat keunggulan global dalam pendidikan, penelitian, dan
              praktik di industri pariwisata dan kehospitalitan yang
              berkelanjutan dan inovatif."
            </p>
            <div
              class="size-[3.5rem] bg-pink-500 absolute rounded-full border-[8px] border-white top-[-1.8rem] left-1/2 translate-x-[-50%]">
            </div>
          </div>
        </div>
        <div class="">
          <div class="h-[10rem] flex justify-start items-end p-5">
            <div class="size-[5rem] rounded-tr-full bg-pink-500"></div>
          </div>
          <div class="bg-primary px-14 py-8 h-[18rem] relative">
            <h3 class="text-3xl font-bold mb-2">Misi</h3>
            <ol class="list-decimal pl-5">
              <li>
                Memberikan pendidikan berkualitas tinggi yang mempersiapkan
                mahasiswa untuk menjadi pemimpin industri pariwisata dan
                kehospitalitan yang terampil, beretika, dan berwawasan masa
                depan.
              </li>
              <li>
                Mengembangkan kurikulum yang responsif terhadap perkembangan
                industri, teknologi, dan kebutuhan masyarakat global.
              </li>
            </ol>
            <div
              class="size-[3.5rem] bg-second absolute rounded-full border-[8px] border-white top-[-1.8rem] left-1/2 translate-x-[-50%]">
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
