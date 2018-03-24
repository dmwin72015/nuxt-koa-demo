module.exports = {
  webpack: (config, options, webpack) => {



    // config.module.rules.push({
    //   test:/\.js$/,
    //   loader:"babel-loader",
    //   exclude: '/node_modules/'
    // })

    config.entry.main = './server/index.js'
    config.node = Object.assign({}, config.node, {
      __filename: false,
      __dirname: false,
      node: true
    })

    console.log("webpack 配置文件---------------------------")
    console.log(config);
    console.log("---------------------------")
    console.log(options)
    console.log("---------------------------")

    return config
  }
}
