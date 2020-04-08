(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{249:function(s,t,n){"use strict";n.r(t);var a=n(28),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("h2",{attrs:{id:"github-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-pages"}},[s._v("#")]),s._v(" GitHub Pages")]),s._v(" "),n("ol",[n("li",[s._v("新增 build script 到 "),n("code",[s._v("package.json")])]),s._v(" "),n("li",[s._v("設定檔裡設定好 "),n("code",[s._v("base")]),s._v(" "),n("ol",[n("li",[n("code",[s._v("https://<USERNAME>.github.io/")]),s._v(", base = "),n("code",[s._v('"/"')])]),s._v(" "),n("li",[n("code",[s._v("https://<USERNAME>.github.io/<REPO>/")]),s._v(", base = "),n("code",[s._v('"/<REPO>/"')])])])]),s._v(" "),n("li",[s._v("建立 "),n("code",[s._v("deploy.sh")])])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# abort on errors")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# navigate into the build output directory")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to a custom domain")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to https://<USERNAME>.github.io")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);