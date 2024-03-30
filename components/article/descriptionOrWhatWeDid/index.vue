<script
  lang="ts"
  setup
>
  import ArticleDescriptionOrWhatWeDidParagraf from './paragraf.vue'
  import ArticleDescriptionOrWhatWeDidList from './list.vue'
  import type { ArticleDescriptionOrWhatWeDidContentBlocks, ArticleDescriptionOrWhatWeDidContentItem } from '~/types/Article';

  const props = defineProps<{
    curArticleDescriptionOrWhatWeDidContentList: ArticleDescriptionOrWhatWeDidContentBlocks[]
  }>()

</script>

<template>
  <div class="space-y-3">
    <component
      v-for="block in curArticleDescriptionOrWhatWeDidContentList"
      :is="(block.type == 'paragraph')? ArticleDescriptionOrWhatWeDidParagraf  : ArticleDescriptionOrWhatWeDidList"
      :key="block.id"
      :data="block.data"
    />
  </div>
</template>