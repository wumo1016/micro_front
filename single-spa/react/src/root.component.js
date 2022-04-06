import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'

export default function Root(props) {
  console.log(props);
  return (
    <BrowserRouter basename="/react">
      <div>
        <Link to="/">Home React</Link>
        <Link to="/about">About React</Link>
      </div>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
