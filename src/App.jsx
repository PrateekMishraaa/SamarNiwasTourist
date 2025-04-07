import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Rooms from './Pages/Rooms'
import Gallery from './Pages/Gallery'
import Places from './Pages/Places'
import Payment from './Pages/Payment'
import PageNotFound from './Pages/PageNotFound'
// import SignUp from './Pages/SignUp'
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
        <Route path="/places-to-visit" element={<Places/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
        <Route path="/payment" element={<Payment/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
