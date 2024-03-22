<script lang="ts" setup>
  const route = useRoute()

  const artikel = route.params.artikel
  console.log(artikel)
</script>

<template>
  <div>
    <Header class="bg-primary px-4 !h-[5rem]" ></Header>
    <div class="lg:px-[6rem] px-4 py-4 overflow-hidden text-black xl:pb-24">
      <h1 class="text-3xl text-center xl:mt-6 xl:font-semibold xl:text-start xl:text-4xl">Lotus (Lorong Waktu Sejarah)</h1>
      <div class="relative mt-8 xl:mt-12">
        <div class="absolute left-1/2 -translate-x-1/2 -top-3 xl:-top-4 w-6/12 h-6 xl:h-8 bg-second"></div>
        <NuxtImg class="w-full aspect-video object-cover overflow-hidden rounded-lg mt-4"
          src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div class="text-third mt-6 font-semibold xl:mt-4 xl:grid xl:grid-cols-4">
        <p>Kategori: -</p>
        <p>Klien: -</p>
        <p>HKI/Paten: -</p>
        <p>Website: -</p>
      </div>
      <div class="mt-4 xl:mt-8">
        <h2 class="text-2xl font-semibold xl:text-3xl">Penjelasan</h2>
        <div class="text-justify flex flex-col gap-3 mt-3">
          <p>LOTUS (Lorong Waktu Sejarah) merupakan sebuah bisnis yang 100% isi konten memanfaatkan AI (Artificial
            Intelligence), LOTUS ini sebuah kotak yang di dalamnya terdapat konten sejarah yang visualisasinya di bantu
            oleh AI, yang menjadikan konten ini menjadi nyata saat kita memasuki kotak tersebut.</p>
          <p>Saat ini yang kita buat, mengangkat konten sejarah Kasepuhan Cirebon yang sudah hampir punah. Kota yang
            terjajah oleh belanda, perbudakan, penindasan terus terjadi setiap sudut kehidupan di kota itu. Dengan
            projek yang kami buat ini, semoga dapat mengangkat kembali sejarah Kasepuhan Cirebon bahkan kembali
            melestarikan sejarah-sejarah yang ada di Indonesia dengan memanfaatkan teknologi yang ada saat ini salah
            satunya AI (Artificial Intelligence).</p>
        </div>
      </div>
      <div class="mt-4 xl:mt-8">
        <h2 class="text-2xl font-semibold xl:text-3xl">Apa saja yang kami kerjakan:</h2>
        <div class="text-justify flex flex-col gap-1 mt-3">
          <p>Terdapat beberapa hal yang kami lakukan diantaranya :</p>
          <ul class="list-disc list-inside ml-3">
            <li>Pembuatan Konten AI</li>
            <li>Pembuatan Konten AI</li>
            <li>Pembuatan Konten AI</li>
            <li>Pembuatan Konten AI</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer ></Footer>
  </div>
</template>

<style></style>