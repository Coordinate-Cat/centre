require('dotenv').config();
import axios from 'axios'
const { X_API_KEY } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'centre',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  privateRuntimeConfig: {
    apiKey: X_API_KEY
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? X_API_KEY : undefined
  },

  // generate: {
  //   async routes({ $config }) {
  //     const { pages } = await axios.get(
  //       'https://centre.microcms.io/api/v1/centre?limit=100',
  //       { headers: { 'X-API-KEY': $config.apiKey } }
  //       )
  //       .then((res) =>
  //         res.data.contents.map((content) => ({
  //           route: `/${content.id}`,
  //           payload: content
  //         }))
  //       )
  //     return pages
  //   }
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
