import * as api from './api';

const Router = require('koa-router');
const glob = require('glob');
const path = require('path');

// console.log(process.cwd())
// console.log(__dirname)
const routeDir = path.resolve(__dirname, '../server/routes');

/* 为了解决dynamic引用问题，暂时用require.context */
let context = require.context('@routes', true, /\.js$/);

console.log(context.keys())
context.keys().map(key => {
  if (key === './index.js') {
    return;
  }
  let mod = context(key);

  console.log(mod);
})


// let files = glob.sync(path.join(routeDir, '/**/*.js'));

// files.forEach((ele) => {
//   let routeName = ele.replace(routeDir, '');
//   if (routeName === '/index.js') {
//     return;
//   }
//   let modPath = `.${routeName}`;
//   let mod = context.resolve(modPath);
//   let _route = context.resolve(modPath)

//   console.log(_route.name);
// });


let router = new Router();

// console.log(router.url("root", "444"))
// import req from 'require-directory'
// import requireDirectory  from '../common/requireDirectory.js';
// const routes = req(__dirname, './api');

// module.exports = router

export default router
