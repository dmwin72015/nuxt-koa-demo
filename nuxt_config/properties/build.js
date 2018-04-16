const merge = require("webpack-merge");
const fs = require("fs");
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
module.exports = {
  analyze: true,
  vendor: ["axios"],
  extend(config, { isDev, isClient, isServer }) {
    if (isClient) {
      console.log("客户端打包... BEGIN >>>>>>>>>>>>>>>>>>");
      config = merge(config, {
        module: {
          rules: [
            {
              enforce: "pre",
              test: /\.(js|vue)$/,
              loader: "eslint-loader",
              exclude: /(node_modules)/
            }
          ]
        },
        externals: createConfig()
      });
      // See "Other node core libraries" for additional options.
    }
    if (isServer) {
      // config.externals = nodeModules;
      console.log("服务端打包... BEGIN >>>>>>>>>>>>>>>>>>");
      config.node = {
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
    }
  }
};
