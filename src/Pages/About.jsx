import React from 'react'
import Navbar from '../Components/Navbar'
import Room from "../assets/room.webp";
const About = () => {
  return (
    <>
    <Navbar/>
    <section>
          <div className='min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8'>
                <div className='h-[80vh] md:h-[80%] w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-3 sm:p-4 md:p-6 order-2 md:order-1'>
                  <p className='text-xl sm:text-2xl md:text-3xl font-semibold font-serif'>INTRODUCTION OF <span>SAMAR-<span className='text-yellow-400 font-bold'>NIWAS</span> DEHRADUN</span></p>
                  <p className='text-xs sm:text-sm font-semibold py-4 sm:py-6 md:py-8'>It is surrounded by tall pine & oak trees, the hotel gives you a true feel of a vacation in hill station. The hotel caters exclusively to the taste of a traveler seeking the serine beauty in the Himalayan foothill. It's a preferred accommodation of every traveler visiting Nainital for its natural beauty. The ambience and customer service has been specially designed to suit the tastes and requirements of budget mind leisure travelers with great hospitality.</p>
                </div>
                <div className='h-auto md:h-[65%] w-full md:w-[40%] rounded-xl order-1 md:order-2'>
                  <img src={Room} alt="rooms" className='h-full w-full object-cover rounded-xl' />
                </div>
              </div>
              <div className='h-[100vh] w-full bg-gray-100'></div>
    </section>
    </>
  )
}

export default About
