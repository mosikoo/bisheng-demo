webpackJsonp([14,18],{

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", ["h2", "发布涉及到两个仓库"], ["table", ["thead", ["tr", ["th", "名称"], ["th", "描述"]]], ["tbody", ["tr", ["td", ["a", {
	    "title": null,
	    "href": "http://gitlab.alibaba-inc.com/platform/cg-react"
	  }, "platform/cg-react"]], ["td", "发布至cdn的仓库"]], ["tr", ["td", ["a", {
	    "title": null,
	    "href": "http://gitlab.alibaba-inc.com/cgfe/cg-react"
	  }, "cgfe/cg-react"]], ["td", "代码主仓库，也是 tnpm 发布库"]]]], ["h2", "发布步骤"], ["p", "在发布之前要确保 platform/cg-react 和 cgfe/cg-react 要置于同一目录下。"], ["h3", "1. 获取 platform/cg-react 至 cg-react-release 文件夹"], ["pre", {
	    "lang": "bash",
	    "highlighted": "<span class=\"token operator\">></span> <span class=\"token function\">git</span> clone git@gitlab.alibaba-inc.com:platform/cg-react.git cg-react-release"
	  }, ["code", "> git clone git@gitlab.alibaba-inc.com:platform/cg-react.git cg-react-release"]], ["h3", "2. 发布至 CDN"], ["pre", {
	    "lang": "bash",
	    "highlighted": "<span class=\"token operator\">></span> <span class=\"token function\">cd</span> cg-react\n<span class=\"token operator\">></span> <span class=\"token function\">npm</span> run build\n\n<span class=\"token operator\">></span> <span class=\"token function\">cd</span> <span class=\"token punctuation\">..</span>/cg-react-release\n<span class=\"token operator\">></span> <span class=\"token function\">npm</span> run <span class=\"token function\">sync</span>\n\n<span class=\"token operator\">></span> <span class=\"token function\">git</span> add --all\n<span class=\"token operator\">></span> <span class=\"token function\">git</span> commit -am <span class=\"token string\">'up'</span>\n<span class=\"token operator\">></span> <span class=\"token function\">git</span> push origin daily/0.2.0"
	  }, ["code", "> cd cg-react\n> npm run build\n\n> cd ../cg-react-release\n> npm run sync\n\n> git add --all\n> git commit -am 'up'\n> git push origin daily/0.2.0"]]],
	  "meta": {
	    "title": "发布至 CDN 的流程",
	    "filename": "posts/cdn/index.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#发布涉及到两个仓库"
	  }, "发布涉及到两个仓库"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#发布步骤"
	  }, "发布步骤"]], ["li", ["a", {
	    "className": "bisheng-toc-h3",
	    "href": "#1.-获取-platform/cg-react-至-cg-react-release-文件夹"
	  }, "1. 获取 platform/cg-react 至 cg-react-release 文件夹"]], ["li", ["a", {
	    "className": "bisheng-toc-h3",
	    "href": "#2.-发布至-CDN"
	  }, "2. 发布至 CDN"]]],
	  "jscode": null
	};

/***/ }

});