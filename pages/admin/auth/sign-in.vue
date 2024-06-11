<script setup lang="ts">

  const data = reactive({
    email: 'tes@email.com',
    username: '',
    password: 'admin001'
  })

  const signIn = async () => {
    const token = await $fetch('/api/signin', {
      method: 'POST',
      body: {
        email: data.email,
        password: data.password
      }
    })
    console.log('login')
    localStorage.setItem('token', token.toString())
    console.log(localStorage.getItem('token'))

    navigateTo('/admin')
  }

</script>

<template>
  <div class="flex items-center justify-center min-h-screen text-slate-700 bg-sky-100">
    <div class="w-4/12 mb-20">
      <h1 class="text-3xl font-semibold">Are you admin?</h1>
      <form class="rounded-lg px-6 pt-3 pb-5 mt-2 flex flex-col gap-4 bg-white" @submit.prevent="signIn">
        <div class="flex flex-col">
          <label for="email" class="text-sm">Email</label>
          <input type="text" v-model="data.email" id="email"
            class="border border-slate-500 py-1 px-2 rounded-md focus:outline-sky-200" />
        </div>
        <div class="flex flex-col">
          <label for="pw" class="text-sm">Password</label>
          <input type="password" v-model="data.password" id="pw"
            class="border border-slate-500 py-1 px-2 rounded-md focus:outline-sky-200" />
        </div>
        <button type="submit"
          class="bg-sky-100 py-1 px-4 rounded-md text-slate-800 transition-all duration-200 hover:bg-sky-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>