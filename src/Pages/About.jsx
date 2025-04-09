import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Room from "../assets/newroomseven.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiCustomerService2Fill } from "react-icons/ri";
import { GiThunderSkull, GiTyre } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { BiFoodTag } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";

const About = () => {
  const stats = [
    { value: "712", label: "Happy Guests" },
    { value: "254", label: "Return Guests" },
    { value: "689", label: "Five Stars Rating" },
    { value: "782", label: "Served Breakfast" },
  ];

  const services = [
    { title: "Customer Satisfaction", icon: <RiCustomerService2Fill className='text-gray-600' /> },
    { title: "Free Wifi", icon: <FaWifi className='text-green-600' /> },
    { title: "Power Backup", icon: <GiThunderSkull /> },
    { title: "Delicious Breakfast", icon: <BiFoodTag className='text-green-400' /> },
    { title: "EV Charger", icon: <BsLightningCharge className='text-slate-900' /> },
    { title: "Good Parking & Security", icon: <GiTyre className='text-black' /> },
    { title: "Clean Room Service", icon: <MdCleaningServices className='text-[#895129]' /> },
  ];

  const testimonials = [
    "I was visiting Nainital with my family. We had a pet with us, and the hotel was considerate to accommodate all of us. I would highly recommend it!",
    "The rooms were super clean, breakfast was delightful, and the view was breathtaking!",
    "One of the best stays I've ever had. Amazing hospitality and peaceful surroundings.",
    "Hotels in Dehradun With Good-View"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: true },
      },
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
      {
        breakpoint: 480,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 gap-6"
      >
        <motion.div className="w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-6 order-2 md:order-1">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
            INTRODUCTION OF <span>SAMAR-<span className="text-yellow-400 font-bold">NIWAS</span> DEHRADUN</span>
          </p>
          <p className="text-sm sm:text-base py-6">
  Nestled amidst tall pine and oak trees, this hill station hotel offers a serene escape into nature. Perfect for a peaceful vacation, the hotel provides stunning mountain views, fresh air, and a relaxing environment ideal for couples, families, and solo travelers looking to unwind in the hills.
</p>

        </motion.div>

        <motion.div
          className="w-full md:w-[40%] order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Room} alt="rooms" className="w-full h-full object-cover rounded-xl" />
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-14 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-red-50 via-white to-red-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-center text-red-600 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 items-start cursor-pointer">
            {/* Mission */}
            <motion.div
              className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-4 rounded-full text-red-500 text-2xl">🎯</div>
                <h3 className="text-xl font-bold text-red-600">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold">
                To provide exceptional hospitality and unforgettable experiences in the lap of nature...
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-100 p-4 rounded-full text-yellow-500 text-2xl">🌄</div>
                <h3 className="text-xl font-bold text-yellow-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-semibold">
                To become the most loved hill resort in Uttarakhand by promoting local culture...
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-gray-100 py-10 flex justify-center items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full font-bold">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-center">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Virtual Tour */}
      <motion.section
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/hotel-tour-fallback.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="bg-white p-4 rounded-full mb-4">
            <span className="text-4xl text-red-900">▶</span>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-yellow-400">VIRTUAL TOUR</h2>
          <h1 className="text-2xl md:text-3xl font-bold">OF HOTEL SAMAR NIWAS</h1>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto md:w-4/5 py-6 px-4 md:px-8 flex flex-wrap justify-around text-center -mt-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 sm:w-1/4 py-4">
            <span className="text-3xl font-bold text-red-600">{stat.value}</span>
            <p className="text-gray-600 text-xl font-bold uppercase">{stat.label}</p>
          </div>
        ))}
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-10 bg-gray-100 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-500">What Our Guests Say</h2>
          <Slider {...settings}>
            {testimonials.map((quote, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-3xl text-red-500">❝</span>
                <p className="text-base mt-2">{quote}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-gray-900 text-white text-center py-10 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-green-400">Plan Your Stay with Us</h2>
        <p className="mb-6 font-semibold">Book now and experience the ultimate hill station hospitality</p>
        <a href='/contact' className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:bg-red-400 hover:text-white transition">
          Book Now
        </a>
      </motion.section>

      <Footer />
    </>
  );
};

export default About;
