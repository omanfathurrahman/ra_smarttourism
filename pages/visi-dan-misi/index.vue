<template>
  <div class="">
    <div class="lg:px-[6rem] px-4 overflow-hidden">
      <Header />
      <div class="absolute w-full h-[12rem] lg:h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="lg:h-[calc(100dvh-4.5rem)] flex items-center -z-10 py-12 lg:py-0">
        <Hero imgFile="visi-dan-misi.png" title="Visi dan Misi" class="" data-aos="fade-up" />
      </div>
      <div class="border-b pb-10 border-zinc-700">
        <h2 class="text-black text-3xl lg:text-5xl font-semibold">
          Visi dan Misi CoE Smart Tourism and Hospitality
        </h2>
        <div class="flex flex-col lg:flex-row mt-4 lg:mt-12 gap-6 lg:gap-[8rem] mr-0 lg:mr-[5rem]">
          <p class="text-black text-justify text-lg lg:text-2xl w-full lg:w-[80%]">
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
          <img src="/img/logo-lingian2.png" alt="" class="w-[70%] lg:w-[25%] mx-auto lg:mx-0" data-aos="fade-left" />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-16 lg:gap-0 lg:grid-cols-2 py-[4rem]">
        <div class=""  data-aos="fade-right">
          <div class="bg-second px-14 py-8  h-fit lg:h-[18rem] relative">
            <h3 class="text-3xl font-bold mb-2">Visi</h3>
            <p>
              "Menjadi pusat keunggulan riset, pelatihan, dan inovasi di bidang pariwisata dan hospitality yang unggul berbasis teknologi informasi dan komunikasi."
            </p>
            <div
              class="size-[3.5rem] bg-pink-500 absolute rounded-full border-[8px] border-white top-[-1.8rem] left-1/2 translate-x-[-50%]">
            </div>
          </div>
        </div>
        <div class="" data-aos="fade-left">
          <div class="h-[10rem] hidden lg:flex justify-start items-end p-5">
            <div class="size-[5rem] rounded-tr-full bg-pink-500"></div>
          </div>
          <div class="bg-primary px-14 py-8 h-fit lg:h-[18rem] relative">
            <h3 class="text-3xl font-bold mb-2">Misi</h3>
            <ol class="list-decimal pl-5">
              <li>
                Meningkatkan kualitas produk dan layanan pariwisata dan hospitality melalui digitalisasi, teknologi dan inovasi terkini.
              </li>
              <li>
                Menjalin kerjasama dan kolaborasi lintas sektor demi memajukan sektor pariwisata Indonesia yang berkelanjutan.
              </li>
              <li>
                Memajukan sumber daya manusia di bidang pariwisata dan hospitality melalui penelitian dan pelatihan, serta pengabdian masyarakat.
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
