webpackJsonp([12,18],{

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "Props"], ["table", ["thead", ["tr", ["th", "名称"], ["th", "描述"], ["th", "类型"]]], ["tbody", ["tr", ["td", "config"], ["td", "表单配置"], ["td", ["code", "object"]]], ["tr", ["td", "data"], ["td", "初始表单数据"], ["td", ["code", "object"]]], ["tr", ["td", "onSubmit"], ["td", "表单提交回调 默认", ["code", "(formData) => {}"]], ["td", ["code", "function"]]], ["tr", ["td", "onChange"], ["td", "表单改变回调 默认", ["code", "(formData) => {}"]], ["td", ["code", "function"]]], ["tr", ["td", "readOnly"], ["td", "是否只读，默认", ["code", "false"]], ["td", ["code", "boolean"]]]]], ["h3", "props.config"], ["table", ["thead", ["tr", ["th", "名称"], ["th", "描述"], ["th", "类型"]]], ["tbody", ["tr", ["td", "title"], ["td", "表单标题"], ["td", ["code", "string"]]], ["tr", ["td", "fields"], ["td", "布局配置"], ["td", ["code", "array[array, array]"]]], ["tr", ["td", "labels"], ["td", "文案配置"], ["td", ["code", "object"]]], ["tr", ["td", "types"], ["td", "字段组件类型声明，请参考下方props.config案例"], ["td", ["code", "object"]]], ["tr", ["td", "props"], ["td", "传递给字段组件的 props"], ["td", ["code", "object"]]], ["tr", ["td", "options"], ["td", "radio，checkbox，select 类型组件的选项配置"], ["td", ["code", "object"]]], ["tr", ["td", "asyncOptions"], ["td", "默认异步加载的 options 选项，请参考下方props.config案例，", ["code", "key-value"], " 结构，key 就是属性名称，value 是 ", ["a", {
	    "title": null,
	    "href": "../Fetch/README.md"
	  }, "Fetch"], " 的 urlKey"], ["td", ["code", "object"]]], ["tr", ["td", "onSelectFetch"], ["td", "处理服务端返回的 Select 要显示的 options 数据, 需返回 ", ["code", "{ key : val }"], " 格式，入参：", ["code", "resp, key"]], ["td", ["code", "funciton"]]], ["tr", ["td", "onSelectChange"], ["td", "主要处理 Select 联动场景，当一个 Select 发生改变时的回调。需返回一个对象 ", ["code", "{ changedName, requestFunc }"], " 具体写法见下方 Simple Usage"], ["td", ["code", "function"]]]]], ["h4", "config.types 内置可用组件"], ["p", ["a", {
	    "title": null,
	    "href": "/posts/input"
	  }, "请查看 Form Field指南"]], ["h4", "config.onSelectChange(option, name) 函数处理方法"], ["h5", "changedName"], ["p", "比如，当我选择 ", ["code", "province"], " 的 select 的值为北京，那么接下来，我需要去服务器上查北京下面的区", ["code", "district"], "，那么 changedKey 的值就是 ", ["code", "district"], "。"], ["h5", "requestFunc(callback)"], ["p", "requestFunc 是去服务器查 ", ["code", "district"], " 的方法，callback会在服务器查询完成后触发，callback接收两个参数，第一个是", ["code", "district"], "的键值对，第二个参数是", ["code", "district"], "的", ["code", "key"], "。具体咋用，看上方 Simple Usage 中 props.config 案例。"]],
	  "meta": {
	    "title": "Form",
	    "subtitle": "表单,",
	    "desc": "Form · 表单",
	    "filename": "posts/form/index.md"
	  },
	  "description": ["section", ["p", "基于 ", ["a", {
	    "title": null,
	    "href": "http://uxco.re/components/form/"
	  }, "uxcore-form"], "，通过约定配置生成表单，支持多种 FormField。"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#Props"
	  }, "Props"]], ["li", ["a", {
	    "className": "bisheng-toc-h3",
	    "href": "#props.config"
	  }, "props.config"]], ["li", ["a", {
	    "className": "bisheng-toc-h4",
	    "href": "#config.types-内置可用组件"
	  }, "config.types 内置可用组件"]], ["li", ["a", {
	    "className": "bisheng-toc-h4",
	    "href": "#config.onSelectChange(option,-name)-函数处理方法"
	  }, "config.onSelectChange(option, name) 函数处理方法"]], ["li", ["a", {
	    "className": "bisheng-toc-h5",
	    "href": "#changedName"
	  }, "changedName"]], ["li", ["a", {
	    "className": "bisheng-toc-h5",
	    "href": "#requestFunc(callback)"
	  }, "requestFunc(callback)"]]],
	  "jscode": null
	};

/***/ }

});