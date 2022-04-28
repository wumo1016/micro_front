import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

const loadScript = url => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

registerApplication(
  'myVueApp',
  // 必须返回三个方法
  async () => {
    await loadScript('http://localhost:3001/js/chunk-vendors.js')
    await loadScript('http://localhost:3001/js/app.js')
    return window.singleVue
  },
  location => location.pathname.startsWith('/vue') // 匹配到即加载
)
start()

createApp(App).use(router).mount('#app')
