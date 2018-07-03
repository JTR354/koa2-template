Koa2 RESTful API 模版
=============================

这是一个基于Koa2的轻量级RESTful API 模版，支持ES6。


调试说明
--------

```
$ npm run dev --debug

Or

$ npm start --debug
```

支持Node.js原生调试功能：https://nodejs.org/api/debugger.html

开发环境部署
------------

生成node直接可以执行的代码到dist目录：

```
$ npm run build
```

```
$ npm run production # 生产模式运行

Or

$ node dist/app.js
```

### PM2部署说明

提供了PM2部署RESTful API Server的示例配置，位于“pm2.json”文件中。

```
$ pm2 start pm2.json
```

引入插件介绍
------------

> 引入插件的版本将会持续更新

引入的插件：  
`koa@2 koa-body@2 koa-router@next koa-static2 koa-compose require-directory babel-cli babel-register babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-2 gulp gulp-eslint eslint eslint-config-standard eslint-friendly-formatter eslint-plugin-html eslint-plugin-promise nodemailer promise-mysql 等`

**koa2**: HTTP框架  
&nbsp;Synopsis: HTTP framework.  
&nbsp;From: https://github.com/koajs/koa v2

**koa-body**: body解析器  
&nbsp;Synopsis: A full-feature koa body parser middleware.  
&nbsp;From: https://github.com/dlau/koa-body

**koa-router**: Koa路由  
&nbsp;Synopsis: Router middleware for koa.  
&nbsp;From: https://github.com/alexmingoia/koa-router/tree/master/

**koa-static2**: 静态资源中间件  
&nbsp;Synopsis: Middleware for Koa2 to serve a folder under a name declared by user.  
&nbsp;From: https://github.com/Secbone/koa-static2

**koa-compose**: 多个中间件组合成一个  
&nbsp;Synopsis: Compose several middleware into one.  
&nbsp;From: https://github.com/koajs/compose

**require-directory**: 递归遍历指定目录  
&nbsp;Synopsis: Recursively iterates over specified directory.  
&nbsp;From: https://github.com/troygoode/node-require-directory

**babel-cli**: Babel编译ES6代码为ES5代码  
&nbsp;Synopsis: Babel is a JavaScript compiler, ES6 to ES5.  
&nbsp;From: https://github.com/babel/babel/tree/master/packages/babel-cli

**babel-register**: Babel开发环境实时编译ES6代码  
&nbsp;Synopsis: Babel hook.  
&nbsp;From: https://github.com/babel/babel/tree/master/packages/babel-cli

**babel-plugin-transform-runtime**: Babel配置ES6的依赖项  
**babel-preset-es2015**: 同上  
**babel-preset-stage-2**: 同上

**gulp**: 基于流的自动化构建工具  
&nbsp;Synopsis: Gulp is a toolkit for automating painful or time-consuming tasks.  
&nbsp;From: https://github.com/gulpjs/gulp

**gulp-eslint**: gulp的ESLint检查插件  
&nbsp;Synopsis: A gulp plugin for ESLint.  
&nbsp;From: https://github.com/adametry/gulp-eslint

**gulp-nodemon**: 修改JS代码后自动重启  
&nbsp;Synopsis: nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.  
&nbsp;From: https://github.com/remy/nodemon

**eslint**: JavaScript语法检查工具  
&nbsp;Synopsis: A fully pluggable tool for identifying and reporting on patterns in JavaScript.  
&nbsp;From:

**eslint-config-standard**: 一个ESlint配置&nbsp;Synopsis: ESLint Shareable Config for JavaScript Standard Style.  
&nbsp;From: https://github.com/feross/eslint-config-standard

**eslint-friendly-formatter**: 使得ESlint提示在Sublime Text或iterm2中更友好，Atom也有对应的ESlint插件。  
&nbsp;Synopsis: A simple formatter/reporter for ESLint that's friendly with Sublime Text and iterm2 'click to open file' functionality  
&nbsp;From: https://github.com/royriojas/eslint-friendly-formatter

