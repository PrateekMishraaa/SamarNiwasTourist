import React from 'react';
import Navbar from '../Components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nature from "../assets/Newnature.jpeg";
import { FaCalendarAlt, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Carousel Section */}
      <div className='relative h-screen w-full overflow-hidden'>
        <Carousel 
          className='h-full w-full' 
          showThumbs={false} 
          showStatus={false} 
          infiniteLoop 
          autoPlay 
          interval={5000} 
          transitionTime={800}
          showArrows={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <button
              onClick={clickHandler}
              className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <button
              onClick={clickHandler}
              className="absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-2 rounded-full"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
          renderIndicator={(clickHandler, isSelected, index) => (
            <div
              onClick={clickHandler}
              className={`inline-block h-2 w-2 mx-1 rounded-full cursor-pointer ${isSelected ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Slide ${index + 1}`}
            />
          )}
        >
          {/* Slide 1 */}
          <div className='relative h-screen w-full'>
            <img src={Nature} className='h-full w-full object-cover' alt="Beautiful vacation destination" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-4">
              <div className="max-w-4xl text-center px-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 opacity-0 animate-fade-up text-white" >
                  Discover Your Perfect Getaway
                </h1>
                <div className='h-40 w-[100%] border-2 mb-2 py-4 rounded-3xl bg-red-100 transparent'>
                <p className='text-base md:text-2xl lg:text-3xl font-light mb-6 max-w-2xl mx-auto font-bold font-serif text-red-500'>
                  Limited time offer: Book your dream vacation today and save up to 30%
                </p>
                </div>
                <button className="bg-white cursor-pointer text-blue-800 hover:bg-blue-700 hover:text-white transition-all font-medium py-3 px-8 rounded-full flex items-center mx-auto">
                  Book Now <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className='relative h-screen w-full'>
            <img src={Nature} className='h-full w-full object-cover' alt="Luxury accommodation" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-4">
            <div className="max-w-4xl text-center px-6 py-10 bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-lg">
  <div className="mb-4">
    <h2 className="text-red-500 text-4xl md:text-5xl font-bold font-serif">Luxury Meets Nature</h2>
  </div>
  <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-6 max-w-2xl mx-auto">
    Experience breathtaking views with world-class amenities
  </p>
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center shadow-md transition-all duration-300">
      <FaMapMarkerAlt className="mr-2" /> Explore Destinations
    </button>
    <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-medium py-3 px-6 rounded-full flex items-center shadow-md duration-300">
      <FaCalendarAlt className="mr-2" /> Check Availability
    </button>
  </div>
</div>

            </div>
          </div>
          
          {/* Slide 3 */}
          <div className='relative h-screen w-full'>
            <img src={Nature} className='h-full w-full object-cover' alt="Special offer" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-4">
              <div className="max-w-4xl text-center px-4">
                <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm mb-4">SPECIAL OFFER</span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Last Minute Deals
                </h1>
                <p className='text-base md:text-xl lg:text-2xl font-light mb-6 max-w-2xl mx-auto'>
                  Book within the next 24 hours and receive complimentary upgrades
                </p>
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl max-w-lg mx-auto">
                  <p className="text-lg font-bold mb-2">Enter your email for exclusive offers:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      </div>
    </>
  );
};

export default HomePage;
