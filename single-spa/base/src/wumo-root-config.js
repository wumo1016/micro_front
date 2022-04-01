import { registerApplication, start } from 'single-spa'

registerApplication({
  name: '@single-spa/welcome', // 应用名 随便
  // 路径匹配到的时候 执行这个方法
  app: () =>
    // 加载一个远程模块 这个模块会暴露3个钩子 bootstrap mount unmount
    System.import(
      'https://cdn.jsdelivr.net/npm/single-spa-welcome@2.3.0/dist/single-spa-welcome.min.js'
    ),
  activeWhen: ['/']
})

// 启动应用
start({
  urlRerouteOnly: true
})
