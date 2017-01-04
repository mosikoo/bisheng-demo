---
order: 1
title: 使用介绍
---

描述

---

```jsx
import Form from '@ali/cg-react/dist/Form';

const simpleConfig = {
  title: '内置组件',
  fields: [
    ['name', 'date'],
    ['textarea', 'select'],
    ['asyncSelect1', 'asyncSelect2'],
    ['search', ''],
    ['radio', 'checkbox'],
    ['multiSelect'],
    ['editor'],
    ['SUBMIT']
  ],
  labels: {
    name: '普通文本输入[这里是placeholder|这是info]',
    date: '日期时间段[这里是placeholder|这是日期]',
    number: '数字输入控件',
    textarea: '多行文本输入[这里是placeholder|这是多行文本]',
    search: '搜索组件[请搜索|这是搜索]',
    radio: '单选组[请单选|这是单选组]',
    checkbox: '多选组[请选择|这是多选组]',
    select: '下拉选择[请选择]',
    employee: '雇员搜索[工号/花名]',
    cgtype: '采购类型',
    asyncSelect1: '异步Select1',
    asyncSelect2: '异步Select2',
    attach: '附件',
    editor: '富文本编辑器',
    SUBMIT: '提交',
    RESET: '重置',
    multiSelect: '多选控件'
  },
  types: {
    date: 'DATE_RANGE',
    textarea: 'TEXTAREA',
    search: 'SEARCH',
    radio: 'RADIO',
    checkbox: 'CHECKBOX',
    number: 'NUMBER', // 有问题
    select: 'SELECT',
    asyncSelect1: 'SELECT',
    asyncSelect2: 'SELECT',
    employee: 'EmployeeSearch',
    cgtype: 'CgType',
    attach: 'Attach',
    editor: 'EDITOR',
    multiSelect: 'SELECT'
  },
  props: {
    name: {
      required: true,
      readOnly: true
    },
    radio: {
      required: true
    },
    attach: {
      required: true
    },
    date: {
      required: true
    },
    select: {
      required: true
    },
    multiSelect: {
      multiple: true
    }
  },
  options: {
    select: {
      A: '测试',
      B: '呵呵'
    },
    radio: {
      A: '男',
      B: '女'
    },
    checkbox: {
      A: '电影',
      B: '读书',
      C: '旅游'
    }
  },
  asyncOptions: {
    asyncSelect1: 'querySyncSelect1',
    asyncSelect2: 'querySyncSelect2',
    multiSelect: 'querySyncSelect1'
  }
};

let firstFormData = {
  name: '普通文本普通文本普通文本普通文本普通文本普通文本普通文本普通文本普通文本普通文本',
  radio: 'A',
  asyncSelect1: {
    key: 'A',
    value: '组一'
  },
  asyncSelect2: {
    key: 'A',
    value: '组一/选项一'
  },
  multiSelect: [
    {
      key: 'A',
      value: '组一'
    },
    {
      key: 'B',
      value: '组二'
    }
  ]
};

ReactDOM.render(
<div>
  <h1 className="title">Form</h1>
  <div className="body">
    <Form
      ref={c => this.form1 = c}
      defaultData={firstFormData}
      config={simpleConfig}
      onSubmit={formData => console.log(formData)}
    />
  </div>
</div>
  , mountNode);
```