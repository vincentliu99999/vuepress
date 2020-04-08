# 設定

三選一

- `.vuepress/config.yml`
- `.vuepress/config.js`
- `.vuepress/config.toml`

```shell
mkdir docs/.vuepress
touch docs/.vuepress/config.yml
npm run docs:build
```

```yml
---
title: Hello Vincent's VuePress
description: Just playing around

base: /vuepress/

markdown:
  lineNumbers: true

themeConfig:
  sidebar:
    - '/'
    - 
      - '/test'
      - 'test page'
  sidebarDepth: 2
  displayAllHeaders: true

```