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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });

        // See "Other node core libraries" for additional options.
        config.node = {
          console: false,
          global: true,
          process: true,
          __filename: "mock",
          __dirname: "mock",
          Buffer: false,
          setImmediate: true
        };
      }
    }
  },
  /*
   * dev configuration
   */
  dev: {
    extend: function extend(config, ctx) {
      console.log(config, ctx);
    }
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = __webpack_require__(7);
var path = __webpack_require__(8);
var _ = __webpack_require__(16);

// console.log(process.cwd())
// console.log(__dirname)
// const routeDir = path.resolve(__dirname, '../server/routes');

var router = new Router();
/* 为了解决dynamic引用问题，暂时用require.context */
var context = __webpack_require__(14);
var _def = 'all';
var routeCache = [];

context.keys().map(function (key) {
  if (key === './index.js') {
    return;
  }
  var mod = context(key);

  var _key = key.replace('./', '/');
  var _base = path.basename(_key, '.js');
  var _dir = path.dirname(_key);
  var _route = path.join(_dir, _base).replace('/_', '/:');

  if (Array.isArray(mod)) {
    mod.map(function (item) {
      if (!item.url || !item.method) {
        return;
      }
      var _method = Object.keys(item.method);
      var _r = path.join(_route, item.url);
      _method.length && _method.map(function (m) {
        router[m](_r, item.method[m]);
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
  } else if (_.isPlainObject(mod)) {}
});

console.info("==[路由]=============================");
// console.log(routeCache)
console.info("==[路由]=============================");
/* harmony default export */ exports["default"] = router;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_body__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 9800;
            // 连接数据库-MongoDB

            _context4.next = 5;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__models__["connectDB"])();

          case 5:

            app.use(__WEBPACK_IMPORTED_MODULE_5_koa_body___default()());
            app.keys = ['i love marourou 2019'];
            // custom route
            app.use(__WEBPACK_IMPORTED_MODULE_3__routes___["default"].routes()).use(__WEBPACK_IMPORTED_MODULE_3__routes___["default"].allowedMethods());

            // Import and Set Nuxt.js options
            config = __webpack_require__(0);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context4.next = 15;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context4.next = 15;
            return builder.build();

          case 15:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                var start, ms;
                return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        start = Date.now();
                        _context.next = 3;
                        return next();

                      case 3:
                        ms = Date.now() - start;

                        ctx.set('X-Response-Time', ms + 'ms');

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.use(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        ctx.cookies.set('tets', 'Hello World', { signed: true });
                        _context2.next = 3;
                        return next();

                      case 3:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }());

            app.use(function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context3.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x5, _x6) {
                return _ref4.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 20:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







start();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var article = __webpack_require__(41);
module.exports = {
  getArticle: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var art;
      return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return article.find({});

            case 2:
              art = _context.sent;

              ctx.body = {
                code: 200,
                data: art,
                message: 'success'
              };

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getArticle(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return getArticle;
  }(),
  saveArticle: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var art;
      return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return article.find({});

            case 2:
              art = _context2.sent;

              ctx.body = {
                code: 200,
                data: art,
                message: 'success',
                ip: ctx.ip
              };

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function saveArticle(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return saveArticle;
  }(),
  delArticle: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ctx.body = {
                code: 200,
                data: {
                  url: ctx.url,
                  type: 'delete'
                },
                message: 'success'
              };

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function delArticle(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return delArticle;
  }()
};

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_article__ = __webpack_require__(11);


module.exports = [{
  url: "/:id",
  method: {
    get: __WEBPACK_IMPORTED_MODULE_0__controller_article__["getArticle"],
    post: __WEBPACK_IMPORTED_MODULE_0__controller_article__["saveArticle"],
    delete: __WEBPACK_IMPORTED_MODULE_0__controller_article__["delArticle"]
  }
}];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./api/test/_mod.js": 17,
	"./api/v1/article.js": 13,
	"./api/v1/user.js": 18,
	"./index.js": 1
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 14;


/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(ctx.params);
            // console.dir(ctx.request);
            ctx.body = ctx.request;
            // await next();
            console.log("nnbbbb");

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function a(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return a;
}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_article__ = __webpack_require__(11);


module.exports = [{
  url: "/:id",
  method: {
    get: __WEBPACK_IMPORTED_MODULE_0__controller_article__["getArticle"],
    delete: __WEBPACK_IMPORTED_MODULE_0__controller_article__["delArticle"]
  }
}, {
  url: '/',
  method: {
    post: __WEBPACK_IMPORTED_MODULE_0__controller_article__["saveArticle"]
  }
}];

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 36 */
/***/ function(module, exports) {

var conf = {
  host: '127.0.0.1',
  port: '37107',
  db: 'blog'
  // auth: {
  //   user: 'test',
  //   password: 'test1234'
  // }
};
exports.options = {
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
  // auth: {
  //   user: 'test',
  //   password: 'test1234'
  // }
};

var initUri = function initUri(_ref) {
  var host = _ref.host,
      port = _ref.port,
      db = _ref.db;

  // mongodb://localhost:port/dbname
  return 'mongodb://' + host + ':' + port + '/' + db;
};

exports.url = initUri(conf);

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var _require = __webpack_require__(35),
    Schema = _require.Schema;

var fields = {
  name_cn: String, // 中文名
  name_en: String, // 英文名
  release_date: Date, // 发行时间
  country: String, // 国家
  language: String, // 语言
  imdb_score: Number, // IMDB评分
  storyline: String, // 故事情节
  scores: [], // 评分
  director: [Schema.Types.ObjectId], // 导演
  writers: [Schema.Types.ObjectId], // 编剧
  stars: [Schema.Types.ObjectId], // 主演
  runtime: Number, // 时长
  resolution: String, // 分辨率
  size: {
    val: Number,
    unit: {
      type: String,
      default: 'MB'
    }
  }, // 文件体积大小，单位默认MB
  types: [String], // 类型
  extension: String, // 视屏类型 后缀
  subtitle: String, // 字幕
  download_url: String // 下载链接
};

var FilmSchema = new Schema(fields);

FilmSchema.virtual('size_full').get(function () {
  return this.size.val + this.size.unit;
}).set(function (v) {
  this.size.val = parseInt(v);
  this.size.unit = v.replace(this.size.val).substr(0, 2);
});

FilmSchema.index({ name_cn: 1 });
FilmSchema.index({ name_en: 1 });
FilmSchema.index({ release_date: -1 });

module.exports = FilmSchema;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var _require = __webpack_require__(35),
    Schema = _require.Schema;

var fields = {
  name: { type: String },
  loginname: { type: String },
  pass: { type: String },
  email: { type: String },
  url: { type: String },
  profile_image_url: { type: String },
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  weibo: { type: String },
  avatar: { type: String },
  githubId: { type: String },
  githubUsername: { type: String },
  githubAccessToken: { type: String },
  is_block: { type: Boolean, default: false },

  score: { type: Number, default: 0 },
  topic_count: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 },
  follower_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  collect_tag_count: { type: Number, default: 0 },
  collect_topic_count: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  is_star: { type: Boolean },
  level: { type: String },
  active: { type: Boolean, default: false },

  receive_reply_mail: { type: Boolean, default: false },
  receive_at_mail: { type: Boolean, default: false },
  from_wp: { type: Boolean },

  retrieve_time: { type: Number },
  retrieve_key: { type: String },

  accessToken: { type: String }
};

var UserSchema = new Schema(fields);

UserSchema.index({ loginname: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });

module.exports = UserSchema;

/***/ },
/* 40 */
/***/ function(module, exports) {

/**
 *  所有 model 通用扩展
 */

module.exports = function (schema) {
  var _this = this;

  schema.pre('save', function (next) {
    _this.lastModify_ts = new Date();
    next();
  });
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * TODO:: 怎么能同步连接MongoDB呢？？？？
 */
var mongoose = __webpack_require__(35);
var conf = __webpack_require__(36);

// ES6 Promise
mongoose.Promise = global.Promise;

exports.connectDB = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
  var BaseModel, Schemas;
  return __WEBPACK_IMPORTED_MODULE_0__xin_nuxt_koa_demo_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mongoose.connection.once('open', function () {
            console.log("连接成功");
          }).on('error', function (err) {
            console.error(err);
            process.exit(0);
          });
          console.log(conf);
          _context.next = 4;
          return mongoose.connect(conf.url, conf.options);

        case 4:
          BaseModel = __webpack_require__(40);
          Schemas = {
            Film: __webpack_require__(38),
            User: __webpack_require__(39)
            // Article: require('./Article')
          };


          Object.keys(Schemas).forEach(function (ele) {
            BaseModel(Schemas[ele]);
            module.exports[ele] = mongoose.model(ele, Schemas[ele]);
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/***/ }
/******/ ]);
//# sourceMappingURL=main.map