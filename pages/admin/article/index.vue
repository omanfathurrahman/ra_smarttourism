<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })
</script>

<template>
  <div class="">
    <h1 class="text-2xl">Pilih Jenis Artikel</h1>
    <div class="grid grid-cols-3 w-7/12 gap-2 mt-3">
      <NuxtLink to="/admin/article/research"
        class="hover:bg-slate-100 flex flex-col items-center rounded-md py-6 gap-2 border">
        <Icon class="text-4xl" name="cil:zoom" /> Riset
      </NuxtLink>
      <NuxtLink to="/admin/article/pengabdian-masyarakat"
        class="hover:bg-slate-100 flex flex-col items-center rounded-md py-6 gap-2 border">
        <Icon class="text-4xl" name="ri:service-line" /> Pengabdian Masyarakat
      </NuxtLink>
      <NuxtLink to="/admin/article/innovation"
        class="hover:bg-slate-100 flex flex-col items-center rounded-md py-6 gap-2 border">
        <Icon class="text-4xl" name="material-symbols:keyboard-double-arrow-up-rounded" /> Inovasi
      </NuxtLink>
    </div>
  </div>
</template>