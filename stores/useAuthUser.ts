import type { User } from '@prisma/client'
import { defineStore } from 'pinia'

export const useAuthUser = defineStore('useAuth', () => {
  const _authUser = ref<User>()
  const getAuthUser = computed(() => {return _authUser.value})
  const removeAuthUser = () => {
    _authUser.value = undefined
    localStorage.removeItem('token')
    reloadNuxtApp()
  }
  const setAuthUser = (user: User) => {
    _authUser.value = user
  }

  return { getAuthUser, setAuthUser, removeAuthUser }

})
