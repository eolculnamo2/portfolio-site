/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_homepage_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/Home */ \"./src/components/homepage/Home.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/Header */ \"./src/components/header/Header.js\");\n/* harmony import */ var _components_articles_Articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/articles/Articles */ \"./src/components/articles/Articles.js\");\n/* harmony import */ var _components_projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/Projects */ \"./src/components/projects/Projects.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/\",\n        component: _components_homepage_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/articles\",\n        component: _components_articles_Articles__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/projects\",\n        component: _components_projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/articles/Articles.js":
/*!*********************************************!*\
  !*** ./src/components/articles/Articles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _homepage_subcomponents_ArticlePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../homepage/subcomponents/ArticlePreview */ \"./src/components/homepage/subcomponents/ArticlePreview.js\");\n/* harmony import */ var _articles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles.scss */ \"./src/components/articles/articles.scss\");\n/* harmony import */ var _articles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_articles_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Articles =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Articles, _React$Component);\n\n  function Articles() {\n    var _this;\n\n    _classCallCheck(this, Articles);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Articles).call(this));\n    _this.state = {\n      featuredArticles: [{\n        title: \"Getting Started with VueJS\",\n        preview: \"Developers love VueJS. Click here to read how simple it is to get started and find out why this framework is so hyped.\"\n      }, {\n        title: \"Lessons from Working with Sentry\",\n        preview: \"Troubleshooting console errors that you are unable to replicate seems insurmountable. Click here to read my personal tips to help get you started.\"\n      }, {\n        title: \"Webpack's SplitChunksPlugin: Basic Setup\",\n        preview: \"Webpack's splitChunksPlugin does wonders for your JavaScript's performance. The best part is that setting up splitChunksPlugin is not at all difficult. Click here for a quick guide on getting started.\"\n      }],\n      allArticles: [\"Article Example\", \"Article Example:  Lorem ipsum ist blah blah\", \"Articles\", \"Article Example\", \"Article Example:  Lorem ipsum ist blah blah\", \"Articles\"]\n    };\n    return _this;\n  }\n\n  _createClass(Articles, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"articles-page-main-wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"article-main-heading\"\n      }, \"<Articles />\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"article-preview-wrap\"\n      }, this.state.featuredArticles.map(function (x, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_homepage_subcomponents_ArticlePreview__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          title: x.title,\n          text: x.preview\n        });\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"article-preview-wrap\"\n      }, this.state.allArticles.map(function (x, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n          className: \"article-list-item\"\n        }, x);\n      })));\n    }\n  }]);\n\n  return Articles;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\n\n//# sourceURL=webpack:///./src/components/articles/Articles.js?");

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.scss */ \"./src/components/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"header-main-wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"header-ul\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Home\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/articles\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Articles\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/projects\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Projects\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"About Me\")));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/header/Header.js?");

/***/ }),

/***/ "./src/components/homepage/Home.js":
/*!*****************************************!*\
  !*** ./src/components/homepage/Home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.scss */ \"./src/components/homepage/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subcomponents_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcomponents/ArticlePreview */ \"./src/components/homepage/subcomponents/ArticlePreview.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this));\n    _this.state = {\n      skillSet: [\"JavaScript\", \"React\", \"VueJS\", \"HTML\", \"CSS\", \"NodeJS\", \"MongoDB\", \"Webpack\"],\n      skillIndex: 0,\n      fading: false,\n      featuredArticles: [{\n        title: \"Getting Started with VueJS\",\n        preview: \"Developers love VueJS. Click here to read how simple it is to get started and find out why this framework is so hyped.\"\n      }, {\n        title: \"Lessons from Working with Sentry\",\n        preview: \"Troubleshooting console errors that you are unable to replicate seems insurmountable. Click here to read my personal tips to help get you started.\"\n      }, {\n        title: \"Webpack's SplitChunksPlugin: Basic Setup\",\n        preview: \"Webpack's splitChunksPlugin does wonders for your JavaScript's performance. The best part is that setting up splitChunksPlugin is not at all difficult. Click here for a quick guide on getting started.\"\n      }]\n    };\n\n    _this.loopSkills();\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"loopSkills\",\n    value: function loopSkills() {\n      var _this2 = this;\n\n      setInterval(function () {\n        _this2.setState({\n          fading: true,\n          skillIndex: _this2.state.skillIndex < _this2.state.skillSet.length - 1 ? _this2.state.skillIndex + 1 : 0\n        });\n\n        setTimeout(function () {\n          return _this2.setState({\n            fading: false\n          });\n        }, 1000);\n      }, 2500);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-body-wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"body-info-box-wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"body-info-box\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"info-text\"\n      }, \"Rob Bertram\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"info-text\"\n      }, \"Front End Web Developer\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"info-text skills-box\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: this.state.fading ? \"fade-in\" : \"\"\n      }, this.state.skillSet[this.state.skillIndex])))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"empty-tags-display\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"info-text\"\n      }, \"< />\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"article-preview-wrap\"\n      }, this.state.featuredArticles.map(function (x, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          title: x.title,\n          text: x.preview\n        });\n      })));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/homepage/Home.js?");

/***/ }),

