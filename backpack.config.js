module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    config.node = Object.assign({}, config.node, {
      // __filename: false
      // node: false
      
    })

    // console.log(config);
    // console.log('---------------')
    // console.log(options);
    // console.log(webpack);

    return config
  }
}
