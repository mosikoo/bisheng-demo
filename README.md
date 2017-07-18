# cg-react-docs

> cg-react组件的交互式文档， 动态的展示cg-react组件
> 
> 由bisheng插件构建

### bisheng
[查看bisheng插件文档](https://github.com/benjycui/bisheng)了解基本结构

### 项目使用规范

#### 使用
```javascript
npm install
npm run start
```
然后打开`http://localhost:8000` 即可访问(打开后页面可能报错，看下面调试方法)(等cg-react 0.7.x版本便会修复)


#### 本地调试

因为cg-react项目的react是通过CDN引入的，我这个项目在测试在引用cg-react会缺失react，所以需要在组件中import React。

建议直接修改cg-react, 然后npm run build，最后link下：

```javascript
cd cg-react
npm ln
cd cg-react-docs
npm ln @ali/cg-react
```
然后再修改cg-react组件中导入react，例如Input组件

```javascript
cd cg-react/src/Input
vim Input.jsx

//Input.jsx 的第一行加入
import React from 'react'
```

run build

```javascript
cd cg-react
npm run build
```
操作完就可以完美的看到页面了

### 打包

```javascript
npm run build
```
打包生成的文件在`./dist`中

用`nginx`起服务将路径指向`cg-react-docs/dist` 

index.html指向`dist/index.html`

之后就可以看到打包后的效果了

### 目录结构


```
.
├── dist  ---------------------------------- 打包文件
├── src ------------------------------------ 源文件
│	 ├── _theme  --------------------------- 主题文件
│	 │   ├── static ------------------------ 静态样式
│	 │   ├── template ---------------------- 模板文件（必须配置）
│	 │   │	  ├── Archive.jsx -------------- 必须是lib
│	 │   │	  ├── NotFound ------------------ 404
│	 │   │	  └── Post ---------------------- post页
│	 │   └── index.js ---------------------- 模板配置表
│	 ├── components ------------------------ 组件文件
│	 │   └── ... --------------------------- 组件库
│	 ├── mock ------------------------------ json数据文件
│	 │   ├── list.json --------------------- 配置列表navs
│	 ├── plugins --------------------------- 自定义插件
│	 │   ├── bisheng-plugin-copyjsx -------- 插件名
│	 │   │	  └── lib ---------------------- 必须是lib
│	 │   │	  	   ├── node.js ------------- 处理markdown
│	 │   │	  	   └── browser.js ---------- 处理markdown或配置utils
│	 │   └── ...
│	 └── index.html ------------------------ 页面模板
├── posts --------------------------------- markdown文件
│   ├── input ----------------------------- 与路由同名
│   │	  ├── index.md -------------------- 说明文档(必须配置)
│   │	  ├── base.md --------------------- code展示（名字随意取）
│   │	  └── ...
│   └── ...
├── bisheng.config.js ----------------- bisheng配置文件
├── package.json  --------------------- 项目配置
└── README.md  ------------------------ 说明文件
```
