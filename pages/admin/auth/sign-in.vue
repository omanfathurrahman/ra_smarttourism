<script setup lang="ts">
  import { set } from '@vueuse/core';


  const data = reactive({
    email: 'tes@email.com',
    username: '',
    password: 'admin001'
  })

  const showPasswordField = ref(false)

  const showUserNotFoundAlert = ref(false)
  const showPasswordWrongAlert = ref(false)

  const signIn = async () => {
    const { data: token, error } = await useAsyncData('signin', async () => {
      return await $fetch('/api/signin', {
        method: 'POST',
        body: {
          email: data.email,
          password: data.password
        }
      })
    })



    if (error.value) {
      if (error.value.statusCode === 404) {
        showUserNotFoundAlert.value = true
        setTimeout(() => {
          showUserNotFoundAlert.value = false
        }, 3000)
      } else if (error.value.statusCode === 401) {
        showPasswordWrongAlert.value = true
        setTimeout(() => {
          showPasswordWrongAlert.value = false
        }, 3000)
      }
    }

    if (token.value) {
      localStorage.setItem('token', token.value.toString())
      navigateTo('/admin')
    }
  }

</script>

<template>
  <div class="flex items-center justify-center min-h-screen text-slate-700 bg-sky-100">
    <div class="w-4/12 mb-20">
      <h1 class="text-3xl font-semibold">Are you admin?</h1>
      <form
        class="rounded-lg px-6 pt-3 pb-5 mt-2 flex flex-col gap-4 bg-white"
        @submit.prevent="signIn"
      >
        <div class="flex flex-col">
          <label
            for="email"
            class="text-sm"
          >Email</label>
          <input
            type="text"
            v-model="data.email"
            id="email"
            class="border border-slate-500 py-1 px-2 rounded-md focus:outline-sky-200"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="password"
            class="text-sm"
          >Password</label>
          <div class="flex items-center border border-slate-500 rounded-md overflow-hidden">
            <input
              :type="showPasswordField? 'text': 'password' "
              v-model="data.password"
              id="password"
              name="password"
              class=" focus:outline-transparent focus:ring-0 border-none py-1 w-full peer"
            />
            <button
              type="button"
              @click="showPasswordField = !showPasswordField"
              class="focus:outline-transparent focus:ring-0 border-none mr-2 hidden peer-focus:block peer-hover:block cursor-pointer hover:block"
            >
              <Icon
                name="solar:eye-closed-linear"
                v-if="showPasswordField"
              />
              <Icon
                name="solar:eye-linear"
                v-else
              />
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="bg-sky-100 py-1 px-4 rounded-md text-slate-800 transition-all duration-200 hover:bg-sky-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-1"
        >Login</button>
      </form>
    </div>
    <AdminAlert
      v-show="showUserNotFoundAlert"
      title="User tidak ditemukan"
      message="Tidak ada user dengan email tersebut"
    />
    <AdminAlert
      v-show="showPasswordWrongAlert"
      title="Password salah"
    />
  </div>
</template>