<script
  setup
  lang="ts"
>
  import uploadMember from '~/composables/uploadMember';
  import type { Member } from '~/types/Member';


  definePageMeta({
    layout: 'admin',
  })

  const loadingUpload = ref(false)

  const jumlahMember = ref(1)
  function addMember() {
    jumlahMember.value++
    dataMemberList.push({
      img_url: {
        url: '',
        src: '',
        file: null,
        inputEl: null,
      },
      name: '',
      email: '',
      start_date: new Date(),
      end_date: new Date(),
      position: '',
      part: '',
    })
  }

  const dataMemberList = reactive<
    Array<{
      img_url: {
        src: string,
        url: string,
        file: File | null,
        inputEl: HTMLInputElement | null,
      },
      name: string,
      email: string,
      start_date: Date,
      end_date: Date,
      position: string,
      part: string,
    }>>([
      {
        img_url: {
          url: '',
          src: '',
          file: null,
          inputEl: null,
        },
        name: '',
        email: '',
        start_date: new Date(),
        end_date: new Date(),
        position: '',
        part: '',
      },
    ])

  function addImage(e: Event, index: number) {
    const container = e.target as HTMLDivElement
    const inputEl = document.getElementById(`file-img-member-${index}`) as HTMLInputElement

    dataMemberList[index].img_url.inputEl = inputEl
    inputEl.click()
  }

  async function showFile(e: Event, index: number) {
    if (dataMemberList[index].img_url.inputEl?.files) {
      const file = dataMemberList[index].img_url.inputEl?.files![0]
      if (file) {
        dataMemberList[index].img_url.file = file
        const src = await fileToBase64(file);
        if (typeof src === 'string') {
          dataMemberList[index].img_url.src = src
        }
      }
    }
  }

  async function uploadImages() {
    for (let i = 0; i < dataMemberList.length; i++) {
      if (dataMemberList[i].img_url.file) {
        const url = await uploadImageToImageKit
          ({ uploadedPosterImg: dataMemberList[i].img_url.file!, title: dataMemberList[i].name })
        dataMemberList[i].img_url.url = url
      }
    }
  }

  function memberReadyToUpload() {
    const membersToUpload: Member[] = []
    dataMemberList.forEach((member) => {
      const memberToUpload: Member = {
        ...member,
        img_url: member.img_url.url,
        show: true,
      }
      membersToUpload.push(memberToUpload)
    })
    return membersToUpload
  }

  async function upload() {
    loadingUpload.value = true
    await uploadImages()
    const membersToUpload = memberReadyToUpload()
    await uploadMember(membersToUpload)
    loadingUpload.value = false
    navigateTo('/admin/member')
  }

</script>

<template>
  <div class="space-y-4">
    <NuxtLink
      to="/admin/article/research"
      class="back-button px-4 py-1 border rounded-full"
    >
      Back
    </NuxtLink>
    <h2 class="text-2xl">Tambah Member</h2>
    <form
      class="space-y-2"
      @submit.prevent="upload"
    >
      <div
        class="flex items-center gap-4 px-4 py-2 border rounded-sm"
        v-for="(_, index) in jumlahMember"
      >
        <div
          class="size-24 rounded-md overflow-hidden bg-slate-200 cursor-pointer"
          @click="(e: Event) => { addImage(e, index) }"
        >
          <input
            type="file"
            class="hidden"
            :multiple="false"
            accept="image/*"
            :id="`file-img-member-${index}`"
            @change="(e: Event) => { showFile(e, index) }"
          >
          <NuxtImg
            :src="dataMemberList[index].img_url.src"
            alt=""
            class="w-full h-full object-cover"
            v-if="dataMemberList[index].img_url.src"
          />
          <div
            class="w-full h-full flex items-center justify-center"
            v-else
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
        <div class="grid grid-cols-3 w-full gap-2">
          <div class="">
            <div class="flex flex-col">
              <label>Nama Lengkap</label>
              <input
                required
                type="text"
                class="border"
                v-model="dataMemberList[index].name"
              >
            </div>
            <div class="flex flex-col">
              <label>Email</label>
              <input
                required
                type="text"
                class="border"
                v-model="dataMemberList[index].email"
              >
            </div>
          </div>
          <div class="">
            <div class="flex flex-col">
              <label>Start Date</label>
              <input
                type="date"
                class="border"
                v-model="dataMemberList[index].start_date"
              >
            </div>
            <div class="flex flex-col">
              <label>End Date</label>
              <input
                type="date"
                class="border"
                v-model="dataMemberList[index].end_date"
              >
            </div>
          </div>
          <div class="">
            <div class="flex flex-col">
              <label>Jabatan</label>
              <input
                required
                type="text"
                class="border"
                v-model="dataMemberList[index].position"
              >
            </div>
            <div class="flex flex-col">
              <label>Part</label>
              <select
                required
                v-model="dataMemberList[index].part"
                class="border"
              >
                <option value="member">Member</option>
                <option value="magang">Magang</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-2 flex items-center justify-between">
        <button
          @click="addMember"
          type="button"
          class="px-4 py-1 border rounded-full"
        >Add Member
        </button>
        <button
          class="px-4 py-1 border rounded-full"
          type="submit"
        >Tambahkan
        </button>
      </div>
    </form>
    <div
      class="absolute w-full bg-black/50 z-20 top-0 left-0 h-full flex justify-end items-end p-16"
      v-if="loadingUpload"
    >
      <div class="bg-sky-400 w-4/12 bottom-10 right-10 px-8 py-2 rounded-md shadow-xl h-fit text-sm">
        <p class="text-base">Loading...</p>
        <p>Mohon tunggu, sedang mengupload
          <Icon name="eos-icons:three-dots-loading" />
        </p>
        <p>Mungkin tunggu sekitar 1 menit hehe</p>
      </div>
    </div>
  </div>
</template>