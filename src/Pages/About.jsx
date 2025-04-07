import React from 'react';
import Slider from 'react-slick';
import Navbar from '../Components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiCustomerService2Fill } from "react-icons/ri";
import Room from "../assets/room.webp";
import { GiThunderSkull,GiTyre  } from "react-icons/gi";
// import SamarNiwas from "../assets/newsamarniwas.jpeg"
import { FaWifi } from "react-icons/fa";
import Footer from '../Components/Footer';
import { MdCleaningServices } from "react-icons/md";
// import NewImage from "../assets/newimage.jpeg"
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
    { title: "Customer Satisfaction", icon: <RiCustomerService2Fill className='text-gray-600' />, color: "text-red-600" },
    { title: "Free Wifi", icon: <FaWifi className='text-green-600'/>, color: "text-red-600" },
    { title: "Power Backup", icon: <GiThunderSkull/>, color: "text-red-600" },
    { title: "Delicious Breakfast", icon: <BiFoodTag className='text-green-400'/>, color: "text-red-600" },
    { title: "EV Charger", icon: <BsLightningCharge className='text-slate-900'/>, color: "text-red-600" },
    { title: "Good Parking & Security", icon: <GiTyre className='text-black' />, color: "text-red-600" },
    { title: "Clean Room Service", icon: <MdCleaningServices className='text-[#895129]'/>, color: "text-red-600" },
    // { title: "Games Room", icon: "🎮", color: "text-red-600" },
  ];

  const testimonials = [
    "I was visiting Nainital with my family. We had a pet with us, and the hotel was considerate to accommodate all of us. I would highly recommend it!",
    "The rooms were super clean, breakfast was delightful, and the view was breathtaking!",
    "One of the best stays I've ever had. Amazing hospitality and peaceful surroundings.",
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
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* Introduction */}
      <section className="min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 gap-6">
        <div className="w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-6 order-2 md:order-1">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
            INTRODUCTION OF <span>SAMAR-<span className="text-yellow-400 font-bold">NIWAS</span> DEHRADUN</span>
          </p>
          <p className="text-sm sm:text-base py-6">
            It is surrounded by tall pine & oak trees, the hotel gives you a true feel of a vacation in a hill station. The hotel caters exclusively to the taste of a traveler seeking the serene beauty in the Himalayan foothills. It's a preferred accommodation for every traveler visiting Nainital for its natural beauty.
          </p>
        </div>
        <div className="w-full md:w-[40%] order-1 md:order-2">
          <img src={Room} alt="rooms" className="w-full h-full object-cover rounded-xl" />
        </div>
      </section>

      {/* Mission & Vision */}
   {/* Mission & Vision */}
<section className="py-14 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-red-50 via-white to-red-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6 tracking-tight">Our Mission & Vision</h2>
    
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Mission */}
      <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-red-100 p-4 rounded-full text-red-500 text-2xl">🎯</div>
          <h3 className="text-xl font-semibold text-red-600">Our Mission</h3>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          To provide exceptional hospitality and unforgettable experiences in the lap of nature. We believe in
          delivering quality service, maintaining a warm ambiance, and promoting sustainable tourism practices.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-yellow-100 p-4 rounded-full text-yellow-500 text-2xl">🌄</div>
          <h3 className="text-xl font-semibold text-yellow-600">Our Vision</h3>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">
          To become the most loved hill resort in Uttarakhand by promoting local culture, conserving nature,
          and offering unparalleled guest satisfaction and serene mountain experiences.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      {/* <section className="w-full bg-gray-100 py-10">
        <div className="text-center mb-10 px-4">
          <p className="text-3xl font-semibold font-serif">Why Choose Our <span className="text-red-500">Resort</span></p>
          <p className="text-lg font-semibold">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
        </div>
        <div className="w-full px-4 md:px-0">
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              <div>
                <img src={NewImage} alt="Resort 1" className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl" />
              </div>
              <div>
                <img src={SamarNiwas} alt="Resort 2" className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl" />
              </div>
              <div>
                <img src={NewImage} alt="Resort 3" className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl" />
              </div>
            </Slider>
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section className="w-full bg-gray-100 py-10 flex justify-center items-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full font-bold">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
              <div className={`text-6xl ${service.color}`}>{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center bg-gray-900" style={{ backgroundImage: "url('/path-to-hotel-image.jpg')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div className="bg-white p-4 rounded-full mb-4">
            <span className="text-4xl text-red-900">▶</span>
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-yellow-400">VIRTUAL TOUR</h2>
          <h1 className="text-2xl md:text-3xl font-bold">OF HOTEL SAMAR NIWAS</h1>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto md:w-4/5 py-6 px-4 md:px-8 flex flex-wrap justify-around text-center -mt-16 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 sm:w-1/4 py-4">
            <span className="text-3xl font-bold text-red-600">{stat.value}</span>
            <p className="text-gray-600 text-xl font-bold uppercase">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-gray-100 px-4">
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
      </section>


      {/* CTA */}
      <section className="bg-gray-600 text-white text-center py-10 px-4">
        <h2 className="text-3xl font-bold mb-4">Plan Your Stay with Us</h2>
        <p className="mb-6">Book now and experience the ultimate hill station hospitality</p>
        <a href='/contact' className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">Book Now</a>
      </section>

      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default About;
