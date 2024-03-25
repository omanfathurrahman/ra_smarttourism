import type { User } from "@prisma/client"
import { useAuthUser } from "~/stores/useAuthUser"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { getAuthUser, setAuthUser } = useAuthUser()

  if (to.name === 'admin' && !localStorage.getItem('token')) {
    console.log(to.name)
    return navigateTo('/admin/auth/sign-in')
  } else if (to.name === 'admin' && !getAuthUser) {
    const user = await $fetch('/api/getAuthUser', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setAuthUser(user as User)
  }
})
