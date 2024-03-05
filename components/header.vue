<script lang="ts" setup>
const navHover = reactive({
  tentangKami: false,
  aktivitas: false,
  program: false
})
</script>

<template>
  <header class="flex items-center justify-between h-[4.5rem] ">
    <div class="flex gap-2">
      <div class="h-[3rem]">
        <img src="/lingian-logo.png" alt="" class="h-full">
      </div>
      <div class="flex flex-col ">
        <span class="text-lg">Center of Excellence</span>
        <span class="text-xs font-bold">Smart Tourism & Hotpitality</span>
      </div>
    </div>
    <div class="flex items-center gap-10 h-full *:h-full">
      <button class="hover:underline underline-offset-4">Beranda</button>
      <div class="relative group flex justify-center" @mouseover="navHover.tentangKami = true"
        @mouseleave="navHover.tentangKami = false">
        <button class="">Tentang Kami
          <Icon name="ic:round-keyboard-arrow-down" class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.tentangKami">
            <button class="hover:underline underline-offset-4">Visi dan Misi</button>
            <button class="hover:underline underline-offset-4">Anggota Tim</button>
          </div>
        </Transition>
      </div>
      <div class="relative group flex justify-center" @mouseover="navHover.aktivitas = true"
        @mouseleave="navHover.aktivitas = false">
        <button class="">Aktivitas
          <Icon name="ic:round-keyboard-arrow-down" class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.aktivitas">
            <button class="hover:underline underline-offset-4">Riset</button>
            <button class="hover:underline underline-offset-4">Bisnis</button>
            <button class="hover:underline underline-offset-4">Inovasi</button>
          </div>
        </Transition>
      </div>
      <div class="relative group flex justify-center" @mouseover="navHover.program = true"
        @mouseleave="navHover.program = false">
        <button class="">Program
          <Icon name="ic:round-keyboard-arrow-down" class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.program">
            <button class="hover:underline underline-offset-4">MBKM dan Magang</button>
            <button class="hover:underline underline-offset-4">Pengabdian Masyarakat</button>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style scoped>.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}</style>