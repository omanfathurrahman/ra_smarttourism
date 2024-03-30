<script
  setup
  lang="ts"
>
  import type { Member } from '@prisma/client';

  const { width } = useWindowSize()
  const isMobile = computed(() => width.value < 768)

  onBeforeMount(async () => {
    await fetchMembers()
  })

  const members = ref<Member[]>([])

  async function fetchMembers() {
    const data = await getMembers()
    members.value = data as Member[]
  }
</script>

<template>
  <div class="overflow-hidden">
    <div class="lg:px-[6rem] px-4 overflow-hidden">
      <Header />
      <div class="absolute w-full h-[12rem] lg:h-[24rem] bg-primary top-0 left-0 -z-10"></div>
      <div class="lg:h-[calc(100dvh-4.5rem)] flex items-center -z-10 py-12 lg:py-0">
        <Hero
          imgFile="anggota-tim.png"
          title="Anggota Tim"
          class=""
          data-aos="fade-up"
        />
      </div>
      <div class="border-b pb-10 border-zinc-700">
        <h2 class="text-black text-center lg:text-start text-3xl lg:text-5xl font-semibold">
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
          <img
            src="/img/logo-lingian2.png"
            alt=""
            class="w-[70%] lg:w-[25%] mx-auto lg:mx-0"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
    <div class="bg-primary px-4 lg:px-[6rem] py-[3rem] lg:py-[6rem] flex flex-col-reverse lg:flex-row gap-4 lg:gap-16 items-center">
      <div class="w-full lg:w-9/12 space-y-5">
        <h2 class="text-3xl text-center lg:text-start">Ketua RA Smart Tourism & Hospitality</h2>
        <p class="text-justify text-xl font-thin">
          Selamat datang di halaman resmi CoE Smart Tourism and Hospitality. Sebagai Ketua, saya bangga mempersembahkan
          kepada Anda sebuah platform yang menggabungkan kecerdasan, teknologi, dan keberlanjutan untuk mengubah lanskap
          pariwisata kita. Di sini, kami berkomitmen untuk memberikan layanan terbaik. Menjadikan pengalaman wisata yang
          tak terlupakan, sambil memajukan destinasi wisata ke tingkat baru.
        </p>
      </div>
      <div class="w-full lg:w-3/12 aspect-[11/12] relative " data-aos="fade-up">
        <NuxtImg
          src="/img/ketua-ra.png"
          class="h-full w-full object-cover"
        />
        <div class="size-20 rounded-full bg-second absolute -top-10 -right-10"></div>
      </div>
    </div>
    <div class="bg-primary px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[8rem] relative z-10">
      <h2 class="text-4xl font-semibold text-center">Tim Magang Kami</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 lg:mt-[6rem]">
        <div
          class="aspect-square relative group overflow-hidden"
          v-for="(member, i) of members"
          :key="i"
          data-aos="fade-up"
        >
          <img
            :src="member.img_url"
            class="h-full w-full object-cover object-center transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:rotate-[3deg]"
          />
          <div
            v-if="!isMobile"
            class="absolute pt-20 pb-2 px-4 w-full bottom-0 left-0 bg-gradient-to-t from-black to-black/0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 ease-out"
          >
            <h3 class="text-3xl">{{ member.name }}</h3>
            <span class="text-lg text-third">{{ member.position }}</span>
          </div>
          <div
            v-else
            class="absolute pt-20 pb-2 px-4 w-full bottom-0 left-0 bg-gradient-to-t from-black to-black/0 translate-y-0 transition-all duration-500 ease-out"
          >
            <h3 class="text-3xl">{{ member.name }}</h3>
            <span class="text-lg text-third">{{ member.position }}</span>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>