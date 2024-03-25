<script setup lang="ts">
  definePageMeta({
    layout: 'admin'
  })

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
    localStorage.setItem('token', token.toString())
  }

  const checkUser = async () => {
    const user = await $fetch('/api/getauthuser',
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        }
      }
    )
    console.log(user)
  }
</script>

<template>
  <div>
    <h1>Login</h1>
    <form action="" @submit.prevent="signIn">
      <div class="">
        <label for="email">Email</label>
        <input type="text" v-model="data.email" id="email" />
      </div>
      <div class="">
        <label for="pw">Password</label>
        <input type="password" v-model="data.password" id="pw" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" @click="checkUser">check user</button>
    </form>
  </div>
</template>