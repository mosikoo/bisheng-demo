# cg-react-docs

> cg-react组件的交互式文档， 动态的展示cg-react组件
> 
> 由bisheng插件构建

### bisheng
[查看bisheng插件文档](https://github.com/benjycui/bisheng)了解基本结构

### 项目使用规范

#### 使用
```javascript
npm install --registry=http://registry.npm.alibaba-inc.com
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

### 添加markdown

> 代码还有很多不完善之处，希望大家能够一起参与，一起构建

如果只是单单添加markdown，那么只要修改两处便可完成

***以Input为例子***

####1.修改src/mock/list.json文件来添加列表项，即页面左侧一列导航

在所属模块下的components字段中添加一配置对象， 具体看[list.json文件](http://gitlab.alibaba-inc.com/cgfe/cg-react-docs/blob/master/src/mock/list.json)

```
{"name": "Input", "cName": "输入行", "route": "input"}
//name与cName对应中英名， route为对应路由，所以input的路由是/posts/input
```

####2.添加markdown文件
还是以Input为例子

首先在posts下创建input文件夹(**必须小写，名字与list.json中的route字段对应，这里为input**)

input目录大概如下

```
input ----------------------------- 与路由同名
	├── index.md -------------------- 说明文档(必须配置)
	├── name1.md --------------------- code1展示（名字随意取）
	├── name2.md --------------------- code2展示（名字随意取）
	└── ...
```

主要分为两种index.md(**文件名必须为index.md，且必须配置**)与其他xxx.md（名字随意取，可不配置）

#####index.md

> 主要描述一个组件的标题， 介绍， API

形式如下

```
---
title: input
subtitle: input 控件,
desc: 'input 控件，支持多种类型'
---

## 何时使用

input 控件，支持多种文本输入框类型类型

---


## API

Input的属性说明如下：

名称 | 类型 | 描述 | 默认
--- | --- | --- | ---
type | `'string'` | `'text'`, `'password'`, `'money'`, `'number'`, `'email'`, `'textarea'`, `'email'` | `'text'`
required | `boolean` | 必填项 | `false`
readOnly | `boolean` | 只读 | `false`
style | `object` | 样式 | `{}`
onChange | `function` | 实时改变回调 | `(value) => {}`
onBlur | `function` | 失去焦点回调 | `(value) => {}`
fieldName | `string` | 文案提示前缀，比如 『`该项`不可为空』| `该项`
value | `number` or `string` | 被内部控制的值 | `''`
readOnlyMaxLength | `number` | 只读模式下字符的最多显示位数 | `15`
maxNumber | `number` | 最大的数值 | `null`
minNumber | `number` | 最小的数值 | `null`
maxLength | `number` | 字符串最大长度 | `null`
minLength | `number` | 字符串最小长度 | `null`
className | `string` | 自定义类名 | `null`
placeholder | `string` | placehoder | `请输入` or `Please Input`
unitText | `string` | 单位标识字符串 | `''`

```

#####其他md文档

形式如下

```

	---
	order: 1
	title: 输入框类型
	---
	
	### 下面描述只是举个例子
	
	> 可能一些markdown样式还没涉及到没写，后续发现了补上
	
	按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。
	
	通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。
	
	主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现< >一次。
	
	
	---

	```jsx
	import Input from '@ali/cg-react/dist/Input';
	
	ReactDOM.render(
	<div>
	  <div className="body">
	    <div>
	      <h3 className="title">Input type="integer" readOnly</h3>
	      <p>只读</p>
	      <Input
	        type="integer"
	        required
	        maxNumber={1000}
	        minNumber={100}
	        readOnly
	        value={10000}
	      />
	    </div>
	    <div>
	      <h3 className="title">Input type="money" readOnly</h3>
	      <p>只读</p>
	      <Input
	        type="money"
	        value={10000}
	        readOnly
	      />
	    </div>
	    <div>
	      <h3 className="title">Input type="number" readOnly</h3>
	      <p>输入浮点数，至多小数点后两位</p>
	      <Input
	        type="number"
	        value={1000.3344444}
	        readOnly
	      />
	    </div>
	    <div>
	      <h3 className="title">Input type="textarea" readOnly</h3>
	      <p>多行输入控件</p>
	      <Input
	        type="textarea"
	        value="生产环境访问请使用域名gitlab-sc.alibaba-inc.com，由于安全需要生产只能http协议下载代码。用户交流旺旺群: 927514088 暗号: git4alibaba"
	        readOnly
	      />
	    </div>
	  </div>
	  <div className="body">
	    <div>
	      <h3 className="title">Input type="textarea"</h3>
	      <p>多行输入控件</p>
	      <Input type="textarea" />
	    </div>
	    <div>
	      <h3 className="title">Input type="email"</h3>
	      <p>email 格式</p>
	      <Input
	        type="email"
	        required
	      />
	    </div>
	    <div>
	      <h3 className="title">Input type="chinese"</h3>
	      <p>中文格式</p>
	      <Input
	        type="chinese"
	        required
	      />
	    </div>
	    <div>
	      <h3 className="title">Input type="mobile"</h3>
	      <p>手机格式</p>
	      <Input
	        type="mobile"
	        required
	      />
	    </div>
	  </div>
	</div>
	  , mountNode);
	```	
```





