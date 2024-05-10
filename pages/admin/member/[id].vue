<script setup lang="ts">
  import type { Member } from '@prisma/client';

  definePageMeta({
    layout: 'admin'
  })

  type MemberWhenUpdate = Omit<Member, 'start_date' | 'end_date'> & {
    start_date: string
    end_date: string
  }

  import { Part } from '@prisma/client';

  const isChanged = ref(false)

  const isUploadLoading = ref(false)
  const isDeleteLoading = ref(false)

  const showDeleteAlert = ref(false)

  const memberData = reactive<MemberWhenUpdate>({
    id: '',
    position: '',
    show: true,
    name: '',
    email: '',
    img_url: '',
    start_date: '',
    end_date: '',
    img_path: '',
    img_url_expired_time: new Date(),
    part: Part.Member
  })
  const { id } = useRoute('admin-member-id').params

  async function fetchData(): Promise<void> {
    const data = await $fetch<Member>('/api/members/' + id)
    memberData.id = data.id
    memberData.position = data.position
    memberData.show = data.show
    memberData.name = data.name
    memberData.email = data.email
    memberData.img_url = data.img_url
    memberData.start_date = formatISOStringToYYYYMMDD(data.start_date! as unknown as string)
    memberData.end_date = formatISOStringToYYYYMMDD(data.end_date! as unknown as string)
    memberData.img_path = data.img_path
    memberData.img_url_expired_time = new Date(data.img_url_expired_time!)
    memberData.part = data.part
  }

  const profilePictureInputEl = ref<HTMLInputElement | null>(null)

  async function showFile(e: Event) {
    const file = profilePictureInputEl.value?.files![0]
    console.log(file)
    if (!file) return
    const src = await fileToBase64(file)
    console.log(src)
    if (!src) return
    memberData.img_url = src as string;
    isChanged.value = true
  }

  async function getMemberReadyToUpdate(): Promise<Member> {
    console.log(profilePictureInputEl.value?.files)
    if (profilePictureInputEl.value?.files?.length == 0) {
      return {
        id: memberData.id,
        name: memberData.name,
        img_url: memberData.img_url,
        img_path: memberData.img_path,
        img_url_expired_time: memberData.img_url_expired_time,
        position: memberData.position,
        show: memberData.show,
        email: memberData.email,
        start_date: new Date(memberData.start_date),
        end_date: new Date(memberData.end_date),
        part: memberData.part
      }
    }
    if (memberData.part === Part.Intern) {
      const { img_path, img_url, img_url_expired_time } = await uploadInternProfilePicture({ file: profilePictureInputEl.value?.files![0]!, name: memberData.name })
      return {
        id: memberData.id,
        name: memberData.name,
        img_url,
        img_path,
        img_url_expired_time,
        position: memberData.position,
        show: memberData.show,
        email: memberData.email,
        start_date: new Date(memberData.start_date),
        end_date: new Date(memberData.end_date),
        part: memberData.part
      }
    } else {
      const { img_path, img_url, img_url_expired_time } = await uploadMembersProfilePicture({ file: profilePictureInputEl.value?.files![0]!, name: memberData.name })
      return {
        id: memberData.id,
        name: memberData.name,
        img_url,
        img_path,
        img_url_expired_time,
        position: memberData.position,
        show: memberData.show,
        email: memberData.email,
        start_date: new Date(memberData.start_date),
        end_date: new Date(memberData.end_date),
        part: memberData.part
      }

    }
  }

  const { getMembersFromDatabase } = useMyMembersStore()

  async function updateData() {
    isUploadLoading.value = true

    const memberToUpdate: Member = await getMemberReadyToUpdate()

    await $fetch('/api/members/' + id, {
      method: 'POST',
      body: memberToUpdate
    })

    await getMembersFromDatabase()

    isUploadLoading.value = false

    navigateTo('/admin/member')
  }

  async function deleteData() {
    isDeleteLoading.value = true
    await $fetch('/api/members/' + id, {
      method: 'DELETE'
    })
    isDeleteLoading.value = false
    await getMembersFromDatabase()
    navigateTo('/admin/member')
  }

  onMounted(async () => {
    await fetchData()
  })
</script>

