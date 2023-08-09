<div style="text-align: center">
    <img width="160px" style="border-radius: 25%" src="./bailu.jpg"><br><br><br>
    <img src="https://img.shields.io/badge/node-%3E=4.0-green">
    <img src="https://img.shields.io/badge/npm-%3E=4.0-green">
    <img src="https://img.shields.io/badge/license-MIT-red">
</div>

# 介绍

## 快速体验
- 演示网站：http://tv.agety.cn

## 功能简介

`jinyou_TV`后端逻辑处理是基于`node.js`框架编写,使用了多个第三方库([express](https://www.expressjs.com.cn/)、[cors](https://www.npmjs.com/package/cors)、[multer](https://www.npmjs.com/package/multer)等...)结合开发,更有利于项目的维护管理。前端由原生的`html`、`css`、`javascript`。能够满足该项目的需求。下面是简单功能介绍，还有更多细节无法一一介绍，需要你自己下载并安装才能体验。

### 外观
  - 精简的UI：使用原生的H5、css3、javascript(es6语法)
  - 主题优雅：全站主题偏绿色的主题风格，大气美观
  - 主页内容：主页包含头像、项目名、项目简介、外链按钮(GitHub、开始上传、立即体验)


### 功能
  - 随机加载：当点击立即体验时，会进入视频播放页面，点击播放按钮就会随机加载视频
  - 自动加载：检测视频的结束时间自动更换视频
  - 自适应：适应移动端、PC端在线体验


## 更多
- 交流QQ群：421516403


# 安装

## 环境要求

- node的最低要求版本: 4.x及以上版本。
- npm的最低要求版本：npm 3.x及以上版本。

`建议使用最新版本的Node.js和npm，以确保能够获得最新的功能和安全性。`

`dist`目录下属于静态资源的存放位置，默认的`index.html`文件就在该目录,静态资源建议都放在该目录下，以便能够正确加载页面中引用的文件如css、js

## 开始安装

通过github，或者gitee，将源代码下载至你的服务器

如果你访问不了github，可以点击这里进行下载最新版：[jinyou_TV.zip](https://ljy520.lanzoum.com/iyTke14w585g)

### 运行命令
把项目解压，打开终端在项目根目录下(`jinyou_TV`)运行以下命令
- 初始化项目依赖模块


```js
npm install
```

- 运行项目入口文件


```js
node app.js
```

至此，本地运行项目成功

浏览器输入http://localhost:8080  

或者

[点击此处](http://localhost:8080) 

如果启动失败请检查8080端口是否被其他程序占用
更多解决方案请前往[官方文档](http://doc-tv.agety.cn)查看