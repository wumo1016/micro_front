import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import { routes } from './router'

let history, app, router
function render(props = {}) {
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '')
  router = createRouter({
    history,
    routes
  })
  const container = props.container
  app = createApp(App)
    .use(router)
    .mount((container && container.querySelector('#app')) || '#app')
}

// 如果是在qiankun中渲染 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log('m-vue', 'bootstrap')
}
export async function mount(props) {
  console.log('m-vue', 'mount')
  console.log(props)
  render(props)
}
export async function unmount() {
  console.log('m-vue', 'unmount')
  history = null
  router = null
  app = null
}
