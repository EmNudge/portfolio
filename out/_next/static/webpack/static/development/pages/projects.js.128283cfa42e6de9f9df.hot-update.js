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

  var getTags = function getTags() {
    return tags.filter(function (tag) {
      return tag.toUpperCase().includes(search.toUpperCase()) && !addedTags.includes(tag);
    });
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
    if (e.key === "Enter") addTag(getTags()[0]);
    if (e.key === "Backspace") removeTag(getTags()[getTags().length - 1]);
  };

  var handleTagClick = function handleTagClick(tag) {
    console.log("THING CLICKED");
    setIsFocues(true);
    addTag(tag);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "search-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Search"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "added-tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, addedTags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, tag), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "remove-btn",
      onClick: function onClick() {
        return removeTag(tag);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "x")));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "tags-container" + (isFocused ? " open" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, getTags().map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      onClick: function onClick() {
        return handleTagClick(tag);
      },
      key: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, tag);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbox);

/***/ })

})
//# sourceMappingURL=projects.js.128283cfa42e6de9f9df.hot-update.js.map