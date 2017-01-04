---
title: Form
subtitle: 表单,
desc: 'Form · 表单'
---

基于 [uxcore-form](http://uxco.re/components/form/)，通过约定配置生成表单，支持多种 FormField。

---


## Props

名称 | 描述 | 类型
--- | --- | --- | ---
config | 表单配置 | `object`
data | 初始表单数据 | `object`
onSubmit | 表单提交回调 默认`(formData) => {}` | `function`
onChange | 表单改变回调 默认`(formData) => {}` | `function`
readOnly | 是否只读，默认`false` | `boolean`

### props.config

名称 | 描述 | 类型
--- | --- | ---
title | 表单标题 | `string`
fields | 布局配置 | `array[array, array]`
labels | 文案配置 | `object`
types | 字段组件类型声明，请参考下方props.config案例 | `object`
props | 传递给字段组件的 props | `object`
options | radio，checkbox，select 类型组件的选项配置 | `object`
asyncOptions | 默认异步加载的 options 选项，请参考下方props.config案例，`key-value` 结构，key 就是属性名称，value 是 [Fetch](../Fetch/README.md) 的 urlKey | `object`
onSelectFetch | 处理服务端返回的 Select 要显示的 options 数据, 需返回 `{ key : val }` 格式，入参：`resp, key` | `funciton`
onSelectChange | 主要处理 Select 联动场景，当一个 Select 发生改变时的回调。需返回一个对象 `{ changedName, requestFunc }` 具体写法见下方 Simple Usage | `function`

#### config.types 内置可用组件

[请查看 Form Field指南](/posts/input)

#### config.onSelectChange(option, name) 函数处理方法

##### changedName

比如，当我选择 `province` 的 select 的值为北京，那么接下来，我需要去服务器上查北京下面的区`district`，那么 changedKey 的值就是 `district`。

##### requestFunc(callback)

requestFunc 是去服务器查 `district` 的方法，callback会在服务器查询完成后触发，callback接收两个参数，第一个是`district`的键值对，第二个参数是`district`的`key`。具体咋用，看上方 Simple Usage 中 props.config 案例。

