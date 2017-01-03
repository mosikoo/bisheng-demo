---
order: 1
title: 输入框类型
---

### 下面描述只是举个例子

> 可能一些markdown样式还没涉及到没写，后续发现了补上

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现< >一次。


---

```jsx
import Input from '@ali/cg-react/dist/Input';

ReactDOM.render(
<div>
  <div className="body">
    <div>
      <h3 className="title">Input type="integer" readOnly</h3>
      <p>只读</p>
      <Input
        type="integer"
        required
        maxNumber={1000}
        minNumber={100}
        readOnly
        value={10000}
      />
    </div>
    <div>
      <h3 className="title">Input type="money" readOnly</h3>
      <p>只读</p>
      <Input
        type="money"
        value={10000}
        readOnly
      />
    </div>
    <div>
      <h3 className="title">Input type="number" readOnly</h3>
      <p>输入浮点数，至多小数点后两位</p>
      <Input
        type="number"
        value={1000.3344444}
        readOnly
      />
    </div>
    <div>
      <h3 className="title">Input type="textarea" readOnly</h3>
      <p>多行输入控件</p>
      <Input
        type="textarea"
        value="生产环境访问请使用域名gitlab-sc.alibaba-inc.com，由于安全需要生产只能http协议下载代码。用户交流旺旺群: 927514088 暗号: git4alibaba"
        readOnly
      />
    </div>
  </div>
  <div className="body">
    <div>
      <h3 className="title">Input type="textarea"</h3>
      <p>多行输入控件</p>
      <Input type="textarea" />
    </div>
    <div>
      <h3 className="title">Input type="email"</h3>
      <p>email 格式</p>
      <Input
        type="email"
        required
      />
    </div>
    <div>
      <h3 className="title">Input type="chinese"</h3>
      <p>中文格式</p>
      <Input
        type="chinese"
        required
      />
    </div>
    <div>
      <h3 className="title">Input type="mobile"</h3>
      <p>手机格式</p>
      <Input
        type="mobile"
        required
      />
    </div>
  </div>
</div>
  , mountNode);
```
