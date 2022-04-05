import { registerApplication, start } from 'single-spa'

// 注册 welcome
registerApplication({
  name: '@single-spa/welcome', // 应用名 随便
  // 路径匹配到的时候 执行这个方法
  app: () =>
    // 加载一个远程模块 这个模块会暴露3个钩子 bootstrap mount unmount
    System.import(
      'https://cdn.jsdelivr.net/npm/single-spa-welcome@2.3.0/dist/single-spa-welcome.min.js'
    ),
  activeWhen: location => location.pathname === '/'
})

// 注册 vue
registerApplication({
  name: '@wumo/vue',
  app: () => System.import('@wumo/vue'), // @wumo/vue 需要在 index.ejs中注册
  activeWhen: ['/vue'],
  // 传递数据
  customProps: {
    name: 'wyb'
  }
})

// 启动应用
start({
  urlRerouteOnly: true
})
