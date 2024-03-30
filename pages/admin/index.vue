<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })
</script>

<template>

  <div class="flex-auto pb-[10%] pt-16">
    <div class="flex flex-col items-center gap-3">
      <NuxtImg src="/lingian-logo.png" class="size-28 object-contain" />
      <h2 class="text-5xl font-semibold">Managemen Konten</h2>
    </div>
    <div class="text-center mt-6">
      <p class="text-xl">Pilih konten untuk mengedit:</p>
      <div class="flex gap-3 justify-center mt-3">
        <NuxtLink to="/admin/article" class="border border-slate-200 px-16 py-5 rounded-lg transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
          <Icon name="ooui:article-ltr" size="5rem" />
          <p class="mt-2">Artikel</p>
        </NuxtLink>
        <NuxtLink to="/admin/member" class="border border-slate-200 px-16 py-5 rounded-lg transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
          <Icon name="fluent:people-community-48-regular" size="5rem" />
          <p class="mt-2">Member</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>