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
- 特殊处理
  - 处理 `setInterval` + `clearInterval`
  - 处理 `addEventListener` + `removeEventListener`

## single-spa

- 缺点
  - 样式隔离问题
  - 不能动态加载 js 文件(需要自己编写加载对应应用的资源文件的方法)
  - 没有 js 沙箱机制(用的都是同一个 window)

## qiankun

- 资源预加载
  - 在第一个应用挂载完毕后 预加载所有的符合的子应用
- 隔离
  - js 隔离(js 沙箱)
    - 快照沙箱(单例)
      - 需要遍历 window 的所有属性 性能较差
      - 会修改全局 window 属性 所有无法支持多应用
    - 单例代理沙箱
      - 使用三个变量记录 新增的变量 修改的变量 设置的变量
      - 不需要遍历所有属性
      - 还是会污染全局变量
    - 多例代理沙箱
  - 样式隔离
    - 子应用间的样式隔离(自动)
      - 加载应用的时候添加样式表 卸载应用的时候移除样式表
    - 主子应用间的样式隔离
      - 启动沙箱 根 div 上加上一个自定义属性 data-qiankun='应用名' 然后在所有样式前面都加上这样一个前缀
      - shadowDOM
        - 全局样式会失效
- 全局通信

## micro-app

- 核心通过 WebComponent 实现
- 不需要修改子应用
- 获取到 html 将模板放到 WebComponent 中
- css 作作用域隔离
- js 做 proxy 沙箱
- 兼容 qiankun 子应用

## 模块联邦

- 动机
  - 多个团队一起开发一个或者多个程序
  - 每个部分单独使用被称为容器 一个容器 A 如果使用别的容器 B 则 A 被称为主机 B 被称为远程
- 需要 webpack5
- 没有沙箱

## qiankun 问题汇总

- 预加载的应用的加载时 是如何避免再次请求资源的
  - 全局定义了一个缓存列表
- 应用的 entry 是如何拿到的 也就是说有很多 js 文件 是如何拿到那些生命周期的
  - 对于 entry 首先会取 script 标签上带有 entry 属性的 src 如果都没有 会取最后 script 的 src 作为 entry
- js 沙箱如何生效的 也就是 js 是如何执行的
  - (0, eval)('code')
  - 就是通过 eval 的方式 然后包装一个自执行函数 将 proxy 传过去
- 依赖复用的问题
  - 创建共享模块, 独立打包部署到 CDN 上, 通过加载应用的传入, 或在子应用中单独引入
  - 通过模块联邦进行打包处理公共资源
  - 两个应用之间加载资源的地址相同即可复用
- 组件复用
  - 将组件单独打包
