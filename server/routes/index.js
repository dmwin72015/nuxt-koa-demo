const Router = require('koa-router');

let router = new Router();

router.get('/v1/api', (ctx, next) => {
  ctx.body = JSON.stringify({
    code: 200,
    data: null,
    msg: "我是接口"
  })
})



import requireDirectory from '../common/requireDirectory.js';
import reqDir from 'require-directory';

console.log(module);

// const routes = reqDir(module, './api');

module.exports = exports = router;
