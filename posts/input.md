---
title: Input
publishDate: 2016-05-05
name: 输入行
parent_id: 0
---

input 控件，支持多种类型

## Simple Usage

```jsx

import Button from '@ali/cg-react/dist/Button';
import Input from '@ali/cg-react/dist/Input';
ReactDOM.render(
  <div>
    <Button />
    <Input
      type="mobile"
      required
      isEditingMode
    />

  </div>
  , mountNode);
```

```javascript
import Input from '@ali/cg-react/dist/Input';

<Input
  type="number"
  maxNumber={100}
  minNumber={10}
/>

<Input
  type="textarea"
  maxLength={100}
  minLength={10}
/>

<Input
  type="email"
  required
/>
```


## Props

名称 | 类型 | 描述 | 默认
--- | --- | --- | ---
type | `'string'` | `'text'`, `'password'`, `'money'`, `'number'`, `'email'`, `'textarea'`, `'email'` | 输入类型 | `'text'`
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
