import React from 'react';
import Navbar from '../Components/Navbar';
import { BiLogoGmail } from 'react-icons/bi';
import { FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Components/Footer';
// import GoogleMapReact from 'google-map-react';

// Define a Marker Component
const Marker = () => (
  <div className="text-red-600 text-3xl">
    <FaLocationDot />
  </div>
);

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 28.7041, // Change to your location's latitude
      lng: 77.1025  // Change to your location's longitude
    },
    zoom: 14
  };

  return (
    <>
      <Navbar />
      <section className='flex flex-col md:flex-row justify-center items-center md:items-start p-4'>
        {/* Contact Form */}
        <form className='w-full md:w-2/3 lg:w-1/2 border-2 p-6 rounded-xl shadow-lg bg-white'>
          <p className='text-3xl font-semibold font-serif text-center mb-6'>
            Get In <span className='text-red-600'>Touch</span>
          </p>
          <input type='text' placeholder='Enter Your Name...' className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none' />
          <input type='email' placeholder='Enter Your Email...' className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none' />
          <input type='text' placeholder='Enter Your Mobile Number...' className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none' />
          <textarea placeholder='Enter Your Message...' className='h-32 w-full px-4 py-2 mb-4 bg-gray-200 rounded-xl focus:outline-none resize-none' />
          <button className='h-12 w-full md:w-40 border-2 rounded-xl font-semibold font-serif text-white bg-red-700 hover:bg-red-800 transition duration-300' type='submit'>
            Send Message
          </button>
        </form>

        {/* Contact Info & Google Map */}
        <div className='w-full md:w-1/2 lg:w-1/3 p-6 text-center md:text-left'>
          <h2 className='text-3xl font-bold font-serif'>Contact Info</h2>
          <p className='text-gray-700 mt-2'>
            Feel free to reach out via email or phone for any inquiries.
          </p>
          <p className='mt-4 flex items-center text-xl '><BiLogoGmail className='mr-2 text-red-600'/><strong>Email: <span className='text-red-700'>booking@rchronline.com</span></strong></p>
          <p className='mt-4 flex items-center text-xl '><FaHeadphones className='mr-2 text-blue-600'/><strong>Phone-No: <span className='text-red-700'>+91-9971855186</span></strong></p>
          <p className='mt-4 flex items-center text-xl '><FaLocationDot className='mr-2 text-red-900'/><strong>Address: <span className='text-red-700'>Dummy Address</span></strong></p>
          
          {/* Google Map */}
          {/* <div className="w-full h-64 mt-6 border-2 rounded-lg overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }} // Replace with your API key
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Marker lat={28.7041} lng={77.1025} />
            </GoogleMapReact>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
