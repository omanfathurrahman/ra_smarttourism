<script
  setup
  lang="ts"
>
  const props = defineProps<{
    data: { text: string }
  }>()

  function removeNonBreakingSpace(text: string): string {
    // Replace all occurrences of &nbsp; with a regular space
    return text.replace(/&nbsp;/g, ' ');
  }
</script>

<template>
  <p>{{ removeNonBreakingSpace(data.text) }}</p>
</template>