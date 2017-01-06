webpackJsonp([10,18],{

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "1. 添加依赖"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//g.alicdn.com/platform/common/s/1.1/global/global.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\" spellcheck=\"true\">&lt;!--[if lte IE 9]>\n&lt;script src=\"//alinw.alicdn.com/platform/c/??es5-shim/4.1.12/es5-shim.min.js,es5-shim/4.1.12/es5-sham.min.js,console-polyfill/0.2.1/index.min.js,respond.js/1.4.2/respond.min.js\">&lt;/script>\n&lt;![endif]--></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//alinw.alicdn.com/platform/c??jquery/1.11.3/dist/jquery.js,react/0.14.6/react-with-addons.js,react/0.14.6/react-dom.js,es6-promise/3.2.1/es6-promise.js,fetch-polyfill/ie8/fetch.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<link rel=\"stylesheet\" href=\"//g.alicdn.com/platform/common/s/1.1/global/global.css\">\n\n<!--[if lte IE 9]>\n<script src=\"//alinw.alicdn.com/platform/c/??es5-shim/4.1.12/es5-shim.min.js,es5-shim/4.1.12/es5-sham.min.js,console-polyfill/0.2.1/index.min.js,respond.js/1.4.2/respond.min.js\"></script>\n<![endif]-->\n<script src=\"//alinw.alicdn.com/platform/c??jquery/1.11.3/dist/jquery.js,react/0.14.6/react-with-addons.js,react/0.14.6/react-dom.js,es6-promise/3.2.1/es6-promise.js,fetch-polyfill/ie8/fetch.js\"></script>"]], ["h2", "2. ES6 (推荐使用方式)"], ["p", "在 React 写的前端项目中使用。"], ["h4", "引用样式"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>//g-assets.daily.taobao.net/platform/cg-react/0.2.0/cg-react.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<link rel=\"stylesheet\" href=\"//g-assets.daily.taobao.net/platform/cg-react/0.2.0/cg-react.css\">"]], ["h4", "安装代码"], ["pre", {
	    "lang": "bash",
	    "highlighted": "<span class=\"token operator\">></span> tnpm i --save-dev @ali/cg-react"
	  }, ["code", "> tnpm i --save-dev @ali/cg-react"]], ["h4", "使用代码"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "<span class=\"token keyword\">import</span> InfoModal <span class=\"token keyword\">from</span> <span class=\"token string\">'@ali/cg-react/dist/InfoModal'</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import InfoModal from '@ali/cg-react/dist/InfoModal';"]], ["h2", "3. 全局使用"], ["p", "通常在非 React 项目中使用，如 ", ["code", "finance_ceres"], "，请使用 Seajs 加载，", ["strong", "保证每一个页面或者每一个模块使用不同版本的 ", ["code", "cg-react"]], "，这一点很重要。"], ["pre", {
	    "lang": "javascript",
	    "highlighted": "seajs<span class=\"token punctuation\">.</span><span class=\"token function\">config</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  paths<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'cg-react'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'//g-assets.daily.taobao.net/platform/cg-react'</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  comboExcludes<span class=\"token punctuation\">:</span> <span class=\"token regex\">/.*/</span><span class=\"token punctuation\">,</span>\n  chartset<span class=\"token punctuation\">:</span> <span class=\"token string\">'utf-8'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">define</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span> require<span class=\"token punctuation\">,</span> exports<span class=\"token punctuation\">,</span> module <span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 引用样式</span>\n  <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'cg-react/0.2.0/cg-react.css'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 引用JS</span>\n  <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'cg-react/0.2.0/cg-react'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// 现在 window.CGReact 就可以直接用原生 API 了</span>\n  window<span class=\"token punctuation\">.</span>CGReact<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token string\">'ComponentName'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\" spellcheck=\"true\">/* props */</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'ContainerDomId'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "seajs.config({\n  paths: {\n    'cg-react': '//g-assets.daily.taobao.net/platform/cg-react'\n  },\n  comboExcludes: /.*/,\n  chartset: 'utf-8',\n});\n\ndefine(function( require, exports, module ){\n  // 引用样式\n  require('cg-react/0.2.0/cg-react.css');\n  // 引用JS\n  require('cg-react/0.2.0/cg-react');\n\n  // 现在 window.CGReact 就可以直接用原生 API 了\n  window.CGReact.render('ComponentName', { /* props */ }, 'ContainerDomId');\n});"]]],
	  "meta": {
	    "category": "Components",
	    "type": "General",
	    "title": "开始使用",
	    "filename": "posts/howtouse/index.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#1.-添加依赖"
	  }, "1. 添加依赖"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#2.-ES6-(推荐使用方式)"
	  }, "2. ES6 (推荐使用方式)"]], ["li", ["a", {
	    "className": "bisheng-toc-h4",
	    "href": "#引用样式"
	  }, "引用样式"]], ["li", ["a", {
	    "className": "bisheng-toc-h4",
	    "href": "#安装代码"
	  }, "安装代码"]], ["li", ["a", {
	    "className": "bisheng-toc-h4",
	    "href": "#使用代码"
	  }, "使用代码"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#3.-全局使用"
	  }, "3. 全局使用"]]],
	  "jscode": null
	};

/***/ }

});