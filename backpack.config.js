const path = require("path");
const fs = require("fs");
const nodeModules = {};
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const plugin = new ExtractTextPlugin("style.css");

let moduleLeng = 0;

fs
  .readdirSync("node_modules")
  .filter(x => {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(mod => {
    nodeModules[mod] = "commonjs " + mod;
    moduleLeng++;
  });

// alias  add "@" prex
let fnDirs = {
  controller: "./controller",
  models: "./models",
  config: "./config",
  routes: "./routes",
  validator: "./validator"
};
const rules = [
  {
    test: /\.(scss|sass)$/,
    use: [
      "style-loader",
      "css-loader",
      "postcss-loader",
      "sass-loader",
      {
        loader: "sass-resources-loader",
        options: {
          resources: globaCss()
        }
      }
    ]
  },
  {
    test: /\.vue$/,
    loader: "vue-loader",
    options: {
      extractCSS: plugin,
      loaders: {
        scss: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: globaCss()
            }
          }
        ],
        sass: [
          "vue-style-loader",
          "css-loader",
          "sass-loader?indentedSyntax",
          {
            loader: "sass-resources-loader",
            options: {
              resources: globaCss()
            }
          }
        ]
      }
    }
  }
];
function globaCss() {
  return [
    path.resolve(__dirname, "../assets/sass/variables.scss"),
    path.resolve(__dirname, "../assets/sass/mixins.scss"),
    path.resolve(__dirname, "../assets/sass/font-vars.scss")
  ];
}
module.exports = {
  webpack: (config, options, webpack) => {
    let alias = {};

    Object.keys(fnDirs).forEach(ele => {
      alias["@" + ele] = path.resolve(__dirname, "server", fnDirs[ele]);
    });

    alias["@"] = path.resolve(__dirname, "server");
    alias["@@"] = path.resolve(__dirname);

    config = merge(config, {
      entry: {
        main: "./server/index.js"
      },
      /* 必须使用main */
      // output: {
      //   filename: '[name].server.js'
      // },
      node: {
        __filename: false,
        __dirname: false,
        console: false,
        global: false,
        process: false,
        Buffer: false,
        setImmediate: false,
        path: false
      },
      resolve: {
        alias: alias
      },
      // 过滤掉node_modules中的模块，不进行打包
      externals: nodeModules,
      recordsPath: path.join(__dirname, "build/records.json"),

      plugins: [
        // new webpack.ContextReplacementPlugin(/server/, '.', true)
        // new webpack.ContextReplacementPlugin(/server\/(controller|models|config|routes)/, (context) => {
        //   Object.assign(context, {
        //     async: true,
        //     regExp: /\.js$/
        //   });
        // })
      ],
      module: {
        rules: [].concat(rules)
      }
    });

    // console.log("[INFO:total number of modules] -- ", config);
    /*
      经过追查Webpack打包后的代码，发现，module已经被重置，已经不是CommmonJs中的module了，
      已经没有的 filename ,__dirname 变成了执行node命令时的入口文件的路劲 ,
    console.log("webpack 配置文件---------------------------")
    console.log(config);
    console.log("---------------------------")
    console.log(options)
    console.log("---------------------------")
    */
    console.log(config);
    return config;
  }
};
