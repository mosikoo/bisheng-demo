---
order: 1
title: 使用介绍
---

主要处理 alert、confirm 提示信息。

---

```jsx
import Dialog from '@ali/cg-react/dist/Dialog';
import Button from '@ali/cg-react/dist/Button';

ReactDOM.render(
<div>
  <h1 className="title">Dialog</h1>
    <div className="body">
      <Button
        onClick={() => Dialog.success('操作成功')}
      >
        success
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={() => Dialog.error('失败信息失败信息失败信息失败信息')}
      >
        error
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={() => Dialog.alert(
        '成功成功成功成功成功',
        () => {
          console.log('点击了确定');
        })
        }
      >
        alert
      </Button>
      &nbsp;&nbsp;
      <Button
        onClick={() => Dialog.confirm({ title: '询问', content: '说明说明说明' },
          () => {
            console.log('点击了确定');
          },
          () => {
            console.log('点击了取消');
          }
        )
        }
      >
        confirm
      </Button>
    </div>

</div>
  , mountNode);
```