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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ra-smarttourism.ico'}
      ]
    }
  },
  experimental: {
    scanPageMeta: true,
    typedPages: true
  },
})
