
export interface ArticleDocumentationImage {
    postId: string;
    img_url: string[];
}

export interface ArticleDescriptionOrWhatWeDidInterface {
    time: number
    blocks: ArticleDescriptionOrWhatWeDidContentBlocks[]
    version: string
  }
  
  export interface ArticleDescriptionOrWhatWeDidContentBlocks {
    id: string
    type: string
    data: ArticleDescriptionOrWhatWeDidContentItem
  }
  
  export interface ArticleDescriptionOrWhatWeDidContentItem {
    text: string
  }
  