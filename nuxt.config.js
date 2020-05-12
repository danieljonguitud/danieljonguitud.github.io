// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/dist/'
  }
} : {}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  purgeCSS: {
    content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
    whitelistPatterns: [/-fa$/, /^fa-/],
   },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [['faGithub'], ['faLinkedin'], ['faWhatsapp']]
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [['faEnvelope']]
        },
      ]
    }],
    '@nuxtjs/recaptcha',
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: "en",   // Recaptcha language (v2)
    siteKey: "6LdqZvUUAAAAAFwlj8_LVCgmECHsUbVtv5Iw6RXM",    // Site key for requests
    version: 3,     // Version
    size: "normal"        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  ...routerBase,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
