# dumi-mobile

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

yarn add dumi-theme-mobile -D

## 如何部署

1. 提交到 github 之前
   `npm run docs:build`
2. 进入服务器，进入 code-dist
3. 执行脚本

```bash
## 第一次
pm2 start ../bin/app.sh --name mydoc

## 不是第一次
pm2 update

```
