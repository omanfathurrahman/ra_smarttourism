// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-aos',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@pinia/nuxt',
    '@formkit/auto-animate'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'RA Smart Tourism',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ra-smarttourism.ico' }
      ]
    }
  },
  experimental: {
    scanPageMeta: true,
    typedPages: true
  },
  nitro: {
    static: true
  },
  runtimeConfig: {
    public: {
      // AWS_ACCESS_KEY_ID: 'AKIA2UC3DAWYYSFS3NY4',
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
      AWS_BUCKET: process.env.AWS_BUCKET,
    }
  },

})
