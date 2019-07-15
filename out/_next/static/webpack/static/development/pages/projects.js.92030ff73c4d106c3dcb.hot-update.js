webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/ProjectBanner/index.js":
/*!*******************************************!*\
  !*** ./components/ProjectBanner/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/ProjectBanner/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\EmNudge\\Workspace\\kipperman portfolio\\next-js\\components\\ProjectBanner\\index.js";



var ProjectBanner = function ProjectBanner(_ref) {
  var title = _ref.title,
      url = _ref.url,
      description = _ref.description,
      tags = _ref.tags,
      image = _ref.image,
      onTagClick = _ref.onTagClick,
      animationDelay = _ref.animationDelay;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-banner",
    style: {
      transitionDelay: animationDelay
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "".concat(title, " image"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "normal",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, url), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: function onClick() {
        return onTagClick(tag);
      },
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, tag);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectBanner);

/***/ })

})
//# sourceMappingURL=projects.js.92030ff73c4d106c3dcb.hot-update.js.map