const glob = require("glob");
const path = require("path");

const _tmp = {};
const context = require.context("@@/nuxt_config/properties", true, /\.js$/);

context.keys().map(key => {
  let name = path.basename(key, ".js");
  let mod = context(key);
  _tmp[name] = mod;
});

module.exports = _tmp;
