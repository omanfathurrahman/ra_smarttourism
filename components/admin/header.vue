<template>
  <header class="flex justify-between items-center relative h-14 flex-grow-0 px-8 flex-shrink border-b">
    <NuxtLink to="/admin" class="font-semibold text-lg">Halaman Admin</NuxtLink>
    <div class="flex gap-10">
      <div class="flex gap-10">
        <NuxtLink to="/admin/article">Artikel</NuxtLink>
        <NuxtLink to="/admin/member">Member</NuxtLink>
      </div>
      <span class="h-6 w-[1px] bg-slate-300"></span>
      <button type="button" @click="logout">log out</button>
    </div>
  </header>
</template>

<script lang="ts" setup>

  const { removeAuthUser, getAuthUser } = useAuthUser()

  const logout = async () => {
    console.log('logout')
    removeAuthUser()
  }

</script>

<style></style>