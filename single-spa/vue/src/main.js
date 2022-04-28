import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

// 如果是在父应用中加载的
if (window.singleSpaNavigate) {
  // 相当于设置 publicPath 因为子应用调用其他页面的时候 会加载相应的文件
  // 而默认是相对于父路径加载的 所以这里需要将其固定为子应用自己的地址
  __webpack_public_path__ = 'http://localhost:3001/'
} else {
  createApp(App).use(router).mount('#app')
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    el: '#vue', // 挂载到父应用的id为vue的标签中
    render() {
      return h(App)
    }
  },
  handleInstance(app) {
    app.use(router)
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
