---
category: Components
type: General
title: 开始使用
---


## 1. 添加依赖

```html
<link rel="stylesheet" href="//g.alicdn.com/platform/common/s/1.1/global/global.css">

<!--[if lte IE 9]>
<script src="//alinw.alicdn.com/platform/c/??es5-shim/4.1.12/es5-shim.min.js,es5-shim/4.1.12/es5-sham.min.js,console-polyfill/0.2.1/index.min.js,respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<script src="//alinw.alicdn.com/platform/c??jquery/1.11.3/dist/jquery.js,react/0.14.6/react-with-addons.js,react/0.14.6/react-dom.js,es6-promise/3.2.1/es6-promise.js,fetch-polyfill/ie8/fetch.js"></script>
```

## 2. ES6 (推荐使用方式)

在 React 写的前端项目中使用。

#### 引用样式

```html
<link rel="stylesheet" href="//g-assets.daily.taobao.net/platform/cg-react/0.2.0/cg-react.css">
```

#### 安装代码

```bash
> tnpm i --save-dev @ali/cg-react
```

#### 使用代码

```javascript
import InfoModal from '@ali/cg-react/dist/InfoModal';
```

## 3. 全局使用

通常在非 React 项目中使用，如 `finance_ceres`，请使用 Seajs 加载，**保证每一个页面或者每一个模块使用不同版本的 `cg-react`**，这一点很重要。

```javascript
seajs.config({
  paths: {
    'cg-react': '//g-assets.daily.taobao.net/platform/cg-react'
  },
  comboExcludes: /.*/,
  chartset: 'utf-8',
});

define(function( require, exports, module ){
  // 引用样式
  require('cg-react/0.2.0/cg-react.css');
  // 引用JS
  require('cg-react/0.2.0/cg-react');

  // 现在 window.CGReact 就可以直接用原生 API 了
  window.CGReact.render('ComponentName', { /* props */ }, 'ContainerDomId');
});
```

