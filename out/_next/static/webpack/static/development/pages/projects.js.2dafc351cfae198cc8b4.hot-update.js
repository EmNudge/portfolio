webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/Main */ "./components/layouts/Main/index.js");
/* harmony import */ var _components_Searchbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Searchbox */ "./components/Searchbox/index.js");
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/index */ "./projects/index.js");
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_projects_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ProjectBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectBanner */ "./components/ProjectBanner/index.js");



var _jsxFileName = "C:\\Users\\EmNudge\\Workspace\\kipperman portfolio\\next-js\\pages\\projects.js";






var Projects = function Projects() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      searchTags = _React$useState2[0],
      setSearchTags = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(1),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      rerenderForcer = _React$useState4[0],
      setRerenderForcer = _React$useState4[1];

  var addTag = function addTag(tag) {
    if (searchTags.includes(tag)) return;
    setSearchTags([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(searchTags), [tag]));
  };

  var getFilteredProjects = function getFilteredProjects() {
    if (!searchTags.length) return _projects_index__WEBPACK_IMPORTED_MODULE_6__["projects"];
    return _projects_index__WEBPACK_IMPORTED_MODULE_6__["projects"].filter(function (project) {
      return searchTags.every(function (tag) {
        return project.tags.includes(tag);
      });
    });
  };

  var handleChange = function handleChange(tag) {
    setRerenderForcer(rerenderForcer * -1);
    setSearchTags(tag);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layouts_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Searchbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tags: _projects_index__WEBPACK_IMPORTED_MODULE_6__["tags"],
    addedTags: searchTags,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "projects-container",
    key: rerenderForcer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, getFilteredProjects().map(function (project, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ProjectBanner__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      animationDelay: ".".concat(index * 2, "s"),
      onTagClick: addTag,
      key: project.title
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.2dafc351cfae198cc8b4.hot-update.js.map