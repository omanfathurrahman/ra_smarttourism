<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

  const AuthStore = useAuthUser()

  const { getAuthUser } = storeToRefs(AuthStore)

  const { removeAuthUser } = useAuthUser()

  const checkUser = () => console.log(getAuthUser.value)

  const logout = async () => {
    removeAuthUser()
  }
</script>

<template>
  <div>
    <h1>Halaman Admin</h1>
    <button type="button" @click="checkUser">check user</button>
    <button type="button" @click="logout">log out</button>
  </div>
</template>