**eslint-plugin-html**: 检查HTML文件中的JS代码规范  
&nbsp;Synopsis: An ESLint plugin to extract and lint scripts from HTML files.  
&nbsp;From: https://github.com/BenoitZugmeyer/eslint-plugin-html

**eslint-plugin-promise**: 检查JavaScript promises  
&nbsp;Synopsis: Enforce best practices for JavaScript promises.&nbsp;From: https://github.com/xjamundx/eslint-plugin-promise

**eslint-plugin-promise**: ESlint依赖项  
&nbsp;Synopsis: ESlint Rules for the Standard Linter.&nbsp;From: https://github.com/xjamundx/eslint-plugin-standard

**nodemailer**: 发送邮件  
&nbsp;Synopsis: Send e-mails with Node.JS.  
&nbsp;From: https://github.com/nodemailer/nodemailer

**promise-mysql**: 操作MySQL数据库依赖  
&nbsp;Synopsis: Promise Mysql.  
&nbsp;From: https://github.com/lukeb-uk/node-promise-mysql

**sequelize**: 关系型数据库ORM  
&nbsp;Synopsis: Sequelize is a promise-based ORM for Node.js.  
&nbsp;From: https://github.com/sequelize/sequelize

**mysql**: MySQL库  
&nbsp;Synopsis: A pure node.js JavaScript Client implementing the MySql protocol.  
&nbsp;From: https://github.com/mysqljs/mysql

支持Koa2的中间件列表：https://github.com/koajs/koa/wiki

**其它经常配合Koa2的插件：**

**koa-session2**: Session中间件  
&nbsp;Synopsis: Middleware for Koa2 to get/set session.  
&nbsp;From: https://github.com/Secbone/koa-session2

**koa-nunjucks-2**:  
一个好用的模版引擎，可用于前后端，nunjucks：https://github.com/mozilla/nunjucks

**koa-favicon**:  
Koa的favicon中间件：https://github.com/koajs/favicon

**koa-server-push**:  
HTTP2推送中间件：https://github.com/silenceisgolden/koa-server-push

**koa-convert**: 转换旧的中间件支持Koa2  
&nbsp;Synopsis: Convert koa generator-based middleware to promise-based middleware.  
&nbsp;From: https://github.com/koajs/convert

**koa-logger**: 请求日志输出，需要配合上面的插件使用  
&nbsp;Synopsis: Development style logger middleware for Koa.  
&nbsp;From: https://github.com/koajs/logger

**koa-onerror**:  
Koa的错误拦截中间件，需要配合上面的插件使用：https://github.com/koajs/onerror

**koa-multer**: 处理数据中间件  
&nbsp;Synopsis: Multer is a node.js middleware for handling multipart/form-data for koa.  
&nbsp;From: https://github.com/koa-modules/multer

目录结构说明
------------

```bash
.
├── README.md
├── .babelrc                # Babel 配置文件
├── .editorconfig           # 编辑器风格定义文件
├── .eslintignore           # ESlint 忽略文件列表
├── .eslintrc.js            # ESlint 配置文件
├── .gitignore              # Git 忽略文件列表
├── gulpfile.js             # Gulp配置文件
├── package.json            # 描述文件
├── pm2.json                # pm2 部署示例文件
├── build                   # build 入口目录
│   └── dev-server.js       # 开发环境 Babel 实时编译入口
├── src                     # 源代码目录，编译后目标源代码位于 dist 目录
│   ├── app.js              # 入口文件
│   ├── config.js           # 主配置文件（*谨防泄密！）
│   ├── plugin              # 插件目录
│   ├── tool                # 工具目录
│       └── common.js       # 示例插件 - 发邮件
│   ├── lib                 # 库目录
│   ├── controllers         # 控制器
│   ├── models              # 模型
│   ├── routes              # 路由
│   └── services            # 服务
├── assets                  # 静态资源目录
└── logs                    # 日志目录
```
