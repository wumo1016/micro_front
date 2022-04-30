import { BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>主应用</div>
      <Router>
        <Link to="/vue">vue应用</Link>
        <Link to="/react">react应用</Link>
      </Router>
      {/* 切换导航 将子应用渲染到 container 容器中 */}
      <div id="container"></div>
    </div>
  )
}

export default App
