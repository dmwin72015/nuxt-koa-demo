const path = require('path');
const fs = require('fs');
const nodeModules = {};
const merge = require('webpack-merge');

let moduleLeng = 0;

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
    moduleLeng++;
  });

// alias  add "@" prex
let fnDirs = {
  controller: './controller',
  models: './models',
  config: './config',
  routes: './routes'
}
module.exports = {
  webpack: (config, options, webpack) => {
    let alias = {};

    Object.keys(fnDirs).forEach((ele) => {
      alias['@' + ele] = path.resolve(__dirname + '/server', fnDirs[ele]);
    });

    config = merge(config, {
      entry: {
        main: './server/index.js'
      },
      node: {
        node: false,
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
      recordsPath: path.join(__dirname, 'build/records.json'),

      plugins: [

        // new webpack.ContextReplacementPlugin(/server\/(.*)/, '', true , '$1.js')

        new webpack.ContextReplacementPlugin(/server\/(controller|models|config|routes)/, (context) => {
          Object.assign(context, {
            regExp: /\.js$/,
            request: './server/routes' // 相对路径解析
          });

          console.log(context);
        })
      ]
    })

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

    return config
  }
}
