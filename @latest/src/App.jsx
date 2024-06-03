import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { getRandomBooks } from './fetch'
import Home from './components/Home'
import Header from './components/header'


function App() {
 
  return (
   <>
   <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>
   </Router>
 
  </>
  )
}

export default App
