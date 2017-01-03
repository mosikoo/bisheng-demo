---
title: 发布至 CDN 的流程
---

## 发布涉及到两个仓库

名称 | 描述
--- | ---
[platform/cg-react](http://gitlab.alibaba-inc.com/platform/cg-react) | 发布至cdn的仓库
[cgfe/cg-react](http://gitlab.alibaba-inc.com/cgfe/cg-react) | 代码主仓库，也是 tnpm 发布库

## 发布步骤

在发布之前要确保 platform/cg-react 和 cgfe/cg-react 要置于同一目录下。

### 1. 获取 platform/cg-react 至 cg-react-release 文件夹

```bash
> git clone git@gitlab.alibaba-inc.com:platform/cg-react.git cg-react-release
```

### 2. 发布至 CDN

```bash
> cd cg-react
> npm run build

> cd ../cg-react-release
> npm run sync

> git add --all
> git commit -am 'up'
> git push origin daily/0.2.0
```

