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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__api__);


var Router = __webpack_require__(7);
var glob = __webpack_require__(6);
var path = __webpack_require__(8);

// console.log(process.cwd())
// console.log(__dirname)
var routeDir = path.resolve(__dirname, '../server/routes');

/* 为了解决dynamic引用问题，暂时用require.context */
var context = __webpack_require__(14);

console.log(context.keys());
context.keys().map(function (key) {
  if (key === './index.js') {
    return;
  }
  var mod = context(key);

  console.log(mod);
});

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


var router = new Router();

// console.log(router.url("root", "444"))
// import req from 'require-directory'
// import requireDirectory  from '../common/requireDirectory.js';
// const routes = req(__dirname, './api');

// module.exports = router

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
/* 5 */
/***/ function(module, exports) {

module.exports = {
  name: "index"
};

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
              _context4.next = 12;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context4.next = 12;
            return builder.build();

          case 12:

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

          case 17:
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
/***/ function(module, exports) {

module.exports = {
  getArticle: function getArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    };
  },
  saveArticle: function saveArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    };
  },
  delArticle: function delArticle(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        url: ctx.url
      },
      message: 'success'
    };
  }
};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = {
  name: 12
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_article__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__controller_article__);


module.exports = [{
  url: "/:id",
  methods: {
    get: __WEBPACK_IMPORTED_MODULE_0__controller_article__["getArticle"],
    post: __WEBPACK_IMPORTED_MODULE_0__controller_article__["saveArticle"],
    delete: __WEBPACK_IMPORTED_MODULE_0__controller_article__["delArticle"]
  }
}];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./api/index.js": 5,
	"./api/test.js": 12,
	"./api/v1/article.js": 13,
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


/***/ }
/******/ ]);
//# sourceMappingURL=main.map