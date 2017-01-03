---
order: 1
title: 使用介绍
---

对接一个后端的服务，搜索并显示建议选项

---

```jsx
import AutoComplete from '@ali/cg-react/dist/AutoComplete';

ReactDOM.render(
<div>
  <div className="body">
    <div>
      <h3>搜索雇员</h3>
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
  </div>
</div>
  , mountNode);
```