<template>
  <div class="space-y-4">
    <NuxtLink
      to="/admin/member"
      class="back-button px-4 py-1 border rounded-full"
    >
      Back
    </NuxtLink>
    <div class="flex items-center gap-4 px-4 py-2 border rounded-sm">
      <div
        class="size-24 rounded-md overflow-hidden bg-slate-200 cursor-pointer"
        @click="(e: Event) => { profilePictureInputEl?.click() }"
      >
        <input
          type="file"
          class="hidden"
          :multiple="false"
          accept="image/*"
          :id="`file-img-member`"
          ref="profilePictureInputEl"
          @change="(e: Event) => { showFile(e) }"
        >
        <NuxtImg
          :src="memberData.img_url"
          alt=""
          class="w-full h-full object-cover"
          v-if="memberData?.img_url"
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
      <div class="w-full">
        <div class="flex gap-4">
          <label class="block">Show</label>
          <input
            type="checkbox"
            class="border"
            @change="isChanged = true"
            v-model="memberData.show"
          >
        </div>
        <div class="grid grid-cols-3 w-full gap-2">
          <div class="">
            <div class="flex flex-col">
              <label>Nama Lengkap</label>
              <input
                required
                type="text"
                class="border"
                @change="isChanged = true"
                v-model="memberData.name"
              >
            </div>
            <div class="flex flex-col">
              <label>Email</label>
              <input
                @change="isChanged = true"
                required
                type="text"
                class="border"
                v-model="memberData.email"
              >
            </div>
          </div>
          <div class="">
            <div class="flex flex-col">
              <label>Start Date</label>
              <input
                @change="isChanged = true"
                type="date"
                class="border"
                v-model="memberData.start_date"
              >
            </div>
            <div class="flex flex-col">
              <label>End Date</label>
              <input
                @change="isChanged = true"
                type="date"
                class="border"
                v-model="memberData.end_date"
              >
            </div>
          </div>
          <div class="">
            <div class="flex flex-col">
              <label>Jabatan</label>
              <input
                @change="isChanged = true"
                required
                type="text"
                class="border"
                v-model="memberData.position"
              >
            </div>
            <div class="flex flex-col">
              <label>Part</label>
              <select
                @change="isChanged = true"
                required
                class="border"
                v-model="memberData.part"
              >
                <option :value="Part.Member">Member</option>
                <option :value="Part.Intern">Magang</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex gap-3 justify-end">
          <button
            class="px-4 py-0.5 rounded-md border border-red-500 text-stone-400"
            @click="showDeleteAlert = true"
          >delete</button>
          <button
            @click="updateData"
            :disabled="!isChanged"
            class="px-4 py-0.5 rounded-md"
            :class="isChanged ? 'bg-green-400 text-black' : 'text-stone-500 border border-green-400 hover:cursor-not-allowed'"
          >save</button>
        </div>
      </div>
    </div>
    <div
      class="absolute w-full bg-black/50 z-30 top-0 left-0 h-full flex justify-end items-end p-16"
      v-if="isUploadLoading"
    >
      <div class="bg-sky-400 w-4/12 bottom-10 right-10 px-8 py-2 rounded-md shadow-xl h-fit text-sm">
        <p class="text-base">Loading...</p>
        <p>Mohon tunggu, sedang mengupload
          <Icon name="eos-icons:three-dots-loading" />
        </p>
        <p>Mungkin tunggu sekitar 1 menit hehe</p>
      </div>
    </div>
    <div
      class="absolute w-full bg-black/50 z-20 top-0 left-0 h-full flex justify-center items-center p-16"
      v-if="showDeleteAlert"
    >
      <div
        class="bg-white border-2 border-red-500 w-4/12 bottom-10 right-10 px-8 py-2 rounded-md shadow-xl h-fit text-sm"
      >
        <p class="text-base">Hapus member ?</p>
        <div class="flex justify-end gap-2">
          <button
            class="px-3 p-0.5 rounded-md border text-stone-600"
            @click="showDeleteAlert = false"
          >Batal</button>
          <button
            class="px-3 p-0.5 rounded-md border bg-red-500 text-white"
            @click="deleteData"
          >Hapus</button>
        </div>
      </div>
    </div>
    <div
      class="absolute w-full bg-black/50 z-30 top-0 left-0 h-full flex justify-end items-end p-16"
      v-if="isDeleteLoading"
    >
      <div class="bg-sky-400 w-4/12 bottom-10 right-10 px-8 py-2 rounded-md shadow-xl h-fit text-sm">
        <p class="text-base">Loading...</p>
        <p>Mohon tunggu, sedang menghapus
          <Icon name="eos-icons:three-dots-loading" />
        </p>
        <p>Mungkin tunggu sekitar 1 menit hehe</p>
      </div>
    </div>
  </div>
</template>
