---
category: Components
type: General
title: 开发项目的同时调试 cg-react
---

主要就是使用 [npm link](https://docs.npmjs.com/cli/link)。

```bash
> cd cg-react
> npm ln
> cd project-folder
> npm ln @ali/cg-react
```

OK，此时你只需要在本地修改 cg-react，需要与项目联调时 `npm run babel` 一下即可。
