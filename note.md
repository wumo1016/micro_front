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

## qiankun

- 处理样式
  - 子应用间的样式隔离(自动)
    - 加载应用的时候添加样式表 卸载应用的时候移除样式表
  - 主子应用间的样式隔离
    - 启动沙箱 根 div 上加上一个自定义属性 data-qiankun='应用名' 然后在所有样式前面都加上这样一个前缀
    - shadowDOM
      - 全局样式会失效
 