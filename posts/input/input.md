---
title: Input
publishDate: 2016-05-05
---

input 控件，支持多种类型

## Simple Usage

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
