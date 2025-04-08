import React from 'react';
import { FaLocationDot, FaClock, FaFacebookF, FaYoutube } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-red-600 text-white px-6 py-10 md:px-14 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Contact Info */}
        <div>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              {/* <FaLocationDot className="text-2xl text-red-600" /> */}
              <span className="text-lg font-semibold text-white">Samar Niwas Home Stay, Rajpur Rd, Chander Lok Colony, Near Ajanta Hotel, Dehradun, Uttarakhand 248001</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-xl text-white" />
              <span className="text-lg font-semibold text-white">+91-9971855186</span>
            </li>
            <li className="flex items-center space-x-2">
              <SiGmail className="text-xl text-white" />
              <span className="text-lg font-semibold text-white">booking@rchronline.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock className="text-xl text-white" />
              <span className="text-lg font-semibold text-white">24/7 Service</span>
            </li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold text-white">Menu</h3>
          <hr className="w-16 border-red-600 my-2" />
          <ul className="space-y-2">
            {["Home", "About Us", "Rooms", "Gallery", "Places To Visit", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="/" className="text-sm font-semibold text-white hover:text-black transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h3 className="text-xl font-semibold text-white">Get Help</h3>
          <hr className="w-24 border-red-600 my-2" />
          <ul className="space-y-2">
            {["FAQ", "Privacy Policy", "Payment Options", "Cancellation & Refund"].map((item) => (
              <li key={item}>
                <a href="/" className="text-sm font-semibold text-white hover:text-black transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white">Services</h3>
          <hr className="w-20 border-red-600 my-2" />
          <ul className="space-y-2">
            {["Free Wifi", "Restaurant", "Parking"].map((item) => (
              <li key={item}>
                <a href="#" className="text-sm font-semibold text-white hover:text-black transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <hr className="w-28 border-red-600 my-2" />
          <ul className="flex space-x-4 mt-4">
            {[BsInstagram, FaFacebookF, FaYoutube].map((Icon, index) => (
              <li key={index}>
                <a href="#" className="text-xl text-white hover:text-black transition">
                  <Icon className=''/>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white pt-4">
        <a className="text-sm font-semibold font-serif" href="#">
          Managed By <span className="text-black">Royal Collection Hotels</span>
        </a>
        <a href="#" className="text-sm font-semibold font-serif">
          All Rights Reserved - <span>Samar- <span className="text-black">Niwas</span></span><span className="text-red-600">@2025</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
