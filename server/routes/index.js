const Router = require('koa-router');
const glob = require('glob');
const path = require('path');

import * as api from './api';

// console.log(process.cwd())
// console.log(__dirname)
const routeDir = path.resolve(__dirname, '../server/routes');

let files = glob.sync(path.join(routeDir, '/**/*.js'));
files.forEach((ele) => {
  let routeName = ele.replace(routeDir, '');

  if (routeName == '/index.js') {
    return;
  }
  // console.log(`${ele}`);
  let mod = {};
  require.ensure([], (require) => {
    mod = require(`${ele}`);
  });
});

let router = new Router();

// console.log(router.url("root", "444"))
// import req from 'require-directory'
// import requireDirectory  from '../common/requireDirectory.js';
// const routes = req(__dirname, './api');

module.exports = router

// export default router
