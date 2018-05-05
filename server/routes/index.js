const Router = require("koa-router");
const path = require("path");
const _ = require("lodash");

// console.log(process.cwd())
// console.log(__dirname)
// const routeDir = path.resolve(__dirname, '../server/routes');

let router = new Router();
/* 为了解决dynamic引用问题，暂时用require.context */
let context = require.context("@routes", true, /\.js$/);
let _def = "all";
let routeCache = [];

context.keys().map(key => {
  if (key === "./index.js") {
    return;
  }
  let mod = context(key);

  let _key = key.replace("./", "/");
  let _base = path.basename(_key, ".js");
  let _dir = path.dirname(_key);
  let _route = path.join(_dir, _base).replace("/_", "/:");

  if (Array.isArray(mod)) {
    mod.map(item => {
      if (!item.url || !item.method) {
        return;
      }
      let _method = Object.keys(item.method);
      let _r = path.join(_route, item.url);
      _method.length &&
        _method.map(m => {
          if (_.isFunction(item.method[m])) {
            router[m](_r, item.method[m]);
          } else if (_.isArray(item.method[m])) {
            router[m](_r, ...item.method[m]);
          }
          routeCache.push({
            path: _r,
            type: m,
            cb: item.method[m]
          });
        });
    });
  } else if (_.isFunction(mod)) {
    router[_def](_route, mod);
    routeCache.push({
      path: _route,
      type: _def,
      cb: mod
    });
  } else if (_.isPlainObject(mod)) {
    const _methods = Object.keys(mod);
    _methods.forEach(m => {
      router[m](_route, mod[m]);
      routeCache.push({
        path: _route,
        type: m,
        cb: mod[m]
      });
    });
  }
});

console.info("==[路由]=============================");
// console.log(routeCache)
console.info("==[路由]=============================");
export default router;
