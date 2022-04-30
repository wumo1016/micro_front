import { registerMicroApps, start } from 'qiankun'

// 加载状态
const loader = loading => {
  console.log(loading, 'loading')
}

registerMicroApps(
  [
    {
      name: 'm-vue',
      entry: '//localhost:3001',
      container: '#container',
      activeRule: location => location.pathname.startsWith('/vue'),
      loader
    },
    {
      name: 'm-react',
      entry: '//localhost:3002',
      container: '#container',
      activeRule: location => location.pathname.startsWith('/react'),
      loader
    }
  ],
  {
    beforeLoad() {
      console.log('加载前')
    },
    beforeMount() {
      console.log('挂在前')
    },
    afterMount() {
      console.log('挂载后')
    },
    beforeUnmount() {
      console.log('卸载前')
    },
    afterUnmount() {
      console.log('卸载后')
    }
  }
)

start({
  sandbox: {
    // experimentalStyleIsolation: true, // 开启样式隔离 加载前缀
    strictStyleIsolation: true // 开启shadowDOM
  }
})
