import React, { useState } from 'react';
import { FaHeadphones, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="relative bg-gray-900 text-white w-full">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
            <p className="font-extrabold text-xl sm:text-2xl md:text-3xl">
              Samar<span className="text-yellow-400">Niwas</span>
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? 
              <FaTimes className="h-6 w-6" /> : 
              <FaBars className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex items-center space-x-6 ml-44">
          <a href="tel:+919971855186" className="flex items-center space-x-2 hover:text-blue-300 transition duration-300">
            <FaHeadphones className="text-xl text-blue-500" />
            <span className="font-bold font-serif">+91-9971855186</span>
          </a>

          <a href="mailto:booking@rchronline.com" className="flex items-center space-x-2 hover:text-red-300 transition duration-300">
            <SiGmail className="text-xl text-red-500" />
            <span className="font-bold font-serif">booking@rchronline.com</span>
          </a>
        </div>

        {/* Desktop Social Media */}
        <div className="hidden lg:flex items-center space-x-4 ml-20">
          <a href="#" className="hover:opacity-75 transition duration-300">
            <BsInstagram className="text-pink-700 text-xl" />
          </a>
          <a href="#" className="hover:opacity-75 transition duration-300">
            <FaFacebookF className="text-blue-700 text-xl" />
          </a>
          <a href="#" className="hover:opacity-75 transition duration-300">
            <FaYoutube className="text-red-700 text-2xl" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 w-full`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {/* Mobile Contact Info */}
          <a href="tel:+919971855186" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <FaHeadphones className="text-xl text-blue-500" />
            <span className="font-bold font-serif">+91-9971855186</span>
          </a>

          <a href="mailto:booking@rchronline.com" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
            <SiGmail className="text-xl text-red-500" />
            <span className="font-bold font-serif">booking@rchronline.com</span>
          </a>

          {/* Mobile Social Media */}
          <div className="flex space-x-6 py-2">
            <a href="#" className="hover:opacity-75 transition duration-300">
              <BsInstagram className="text-pink-700 text-xl" />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <FaFacebookF className="text-blue-700 text-xl" />
            </a>
            <a href="#" className="hover:opacity-75 transition duration-300">
              <FaYoutube className="text-red-700 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    {/* Navigation Menu */}
    <div className='w-full shadow-md'>
      <div className='container mx-auto'>
        <ul className='flex flex-wrap justify-between px-4 md:px-10 py-4 font-bold font-serif text-sm md:text-base'>
          <li>
            <a href="/" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Home</a>
          </li>
          <li>
            <a href="/about-us" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>About Us</a>
          </li>
          <li>
            <a href="/rooms" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Rooms</a>
          </li>
          <li>
            <a href="" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Gallery</a>
          </li>
          <li>
            <a href="" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Places To Visit</a>
          </li>
          <li>
            <a href="" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Payment</a>
          </li>
          <li>
            <a href="" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300'>Contact</a>
          </li>
          <li>
            <a href="/contact" className='block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300 bg-red-700 text-white rounded-xl'>Book Now</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;