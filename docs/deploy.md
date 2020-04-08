# 部署

## GitHub Pages

1. 新增 build script 到 `package.json`
1. 設定檔裡設定好 `base`
    1. `https://<USERNAME>.github.io/`, base = `"/"`
    1. `https://<USERNAME>.github.io/<REPO>/`, base = `"/<REPO>/"`
1. 建立 `deploy.sh`

```shell
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
