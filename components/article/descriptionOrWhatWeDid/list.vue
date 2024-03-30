<script
  lang="ts"
  setup
>
  const props = defineProps<{
    data: { style: string, items: string[] }
  }>()
  function removeLineBreaks(text: string): string {
    // Replace all occurrences of <br> with an empty string
    return text.replace(/<br\s*\/?>/gi, '');
}
</script>

<template>
  <ul class="">
    <li
      v-for="item in props.data.items"
      :key="item"
      class="list-disc list-inside"
    >
      {{ removeLineBreaks(item) }}
    </li>
  </ul>
</template>