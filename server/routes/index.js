const Router = require('koa-router');
const glob = require('glob');

let router = new Router();

// console.log(process.cwd())
// console.log(__dirname);
// glob('../**/*.js', {}, (err, files) => {

//   console.info(files);

// })

router.get('/v1/api', (ctx, next) => {
  ctx.body = JSON.stringify({
    code: 200,
    data: null,
    msg: "我是接口"
  })
})

// import req from 'require-directory'
// import requireDirectory  from '../common/requireDirectory.js';
// const routes = req(__dirname, './api');

console.log(module);

module.exports = router
