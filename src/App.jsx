import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Problems from './pages/Problems'
import Docs from './pages/Docs'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={
            <div className="py-40 text-center bg-gray-50 h-[80vh] flex flex-col justify-center">
              <h1 className="text-4xl font-black mb-8">Ready to Connect?</h1>
              <p className="text-xl text-gray-500 mb-12">Join Nigeria's tax infrastructure layer today.</p>
              <a href="mailto:hello@ree-fond.com" className="text-3xl font-black text-ree-green underline">hello@ree-fond.com</a>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App