import type { User } from "@prisma/client"
import { useAuthUser } from "~/stores/useAuthUser"

export default defineNuxtRouteMiddleware(async (to) => {
  const { getAuthUser, setAuthUser } = useAuthUser()

  if (to.path.startsWith('/admin') && !to.path.startsWith('/admin/auth') && !localStorage.getItem('token')) {
    return navigateTo('/admin/auth/sign-in')
  }
  if (to.path.startsWith('/admin') && !to.path.startsWith('/admin/auth') && !getAuthUser) {
    try {
      console.log(localStorage.getItem('token'))
      const user = await $fetch('/api/getauthuser', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      console.log(user)
      if (!user) throw new Error('User not found')
      setAuthUser(user as User)
    } catch (e: unknown) {
      if (typeof e === 'object' && e instanceof Error && e.message === 'User not found') {
        localStorage.removeItem('token')
        console.log(e)
        return navigateTo('/admin/auth/sign-in')
      } else {
        console.error(e)
        return navigateTo('/admin/auth/sign-in')
      }
    }
  }
  if (to.path.startsWith('/admin/auth') && localStorage.getItem('token')) {
    return navigateTo('/admin')
  }

})
