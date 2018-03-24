require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'koa - nuxt',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css', {
    src: '~assets/sass/app.scss',
    lang: 'sass'
  }],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
   * dev configuration
   */
  dev: {
    extend(config, ctx) {
      console.log(config, ctx);
    }
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(8);

const conf = __webpack_require__(5);

mongoose.connect(conf.url, conf.options).then(() => {
  console.log('connect mongdb success.....');
}).catch(err => {
  console.error('connect to %s error', conf.url, err.message);
});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

const Router = __webpack_require__(7);
const glob = __webpack_require__(6);

let router = new Router();

console.log(process.cwd());
console.log(__dirname);

glob('../**/*.js', {}, (err, files) => {

  console.info(files);
});

router.get('/v1/api', (ctx, next) => {
  ctx.body = JSON.stringify({
    code: 200,
    data: null,
    msg: "我是接口"
  });
});

// import req from 'require-directory'
// import requireDirectory  from '../common/requireDirectory.js';
// const routes = req(__dirname, './api');


module.exports = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */
/***/ function(module, exports) {

const conf = {
  host: 'localhost',
  port: '27107',
  db: 'chat'
};
exports.options = {
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0

};

const initUri = function ({ host, port, db }) {
  return 'mongodb://' + host + ':' + port + '/' + db;
};

exports.url = initUri(conf);

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("glob");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);


__webpack_require__(1);



async function start() {
  const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 9800;

  // custom route
  app.use(__WEBPACK_IMPORTED_MODULE_2__routes___default.a.routes()).use(__WEBPACK_IMPORTED_MODULE_2__routes___default.a.allowedMethods());

  // Import and Set Nuxt.js options
  let config = __webpack_require__(0);
  config.dev = !(app.env === 'production');

  // Instantiate nuxt.js
  const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

  // Build in development
  if (config.dev) {
    const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
    await builder.build();
  }

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  app.use(async (ctx, next) => {
    ctx.cookies.set('tets', 'Hello World');
    await next();
  });

  app.use(async (ctx, next) => {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port, host);
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
}

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map