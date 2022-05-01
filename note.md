## 如何实现微前端

- iframe
- webComponent
- single-spa
- qiankun(基于 single-spa+sandbox+import-html-entry)
- 模块联邦

## 动态加载 js 文件

- script
- fetch + eval

## 样式隔离解决方案

- BEM: 约定项目前缀
- css-modules: 打包时生成不冲突的选择器名
- css-in-js
- Shadow DOM: 真正意义上的隔离

## js 沙箱

- 快照沙箱: 前后比对 保存差别 (多个应用无法使用)
- 代理沙箱: 使用 Proxy

## single-spa

- 缺点
  - 样式隔离问题
  - 不能动态加载 js 文件(需要自己编写加载对应应用的资源文件的方法)
  - 没有 js 沙箱机制(用的都是同一个 window)

## qiankun

- 预加载
  - 在第一个应用挂载完毕后 预加载所有的符合的子应用
- 沙箱
  - js 沙箱
    - 快照沙箱
    - 代理沙箱
- 处理样式
  - 子应用间的样式隔离(自动)
    - 加载应用的时候添加样式表 卸载应用的时候移除样式表
  - 主子应用间的样式隔离
    - 启动沙箱 根 div 上加上一个自定义属性 data-qiankun='应用名' 然后在所有样式前面都加上这样一个前缀
    - shadowDOM
      - 全局样式会失效
- 全局通信

## 模块联邦

- 动机
  - 多个团队一起开发一个或者多个程序
  - 每个部分单独使用被称为容器 一个容器A如果使用别的容器B 则A被称为主机 B被称为远程
