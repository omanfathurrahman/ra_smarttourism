<script lang="ts" setup>
enum Aktivitas {
  Research,
  Business,
  Inovation
}

const aktivitasDeskripsi = [
  'Pusat Keunggulan Pariwisata dan Perhotelan adalah pusat riset yang memajukan inovasi di sektor pariwisata dan perhotelan melalui penelitian, fokusnya pada pemasaran destinasi, manajemen perhotelan, dan keberlanjutan. Kolaborasi antara akademisi, praktisi, dan industri kunci berperan dalam memajukan sektor ini.',
  'Pusat Keunggulandgfsdfg Pariwisata dan Perhotelan adalah pusat riset yang memajukan inovasi di sektor pariwisata dan perhotelan melalui penelitian, fokusnya pada pemasaran destinasi, manajemen perhotelan, dan keberlanjutan. Kolaborasi antara akademisi, praktisi, dan industri kunci berperan dalam memajukan sektor ini.',
  'Pusat Keunggulan Pariwisata dgsdfgan Perhotelan adalah pusat riset yang memajukan inovasi di sektor pariwisata dan perhotelan melalui penelitian, fokusnya pada pemasaran destinasi, manajemen perhotelan, dan keberlanjutan. Kolaborasi antara akademisi, praktisi, dan industri kunci berperan dalam memajukan sektor ini.'

]

const curAktivitas = ref(Aktivitas.Research)

const { y } = useWindowScroll();

</script>

