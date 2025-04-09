import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Places = () => {
  // Fade-in animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  // Stagger animation for list items
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="overflow-hidden"
    >
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <div
        className="w-full h-[40vh] bg-cover bg-center bg-black"

      >
        <div className="w-full h-full relative flex flex-col justify-center items-center text-center px-4">
          {/* This is the background layer */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* This is the animated fill layer */}
          <motion.div
            className="absolute inset-0 bg-red-600/70 origin-left z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {/* Content that sits on top of both layers */}
          <div className="relative z-20 text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold font-serif"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Samar Niwas Location
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Find your way to our peaceful mountain retreat
            </motion.p>
          </div>
        </div>
      </div>
      {/* Location Details with Improved Design */}
      <section className="min-h-screen w-full flex flex-col items-center py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="w-[90%] md:w-[80%] max-w-6xl mx-auto">

          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800">Our Location</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Experience the tranquility of the mountains with easy access to all the wonders of Dehradun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address and Contact Info */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-10 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h2 className="text-3xl font-bold font-serif text-gray-800 mb-8 flex items-center">
                <span className="text-red-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Find Us
              </h2>

              <div className="space-y-8 text-gray-700">
                <div className="flex">
                  <span className="text-red-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-serif">Address</h3>
                    <p className="text-lg leading-relaxed font-semibold">
                      Samar Niwas<br />
                      Rajpur Rd, Chander Lok Colony,<br />
                      Near Ajanta Hotel, Dehradun,<br />
                      Uttarakhand 248001
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <span className="text-red-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-serif">Contact</h3>
                    <p className="text-lg font-semibold">
                      Phone: <a href="tel:+919971855186" className="text-red-600 hover:underline">+91-9971855186</a><br />
                      Email: <a href="mailto:booking@rchronline.com" className="text-red-600 hover:underline">booking@rchronline.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <span className="text-red-600 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-serif">Landmarks Nearby</h3>
                    <motion.ul
                      className="space-y-2 text-lg"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.li variants={item} className="flex items-center font-semibold">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        Behind Ajanta Hotel
                      </motion.li>
                      <motion.li variants={item} className="flex items-center font-semibold">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        Near Kumar Sweet Shop
                      </motion.li>
                      <motion.li variants={item} className="flex items-center  font-semibold">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        Opposite Ajanta Hotel & Near RTO Office
                      </motion.li>
                      <motion.li variants={item} className="flex items-center font-semibold">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        The hotel is approximately 13 kilometers (8 miles) away from the ISBT Bus Station Dehradun
                      </motion.li>
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder (you can integrate a real map) */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl overflow-hidden h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-full w-full bg-gray-200">
                {/* Replace with actual map implementation */}
                <div className="absolute inset-0 bg-[url('https://www.google.com/maps/search/samar+niwas+map/@28.6325725,76.9205105,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D')] bg-cover bg-center"></div>

                {/* Location Pin Animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: [0, -15, 0], opacity: 1 }}
                  transition={{ y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
                >
                  <div className="text-red-600 text-5xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* How to Reach Section */}
          <motion.div
            className="mt-20 bg-white rounded-3xl shadow-xl p-10 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-8 flex items-center">
              <span className="text-red-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              How to Reach
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                variants={item}
              >
                <div className="text-red-600 text-5xl mb-5">✈️</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">By Air</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  The nearest airport is Pantnagar Airport (PGH), approximately 65 km away.
                  Taxis are available from the airport to Nainital for a scenic journey.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                variants={item}
              >
                <div className="text-red-600 text-5xl mb-5">🚂</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 ">By Train</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Kathgodam Railway Station is the nearest railhead, about 35 km away.
                  Regular taxis and shared cabs are available from the station.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                variants={item}
              >
                {/*  */}
                <div className="text-red-600 text-5xl mb-5">🚌</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">By Bus</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  Regular bus services connect Nainital to major cities including Delhi,
                  Dehradun, and Haldwani. The bus stand is just 3 km from Samar Niwas.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Travel Tips with Better Visual Design */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-xl p-10 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold font-serif mb-8 flex items-center">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Travel Tips
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🌤️</span>
                  Best Time to Visit
                </h3>
                <p className="leading-relaxed">
                  March to June and September to November offer the most pleasant weather in Nainital, with clear skies and comfortable temperatures.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🚕</span>
                  Local Transportation
                </h3>
                <p className="leading-relaxed">
                  Auto-rickshaws, taxis, and cycle-rickshaws are readily available for local sightseeing. Many attractions are within walking distance from Samar Niwas.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">🅿️</span>
                  Parking
                </h3>
                <p className="leading-relaxed">
                  Limited parking is available at Samar Niwas. Additional paid parking facilities are available nearby for your convenience.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  Advance Booking
                </h3>
                <p className="leading-relaxed">
                  We recommend booking your accommodation in advance, especially during peak tourist seasons (summers and holidays) to ensure availability.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-6">Ready to Experience Samar Niwas?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay now and discover the perfect blend of comfort, luxury, and natural beauty
            </p>
            <motion.button
              className="px-8 py-4 bg-red-600 text-white rounded-full text-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Stay
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Places;