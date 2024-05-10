<script lang="ts" setup>
  definePageMeta({
    layout: "admin",
  })

  import { v4 as uuidv4 } from 'uuid'

  import EditorJS from '@editorjs/editorjs';
  // @ts-ignore
  import List from '@editorjs/list'

  import { Type, type Post } from '@prisma/client';
  import type { ImageUploaded } from '~/types/ImageUploaded';
  import type { ArticleDocumentationImgUrl } from '~/types/Article';

  const { getAuthUser } = storeToRefs(useAuthUser())

  const { getArticleFromDatabase } = useMyArticleStore()

  let description: EditorJS;
  let whatWeDid: EditorJS;

  //  ref for input file
  const posterImgInputRef = ref<HTMLInputElement>()

  const uploadedPosterImgSrc = ref<ImageUploaded>() // only for preview

  const loadingUpload = ref(false)

  const articleData = reactive<Post>({
    id: uuidv4(),
    title: "",
    description: "",
    what_we_did_desc: "",
    category: "",
    client: "",
    hki_paten: "",
    website_link: "",
    img_url: "",
    img_path: "",
    img_url_expired_time: null,
    userId: getAuthUser!.value!.id,
    type: Type.research,
    published: true,
  });


  async function previewPosterImg() {
    const src = await fileToBase64(posterImgInputRef.value!.files![0]);
    if (typeof src === 'string') {
      uploadedPosterImgSrc.value = { src: src, file: posterImgInputRef.value!.files![0] }
    }
  }

  async function uploadPosterImageToS3() {
    const { img_url, img_path, img_url_expired_time } = await uploadResearchPosterArticleImage({
      file: uploadedPosterImgSrc.value!.file!,
      articleName: articleData.title,
      imageName: 'poster'
    })
    articleData.img_url = img_url
    articleData.img_path = img_path
    articleData.img_url_expired_time = img_url_expired_time
    console.log(articleData.img_url)
  }

  const documentationImgInputRef = ref<HTMLInputElement>()
  const moreDocumentationImgInputRef = ref<HTMLInputElement>()
  const uploadedDocumentationImgSrc = ref<ImageUploaded[]>([]) // only for preview
  const uploadedDocumentationImgUrls = ref<ArticleDocumentationImgUrl[]>([])

  async function previewDocumentationImg() {
    for (let i = 0; i < documentationImgInputRef.value!.files!.length; i++) {
      const src = await fileToBase64(documentationImgInputRef.value!.files![i]);
      if (typeof src === 'string') {
        uploadedDocumentationImgSrc.value.push({ src: src, file: documentationImgInputRef.value!.files![i] })
      }
    }
  }
  async function addPreviewImgDocumentation() {
    for (let i = 0; i < moreDocumentationImgInputRef.value!.files!.length; i++) {
      const src = await fileToBase64(moreDocumentationImgInputRef.value!.files![i]);
      if (typeof src === 'string') {
        uploadedDocumentationImgSrc.value.push({ src: src, file: moreDocumentationImgInputRef.value!.files![i] })
      }
    }
    moreDocumentationImgInputRef.value!.files = null
  }

  async function uploadDocumatationImagesToS3() {
    for (let i = 0; i < uploadedDocumentationImgSrc.value.length; i++) {
      const url = await uploadResearchDocumentationArticleImage({
        file: uploadedDocumentationImgSrc.value[i].file!,
        articleName: articleData.title,
        imageName: `documentation-${i}`

      })
      uploadedDocumentationImgUrls.value.push({
        img_path: url.img_path,
        img_url: url.img_url,
        img_url_expired_time: url.img_url_expired_time
      })
    }
  }

  function resetDocumentationImageInput() {
    documentationImgInputRef.value!.files = null
    uploadedDocumentationImgSrc.value = []
  }


  function initEditorJsObjects() {
    description = new EditorJS({
      holder: 'descriptionEditorJs',
      tools: {
        list: {
          class: List,
          inlineToolbar: true,
        }
      },

      placeholder: 'Let`s write an awesome story!',
      onReady: () => {
        console.log('Editor.js is ready to work!')
      }
    });
    whatWeDid = new EditorJS({
      holder: 'whatWeDidEditorJs',
      tools: {
        list: {
          class: List,
          inlineToolbar: true,
        }
      },

      placeholder: 'Let`s write an awesome story!',
      onReady: () => {
        console.log('Editor.js is ready to work!')
      }
    });
  }

  async function saveEditorJsObjects() {
    const isi = await description.save()
    const whatWeDidDesc = await whatWeDid.save()
    articleData.description = JSON.stringify(isi)
    articleData.what_we_did_desc = JSON.stringify(whatWeDidDesc)
  }

  function destroyEditorJsObjects() {
    description.destroy()
    whatWeDid.destroy()
  }

  async function uploadCurArticle() {
    loadingUpload.value = true
    await saveEditorJsObjects() // ok

    // upload to s3
    await uploadPosterImageToS3() // ok
    await uploadDocumatationImagesToS3() // ok

    // upload to database
    const postId = await uploadArticleToDatabase(articleData as Post) // ok
    await uploadArticleDocumentationImages({ postId: postId, img_url: uploadedDocumentationImgUrls.value }) // ok
    // uploaded to database

    // update article store from database
    await getArticleFromDatabase()
    loadingUpload.value = false

    navigateTo('/admin/article/research')
  }

  onMounted(() => {
    initEditorJsObjects()
  })
  onUnmounted(() => {
    destroyEditorJsObjects()
  })

