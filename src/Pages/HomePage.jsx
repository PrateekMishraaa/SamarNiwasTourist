import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import Nature from "../assets/Sliderr.jpeg";
import Room from "../assets/room.webp";
import { FaArrowRight, FaConciergeBell, FaParking, FaServer, FaTree, FaUserMd, FaUserShield, FaUtensils, FaVideo, FaWifi } from 'react-icons/fa';
import RoomOne from "../assets/latest3.jpeg";
import RoomTwo from "../assets/latest2.jpeg";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RoomThree from "../assets/latest1.jpeg";
import RoomFour from "../assets/room4.webp";
import Footer from '../Components/Footer';
import Slider from "../assets/slider2.jpeg";
import Slider3 from "../assets/slider3.jpeg";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Roomone from "../assets/samarroom.jpeg";
import Roomtwo from "../assets/samarroom2.jpeg";
import Roomthree from "../assets/samarroom3.jpeg";
import { motion } from "framer-motion";

const HomePage = () => {
  const [dataa, setDataa] = useState([]);
  const [error, setError] = useState(false);

  const testimonials = [
    {
      name: "Amit Sharma",
      location: "Delhi, India",
      rating: 5,
      review: "My stay at Samar Niwas Home Stay was amazing! The staff was friendly, the rooms were clean, and the service was excellent. Highly recommended!",
    },
    {
      name: "Priya Verma",
      location: "Mumbai, India",
      rating: 4.5,
      review: "Beautiful place with a peaceful atmosphere. The food was great, and the location was perfect for a relaxing vacation.",
    },
    {
      name: "Rahul Khanna",
      location: "Bangalore, India",
      rating: 5,
      review: "A wonderful experience! The hospitality was top-notch, and I really appreciated the quick response from the support team.",
    },
    {
      name: "Neha Singh",
      location: "Pune, India",
      rating: 4.8,
      review: "Loved the place! The staff was super helpful, and the rooms were well maintained. Will definitely visit again.",
    },
    {
      name: "Arjun Kapoor",
      location: "Jaipur, India",
      rating: 5,
      review: "One of the best experiences I've had. The location is great, the rooms are spacious, and the customer service is excellent.",
    },
  ];
  
  const blogs = [
    {
      id: 1,
      title: "Top 5 Places to Visit in Dehradun",
      description:
        "Explore the beauty of Dehradun with our list of the top five must-visit places near Samar Niwas.",
      image: Roomone,
      date: "March 15, 2025",
      author: "Samar Niwas Team",
    },
    {
      id: 2,
      title: "Why Samar Niwas is the Best Homestay in Dehradun",
      description:
        "Discover what makes Samar Niwas a top choice for travelers looking for comfort and hospitality.",
      image: Roomtwo,
      date: "April 10, 2025",
      author: "Guest Reviews",
    },
    {
      id: 3,
      title: "A Weekend Escape: Things to Do Near Samar Niwas",
      description:
        "Plan your perfect weekend with trekking, local food, and sightseeing near our homestay.",
      image: Roomthree,
      date: "May 5, 2025",
      author: "Travel Blogger",
    },
  ];
  
  const offers = [
    {
      id: 1,
      title: "Deluxe Room - 20% Off",
      description: "Enjoy a luxurious stay with complimentary breakfast and WiFi.",
      image: RoomOne,
      price: "₹3,999/night",
      discount: "₹3,199/night",
    },
    {
      id: 2,
      title: "Couple Suite - 25% Off",
      description: "Experience a romantic stay with special arrangements.",
      image: RoomTwo,
      price: "₹5,499/night",
      discount: "₹4,124/night",
    },
    {
      id: 3,
      title: "Family Suite - 30% Off",
      description: "Spacious rooms with extra beds for a perfect family getaway.",
      image: RoomThree,
      price: "₹6,999/night",
      discount: "₹4,899/night",
    },
  ];

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get("http://localhost:4000/api/allRoom");
        console.log(response.data);
      } catch(error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [RoomOne, RoomTwo, RoomThree, RoomFour];
  const services = [
    { icon: <FaParking size={40} className='text-blue-500'/>, label: "Parking Space" },
    { icon: <FaUserShield size={40} className='text-green-600' />, label: "Security Guard" },
    { icon: <FaUserMd size={40} className='text-red-400' />, label: "Doctor on Call" },
    { icon: <FaServer size={40} className='text-orange-400' />, label: "Backup Generator" },
    { icon: <FaConciergeBell size={40} className='text-[#9b4f2c]' />, label: "Reception" },
    { icon: <FaTree size={40} className='text-[#53ad1f]' />, label: "Gardens" },
    { icon: <FaUtensils size={40} className='text-[#f7cd36]' />, label: "Restaurant" },
    { icon: <FaWifi size={40} className='text-blue-400' />, label: "Free Wifi" },
    { icon: <FaVideo size={40} className='text-red-500'/>, label: "CCTV Security" }
  ];

  const handleNavigate = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://samarniwasbackend.onrender.com/");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggeredContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggeredItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const pulse = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.5, repeat: Infinity }
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />
        
        {/* Hero Carousel Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className='relative h-screen w-full overflow-hidden'
        >
          <Carousel 
            className='h-full w-full' 
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop 
            autoPlay 
            interval={5000} 
            transitionTime={800}
            showArrows={true}
            renderArrowPrev={(clickHandler, hasPrev) => (
              <motion.button
                onClick={clickHandler}
                className="absolute left-2 sm:left-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-1 sm:p-2 rounded-full"
                aria-label="Previous slide"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </motion.button>
            )}
            renderArrowNext={(clickHandler, hasNext) => (
              <motion.button
                onClick={clickHandler}
                className="absolute right-2 sm:right-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-1 sm:p-2 rounded-full"
                aria-label="Next slide"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </motion.button>
            )}
            renderIndicator={(clickHandler, isSelected, index) => (
              <div
                onClick={clickHandler}
                key={index}
                className={`inline-block h-1 sm:h-2 w-1 sm:w-2 mx-1 rounded-full cursor-pointer ${isSelected ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Slide ${index + 1}`}
              />
            )}
          >
            {/* Slide 1 */}
            <div className='h-[100vh]'>
              <div className='relative h-[80vh] w-full'>
                <img src={Nature} className='h-full w-full object-cover' alt="Beautiful vacation destination" />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
                  <div className="max-w-4xl text-center px-2 sm:px-4">
                    <motion.div 
                      className='h-auto sm:h-32 md:h-40 w-full sm:w-[90%] md:w-full border-2 mb-2 py-2 sm:py-4 rounded-2xl sm:rounded-3xl bg-red-100 bg-opacity-30 mx-auto'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <motion.p 
                        className='text-sm sm:text-base md:text-2xl lg:text-3xl font-light mb-2 sm:mb-6 max-w-2xl mx-auto font-bold font-serif text-red-500'
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        Limited time offer: Book your dream vacation today and save up to 30%
                      </motion.p>
                    </motion.div>
                    <motion.button 
                      onClick={handleNavigate} 
                      className="bg-white cursor-pointer text-blue-800 hover:bg-blue-700 hover:text-white transition-all font-medium py-2 sm:py-3 px-4 sm:px-8 rounded-full flex items-center mx-auto text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      Book Now <FaArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className='relative h-[80vh] w-full bg-red-200'>
              <img src={Slider} className='h-full w-full object-cover' alt="Luxury accommodation" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
                <motion.div 
                  className="max-w-4xl text-center px-3 sm:px-6 py-4 sm:py-10 bg-gradient-to-b from-white to-gray-100 rounded-2xl sm:rounded-3xl shadow-lg bg-opacity-60 w-[90%] sm:w-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div 
                    className="mb-2 sm:mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h2 className="text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Luxury Meets Nature</h2>
                  </motion.div>
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-2 sm:mb-6 max-w-2xl mx-auto text-red-400 font-semibold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Experience breathtaking views with world-class amenities
                  </motion.p>
                </motion.div>
              </div>
            </div>
            
            {/* Slide 3 */}
            <div className='relative h-[80vh] w-full'>
              <img src={Slider3} className='h-full w-full object-cover' alt="Special offer" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
                <motion.div 
                  className="max-w-4xl text-center px-3 sm:px-6 py-4 sm:py-10 bg-gradient-to-b from-white to-gray-100 rounded-2xl sm:rounded-3xl shadow-xl w-[90%] sm:w-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Special Offer Badge */}
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-red-600 to-red-400 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md mb-2 sm:mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
                  >
                    SPECIAL OFFER
                  </motion.span>

                  {/* Heading */}
                  <motion.h1 
                    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 drop-shadow-md text-red-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Last Minute Deals
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-3 sm:mb-6 max-w-2xl mx-auto text-red-400 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Book within the next 24 hours and receive complimentary upgrades
                  </motion.p>

                  {/* Subscription Box with Glassmorphism */}
                  <motion.div 
                    className="bg-white/30 backdrop-blur-lg p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg max-w-lg mx-auto border border-white/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                      Enter Your Email For reach us
                    </p>

                    {/* Email Input and Subscribe Button */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <motion.input 
                        type="email" 
                        placeholder="Your email address" 
                        className="flex-grow px-3 sm:px-4 py-2 sm:py-3 rounded-full text-gray-900 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.button 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white text-sm sm:text-base"
                        whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Submit
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Carousel>
        </motion.div>

        {/* Introduction Section */}
        <div className='min-h-[90vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8'>
          <motion.div 
            className='h-auto md:h-[65%] w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-3 sm:p-4 md:p-6 order-2 md:order-1'
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p 
              className='text-xl sm:text-2xl md:text-3xl font-semibold font-serif'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              INTRODUCTION OF <span>SAMAR-<span className='text-yellow-400 font-bold'>NIWAS</span> DEHRADUN</span>
            </motion.p>
            <motion.p 
              className='text-xs sm:text-sm font-semibold py-4 sm:py-6 md:py-8'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              It is surrounded by tall pine & oak trees, the hotel gives you a true feel of a vacation in hill station. The hotel caters exclusively to the taste of a traveler seeking the serine beauty in the Himalayan foothill. It's a preferred accommodation of every traveler visiting Nainital for its natural beauty. The ambience and customer service has been specially designed to suit the tastes and requirements of budget mind leisure travelers with great hospitality.
            </motion.p>
          </motion.div>
          <motion.div 
            className='h-auto md:h-[65%] w-full md:w-[40%] rounded-xl order-1 md:order-2'
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={Room} alt="rooms" className='h-full w-full object-cover rounded-xl' />
          </motion.div>
        </div>

        {/* Rooms Section */}
        <motion.div 
  className="min-h-[70vh] w-full flex flex-col lg:flex-row justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-gray-100 to-white"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
  <div className="w-full lg:w-[85%] p-4">
    <motion.p 
      className="font-bold font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-2"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Explore Our <span className="text-red-500 underline underline-offset-4">Rooms</span>
    </motion.p>
    <motion.p 
      className="text-sm sm:text-base font-medium text-yellow-800 text-center mb-8"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      Choose a room that best suits your comfort and budget
    </motion.p>

    {/* Room Cards */}
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggeredContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Helper function idea for reusable cards */}
      {[{
        title: "Deluxe Room",
        description: "Mountain view with premium amenities",
        price: "₹3,999/night",
        image: RoomOne,
        tag: "Popular",
      }, {
        title: "Standard Room",
        description: "Cozy comfort for budget travelers",
        price: "₹2,499/night",
        image: RoomTwo,
        tag: "Best Value",
      }, {
        title: "Family Suite",
        description: "Spacious rooms for the whole family",
        price: "₹5,999/night",
        image: RoomThree,
        tag: "New",
      }].map(({ title, description, price, image, tag }, index) => (
        <motion.div 
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105 duration-300 relative"
          variants={staggeredItem}
        >
          <div className="h-48 sm:h-40 md:h-48 overflow-hidden rounded-t-2xl">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">{title}</h3>
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                {tag}
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
            <div className="flex justify-between items-center mt-5">
              <span className="font-bold text-red-500 text-base">{price}</span>
              <motion.button 
                className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-red-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>


     
     {/* Services Section */}
<div className="w-full flex flex-col items-center px-4">
  <motion.div 
    className="h-[20vh] w-full border-2 flex items-center justify-center rounded-xl"
    variants={scaleUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.p 
      className="font-semibold font-serif text-4xl py-4"
      animate={{ 
        textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 5px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Our <span className="text-red-600">Services</span>
    </motion.p>
  </motion.div>
</div>
          <h2 className="text-xl font-bold mt-8 ml-32 font-semibold font-serif ">HOTEL FACILITIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl mx-auto px-4">
  {services.map((service, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:border-red-400 transition-all duration-300 group"
    >
      <div className="text-4xl text-red-500 mb-3 transition-transform duration-300 group-hover:scale-110">
        {service.icon}
      </div>
      <p className="mt-2 text-center text-base font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
        {service.label}
      </p>
    </div>
  ))}
</div>

        </div>

        {/* Gallery Section */}
        <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-8 font-serif text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-black">Our</span> Gallery
        </motion.h2>

        {/* Responsive Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg sm:h-64 md:h-72 lg:h-80"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal with Framer Motion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-full max-h-full overflow-auto rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-2 right-2 bg-white text-black p-3 rounded-full text-lg hover:bg-gray-200 z-10"
                whileHover={{ scale: 1.1, backgroundColor: "#e5e5e5" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✖
              </motion.button>
              <motion.img
                src={selectedImage}
                alt="Expanded View"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

        <section className="py-12 px-4 md:px-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold font-serif text-gray-900">
          Latest <span className="text-red-600">Blogs</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Discover travel tips, local attractions, and guest stories from Samar Niwas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
              <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                <p>{blog.date}</p>
                <p className="font-semibold">{blog.author}</p>
              </div>
              <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="py-12 px-4 sm:px-6 md:px-12 bg-gray-100">
  <div className="text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
      Featured <span className="text-red-600">Offers</span>
    </h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">
      Book now and enjoy special discounts at Samar Niwas Dehradun.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {offers.map((offer) => (
      <div
        key={offer.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
      >
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover"
        />
        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {offer.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">{offer.description}</p>

          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-400 line-through text-sm sm:text-base">{offer.price}</p>
            <p className="text-red-600 font-semibold text-sm sm:text-base">{offer.discount}</p>
          </div>

          <a
            href="/contact"
            className="mt-4 block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

        <section className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Customers Say</h2>
      <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg relative">
        <p className="text-lg text-gray-700 italic">"{testimonials[currentIndex].review}"</p>
        <div className="mt-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`inline text-yellow-500 ${index < testimonials[currentIndex].rating ? "" : "opacity-30"}`}
            />
          ))}
        </div>
        <h4 className="text-lg font-semibold mt-2">{testimonials[currentIndex].name}</h4>
        <p className="text-gray-600 text-sm">{testimonials[currentIndex].location}</p>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
        <Footer/>
      {/* </div> */}
      {/* // </div> */}
    </>
  );
};

export default HomePage;