import React, { useState } from 'react';
import { FaHeadphones, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import Logo from "../assets/newlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-red-700 text-white w-full h-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
          {/* Logo Section - Now positioned with negative margin to allow it to extend beyond the navbar */}
          <div className="flex items-center">
            <a href="/" className="relative">
              <img
                src={Logo}
                alt="RCH Logo"
                className="h-44 object-contain -my-12" // Increased height and added negative margin
              />
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
            <a href="tel:+919971855186" className="flex items-center space-x-2 hover:text-green-400 transition duration-300">
              <FaHeadphones className="text-xl text-white hover:text-blue-700 transition" />
              <span className="font-bold font-serif">+91-9971855186</span>
            </a>
            <a href="mailto:booking@rchronline.com" className="flex items-center space-x-2 hover:text-green-400 transition duration-300">
              <SiGmail className="text-xl text-white hover:text-blue-700 transition" />
              <span className="font-bold font-serif">booking@rchronline.com</span>
            </a>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/" className="hover:opacity-75 transition duration-300"><BsInstagram className="text-white text-xl" /></a>
              <a href="https://www.facebook.com/" className="hover:opacity-75 transition duration-300"><FaFacebookF className="text-white text-xl" /></a>
              <a href="https://www.youtube.com/" className="hover:opacity-75 transition duration-300"><FaYoutube className="text-white text-2xl" /></a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 w-full py-4 px-4">
            <a href="tel:+919971855186" className="block py-2 hover:bg-gray-700 p-2 rounded">Call: +91-9971855186</a>
            <a href="mailto:booking@rchronline.com" className="block py-2 hover:bg-gray-700 p-2 rounded">Email: booking@rchronline.com</a>
            <div className="flex justify-center space-x-4 py-2">
              <a href="#" className="hover:opacity-75 transition duration-300"><BsInstagram className="text-pink-900 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaFacebookF className="text-blue-700 text-xl" /></a>
              <a href="#" className="hover:opacity-75 transition duration-300"><FaYoutube className="text-red-900 text-2xl" /></a>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-2 text-center mt-4 font-bold font-serif text-sm md:text-base">
              {[
                { href: '/', text: 'Home' },
                { href: '/about-us', text: 'About Us' },
                { href: '/rooms', text: 'Rooms' },
                { href: '/gallery', text: 'Gallery' },
                { href: '/places-to-visit', text: 'Places To Visit' },
                { href: '/contact', text: 'Contact' },
                { href: '/contact', text: 'Book Now', className: 'bg-red-700 text-white rounded-xl px-3 py-2' }
              ].map(({ href, text, className }) => (
                <li key={href}>
                  <a href={href} className={`block px-4 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300 ${className || ''}`}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop Navigation Menu */}
      <div className="hidden lg:block w-full shadow-md bg-white">
        <div className="container mx-auto">
          <ul className="flex justify-center md:justify-between px-4 md:px-10 py-4 font-bold font-serif text-sm md:text-base">
            {[
              { href: '/', text: 'Home' },
              { href: '/about-us', text: 'About Us' },
              { href: '/rooms', text: 'Rooms' },
              { href: '/gallery', text: 'Gallery' },
              { href: '/places-to-visit', text: 'Places To Visit' },
              { href: '/contact', text: 'Contact' },
              { href: '/contact', text: 'Book Now', className: 'bg-red-700 text-white rounded-xl px-3 py-2 hover:text-green-500 transition' }
            ].map(({ href, text, className }) => (
              <li key={href} className="px-2 py-1">
                <a href={href} className={`block px-3 py-2 hover:bg-red-700 hover:text-white rounded transition duration-300 ${className || ''}`}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;