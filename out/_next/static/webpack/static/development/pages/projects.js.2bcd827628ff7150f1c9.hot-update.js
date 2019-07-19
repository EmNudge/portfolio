webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/Searchbox/index.js":
/*!***************************************!*\
  !*** ./components/Searchbox/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/Searchbox/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\EmNudge\\Workspace\\kipperman portfolio\\next-js\\components\\Searchbox\\index.js";



var Searchbox = function Searchbox(_ref) {
  var tags = _ref.tags,
      addedTags = _ref.addedTags,
      onChange = _ref.onChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      search = _React$useState2[0],
      setSearch = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isFocused = _React$useState4[0],
      setIsFocues = _React$useState4[1];

  var searchContainer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();

  var getTags = function getTags() {
    return tags.filter(function (tag) {
      return tag.toUpperCase().includes(search.toUpperCase()) && !addedTags.includes(tag);
    });
  };

  var getAddedTags = function getAddedTags() {
    return addedTags.slice(0, searchContainer.current.clientWidth > 500 ? 3 : 2);
  };

  var getLeftoverTagNum = function getLeftoverTagNum() {
    var num = addedTags.length - getAddedTags().length;
    if (num === 0) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "leftovers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, num);
  };

  var addTag = function addTag(tag) {
    onChange([tag].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(addedTags)));
    setSearch("");
  };

  var removeTag = function removeTag(tag) {
    onChange(addedTags.filter(function (addedTag) {
      return addedTag !== tag;
    }));
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "Enter" && getTags()[0]) {
      addTag(getTags()[0]);
    } else if (e.key === "Backspace" && !search) {
      removeTag(addedTags[addedTags.length - 1]);
    }
  };

  var pressOutside = function pressOutside(e) {
    if (!searchContainer.current) return;
    if (searchContainer.current.contains(e.target)) return;
    setIsFocues(false);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    console.log(searchContainer);
    document.addEventListener("mousedown", pressOutside, false);
    document.addEventListener("touchstart", pressOutside, false);
    return function () {
      document.removeEventListener("mousedown", pressOutside, false);
      document.removeEventListener("touchstart", pressOutside, false);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-container",
    ref: searchContainer,
    onClick: function onClick() {
      return setIsFocues(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "search-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Search"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "search-box",
    type: "text",
    placeholder: "Start typing...",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    onFocus: function onFocus() {
      return setIsFocues(true);
    },
    onBlur: function onBlur() {
      return setIsFocues(false);
    },
    onKeyDown: handleKeyDown,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "added-tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, getAddedTags().map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, tag), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "remove-btn",
      onClick: function onClick() {
        return removeTag(tag);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "x")));
  }), getLeftoverTagNum())), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tags-container" + (isFocused ? " open" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, getTags().map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      onClick: function onClick() {
        return addTag(tag);
      },
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, tag);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbox);

/***/ })

})
//# sourceMappingURL=projects.js.2bcd827628ff7150f1c9.hot-update.js.map