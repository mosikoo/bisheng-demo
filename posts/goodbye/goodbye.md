---
title: goodbye123
publishDate: 2016-05-05
---

同时显示组件和代码测试

---

```jsx
import AutoComplete from '@ali/cg-react/dist/AutoComplete';
import Button from '@ali/cg-react/dist/Button';

ReactDOM.render(
  <div>
    <Button onClick={() => alert('goodbye')}>goodbye</Button>
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