module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'koa - nuxt',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css',
    {
      src: '~assets/sass/app.scss',
      lang: 'sass'
    },
    'element-ui/lib/theme-chalk/index.css'
  ],
  /**
   * plugins
   * https://segmentfault.com/q/1010000007871843/a-1020000009691488
   */
  plugins: [
    '~/plugins/element-ui',
    {
      src: '~/plugins/scrollEvent',
      ssr: false
    }
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * window document undefined fix
     */
    // vendor: ['scrollEvent'],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        // See "Other node core libraries" for additional options.
        config.node = {
          console: false,
          global: true,
          process: true,
          __filename: "mock",
          __dirname: "mock",
          Buffer: false,
          setImmediate: true
        }
      }
    }
  },
  /*
   * dev configuration
   */
  dev: {
    extend(config, ctx) {
      console.log(config, ctx)
    }
  }
}