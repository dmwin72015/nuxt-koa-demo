module.exports = {
  webpack: (config, options, webpack) => {

    config.entry = {};
    return config;



    config.entry.main = './server/index.js'

    let node_conf = {
      console: false,
      global: true,
      process: true,
      __filename: true,
      __dirname: true,
      Buffer: false,
      setImmediate: true
    }

    config.node = Object.assign({}, config.node, node_conf);

    // console.log('---------------')
    // console.log(options);
    // console.log(webpack);

    console.log(config);

    return config
  }
}
