# 快速入門

1. 建立目錄
1. 安裝 `vuepress`
1. 建立文件目錄 `doc`
1. 啟動 VuePress

```shell
mkdir vuepreee && cd vuepreee
yarn global add vuepress # OR npm install -g vuepress
mkdir docs
echo '# Hello VuePress' > README.md
vuepress dev
```

## 專案型

1. 於專案內新增目錄 `doc`
1. 新增 script 到 `package.json`
1. 啟動 VuePress
1. 產生靜態檔到 .vuepress/dist

```shell
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```shell
yarn docs:dev # OR npm run docs:dev

yarn docs:build # OR npm run docs:build
```

## 路由

Relative Path  | Page Routing
---------------|-------------
`/README.md`  | `/`
`/guide/README.md`  | `/guide/`
`/config.md`  | `/config.html`
