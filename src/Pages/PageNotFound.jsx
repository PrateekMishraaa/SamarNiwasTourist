import React from 'react'
import NotFound from "../assets/NotFound.avif";
import Navbar from "../Components/Navbar.jsx"
import Footer from '../Components/Footer';
const PageNotFound = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='h-[100vh] w-full '>
          <img src={NotFound} alt="" className='h-full w-full' />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default PageNotFound
