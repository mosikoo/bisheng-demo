---
category: Components
type: General
title: 再见
subtitle: 你好
desc: 测试描述测试描述测试描述测试描述测试描述
---

## 何时使用

测试怎么使用-测试怎么使用-测试怎么使用-测试怎么使用-测试怎么使用

---


## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `primary` `ghost` `dashed` 或者不设 | string | -
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
icon | 设置按钮的图标类型 | string | -
shape | 设置按钮形状，可选值为 `circle` 或者不设 | string | -
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`
loading | 设置按钮载入状态 | boolean | false
onClick | `click` 事件的 handler | function | -

`<Button>Hello world!</Button>` 最终会被渲染为 `<button>Hello world!</button>`，并且除了上表中的属性，其它属性都会直接传到 `<button></button>`。

