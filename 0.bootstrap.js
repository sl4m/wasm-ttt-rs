(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_ttt_rs.js":
/*!*****************************!*\
  !*** ../pkg/wasm_ttt_rs.js ***!
  \*****************************/
/*! exports provided: Game, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_ttt_rs_bg.wasm */ \"../pkg/wasm_ttt_rs_bg.wasm\");\n/* harmony import */ var _wasm_ttt_rs_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_ttt_rs_bg.js */ \"../pkg/wasm_ttt_rs_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return _wasm_ttt_rs_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Game\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_ttt_rs_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_ttt_rs.js?");

/***/ }),

/***/ "../pkg/wasm_ttt_rs_bg.js":
/*!********************************!*\
  !*** ../pkg/wasm_ttt_rs_bg.js ***!
  \********************************/
/*! exports provided: Game, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_ttt_rs_bg.wasm */ \"../pkg/wasm_ttt_rs_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nclass Game {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Game.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_game_free\"](ptr);\n    }\n    /**\n    * @returns {Game}\n    */\n    static with_defaults() {\n        var ret = _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_with_defaults\"]();\n        return Game.__wrap(ret);\n    }\n    /**\n    * @param {number} position\n    * @returns {number | undefined}\n    */\n    play_round(position) {\n        _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_play_round\"](8, this.ptr, position);\n        var r0 = getInt32Memory0()[8 / 4 + 0];\n        var r1 = getInt32Memory0()[8 / 4 + 1];\n        return r0 === 0 ? undefined : r1 >>> 0;\n    }\n    /**\n    * @returns {boolean}\n    */\n    is_over() {\n        var ret = _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_is_over\"](this.ptr);\n        return ret !== 0;\n    }\n    /**\n    * @returns {string | undefined}\n    */\n    winner() {\n        _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"game_winner\"](8, this.ptr);\n        var r0 = getInt32Memory0()[8 / 4 + 0];\n        var r1 = getInt32Memory0()[8 / 4 + 1];\n        let v0;\n        if (r0 !== 0) {\n            v0 = getStringFromWasm0(r0, r1).slice();\n            _wasm_ttt_rs_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n        }\n        return v0;\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_ttt_rs_bg.js?");

/***/ }),

/***/ "../pkg/wasm_ttt_rs_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/wasm_ttt_rs_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_game_free, game_with_defaults, game_play_round, game_is_over, game_winner, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_ttt_rs_bg.js */ \"../pkg/wasm_ttt_rs_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_ttt_rs_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_ttt_rs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-ttt-rs */ \"../pkg/wasm_ttt_rs.js\");\n\n\nconst DRAW_MESSAGE = \"The game is a draw\";\nconst WIN_MESSAGE = \"The winner is \";\nconst HUMAN_MARK = \"X\";\nconst CPU_MARK = \"O\";\nconst DISABLE_CLICK = \" disable-click\";\nconst game = wasm_ttt_rs__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].with_defaults();\nconst cells = document.getElementsByClassName(\"cell\");\n\nArray.from(cells).forEach(cell => {\n  cell.addEventListener(\"click\", e => {\n    const el = e.toElement;\n    el.className += DISABLE_CLICK;\n    el.innerText = HUMAN_MARK;\n    const cpuMove = game.play_round(+el.dataset.pos);\n\n    if (cpuMove) {\n      const cpuEl = document.querySelector('[data-pos=\"' + cpuMove + '\"]');\n      cpuEl.className += DISABLE_CLICK;\n      cpuEl.innerText = CPU_MARK;\n    }\n\n    if (game.is_over()) {\n      const winner = game.winner();\n      const msgEl = document.getElementById(\"message\");\n\n      if (winner) {\n        msgEl.innerText = WIN_MESSAGE + winner;\n      } else {\n        msgEl.innerText = DRAW_MESSAGE;\n      }\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);