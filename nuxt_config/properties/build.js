const merge = require("webpack-merge");
const fs = require("fs");
const path = require("path");
function createConfig(dir) {
  let nodeModules = {};
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

  return nodeModules;
}

function globaCss() {
  return [
    path.resolve(__dirname, "../assets/sass/variables.scss"),
    path.resolve(__dirname, "../assets/sass/mixins.scss"),
    path.resolve(__dirname, "../assets/sass/font-vars.scss")
  ];
}
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const plugin = new ExtractTextPlugin("style.css");

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
module.exports = {
  analyze: true,
  vendor: ["axios"],
  extend(config, { isDev, isClient, isServer }) {
    console.dir(config.module.rules);
    let base_rules = [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      }
    ];
    if (isClient) {
      console.log("客户端打包... BEGIN >>>>>>>>>>>>>>>>>>");
      config = merge(config, {
        externals: createConfig()
      });
      // See "Other node core libraries" for additional options.
    }
    if (isServer) {
      // config.externals = nodeModules;
      console.log("服务端打包... BEGIN >>>>>>>>>>>>>>>>>>");
      const node = {
        __filename: false,
        __dirname: false,
        console: false,
        global: false,
        process: false,
        Buffer: false,
        setImmediate: false,
        path: false,
        dns: false,
        fs: false,
        url: false
      };
      config = merge(config, {
        node
      });
    }

    config = merge(config, {
      module: {
        rules: base_rules.concat(rules)
      }
    });
    console.log("最终配置文件 >>>>>>>>");
    // TODO:https://xiaogliu.github.io/2017/09/09/use-sass-global-variables-in-every-vue-components/
    console.dir(config.module.rules);
  }
};
