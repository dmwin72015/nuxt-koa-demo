import path from 'path'
import Koa from 'koa'
import {
  Nuxt,
  Builder
} from 'nuxt'
import route from './routes/';
import {
  connectDB
} from './models';
import koaBody from 'koa-body';
import koaStatic from 'koa-static';

async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 9800

  // 静态资源
  const staticDir = path.join(__dirname, "../static");
  app.use(koaStatic(staticDir));

  // 连接数据库-MongoDB
  await connectDB();
  app.use(koaBody());
  app.keys = ['i love marourou 2019'];
  // custom route
  app.use(route.routes())
    .use(route.allowedMethods());

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  app.use(async (ctx, next) => {
    ctx.cookies.set('tets', 'Hello World', {
      signed: true
    })
    await next();
  });

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)

  app.on('error', () => {
    console.error('【' + Date.now() + '】服务器出错了')
    // throw error;
  })
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()