import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import About from './Pages/About'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/about-us" element={<About/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
