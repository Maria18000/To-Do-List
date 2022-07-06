/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const items = [\n  {\n    description: 'test1',\n    completed: true,\n    index: 1,\n  },\n  {\n    description: 'test2',\n    completed: true,\n    index: 0,\n  },\n];\n\nconst wrapper = document.getElementById('task-wrapper');\nitems.forEach((item) => {\n  const task = document.createElement('li');\n  const desc = document.createElement('p');\n  desc.classList = 'task-desc';\n  const checkboxx = document.createElement('input');\n  const icon = document.createElement('p');\n  icon.innerHTML = '<i class=\"fa-solid fa-ellipsis-vertical\"></i>';\n  checkboxx.type = 'checkbox';\n  desc.innerHTML = item.description;\n  task.appendChild(checkboxx);\n  task.appendChild(desc);\n  task.appendChild(icon);\n  wrapper.appendChild(task);\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;