<template>
  <nav class="border-r pl-6 pr-2 py-6">
    <div class="space-y-2">
      <NuxtLink to="/admin/article/research"
        class="flex items-center gap-2 px-2 py-1.5 rounded-md w-full hover:bg-slate-100 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
        <Icon name="cil:zoom" /> Riset
      </NuxtLink>
      <NuxtLink to="/admin/article/pengabdian-masyarakat"
        class="flex items-center gap-2 px-2 py-1.5 rounded-md w-full hover:bg-slate-100 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
        <Icon name="ri:service-line" /> Pengabdian Masyarakat
      </NuxtLink>
      <NuxtLink to="/admin/article/innovation"
        class="flex items-center gap-2 px-2 py-1.5 rounded-md w-full hover:bg-slate-100 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
        <Icon name="material-symbols:keyboard-double-arrow-up-rounded" /> Inovasi
      </NuxtLink>
    </div>
    <div class="mt-4 py-4 border-t border-slate-300">
      <NuxtLink to="/admin/member" class="flex items-center gap-2 px-2 py-1.5 rounded-md w-full hover:bg-slate-100 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
        <Icon name="fluent:people-community-48-regular" />
        Member
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>

<style></style>