import { getFile } from "~/composables/s3/getFile"

export default defineNuxtRouteMiddleware(async () => {
  const { getMembersFromLocalStorage, getMembers } = useMyMembersStore()
  const { getArticlesFromLocalStorage, getAllArticles } = useMyArticleStore()

  if (getMembers.length == 0) {
    console.log('setup member data')
    if (!localStorage.getItem('members')) {
      const members = await $fetch('/api/members')
      if (members.length === 0) return
      const membersToBeDisplayed = await Promise.all(members.map(async (member) => {
        const { img_url, img_url_expired_time } = await getFile(member.img_url!)
        return {
          ...member,
          img_url,
          
        }
      }))
      localStorage.setItem('members', JSON.stringify(membersToBeDisplayed))
      getMembersFromLocalStorage()
    }

    if (localStorage.getItem('members')) {
      getMembersFromLocalStorage()
    }
  }
  if (getAllArticles.length == 0) {
    console.log('setup article data')
    if (!localStorage.getItem('articles')) {
      const articles = await $fetch('/api/articles')
      if (!articles) return
      if (articles.length === 0) return
      localStorage.setItem('articles', JSON.stringify(articles))
      getArticlesFromLocalStorage()
    }

    if (localStorage.getItem('articles')) {
      getArticlesFromLocalStorage()
    }
  }
})
