webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/logo.svg */ "./static/logo.svg");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburger_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburger-icon */ "./components/Header/hamburger-icon/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\EmNudge\\Workspace\\kipperman portfolio\\next-js\\components\\Header\\index.js";






var Header = function Header(_ref) {
  var currentRoute = _ref.currentRoute;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var drawer = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();

  var setScrollTo = function setScrollTo(enable) {
    document.querySelector("body").style.overflow = enable ? "" : "hidden";
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setScrollTo(!isOpen);
    return function () {
      return setScrollTo(true);
    };
  }, [isOpen]);
  var pages = [{
    route: "/",
    title: "About"
  }, {
    route: "/projects",
    title: "Projects"
  }, {
    route: "/blog",
    title: "Blog"
  }];

  var isRoute = function isRoute(route) {
    var dirs = route.split("/").slice(1);
    var currentDirs = currentRoute.split("/").slice(1);
    return dirs.some(function (dir) {
      return currentDirs.some(function (currentDir) {
        return currentDir === dir;
      });
    });
  };

  var pressOutside = function pressOutside(e) {
    if (!drawer.current) return;
    if (drawer.current.contains(e.target)) return;
    if (isOpen) setIsOpen(false);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    document.addEventListener("mousedown", pressOutside, false);
    document.addEventListener("touchstart", pressOutside, false);
    return function () {
      document.removeEventListener("mousedown", pressOutside, false);
      document.removeEventListener("touchend", pressOutside, false);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "main-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: drawer,
    className: "drawer" + (isOpen ? "" : " closed"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, pages.map(function (page) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: page.route,
      key: page.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: isRoute(page.route) ? "selected" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, page.title));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hamburger_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.37c2172710bd7e69ee3b.hot-update.js.map