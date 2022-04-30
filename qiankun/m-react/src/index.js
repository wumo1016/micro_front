import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let root
function render(props = {}) {
  const container = props.container
  root = ReactDOM.createRoot(
    (container && container.querySelector('#root')) ||
      document.getElementById('root')
  )
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// 如果是在qiankun中渲染 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  console.log(123);
  render()
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log('m-react', 'bootstrap')
}
export async function mount(props) {
  console.log('m-react', 'mount')
  render(props)
}
export async function unmount() {
  console.log('m-react', 'unmount')
  root = null
}
