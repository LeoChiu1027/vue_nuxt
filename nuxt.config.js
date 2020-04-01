const pkg = require('./package')
const bodyParser = require('body-parser')
const session = require('express-session')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    PACKAGE_VERSION: pkg.version,
    DEPLOY_ENV: process.env.DEPLOY_ENV,
    DEV_API: 'http://localhost:8080',
    SIT_API: 'http://13.115.29.253:8080'
  },

  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Armi Tech',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description', name: 'description', content: 'Vue Material Admin Template is a \n' +
          '    Google Material Design inspired admin dashboard template built with Vue and Vuetify.'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js'}
    ]
  },

  // serverMiddleware: [
  //   // body-parser middleware
  //   bodyParser.json(),
  //   // session middleware
  //   session({
  //     secret: 'super-secret-key',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 10 * 60 * 1000 }
  //   }),
  //   // Api middleware
  //   // We add /api/login & /api/logout routes
  //   '~/api/index.js'
  // ],

  router:{
    middleware : 'nuxtClientInit'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3adced'},

  /*
  ** Global CSS
  */
  css: [
    // '~/assets/style/theme.styl',
    // '~/assets/style/app.styl',
    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    // '@/plugins/nuxt-client-init.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
      // loaders: {
      // stylus: {
      //   import: ["~assets/style/variables.styl"]
      // }
    // },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
