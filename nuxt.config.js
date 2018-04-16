module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "koa - nuxt",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "~assets/css/main.css",
    {
      src: "~assets/sass/app.scss",
      lang: "sass"
    },
    "element-ui/lib/theme-chalk/index.css"
  ],
  /**
   * plugins
   * https://segmentfault.com/q/1010000007871843/a-1020000009691488
   */
  plugins: [
    {
      src: "~/plugins/element-ui",
      ssr: false
    },
    {
      src: "~/plugins/scrollEvent",
      ssr: false
    },
    {
      src: "~/plugins/proxy_country.js",
      ssr: true
    }
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * window document undefined fix
     * 怎么配置，在打包的时候不打包进去服务端的一个模块，例如：fs, dns , tls , net 等等
     * TODO:  针对于 客户端 ，服务端 指定两套不通的打包方案
     */
    // vendor: ['scrollEvent'],
    /*
     ** Run ESLINT on save
     */
    analyze: true,
    extend(config, ctx) {
      if (ctx.isClient) {
        // console.log(
        //   "【",
        //   new Date().toLocaleTimeString(),
        //   "】",
        //   "客户端打包... BEGIN >>>>>>>>>>>>>>>>>>"
        // );
        // console.log("build >>>>> ", ctx);
        // console.log("build >>>>> ", config);
        // console.log(
        //   "【",
        //   new Date().toLocaleTimeString(),
        //   "】",
        //   "客户端打包... END >>>>>>>>>>>>>>>>>>"
        // );
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });

        // See "Other node core libraries" for additional options.
        config.node = {
          console: false,
          global: true,
          process: true,
          __filename: "mock",
          __dirname: "mock",
          Buffer: false,
          setImmediate: true
          // dns: true,
          // tls: true,
          // fs: true
        };
      }
      if (ctx.isServer) {
        // config.externals = nodeModules;
        // console.log(
        //   "【",
        //   new Date().toLocaleTimeString(),
        //   "】",
        //   "服务端打包.. BEGIN >>>>>>>>>>>>"
        // );
        // console.log("build >>>>> ", ctx);
        // console.log("build >>>>> ", config);
        // console.log(
        //   "【",
        //   new Date().toLocaleTimeString(),
        //   "】",
        //   "服务端打包... END >>>>>>>>>>>>"
        // );
        // config.resolve = {}
      }
    }
  },
  /*
   * dev configuration
   */
  dev: {
    extend(config, ctx) {
      // console.log(config, ctx);
    }
  }
};
