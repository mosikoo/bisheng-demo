---
title: AutoComplete
subtitle: 自动完成,
desc: 对接一个后端的服务，搜索并显示建议选项，基于 [uxcore-select2](http://uxco.re/components/select2/)
---

## usage

对接一个后端的服务，搜索并显示建议选项，基于 [uxcore-select2](http://uxco.re/components/select2/)

---


## API

名称 | 类型 | 默认值 | 描述
--- | --- | --- | ---
url | `string` | `''` | 服务地址
params | `object` | `null` | 请求时所带额外参数
fieldName | `string` | `q` | 请求rpc关键字的字段名称
processData | `function` | `content => content ` | 请求完成后的数据兼容，必须要返回 [{ key, value, keywords }] 这种结构, keywords 不传，默认使用 key 和 val 为关键字过滤
placeholder | `string` | `i18n('common.pleaseInput')` | placeholder
onChange | `string` | `value, optionText => value`, `valueArray, optionTextArray => valueArray` | 发生改变时的回调
data | `string | number` | `null` | 默认数据
disabled | `boolean` | `false` | 是否禁用
multiple | `boolean` | `false` | 是否多选
