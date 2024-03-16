<template>
  <div class="">
    <div class="lg:px-[6rem] px-4 overflow-hidden">
      <Header />
      <div class="absolute w-full h-[12rem] lg:h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="lg:h-[calc(100dvh-4.5rem)] flex items-center -z-10 py-12 lg:py-0">
        <Hero imgFile="visi-dan-misi.png" title="MBKM dan Magang" class="" />
      </div>
      <div class="border-b pb-10 border-zinc-700 relative">
        <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
          MBKM dan Magang Pada Coe Smart Tourism and Hospitality
        </h2>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-8">
          Kami dengan bangga memperkenalkan Program Mata Kuliah Berbasis Magang
          (MBKM) dan Program Magang di Pusat Keunggulan (COE) Smart Tourism dan
          Hospitality. Program ini adalah kesempatan berharga bagi para
          mahasiswa dan profesional muda untuk mendapatkan pengalaman praktis
          yang berharga dalam industri pariwisata dan perhotelan yang berkembang
          pesat.
        </p>
        <p class="text-black text-justify font-thin text-lg lg:text-2xl mt-4">
          Kami berkomitmen untuk memberikan pengalaman yang bermakna dan
          bermanfaat bagi setiap peserta program MBKM dan Magang kami. Dengan
          bimbingan mentor yang berpengalaman dan lingkungan kerja yang
          mendukung, kami yakin bahwa setiap peserta akan mengambil langkah
          pertama yang penting dalam perjalanan mereka menuju kesuksesan dalam
          industri pariwisata dan hospitality.
        </p>
        <div
          class="size-[22rem] rounded-full bg-second absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[36%] -z-10" />
      </div>
    </div>
    <div class="px-4 lg:px-24 bg-primary">
      <div class="py-16">
        <div class="w-full lg:w-8/12 mx-auto relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" class="w-full h-full object-cover aspect-[3/2]" />
          <div class="w-[8rem] lg:w-[16rem] h-[1.6rem] lg:h-[2.8rem] bg-second absolute -top-3 lg:-top-6 z-10 left-1/2 -translate-x-1/2"></div>
        </div>
        <div class="mt-20">
          <h3 class="text-2xl lg:text-6xl italic font-semibold">Pengenalan</h3>
          <p class="mt-4 text-lg lg:text-2xl font-thin text-justify">
            Program MBKM dan Magang kami dirancang untuk menyatukan teori dengan
            praktik, memberikan kesempatan bagi para peserta untuk
            mengaplikasikan pengetahuan yang diperoleh di kelas ke dalam
            lingkungan kerja yang nyata. Dengan berpartisipasi dalam program
            ini, mahasiswa tidak hanya akan memperluas wawasan mereka tentang
            konsep-konsep kunci dalam industri pariwisata dan hospitality,
            tetapi juga akan mengembangkan keterampilan praktis yang diperlukan
            untuk berhasil dalam karir mereka.
          </p>
        </div>
      </div>
      <div class="h-[1px] w-full bg-white"></div>
      <div class="py-16">
        <h3 class="text-3xl lg:text-6xl text-center lg:text-start font-semibold">
          Program MBKM dan Magang Dalam Bidang CoE Smart Tourism And Hospitality
        </h3>
        <div class="mt-16 flex flex-col gap-20">
          <div class="flex gap-10 flex-col-reverse lg:odd:flex-row lg:even:flex-row-reverse" v-for="i in 2">
            <div class="w-full lg:w-[55%]">
              <h4 class="text-3xl font-semibold">Pengembangan Website untuk Pariwisata</h4>
              <p class="text-lg font-thin mt-6 text-justify">
                Mahasiswa dapat mengambil kursus yang melibatkan pembelajaran
                tentang pengembangan aplikasi mobile yang spesifik untuk
                industri pariwisata. Mereka kemudian dapat melakukan magang di
                perusahaan perangkat lunak atau agen perjalanan untuk merancang
                dan mengembangkan aplikasi mobile yang memudahkan wisatawan
                dalam merencanakan perjalanan, mendapatkan informasi tentang
                destinasi wisata, dan memesan layanan terkait.
              </p>
            </div>
            <div class="relative w-full lg:w-[45%]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" class="w-full h-full object-cover aspect-[2/1]" />
              <div class="w-[8rem] lg:w-[18rem] h-[1.6rem] lg:h-[2.8rem] bg-second absolute -top-3 lg:-top-6 z-10 left-1/2 -translate-x-1/2"></div>
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