/***/ "./src/components/homepage/subcomponents/ArticlePreview.js":
/*!*****************************************************************!*\
  !*** ./src/components/homepage/subcomponents/ArticlePreview.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../global.scss */ \"./src/global.scss\");\n/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.scss */ \"./src/components/homepage/home.scss\");\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ArticlePreview = function ArticlePreview(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"article-preview-section\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"article-preview-h3\"\n  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"article-preview-p\"\n  }, props.text));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlePreview);\n\n//# sourceURL=webpack:///./src/components/homepage/subcomponents/ArticlePreview.js?");

/***/ }),

/***/ "./src/components/projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/projects/Projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _subcomponents_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcomponents/ProjectCard */ \"./src/components/projects/subcomponents/ProjectCard.js\");\n/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.scss */ \"./src/components/projects/projects.scss\");\n/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projects_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Projects =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Projects, _React$Component);\n\n  function Projects() {\n    var _this;\n\n    _classCallCheck(this, Projects);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Projects).call(this));\n    _this.state = {\n      fullStackProjects: [{\n        title: \"HEMA Website\",\n        github_link: \"https://github.com/eolculnamo2/hema-site\",\n        view_project_link: \"https://www.sword-point.com/\",\n        image_link: \"https://image.ibb.co/ef0ReJ/tal_armor.jpg\",\n        description: \"Single page application site which provides users with the opportunity to view and create articles. The site also has a tournament builder which can currently build rosters and allow users to register for tournaments.\",\n        stack: \"SPA Application using Server Side Rendering, React, React Router, NodeJS/Express, MongoDB, Helmet, and Passport\"\n      }, {\n        title: \"JIRA Style Issue Tracker\",\n        github_link: \"https://github.com/eolculnamo2/fccIssueTracker\",\n        view_project_link: \"https://road-verse.glitch.me/\",\n        image_link: \"https://eolculnamo2.github.io/assets/issue-tracker.png\",\n        description: \"Full stack application built for one of the freeCodeCamp certificate. This is a JIRA-styled issue tracker where users can create, edit, mark issues as solved/unsolved, comment etc.\",\n        stack: \"This application uses React, Redux, MongoDB, NodeJS/Express, Helmet, and PassportJS\"\n      }, {\n        title: \"Voting App\",\n        github_link: \"https://github.com/eolculnamo2/VotingApp\",\n        view_project_link: undefined,\n        image_link: \"https://preview.ibb.co/fXAysq/Screen-Shot-2018-11-12-at-12-11-44-AM.png\",\n        description: \"I'm by no means a Java Developer, but used this project as a way to learn more about Java. It is a simple voting app where users can create voting polls and vote on polls created by other users. This project is not hosted anywhere online and so can only be viewed locally.\",\n        stack: \"Uses a Java SpringMVC, Maven, and Hibernate back end with VueJS and Vue Router on the front end.\"\n      }, {\n        title: \"Wikipedia Viewer\",\n        github_link: \"https://github.com/eolculnamo2/WikipediaViewer/\",\n        view_project_link: \"https://juniper-cormorant.glitch.me/\",\n        image_link: \"https://eolculnamo2.github.io/assets/wiki-vue.png\",\n        description: \"Simple front end project that uses Wikipedia's API to iterate through search results. I used this project to learn Vue when I first started.\",\n        stack: \"VueJS\"\n      }, {\n        title: \"Anonymous Message Board\",\n        github_link: \"https://github.com/eolculnamo2/fccAnonymousBoard\",\n        view_project_link: \"https://rhetorical-mist.glitch.me/\",\n        image_link: \"https://preview.ibb.co/mdJ4yV/Screen-Shot-2018-11-12-at-12-32-00-AM.png\",\n        description: \"A freeCodeCamp project geared towards back end development and security. Users can anonymously create and reply to anonymous posts. The site uses HelmetJS to meet security requirements layed out in project requirements on freeCodeCamp.\",\n        stack: \"NodeJS/Express, MongoDB, HelmetJS\"\n      }],\n      frontEndProjects: [],\n      backEndProjects: []\n    };\n    return _this;\n  }\n\n  _createClass(Projects, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"projects-main-wrap\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"projects-title\"\n      }, \"Personal Projects\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"project-card-wrap\"\n      }, this.state.fullStackProjects.map(function (x, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subcomponents_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          project: x\n        });\n      })));\n    }\n  }]);\n\n  return Projects;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/components/projects/Projects.js?");

/***/ }),

/***/ "./src/components/projects/subcomponents/ProjectCard.js":
/*!**************************************************************!*\
  !*** ./src/components/projects/subcomponents/ProjectCard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ProjectCard = function ProjectCard(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"project-card\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, props.project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Stack:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.project.stack), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"project-description\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Description:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.project.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"project-card-image\",\n    src: props.project.image_link\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"project-button-wrap\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    style: {\n      display: props.project.github_link ? 'inline' : 'none'\n    },\n    target: \"_blank\",\n    href: props.project.github_link\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"View Code\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    style: {\n      display: props.project.view_project_link ? 'inline' : 'none'\n    },\n    target: \"_blank\",\n    href: props.project.view_project_link\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"View Project\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\n\n//# sourceURL=webpack:///./src/components/projects/subcomponents/ProjectCard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ \"./node_modules/history/createBrowserHistory.js\");\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Router\"], {\n  history: history\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });