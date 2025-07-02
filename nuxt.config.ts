// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
    app: {
    head: {
      title: 'Каталог',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },

    pageTransition: { name: 'page', mode: 'out-in' },

  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    // '@mdi/font/css/materialdesignicons.min.css',
  ],
})