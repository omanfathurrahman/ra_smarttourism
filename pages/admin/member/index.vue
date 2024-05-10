<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })
  import type { Member } from '@prisma/client';

  const { updateExpiredMemberImgUrl, getMembersFromDatabase } = useMyMembersStore()
  const { getMembers } = storeToRefs(useMyMembersStore())

  async function updateImgUrl(member: Member) {
    // console.log('updateImgUrl', member.img_url)
    await updateExpiredMemberImgUrl(member)
  }

</script>

<template>
  <div class="">
    <div class="flex justify-between">
      <h1 class="text-2xl">Daftar Member</h1>
      <div class="flex items-center gap-2">
        <button
          @click="getMembersFromDatabase"
          class="px-4 py-1 rounded-md border border-slate-300 text-slate-600"
        >
          refresh
        </button>
        <NuxtLink
          to="/admin/member/add"
          class="px-4 py-1 rounded-md border border-sky-400 text-slate-600"
        >
          Tambah Member
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-x-3 gap-y-2 mt-3">
      <div
        class="w-full border px-2 py-1 space-y-2"
        v-for="(member, index) in getMembers"
        alt="article.title"
        @click="navigateTo('/admin/member/' + member.id)"
        :key="index"
      >
        <NuxtImg
          :src="member.img_url!"
          @error="updateImgUrl(member)"
          class="w-full aspect-square object-cover object-center"
        />
        <h4 class="text-center line-clamp-1	">{{ member.name }}</h4>
      </div>
    </div>
  </div>
</template>