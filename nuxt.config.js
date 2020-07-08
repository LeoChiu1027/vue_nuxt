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
    middleware: ['auth']
  },


  // auth: {
  //   strategies: {
  //     social: {
  //       _scheme: 'oauth2',
  //       authorization_endpoint: 'http://localhost:8080/oauth/token',
  //       scope: ['read', 'write'],
  //       access_type: undefined,
  //       access_token_endpoint: undefined,
  //       response_type: 'token',
  //       token_type: 'Bearer',
  //       redirect_uri: 'http://172.22.112.1:3000/audit/login',
  //       client_id: 'glee-o-meter',
  //       client_secret: 'secret',
  //       token_key: 'access_token',
  //       state: 'UNIQUE_AND_NON_GUESSABLE'
  //     }
  //   }
  // },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://localhost:8080/api/login', method: 'post', propertyName: 'access_token' },
          user: { url: 'http://localhost:8080/api/auth/user', method: 'get', propertyName: false }
        },

        autoFetchUser: false,
        tokenRequired: true,
        tokenType: 'bearer',
        globalToken: true
      }
    },
    redirect:{
      login: '/audit/login'
    }
  },

  
  // auth: {
  //   strategies: {
  //     customStrategy: {
  //       _scheme: '~/schemes/customScheme',
  //       endpoints: {
  //         login: { url: 'http://localhost:8080/api/login', method: 'post', propertyName: 'access_token' },
  //         logout: { url: 'http://localhost:8080/api/auth/logout', method: 'post' },
  //         user: { url: 'http://localhost:8080/api/auth/user', method: 'get', propertyName: false }
  //       },
  //       autoFetchUser: false,
  //       tokenRequired: true,
  //       tokenName: 'Authorization'
  //     }
  //   },
  //   redirect:{
  //     login: '/audit/login'
  //   }
  // },


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
    '~/plugins/component-registrar.js',
    // '@/plugins/nuxt-client-init.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib', '@nuxtjs/auth'],
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
