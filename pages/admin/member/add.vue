<script setup lang="ts">
  definePageMeta({
    layout: 'admin',
  })

  import { Part, type Member } from '@prisma/client';
  import { getFile } from '~/composables/s3/getFile';
  import uploadMemberToDatabase from '~/composables/uploadMemberToDatabase';
  import { v4 as uuidv4 } from 'uuid'
  
  type MemberWhenAdd = Member & {
    img_src: string
    img_inputEl: HTMLInputElement | null
    img_file: File | null
  }

  const loadingUpload = ref(false)
  // const {  } = useMyMembersStore()
  const jumlahMember = ref(1)
  function addMemberToList() {
    jumlahMember.value++
    dataMemberList.push({
      id: uuidv4(),
      img_file: null,
      img_src: '',
      img_inputEl: null,
      img_path: '',
      img_url_expired_time: new Date(),
      show: true,
      img_url: '',
      name: '',
      email: '',
      start_date: new Date(),
      end_date: new Date(),
      position: '',
      part: Part.Member,
    })
  }

  const dataMemberList = reactive<MemberWhenAdd[]>([
      {
        id: uuidv4(),
        img_url: '',
        img_file: null,
        img_src: '',
        img_inputEl: null,
        img_path: '',
        img_url_expired_time: new Date(),
        show: true,
        name: '',
        email: '',
        start_date: new Date(),
        end_date: new Date(),
        position: '',
        part: Part.Member,
      },
    ])

  function addImage(e: Event, index: number) {
    const inputEl = document.getElementById(`file-img-member-${index}`) as HTMLInputElement

    dataMemberList[index].img_inputEl = inputEl
    inputEl.click()
  }

  async function showFile(e: Event, index: number) {
    if (dataMemberList[index].img_inputEl?.files) {
      const file = dataMemberList[index].img_inputEl?.files![0]
      if (file) {
        dataMemberList[index].img_file = file
        const src = await fileToBase64(file);
        if (typeof src === 'string') {
          dataMemberList[index].img_src = src
        }
      }
    }
  }
  
  async function uploadProfilePictureToS3(): Promise<Member[]> {
    const dataMemberToUpload: Member[] = []
    for (let i = 0; i < dataMemberList.length; i++) {
      const member = dataMemberList[i]
      if (member.img_file) {
        if (member.part == Part.Member){
          const { img_path, img_url, img_url_expired_time } = await uploadMembersProfilePicture({file: member.img_file, name: member.name})
          dataMemberToUpload.push({
            id: member.id,
            img_path: img_path,
            img_url: img_url,
            img_url_expired_time: img_url_expired_time,
            name: member.name,
            email: member.email,
            start_date: member.start_date,
            end_date: member.end_date,
            position: member.position,
            part: member.part,
            show: true,
          })
        } else if (member.part == Part.Intern){
          const { img_path, img_url, img_url_expired_time } = await uploadInternProfilePicture({file: member.img_file, name: member.name})
          dataMemberToUpload.push({
            id: member.id,
            img_path: img_path,
            img_url: img_url,
            img_url_expired_time: img_url_expired_time,
            name: member.name,
            email: member.email,
            start_date: member.start_date,
            end_date: member.end_date,
            position: member.position,
            part: member.part,
            show: true,
          })
        }
      }
    }
    return dataMemberToUpload

  }

  const { addMember } = useMyMembersStore()

  async function upload() {
    loadingUpload.value = true

    // upload to s3
    const memberToUpload = await uploadProfilePictureToS3()

    // upload to database
    await uploadMemberToDatabase(memberToUpload)
    
    // add to store
     addMember(memberToUpload)

    loadingUpload.value = false
    navigateTo('/admin/member')
  }

</script>

<template>
  <div class="space-y-4">
    <NuxtLink
      to="/admin/member"
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
            :src="dataMemberList[index].img_src"
            alt=""
            class="w-full h-full object-cover"
            v-if="dataMemberList[index].img_src"
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
                <option :value="Part.Member">Member</option>
                <option :value="Part.Intern">Magang</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-2 flex items-center justify-between">
        <button
          @click="addMemberToList"
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