import { Type, type Post } from '@prisma/client'
import { defineStore } from 'pinia'
import { getFile } from '~/composables/s3/getFile'

//  TODO aws expire

export const useMyArticleStore = defineStore('article', () => {
  const _articles = ref<Array<Post>>([])

  const getAllArticles = computed(() => {
    return _articles.value
  })

  const persistArticlesToLocalStorage = () => {
    if (_articles.value.length > 0) {
      localStorage.setItem('articles', JSON.stringify(_articles.value))
    }
  }

  const getArticlesFromLocalStorage = () => {
    const items = localStorage.getItem('articles')
    
    if (items !== 'undefined' && typeof items === 'string') {
      _articles.value = JSON.parse(items)

    } else {
      _articles.value = []
    }
  }

  const getArticleFromDatabase = async () => {
    const res = await $fetch('/api/articles')
    const _tempArticles = res.map((article) => {
      const date = new Date(article.img_url_expired_time!)
      return {
        ...article,
        img_url_expired_time: date
      }
    })
    _articles.value = _tempArticles
    persistArticlesToLocalStorage()
    console.log(localStorage.getItem('articles'))
  }

  const addArticle = (article: Post | Post[]) => {
    if (Array.isArray(article)) {
      _articles.value.push(...article)
      persistArticlesToLocalStorage()
      return
    }
    _articles.value.push(article)
    persistArticlesToLocalStorage()
  }

  const updateExpiredArticleImgUrl = async (article: Post) => {
    const { img_url, img_url_expired_time } = await getFile(article.img_path!)
    _articles.value = _articles.value.map((item) => {
      if (item.id === article.id) {
        return {
          ...item,
          img_url,
          img_url_expired_time
        }
      }
      return item
    })
  }

  return { getAllArticles, getArticlesFromLocalStorage, addArticle, getArticleFromDatabase, updateExpiredArticleImgUrl }
})