<template>
  <div class="overflow-hidden relative">
    <div class="">
      <div class="absolute h-screen w-full top-0 left-0 -z-20 bg-black/65"></div>
      <img 
        class="absolute h-screen w-full top-0 left-0 -z-30 transition-all ease-linear" 
        src="/img/bg1.png"
        alt="background"
        :style="{scale: 1 + y / 2000, filter: `blur(${y / 100}px)`}"
        ></img>
      <div class="relative h-screen px-[6rem]">
        <Header />
        <div class="flex flex-col items-center justify-center h-[calc(100dvh-4.5rem)] pb-[4.5rem]">
          <div class="flex flex-col items-center">
            <h1 class="text-8xl font-semibold">Center of Excellence</h1>
            <span class="text-6xl">Smart Tourism & Hospitality</span>
          </div>
          <p class="text-lg text-white/60 w-1/2 text-center mt-4">Tingkatkan pengalaman Anda dengan Smart Tourism dan
            Hospitality! Hemat waktu, jelajahi lebih banyak, dan rasakan kenyamanan teknologi.</p>
        </div>
        <div
          class="absolute bottom-0 w-full h-[4rem] left-0 -z-10 bg-gradient-to-t from-[#303030] from-30% to-transparent">
        </div>
      </div>
    </div>
    <div class="bg-primary items-center gap-10 flex pl-[6rem] py-[10rem] relative">
      <div class="w-[60%]">
        <span class="text-xl font-medium">Tentang Kami</span>
        <h2 class="text-7xl font-semibold">Bersiaplah untuk perjalanan yang lebih pintar dan terhubung!</h2>
        <p class="mt-8 text-zinc-200 text-lg text-pretty w-[90%]">Selamat datang di era Smart Tourism dan Hospitality!
          Kami menghadirkan pengalaman perjalanan yang lebih cerdas dan terhubung. Temukan tujuan dengan cepat, nikmati
          layanan yang disesuaikan, dan jelajahi dunia dengan cara baru. Selamat datang di masa depan wisata dan
          perhotelan yang cerdas!</p>
        <button class="mt-8">
          Selengkapnya
          <Icon name="solar:arrow-right-outline" class="text-2xl" />
        </button>
      </div>
      <div class="w-[40%] aspect-[5/6] overflow-hidden " data-aos="fade-left">
        <img src="/img/kamar-hotel.png" alt="" class="w-full h-full object-cover">
      </div>

      <img src="/img/seperempat-lingkaran.png" alt="" class="absolute top-[6rem] right-[28rem]">
    </div>
    <div class="text-black px-[6rem] py-[6rem] relative bg-zinc-200 z-10">
      <div class="">
        <span class="text-xl font-medium">Aktivitas</span>
        <div class="flex gap-6 mt-4">
          <div class="w-[60rem] overflow-hidden">
            <img src="/img/aktivitas-1.png" alt="" data-aos="fade-up">
          </div>
          <div class="">
            <h3 class="text-6xl font-bold z-[100]">
              Apa saja aktivitas yang dilakukan oleh CoE Smart Tourism & Hospitality?
            </h3>
            <p class="text-lg text-zinc-500 mt-4 ">Selamat datang di era Smart Tourism dan Hospitality! Kami menghadirkan
              pengalaman perjalanan yang lebih cerdas dan terhubung. Temukan tujuan dengan cepat, nikmati layanan yang
              disesuaikan, dan jelajahi dunia dengan cara baru. Selamat datang di masa depan wisata dan perhotelan yang
              cerdas!</p>
            <div class="bg-[#F8A31F] size-[24rem] rounded-full absolute top-[5rem] right-[25rem] -z-10"></div>
          </div>
        </div>
      </div>
      <div class="mt-8" data-aos="fade-up">
        <div class="flex gap-[12%] items-center text-3xl font-medium border-b border-black py-2">
          <button :class="curAktivitas == Aktivitas.Research ? 'text-zinc-500' : 'text-black'"
            @click="curAktivitas = Aktivitas.Research">Research</button>
          <button :class="curAktivitas == Aktivitas.Business ? 'text-zinc-500' : 'text-black'"
            @click="curAktivitas = Aktivitas.Business">Business</button>
          <button :class="curAktivitas == Aktivitas.Inovation ? 'text-zinc-500' : 'text-black'"
            @click="curAktivitas = Aktivitas.Inovation">Inovation</button>
        </div>
        <div class="mt-3">
          <p class="text-zinc-700" :key="curAktivitas">{{ aktivitasDeskripsi[curAktivitas] }}</p>
        </div>
      </div>
    </div>
    <div class="bg-primary px-[6rem] py-[4rem]">
      <div class="">
        <span class="text-lg font-medium">Program</span>
        <h3 class="text-6xl font-semibold">Program apa saja yang dilakukan oleh CoE Smart Tourism & Hospitality?</h3>
        <p class="text-lg mt-3 w-[60%]">Program yang berhubungan dengan pendidikan dan pengabdian masyarakat
          merupakan upaya untuk meningkatkan akses dan kualitas pendidikan sekaligus memberikan kontribusi positif kepada
          masyarakat.</p>
      </div>
      <div class="mt-16">
        <div class="grid grid-cols-2 gap-6 mb-[4rem]">
          <div class="relative" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="">
              <div class="h-[2.5rem] w-[18rem] absolute left-1/2 translate-x-[-50%] top-[-1rem] bg-pink-600"></div>
          </div>
          <div class="flex flex-col justify-between items-start pb-16">
            <div class="">
              <h4 class="text-3xl font-semibold">MBKM dan Magang</h4>
              <p class="mt-2">Salah satu program kami adalah melakukan pengembangan aplikasi pemandu wisata cerdas yang
                menggunakan
                kecerdasan buatan (AI) untuk memberikan rekomendasi lokasi wisata yang sesuai dengan preferensi pengguna.
              </p>
            </div>
            <button class="mt-8">
              Selengkapnya
              <Icon name="solar:arrow-right-outline" class="text-2xl" />
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col justify-between items-start pb-16">
            <div class="">
              <h4 class="text-3xl font-semibold">Pengabdian Masyarakat</h4>
              <p class="mt-2">Pelatihan Karyawan Industri: COE dapat menyelenggarakan program pelatihan dan pengembangan karyawan untuk meningkatkan keterampilan dan pengetahuan dalam industri pariwisata dan perhotelan. Ini dapat mencakup pelatihan dalam pelayanan pelanggan, manajemen destinasi, keberlanjutan, dan teknologi terkini.</p>
            </div>
            <button class="mt-8">
              Selengkapnya
              <Icon name="solar:arrow-right-outline" class="text-2xl" />
            </button>
          </div>
          <div class="relative" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="">
              <div class="h-[2.5rem] w-[18rem] absolute left-1/2 translate-x-[-50%] top-[-1rem] bg-pink-600"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>