</script>

<template>
  <div class="h-full flex flex-col gap-3">
    <h1 class="text-2xl">Tambah Artikel Research</h1>
    <form
      class="flex gap-4 h-full"
      @submit.prevent="uploadCurArticle"
    >
      <div class="flex flex-col gap-2 w-8/12 h-full">
        <div class="flex flex-col">
          <label for="title">Judul</label>
          <input
            type="text"
            id="title"
            class="border border-slate-300 px-2 py-1 rounded-md"
            v-model="articleData.title"
          />
        </div>
        <div class="flex flex-col">
          <label for="description">Deskripsi</label>
          <div
            id="descriptionEditorJs"
            class="border border-slate-300 px-2 py-1 rounded-md h-44 overflow-y-auto"
          ></div>
        </div>
        <div class="flex flex-col">
          <label for="what-we-did">Apa saja yang kami kerjakan</label>
          <div
            id="whatWeDidEditorJs"
            class="border border-slate-300 px-2 py-1 rounded-md h-44 overflow-y-auto"
          ></div>
        </div>
        <div class="flex flex-col h-full">
          <label for="what-we-did">Foto-foto Dokumentasi</label>
          <input
            type="file"
            accept="image/*"
            :multiple="true"
            ref="documentationImgInputRef"
            @change="previewDocumentationImg"
            class="hidden"
          >
          <input
            type="file"
            accept="image/*"
            :multiple="true"
            ref="moreDocumentationImgInputRef"
            @change="addPreviewImgDocumentation"
            class="hidden"
          >

          <div
            @click="() => { if (uploadedDocumentationImgSrc.length == 0) { documentationImgInputRef?.click() } }"
            class="rounded-md overflow-hidden flex-grow bg-sky-100 flex flex-col items-center justify-center"
            :class="uploadedDocumentationImgSrc.length == 0 ? 'cursor-pointer' : ''"
          >
            <div
              class="px-4 py-2"
              v-if="uploadedDocumentationImgSrc.length > 0"
            >
              <div class="flex-grow w-full grid grid-cols-10 gap-2 mb-2">
                <img
                  v-for="(img, index) in uploadedDocumentationImgSrc"
                  :key="index"
                  :src="img.src"
                  alt=""
                  class="flex-grow object-cover object-center aspect-square rounded-md overflow-hidden"
                >
              </div>

              <div class="flex gap-3">
                <button
                  class="text-xs px-4 py-1 rounded-md border border-slate-400"
                  @click="moreDocumentationImgInputRef?.click()"
                >Tambah</button>
                <button
                  class="text-xs px-4 py-1 rounded-md border border-slate-400"
                  @click="resetDocumentationImageInput"
                >Reset</button>
              </div>
            </div>
            <p
              v-else
              class="text-center"
            >Pilih gambar-gambar dokumentasi <br>Bisa lebih dari 1 gambar <br><span class="text-sm"> (Harap tidak upload
                foto dokumentasi lebih dari 10 foto🥺)</span></p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 w-4/12">
        <div class="flex flex-col">
          <label for="caregory">Kategori</label>
          <input
            type="text"
            id="caregory"
            class="border border-slate-300 px-2 py-1 rounded-md"
            v-model="articleData.category"
          />
        </div>
        <div class="flex flex-col">
          <label for="client">Klien</label>
          <input
            type="text"
            id="client"
            class="border border-slate-300 px-2 py-1 rounded-md"
            v-model="articleData.client"
          />
        </div>
        <div class="flex flex-col">
          <label for="hki-paten">HKI atau Paten</label>
          <input
            type="text"
            id="hki-paten"
            class="border border-slate-300 px-2 py-1 rounded-md"
            v-model="articleData.hki_paten"
          />
        </div>
        <div class="flex flex-col">
          <label for="web-link">Link Website</label>
          <input
            type="text"
            id="web-link"
            class="border border-slate-300 px-2 py-1 rounded-md"
            v-model="articleData.website_link"
          />
        </div>
        <div class="flex flex-col">
          <label for="img-url">Gambar</label>
          <input
            @change="previewPosterImg"
            ref="posterImgInputRef"
            type="file"
            accept="image/*"
            id="img-url"
            class="hidden"
            :multiple="false"
          >
          <div
            @click="posterImgInputRef?.click()"
            class="rounded-md overflow-hidden cursor-pointer aspect-video bg-sky-100 flex flex-col items-center justify-center"
          >
            <img
              v-if="uploadedPosterImgSrc"
              :src="uploadedPosterImgSrc.src"
              alt=""
              class="w-full h-full object-cover object-center"
            >
            <p v-else>Pilih gambar poster</p>
          </div>
        </div>
        <button
          type="submit"
          class="px-4 py-1 bg-sky-300 rounded-md"
        >Post</button>
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
