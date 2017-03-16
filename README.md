## 项目中的API接口采用的是线上
* #### 项目设置了代理，来解决本地开发请求数据遇到的跨域问题
* 看效果之前请配置代理
* 代理工具推荐 SwitchyOmega
* #### 令访问域名和端口为m.sz:8080，则需要配置如下：
* 请求地址								代理名称		代理对应配置
* http://m.sz:8080/admin/*				 sport			http协议 192.168.1.105地址 8080端口
* http://m.sz:8080/(login|audit|user-admin)\s*		manager 	http协议 test.admin.shangyuer.com 地址 8089端口
* http://m.sz:8080/$		local		http协议 127.0.0.1 地址 8080端口

* download项目之后，执行下面的命令。最后用npm run dev启动项目，在浏览器输入m.sz:8080即可看到效果


# sell

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
