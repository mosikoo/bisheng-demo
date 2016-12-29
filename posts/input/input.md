---
order: 0
title: 按钮类型
---

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

> 好记性不如烂笔头,只是希望能够在当下认真记录学习js的点滴，给自己一个充实的学习过程

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

* [js专题](https://github.com/mosikoo/blog/tree/master/js)
  * 尾调化优化
  * 柯里化

---

```jsx
import AutoComplete from '@ali/cg-react/dist/AutoComplete';
import Button from '@ali/cg-react/dist/Button';

ReactDOM.render(
  <div>
    <Button>11</Button>
    <AutoComplete
      url={'http://dip.alibaba-inc.com/api/v2/services/schema/mock/35399'}
      params={{ type: 'employee' }}
      processData={content => {
        const back = {};
        content.forEach(item => {
          back[item.emplId] =
          `${item.name}(${item.nickNameCn ? item.nickNameCn : item.emplId})`;
        });
        return back;
      }}
      onChange={value => console.debug(value)}
    />
  </div>
  , mountNode);
```
