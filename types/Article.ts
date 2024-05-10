
export interface ArticleDocumentationImage {
    postId: string;
    img_url: ArticleDocumentationImgUrl[];
}

export interface ArticleDocumentationImgUrl {
    img_url: string;
    img_path: string;
    img_url_expired_time: Date;
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
  