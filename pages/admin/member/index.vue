<script
  setup
  lang="ts"
>
import type { Member } from '@prisma/client';

  definePageMeta({
    layout: 'admin'
  })

  onBeforeMount(async ()=>{
    await fetchMembers()
  })

  const members = ref<Member[]>([])

  async function fetchMembers() {
    const data = await getMembers()
    members.value = data as Member[]
  }
</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-2xl">Daftar Member</h1>
      <NuxtLink
        to="/admin/member/add"
        class="px-4 py-1 rounded-md border border-sky-400 text-slate-600"
      >
        Tambah Member
      </NuxtLink>
    </div>
    <div class="grid grid-cols-7 gap-x-3 gap-y-2">
      <div class="w-full border px-2 py-1 space-y-2" v-for="member in members" :key="member.id">
        <NuxtImg :src="member.img_url" class="w-full aspect-square object-cover object-center" />
        <h4 class="text-center">{{ member.name }}</h4>
      </div>
    </div>
  </div>
</template>