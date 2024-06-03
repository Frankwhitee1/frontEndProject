import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Aboutme from './components/Aboutme'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutme" element={<Aboutme />} />
        </Routes>
      </Router>
    </>
  )
}

export default App