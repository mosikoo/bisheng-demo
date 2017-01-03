---
category: Components
type: General
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


<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
