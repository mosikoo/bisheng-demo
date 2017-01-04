---
title: Calendar
subtitle: 日期选择,
desc: 'Calendar · 日期选择'
---

## 何时使用

Calendar控件 --- 选择日期

---


## API

基于 [uxcore-calendar](http://uxco.re/components/calendar/).

名称 | 类型 | 默认值 | 描述
--- | --- | --- | ---
defaultData | number | `null` | 初始显示时间的毫秒值
data | number | `null` | 显示时间的毫秒值，优先级高于 defaultData
onChange | function | `date => date` | 数据改变时的回调，参数为 Date 类型
readOnly | boolean | false | 是否只读
