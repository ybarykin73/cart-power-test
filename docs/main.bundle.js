"use strict";
(self["webpackChunkcart_power_test"] = self["webpackChunkcart_power_test"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Roboto-Light.ttf */ "./src/assets/fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Roboto-Medium.ttf */ "./src/assets/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Roboto-Bold.ttf */ "./src/assets/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
::after,
::before {
  box-sizing: border-box;
}
@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}
body {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
button {
  cursor: pointer;
}
.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
.svg-sprite {
  display: none;
}
.header {
  background-color: #eee;
}
.header__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 2px solid #000;
}
.header__main {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
}
.location__image {
  display: inline-block;
  margin-block-end: 5px;
}
.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu__item {
  font-weight: 500;
  color: #212121;
}
.menu__item + .menu__item {
  margin-inline-start: 10px;
}
.menu__item-link {
  color: inherit;
}
.menu__item-link:hover {
  text-decoration: underline;
}
.menu__item-submenu {
  position: relative;
  padding-inline-end: 25px;
  cursor: pointer;
}
.menu__item-submenu::after {
  content: '';
  position: absolute;
  top: calc(50% - 2px);
  right: 5px;
  border-top: 6px solid #000;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
.menu__item-submenu:hover .submenu {
  display: block;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #eee;
  list-style: none;
  margin: 0;
  padding: 10px 15px;
  display: none;
}
.submenu__item {
  margin-bottom: 5px;
}
.submenu__item-link {
  color: inherit;
}
.contact__tel {
  font-weight: 600;
  text-decoration: underline;
  color: #000;
}
.contact__tel:hover {
  text-decoration: none;
}
.search {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-basis: 560px;
  flex-grow: 0;
  border-radius: 12px;
  margin-left: 100px;
  position: relative;
}
.search__menu-button {
  border: none;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  font-weight: 400;
  padding: 13px;
  padding-inline-start: 40px;
  position: relative;
  border-radius: 12px 0 0 12px;
}
.search__menu-button:hover + .search__menu-list {
  display: grid;
}
.search__menu-button-icon {
  position: absolute;
  top: calc(50% - 10px);
  left: 15px;
}
.search__menu-list {
  margin: 0;
  padding: 20px 10px;
  background-color: #eee;
  list-style: none;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  border-radius: 0 0 12px 12px;
  display: none;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
.search__menu-list-link {
  color: #000;
}
.search__menu-list-link:hover {
  text-decoration: underline;
}
.search__form {
  flex-grow: 1;
  position: relative;
}
.search__form-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 20px;
  padding-inline-end: 44px;
  border-radius: 0 12px 12px 0;
}
.search__form-input::placeholder {
  color: #919191;
}
.search__form-button {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user {
  margin-left: auto;
}
.user__wrapper {
  display: grid;
  grid-template-columns: 30px 1fr 1fr 1fr;
  grid-gap: 15px;
  align-items: center;
}
.user__address-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #212121;
}
.user__address-link .icon {
  margin-inline-start: 5px;
}
.user__item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.user__item .icon {
  margin-inline-start: 5px;
  flex-grow: 0;
}
.user__item--profile {
  position: relative;
}
.user__item--profile:hover .user__item-submenu {
  display: block;
}
.user__item-submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 10px;
  border: 2px solid #000;
  background-color: #eee;
  list-style: none;
  white-space: nowrap;
}
.user__item-submenu-link {
  color: #212121;
}
.user__item-submenu-link:hover {
  text-decoration: underline;
}
.user__counter {
  display: inline-block;
  position: relative;
  margin-inline-start: 5px;
  top: 10px;
}
.user__counter-count {
  background-color: #c4c4c4;
  color: #212121;
  text-align: center;
  border-radius: 50%;
  padding: 50% 0;
  width: 100%;
  position: absolute;
  transform: translateY(-50%);
}
.user__counter-text {
  font-size: 14px;
  font-weight: 600;
  position: relative;
  padding: 0 6px;
  top: -0.7em;
}
`, "",{"version":3,"sources":["webpack://./src/style.less","webpack://./src/assets/style/header.less","webpack://./src/assets/style/location.less","webpack://./src/assets/style/menu.less","webpack://./src/assets/style/contact.less","webpack://./src/assets/style/search.less","webpack://./src/assets/style/user.less"],"names":[],"mappings":"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","sourcesContent":["@primary-text-color: #212121;\n\n*,::after,::before {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../src/assets/fonts/Roboto-Light.ttf');\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../src/assets/fonts/Roboto-Medium.ttf');\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('../src/assets/fonts/Roboto-Bold.ttf');\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n}\n\na {\n  text-decoration: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.svg-sprite {\n  display: none\n}\n\n@import '/src/assets//style/header.less';\n@import '/src/assets//style/location.less';\n@import '/src/assets//style/menu.less';\n@import '/src/assets//style/contact.less';\n@import '/src/assets//style/search.less';\n@import '/src/assets//style/user.less';\n",".header {\n  background-color: #eee;\n\n  &__top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 0;\n    border-bottom: 2px solid #000;\n  }\n\n  &__main {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 20px 0;\n  }\n}",".location {\n  &__image {\n    display: inline-block;\n    margin-block-end: 5px;\n  }\n}",".menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  &__item {\n    font-weight: 500;\n    color: #212121;\n\n    & + & {\n      margin-inline-start: 10px;\n    }\n  }\n\n  &__item-link {\n    color: inherit;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  &__item-submenu {\n    position: relative;\n    padding-inline-end: 25px;\n    cursor: pointer;\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: calc(50% - 2px);\n      right: 5px;\n      border-top: 6px solid #000;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n    }\n\n    &:hover .submenu {\n      display: block;\n    }\n  }\n}\n\n.submenu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  border: 1px solid #000;\n  border-radius: 4px;\n  background-color: #eee;\n  list-style: none;\n  margin: 0;\n  padding: 10px 15px;\n  display: none;\n\n  &__item {\n    margin-bottom: 5px;\n  }\n\n  &__item-link {\n    color: inherit;\n  }\n}",".contact {\n  &__tel {\n    font-weight: 600;\n    text-decoration: underline;\n    color: #000;\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n}",".search {\n  display: flex;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-basis: 560px;\n  flex-grow: 0;\n  border-radius: 12px;\n  margin-left: 100px;\n  position: relative;\n\n  &__menu-button {\n    border: none;\n    font-size: 16px;\n    background-color: #000;\n    color: #fff;\n    font-weight: 400;\n    padding: 13px;\n    padding-inline-start: 40px;\n    position: relative;\n    border-radius: 12px 0 0 12px;\n\n    &:hover + .search__menu-list {\n      display: grid;\n    }\n  }\n\n  &__menu-button-icon {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: 15px;\n  }\n\n  &__menu-list {\n    margin: 0;\n    padding: 20px 10px;\n    background-color: #eee;\n    list-style: none;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    left: 0;\n    border-radius: 0 0 12px 12px;\n    display: none;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n  }\n\n  &__menu-list-link {\n    color: #000;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  &__form {\n    flex-grow: 1;\n    position: relative;\n  }\n\n  &__form-input {\n    width: 100%;\n    height: 100%;\n    border: none;\n    outline: none;\n    padding: 0 20px;\n    padding-inline-end: 44px;\n    border-radius: 0 12px 12px 0;\n\n    &::placeholder {\n      color: #919191;\n    }\n  }\n\n  &__form-button {\n    border: none;\n    background-color: transparent;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    min-width: 44px;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n\n  }\n}",".user {\n\n  margin-left: auto;\n\n  &__wrapper {\n    display: grid;\n    grid-template-columns: 30px 1fr 1fr 1fr;\n    grid-gap: 15px;\n    align-items: center;\n  }\n\n  &__address-link {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    color: @primary-text-color;\n\n    .icon {\n      margin-inline-start: 5px;\n    }\n  }\n\n  &__item {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    .icon {\n      margin-inline-start: 5px;\n      flex-grow: 0;\n    }\n\n    &--profile {\n      position: relative;\n\n      &:hover .user__item-submenu {\n        display: block;\n      }\n    }\n  }\n\n  &__item-submenu {\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    margin: 0;\n    padding: 10px;\n    border: 2px solid #000;\n    background-color: #eee;\n    list-style: none; \n    white-space: nowrap;\n  }\n\n  &__item-submenu-link {\n    color: @primary-text-color;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  &__counter {\n    display: inline-block;\n    position: relative;\n    margin-inline-start: 5px;\n    top: 10px;\n  }\n\n  &__counter-count {\n    background-color: #c4c4c4;\n    color: @primary-text-color;\n    text-align: center;\n    border-radius: 50%;\n    padding: 50% 0;\n    width: 100%;\n    position: absolute;\n    transform: translateY(-50%);\n  }\n\n  &__counter-text {\n    font-size: 14px;\n    font-weight: 600;\n    position: relative;\n    padding: 0 6px;\n    top: -.7em;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ "./src/style.less");



/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Light.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Roboto-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGdKQUF1RDtBQUNuRyw0Q0FBNEMsa0pBQXdEO0FBQ3BHLDRDQUE0Qyw4SUFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9WQUFvVixXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxX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LHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FydC1wb3dlci10ZXN0Ly4vc3JjL3N0eWxlLmxlc3MiLCJ3ZWJwYWNrOi8vY2FydC1wb3dlci10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJ0LXBvd2VyLXRlc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NhcnQtcG93ZXItdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcnQtcG93ZXItdGVzdC8uL3NyYy9zdHlsZS5sZXNzP2VhNjgiLCJ3ZWJwYWNrOi8vY2FydC1wb3dlci10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcnQtcG93ZXItdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FydC1wb3dlci10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcnQtcG93ZXItdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJ0LXBvd2VyLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJ0LXBvd2VyLXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJ0LXBvd2VyLXRlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuOjphZnRlcixcbjo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN2Zy1zcHJpdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4uaGVhZGVyX190b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XG59XG4uaGVhZGVyX19tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4ubG9jYXRpb25fX2ltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XG59XG4ubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnVfX2l0ZW0ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi5tZW51X19pdGVtICsgLm1lbnVfX2l0ZW0ge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxMHB4O1xufVxuLm1lbnVfX2l0ZW0tbGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm1lbnVfX2l0ZW0tbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm1lbnVfX2l0ZW0tc3VibWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudV9faXRlbS1zdWJtZW51OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICByaWdodDogNXB4O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ubWVudV9faXRlbS1zdWJtZW51OmhvdmVyIC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3VibWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdWJtZW51X19pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnN1Ym1lbnVfX2l0ZW0tbGluayB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmNvbnRhY3RfX3RlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jb250YWN0X190ZWw6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1iYXNpczogNTYwcHg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoX19tZW51LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMTNweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcbn1cbi5zZWFyY2hfX21lbnUtYnV0dG9uOmhvdmVyICsgLnNlYXJjaF9fbWVudS1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5zZWFyY2hfX21lbnUtYnV0dG9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbGVmdDogMTVweDtcbn1cbi5zZWFyY2hfX21lbnUtbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtZ2FwOiAyMHB4O1xufVxuLnNlYXJjaF9fbWVudS1saXN0LWxpbmsge1xuICBjb2xvcjogIzAwMDtcbn1cbi5zZWFyY2hfX21lbnUtbGlzdC1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2VhcmNoX19mb3JtIHtcbiAgZmxleC1ncm93OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoX19mb3JtLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbn1cbi5zZWFyY2hfX2Zvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5MTkxOTE7XG59XG4uc2VhcmNoX19mb3JtLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDQ0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi51c2VyX193cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyX19hZGRyZXNzLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuLnVzZXJfX2FkZHJlc3MtbGluayAuaWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcbn1cbi51c2VyX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnVzZXJfX2l0ZW0gLmljb24ge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbi51c2VyX19pdGVtLS1wcm9maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVzZXJfX2l0ZW0tLXByb2ZpbGU6aG92ZXIgLnVzZXJfX2l0ZW0tc3VibWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXJfX2l0ZW0tc3VibWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udXNlcl9faXRlbS1zdWJtZW51LWxpbmsge1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi51c2VyX19pdGVtLXN1Ym1lbnUtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnVzZXJfX2NvdW50ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xuICB0b3A6IDEwcHg7XG59XG4udXNlcl9fY291bnRlci1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNTAlIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi51c2VyX19jb3VudGVyLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA2cHg7XG4gIHRvcDogLTAuN2VtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUubGVzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9oZWFkZXIubGVzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9sb2NhdGlvbi5sZXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlL21lbnUubGVzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS9jb250YWN0Lmxlc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvc2VhcmNoLmxlc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUvdXNlci5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFD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Q0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBTCtISjtBTXBOQTtFQUVFLGlCQUFBO0FOcU5GO0FNbk5FO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FOcU5KO0FNbE5FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FOb05KO0FNeE5FO0VBT0ksd0JBQUE7QU5vTk47QU1oTkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBTmtOSjtBTXJORTtFQU1JLHdCQUFBO0VBQ0EsWUFBQTtBTmtOTjtBTS9NSTtFQUNFLGtCQUFBO0FOaU5OO0FNL01NO0VBQ0UsY0FBQTtBTmlOUjtBTTVNRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBTjhNSjtBTTNNRTtFQUNFLGNBQUE7QU42TUo7QU0zTUk7RUFDRSwwQkFBQTtBTjZNTjtBTXpNRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7QU4yTUo7QU14TUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FOME1KO0FNdk1FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBTnlNSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAcHJpbWFyeS10ZXh0LWNvbG9yOiAjMjEyMTIxO1xcblxcbiosOjphZnRlciw6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmJyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zdmctc3ByaXRlIHtcXG4gIGRpc3BsYXk6IG5vbmVcXG59XFxuXFxuQGltcG9ydCAnL3NyYy9hc3NldHMvL3N0eWxlL2hlYWRlci5sZXNzJztcXG5AaW1wb3J0ICcvc3JjL2Fzc2V0cy8vc3R5bGUvbG9jYXRpb24ubGVzcyc7XFxuQGltcG9ydCAnL3NyYy9hc3NldHMvL3N0eWxlL21lbnUubGVzcyc7XFxuQGltcG9ydCAnL3NyYy9hc3NldHMvL3N0eWxlL2NvbnRhY3QubGVzcyc7XFxuQGltcG9ydCAnL3NyYy9hc3NldHMvL3N0eWxlL3NlYXJjaC5sZXNzJztcXG5AaW1wb3J0ICcvc3JjL2Fzc2V0cy8vc3R5bGUvdXNlci5sZXNzJztcXG5cIixcIi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG5cXG4gICZfX3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gIH1cXG5cXG4gICZfX21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gIH1cXG59XCIsXCIubG9jYXRpb24ge1xcbiAgJl9faW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDVweDtcXG4gIH1cXG59XCIsXCIubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgJl9faXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcblxcbiAgICAmICsgJiB7XFxuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMTBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbS1saW5rIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxuXFxuICAmX19pdGVtLXN1Ym1lbnUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xcbiAgICAgIHJpZ2h0OiA1cHg7XFxuICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICMwMDA7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAmOmhvdmVyIC5zdWJtZW51IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc3VibWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgJl9faXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gICZfX2l0ZW0tbGluayB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgfVxcbn1cIixcIi5jb250YWN0IHtcXG4gICZfX3RlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzAwMDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuICB9XFxufVwiLFwiLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LWJhc2lzOiA1NjBweDtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAmX19tZW51LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMTNweDtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAwIDAgMTJweDtcXG5cXG4gICAgJjpob3ZlciArIC5zZWFyY2hfX21lbnUtbGlzdCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fbWVudS1idXR0b24taWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgfVxcblxcbiAgJl9fbWVudS1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICB9XFxuXFxuICAmX19tZW51LWxpc3QtbGluayB7XFxuICAgIGNvbG9yOiAjMDAwO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fZm9ybSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgJl9fZm9ybS1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDQ0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDA7XFxuXFxuICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzkxOTE5MTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fZm9ybS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWluLXdpZHRoOiA0NHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXG4gIH1cXG59XCIsXCIudXNlciB7XFxuXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG5cXG4gICZfX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgJl9fYWRkcmVzcy1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogQHByaW1hcnktdGV4dC1jb2xvcjtcXG5cXG4gICAgLmljb24ge1xcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXG4gICAgLmljb24ge1xcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDVweDtcXG4gICAgICBmbGV4LWdyb3c6IDA7XFxuICAgIH1cXG5cXG4gICAgJi0tcHJvZmlsZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICY6aG92ZXIgLnVzZXJfX2l0ZW0tc3VibWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2l0ZW0tc3VibWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcblxcbiAgJl9faXRlbS1zdWJtZW51LWxpbmsge1xcbiAgICBjb2xvcjogQHByaW1hcnktdGV4dC1jb2xvcjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2NvdW50ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogNXB4O1xcbiAgICB0b3A6IDEwcHg7XFxuICB9XFxuXFxuICAmX19jb3VudGVyLWNvdW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcXG4gICAgY29sb3I6IEBwcmltYXJ5LXRleHQtY29sb3I7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwYWRkaW5nOiA1MCUgMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgfVxcblxcbiAgJl9fY291bnRlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAgNnB4O1xcbiAgICB0b3A6IC0uN2VtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUubGVzcydcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9