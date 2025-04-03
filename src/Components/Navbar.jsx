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
      <nav className="bg-gray-900 text-white w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
            <a className="font-extrabold text-xl sm:text-2xl md:text-3xl" href='/'>
              Samar<span className="text-yellow-400">Niwas</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Contact Info & Social Media */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+919971855186" className="flex items-center space-x-2 hover:text-blue-300 transition duration-300">
              <FaHeadphones className="text-xl text-blue-500" />
              <span className="font-bold font-serif">+91-9971855186</span>
            </a>
            <a href="mailto:booking@rchronline.com" className="flex items-center space-x-2 hover:text-red-300 transition duration-300">
              <SiGmail className="text-xl text-red-500" />
              <span className="font-bold font-serif">booking@rchronline.com</span>
            </a>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75 transition duration-300"><BsInstagram className="text-pink-700 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaFacebookF className="text-blue-700 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaYoutube className="text-red-700 text-2xl" /></a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 w-full py-4 px-4">
            <a href="tel:+919971855186" className="block py-2 hover:bg-gray-700 p-2 rounded">Call: +91-9971855186</a>
            <a href="mailto:booking@rchronline.com" className="block py-2 hover:bg-gray-700 p-2 rounded">Email: booking@rchronline.com</a>
            <div className="flex justify-center space-x-4 py-2">
              <a href="#" className="hover:opacity-75 transition duration-300"><BsInstagram className="text-pink-700 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaFacebookF className="text-blue-700 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaYoutube className="text-red-700 text-2xl" /></a>
            </div>
          </div>
        )}
      </nav>

      {/* Navigation Menu */}
      <div className='w-full shadow-md bg-white'>
        <div className='container mx-auto'>
          <ul className='flex flex-wrap justify-center md:justify-between px-4 md:px-10 py-4 font-bold font-serif text-sm md:text-base'>
            {[
              { href: '/', text: 'Home' },
              { href: '/about-us', text: 'About Us' },
              { href: '/rooms', text: 'Rooms' },
              { href: '/gallery', text: 'Gallery' },
              { href: '/places-to-visit', text: 'Places To Visit' },
              { href: '/payment', text: 'Payment' },
              { href: '/contact', text: 'Contact' },
              { href: '/contact', text: 'Book Now', className: 'bg-red-700 text-white rounded-xl' }
            ].map(({ href, text, className }) => (
              <li key={href} className="px-2 py-1">
                <a href={href} className={`block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300 ${className}`}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
