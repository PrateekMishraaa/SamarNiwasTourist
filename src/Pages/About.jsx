import React from 'react';
import Slider from 'react-slick';
import Navbar from '../Components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Room from "../assets/room.webp";
import Resort1 from "../assets/resort.webp";
import Resort2 from "../assets/resort2.webp";
import Resort3 from "../assets/resort3.webp";
import Footer from '../Components/Footer';

const About = () => {
    const services = [
        { title: "Customer Satisfaction", icon: "⭐", color: "text-red-600"  },
        { title: "Free Wifi", icon: "📶", color: "text-red-600" },
        { title: "Power Backup", icon: "⚡", color: "text-red-600" },
        { title: "Delicious Breakfast", icon: "☕", color: "text-red-600" },
        { title: "EV Charger", icon: "🔌", color: "text-red-600" },
        { title: "Good Parking & Security", icon: "🚗", color: "text-red-600" },
        { title: "Clean Room Service", icon: "🛏️", color: "text-red-600" },
        { title: "Games Room", icon: "🎮", color: "text-red-600" },
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
  };

  return (
    <>
      <Navbar />
      <section>
        {/* Introduction Section */}
        <div className='min-h-[70vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8'>
          <div className='h-[80vh] md:h-[80%] w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-3 sm:p-4 md:p-6 order-2 md:order-1'>
            <p className='text-xl sm:text-2xl md:text-3xl font-semibold font-serif'>
              INTRODUCTION OF <span>SAMAR-<span className='text-yellow-400 font-bold'>NIWAS</span> DEHRADUN</span>
            </p>
            <p className='text-xs sm:text-sm font-semibold py-4 sm:py-6 md:py-8'>
              It is surrounded by tall pine & oak trees, the hotel gives you a true feel of a vacation in a hill station.
              The hotel caters exclusively to the taste of a traveler seeking the serene beauty in the Himalayan foothills.
              It's a preferred accommodation for every traveler visiting Nainital for its natural beauty.
              The ambiance and customer service have been specially designed to suit the tastes and requirements of budget-minded leisure travelers with great hospitality.
            </p>
          </div>
          <div className='h-auto md:h-[65%] w-full md:w-[40%] rounded-xl order-1 md:order-2'>
            <img src={Room} alt="rooms" className='h-full w-full object-cover rounded-xl' />
          </div>
        </div>

        {/* Carousel Section */}
        <div className='h-[100vh] w-full bg-gray-100 flex flex-col items-center justify-center'>
          <div className='text-center mb-10'>
            <p className='text-3xl font-semibold font-serif'>Why Choose Our <span className='text-red-500'>Resort</span></p>
            <p className='text-xl font-semibold'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
          </div>

          {/* Resort Image Carousel */}
          <div className='w-[80%] md:w-[50%]'>
            <Slider {...settings}>
              <div>
                <img src={Resort1} alt="Resort 1" className="w-full h-[400px] object-cover rounded-xl" />
              </div>
              <div>
                <img src={Resort2} alt="Resort 2" className="w-full h-[400px] object-cover rounded-xl" />
              </div>
              <div>
                <img src={Resort3} alt="Resort 3" className="w-full h-[400px] object-cover rounded-xl" />
              </div>
            </Slider>
          </div>
       
        </div>
        <div className="h-[100vh] w-full bg-gray-100 flex justify-center items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full font-bold">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
          >
            <div className={`text-6xl ${service.color}`}>{service.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-center">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;
