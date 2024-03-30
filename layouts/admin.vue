<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="bg-gradient-to-br from-[#1c92d2] to-[#bef5fe] p-3 min-h-screen">
    <div class="bg-white min-h-[calc(100vh-24px)] rounded-lg flex flex-col py-2">
      <AdminHeader />
      <div class="flex flex-auto">
        <AdminSidebar class="w-2/12" v-if="route.path != '/admin'" />
        <div class="bg-gradient-to-br from-transparent from-30% to-slate-50 px-6 py-3" :class="route.path != '/admin'?'w-10/12': 'w-full'">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
  background-color: white;
} */
</style>