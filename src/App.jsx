import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Rooms from './Pages/Rooms'
import Gallery from './Pages/Gallery'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
