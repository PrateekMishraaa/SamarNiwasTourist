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
  // Updated meta title and description
  React.useEffect(() => {
    document.title = "About Hotel Samar Niwas | Luxury Hill Station Accommodation in Dehradun";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover Hotel Samar Niwas in Dehradun - a luxury hill station resort offering stunning mountain views, premium amenities, and exceptional hospitality for your perfect Uttarakhand vacation.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = "description";
      newMetaDescription.content = "Discover Hotel Samar Niwas in Dehradun - a luxury hill station resort offering stunning mountain views, premium amenities, and exceptional hospitality for your perfect Uttarakhand vacation.";
      document.head.appendChild(newMetaDescription);
    }
  }, []);

  const stats = [
    { value: "712", label: "Happy Guests" },
    { value: "254", label: "Return Guests" },
    { value: "689", label: "Five Stars Rating" },
    { value: "782", label: "Served Breakfast" },
  ];

  const services = [
    { title: "Customer Satisfaction", icon: <RiCustomerService2Fill className='text-gray-600' />, description: "Personalized service for every guest" },
    { title: "Free High-Speed Wifi", icon: <FaWifi className='text-green-600' />, description: "Stay connected throughout your vacation" },
    { title: "24/7 Power Backup", icon: <GiThunderSkull />, description: "Uninterrupted power supply in the hills" },
    { title: "Complimentary Breakfast", icon: <BiFoodTag className='text-green-400' />, description: "Traditional Uttarakhand and continental options" },
    { title: "EV Charging Station", icon: <BsLightningCharge className='text-slate-900' />, description: "Eco-friendly travel accommodations" },
    { title: "Secure Parking", icon: <GiTyre className='text-black' />, description: "Safe and monitored parking area" },
    { title: "Daily Housekeeping", icon: <MdCleaningServices className='text-[#895129]' />, description: "Spotless rooms for a comfortable stay" },
  ];

  const testimonials = [
    "I was visiting Nainital with my family. We had a pet with us, and Hotel Samar Niwas in Dehradun was considerate to accommodate all of us. The pet-friendly policy made our Uttarakhand hill station trip perfect. I would highly recommend it!",
    "The luxury rooms at Samar Niwas were super clean, breakfast was delightful with local Uttarakhand cuisine, and the mountain view from our balcony was breathtaking! Best accommodation in Dehradun for couples.",
    "One of the best hill resort stays I've ever had in North India. Amazing hospitality, peaceful surroundings, and excellent amenities made our family vacation memorable.",
    "Hotel Samar Niwas offers the best mountain views in Dehradun. Their eco-friendly practices and proximity to local attractions make it the perfect base for exploring Uttarakhand."
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

      {/* SEO-friendly header with semantic structure */}
      <header>
        <h1 className="sr-only">About Hotel Samar Niwas - Luxury Accommodation in Dehradun, Uttarakhand</h1>
      </header>

      {/* Introduction with enhanced content */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 gap-6"
        aria-labelledby="introduction-heading"
      >
        <motion.div className="w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-6 order-2 md:order-1">
          <h2 id="introduction-heading" className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
            WELCOME TO <span>SAMAR-<span className="text-yellow-400 font-bold">NIWAS</span> DEHRADUN</span>
          </h2>
          <p className="text-sm sm:text-base py-6">
            Nestled amidst tall pine and oak trees in the serene hills of Uttarakhand, Hotel Samar Niwas offers a luxurious hill station retreat in Dehradun. Our mountain resort provides stunning Himalayan views, fresh air, and a tranquil environment perfect for couples, families, and solo travelers seeking the ultimate hill station experience. Located just minutes from popular Dehradun attractions, our property combines traditional Uttarakhand hospitality with modern amenities for an unforgettable mountain vacation.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Luxury hill station accommodation with panoramic mountain views</li>
              <li>Pet-friendly hotel policies</li>
              <li>Eco-friendly resort practices</li>
              <li>Traditional Uttarakhand cuisine and continental breakfast</li>
              <li>Proximity to major Dehradun attractions</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-[40%] order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Room} alt="Luxury mountain view room at Hotel Samar Niwas Dehradun" className="w-full h-full object-cover rounded-xl" />
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-14 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-red-50 via-white to-red-50" aria-labelledby="mission-vision-heading">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            id="mission-vision-heading"
            className="text-4xl font-extrabold text-center text-red-600 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Mission & Vision for Uttarakhand Hospitality
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
                To provide exceptional hill station hospitality and unforgettable Dehradun experiences in the lap of nature. We strive to make Hotel Samar Niwas the premier mountain resort in Uttarakhand by combining luxury amenities with authentic local experiences and sustainable tourism practices.
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
                To become the most loved hill resort in Uttarakhand by promoting local culture, sustainable tourism, and creating memorable mountain vacations for our guests. We aim to showcase the natural beauty of Dehradun while preserving its ecological balance for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services with enhanced descriptions */}
      <section className="w-full bg-gray-100 py-10 flex justify-center items-center px-4" aria-labelledby="services-heading">
        <div className="max-w-6xl w-full">
          <h2 id="services-heading" className="text-3xl font-bold text-center mb-8 text-gray-800">Premium Hill Resort Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-bold">
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
                <p className="mt-2 text-sm text-center text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <motion.section
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-gray-900"
        style={{ backgroundImage: "url('/hotel-tour-fallback.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-labelledby="virtual-tour-heading"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="bg-white p-4 rounded-full mb-4">
            <span className="text-4xl text-red-900">▶</span>
          </div>
          <h2 id="virtual-tour-heading" className="text-lg md:text-xl font-semibold text-yellow-400">VIRTUAL TOUR</h2>
          <h3 className="text-2xl md:text-3xl font-bold">EXPLORE HOTEL SAMAR NIWAS DEHRADUN</h3>
          <p className="mt-2 max-w-md px-4">Experience our luxury hill station accommodation before you book</p>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto md:w-4/5 py-6 px-4 md:px-8 flex flex-wrap justify-around text-center -mt-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-labelledby="stats-heading"
      >
        <h2 id="stats-heading" className="sr-only">Hotel Samar Niwas Statistics</h2>
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
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold mb-6 text-red-500">What Our Hill Resort Guests Say</h2>
          <Slider {...settings}>
            {testimonials.map((quote, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-3xl text-red-500">❝</span>
                <p className="text-base mt-2">{quote}</p>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Location Benefits */}
      <motion.section 
        className="py-12 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="location-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2 id="location-heading" className="text-3xl font-bold mb-8 text-center text-gray-800">Perfect Location in Dehradun</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-red-600">Nearby Attractions</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> 15 minutes from Robber's Cave</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> 20 minutes from Sahastradhara</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Easy access to Mussoorie hill station</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Close to Rajaji National Park</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Near Forest Research Institute</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-red-600">Transportation Access</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> 45 minutes from Dehradun Airport</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> 20 minutes from Dehradun Railway Station</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Taxi services available at hotel</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Free parking for hotel guests</li>
                <li className="flex items-center"><span className="mr-2 text-green-500">✓</span> Tour packages to nearby hill stations</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="bg-gray-900 text-white text-center py-10 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-3xl font-bold mb-4 text-green-400">Plan Your Uttarakhand Hill Station Getaway</h2>
        <p className="mb-6 font-semibold">Book now and experience the ultimate mountain resort hospitality in Dehradun</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='/contact' className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-400 hover:text-white transition">
            Book Now
          </a>
          <a href='/rooms' className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
            View Rooms
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-300">Best rates guaranteed when you book directly with Hotel Samar Niwas Dehradun</p>
      </motion.section>

      {/* FAQs - Added for SEO */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-red-600">Does Hotel Samar Niwas offer mountain views?</h3>
              <p>Yes, our luxury hill resort in Dehradun offers stunning mountain views from most of our rooms and common areas. We're nestled in the foothills of the Himalayas, providing a spectacular panorama.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-red-600">Is Hotel Samar Niwas pet-friendly?</h3>
              <p>Yes, we are one of the few pet-friendly hotels in Dehradun. We welcome your furry companions with prior notice so we can prepare to make their stay comfortable too.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-red-600">What amenities are included in the room rate?</h3>
              <p>All room rates include complimentary breakfast featuring local Uttarakhand specialties and continental options, free high-speed WiFi, daily housekeeping, secure parking, and access to our garden and mountain viewing deck.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;