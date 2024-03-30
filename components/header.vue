<script lang="ts" setup>
  const navHover = reactive({
    tentangKami: false,
    aktivitas: false,
    program: false
  })

  const { width } = useWindowSize()
  const isMobile = computed(() => width.value < 768)
  const openNav = ref(false)

  onBeforeUpdate(()=>{
    openNav.value = false
  })

</script>

<template>
  <header class="flex items-center justify-between h-[4rem] lg:h-[6rem]">
    <div class="flex items-center gap-2">
      <div class="h-[3.5rem] lg:h-[4rem] py-1">
        <img src="/lingian-logo.png" alt="" class="h-full">
      </div>
      <div class="flex flex-col justify-center">
        <span class="text-lg">Center of Excellence</span>
        <span class="text-xs font-bold">Smart Tourism & Hotpitality</span>
      </div>
    </div>
    <div v-if="!isMobile" class="flex items-center gap-10 h-full *:h-full">
      <NuxtLink to="/" class="flex items-center hover:underline underline-offset-4">Beranda</NuxtLink>
      <div class="relative group flex justify-center" @mouseover="navHover.tentangKami = true"
        @mouseleave="navHover.tentangKami = false">
        <button class="">Tentang Kami
          <Icon name="ic:round-keyboard-arrow-down"
            class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.tentangKami">
            <NuxtLink to="/visi-dan-misi" class="hover:underline underline-offset-4">Visi dan Misi</NuxtLink>
            <NuxtLink to="/anggota-tim" class="hover:underline underline-offset-4">Anggota Tim</NuxtLink>
          </div>
        </Transition>
      </div>
      <div class="relative group flex justify-center" @mouseover="navHover.aktivitas = true"
        @mouseleave="navHover.aktivitas = false">
        <button class="">Aktivitas
          <Icon name="ic:round-keyboard-arrow-down"
            class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.aktivitas">
            <NuxtLink to="/riset" class="hover:underline underline-offset-4">Riset</NuxtLink>
            <NuxtLink to="/bisnis" class="hover:underline underline-offset-4">Bisnis</NuxtLink>
            <NuxtLink to="/inovasi" class="hover:underline underline-offset-4">Inovasi</NuxtLink>
          </div>
        </Transition>
      </div>
      <div class="relative group flex justify-center" @mouseover="navHover.program = true"
        @mouseleave="navHover.program = false">
        <button class="">Program
          <Icon name="ic:round-keyboard-arrow-down"
            class="text-xl group-hover:-rotate-180 transition-all duration-200" />
        </button>
        <Transition>
          <div class="flex flex-col bg-zinc-700/90 px-6 py-2 rounded-md absolute top-[95%] *:text-nowrap"
            v-show="navHover.program">
            <NuxtLink to="/mbkm-dan-magang" class="hover:underline underline-offset-4">MBKM dan Magang</NuxtLink>
            <NuxtLink to="/pengabdian-masyarakat" class="hover:underline underline-offset-4">Pengabdian Masyarakat
            </NuxtLink>
          </div>
        </Transition>
      </div>
    </div>
    <div class="h-fit" v-else>
      <div class="h-fit flex items-center" @click="openNav = true">
        <Icon name="ic:round-menu" class="text-3xl" />
      </div>
      <Transition>
        <div v-show="openNav" @wheel.prevent @touchmove.prevent @scroll.prevent
          class="absolute bg-primary flex flex-col items-start z-40 w-full h-full top-0 left-0 p-10">
          <div class="w-full flex justify-end">
            <div class="" @click="openNav = false">
              <Icon name="ic:round-close" class="text-3xl" />
            </div>
          </div>
          <NuxtLink to="/" class="flex items-center hover:underline underline-offset-4">Beranda</NuxtLink>
          <div class="relative group flex flex-col lg:flex-row items-start lg:items-center justify-center"
            @click="navHover.tentangKami = !navHover.tentangKami">
            <button class="">Tentang Kami
              <Icon name="ic:round-keyboard-arrow-down" class="text-xl transition-all duration-200"
                :class="navHover.tentangKami ? '-rotate-180' : ''" />
            </button>
            <Transition>
              <div class="flex flex-col items-start lg:items-center px-6 py-2 rounded-md top-[95%] *:text-nowrap"
                v-show="navHover.tentangKami">
                <NuxtLink to="/visi-dan-misi" class="hover:underline underline-offset-4">Visi dan Misi</NuxtLink>
                <NuxtLink to="/anggota-tim" class="hover:underline underline-offset-4">Anggota Tim</NuxtLink>
              </div>
            </Transition>
          </div>
          <div class="relative group flex flex-col lg:flex-row items-start lg:items-center justify-center"
            @click="navHover.aktivitas = !navHover.aktivitas">
            <button class="">Aktivitas
              <Icon name="ic:round-keyboard-arrow-down" class="text-xl transition-all duration-200"
                :class="navHover.aktivitas ? '-rotate-180' : ''" />
            </button>
            <Transition>
              <div class="flex flex-col items-start lg:items-center px-6 py-2 rounded-md top-[95%] *:text-nowrap"
                v-show="navHover.aktivitas">
                <NuxtLink to="/riset" class="hover:underline underline-offset-4">Riset</NuxtLink>
                <NuxtLink to="/bisnis" class="hover:underline underline-offset-4">Bisnis</NuxtLink>
                <NuxtLink to="/inovasi" class="hover:underline underline-offset-4">Inovasi</NuxtLink>
              </div>
            </Transition>
          </div>
          <div class="relative group flex flex-col lg:flex-row items-start lg:items-center justify-center"
            @click="navHover.program = !navHover.program">
            <button class="">Program
              <Icon name="ic:round-keyboard-arrow-down" class="text-xl transition-all duration-200"
                :class="navHover.program ? '-rotate-180' : ''" />
            </button>
            <Transition>
              <div class="flex flex-col items-start lg:items-center px-6 py-2 rounded-md top-[95%] *:text-nowrap"
                v-show="navHover.program">
                <NuxtLink to="/mbkm-dan-magang" class="hover:underline underline-offset-4">MBKM dan Magang</NuxtLink>
                <NuxtLink to="/pengabdian-masyarakat" class="hover:underline underline-offset-4">Pengabdian Masyarakat
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>