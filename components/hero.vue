<script setup lang="ts">
  const props = defineProps<{
    imgFile: string;
    title: string;
  }>();
</script>

<template>
  <div class="relative w-full -z-10">
    <NuxtImg :src="`img/${props.imgFile}`" alt="" class="w-full h-full" />
    <h1 class="absolute w-full top-1/2 translate-y-[-80%] left-1/2 translate-x-[-50%] text-6xl font-semibold text-center">
      {{ props.title }}
    </h1>
    <div class="w-[20rem] h-[2rem] bg-orange-400 absolute -top-3 left-1/2 translate-x-[-50%]"></div>
  </div>
</template>
