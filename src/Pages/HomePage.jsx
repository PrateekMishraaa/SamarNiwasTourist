import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nature from "../assets/Newnature.jpeg";
import Room from "../assets/room.webp";
import { FaArrowRight, FaConciergeBell, FaParking, FaServer, FaTree, FaUserMd, FaUserShield, FaUtensils, FaVideo, FaWifi } from 'react-icons/fa';
import RoomOne from "../assets/room.webp";
import RoomTwo from "../assets/room2.webp";
import RoomThree from "../assets/room3.webp";
import RoomFour from "../assets/room4.webp";
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const HomePage = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState('');

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

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add email submission logic here
    console.log("Email submitted:", email);
    setEmail('');
    // Optional: Show success message to user
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/all-prices");
        // Access the data property from the response
        if (response.data && response.data.data) {
          setRoomData(response.data.data);
        } else {
          setError("Invalid data structure returned from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load room data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Carousel Section */}
      <div className='relative h-screen w-full overflow-hidden'>
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
            <button
              onClick={clickHandler}
              className="absolute left-2 sm:left-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-1 sm:p-2 rounded-full"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <button
              onClick={clickHandler}
              className="absolute right-2 sm:right-4 z-10 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-all p-1 sm:p-2 rounded-full"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
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
          <div className='relative h-screen w-full'>
            <img src={Nature} className='h-full w-full object-cover' alt="Beautiful vacation destination" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
              <div className="max-w-4xl text-center px-2 sm:px-4">
                <div className='h-auto sm:h-32 md:h-40 w-full sm:w-[90%] md:w-full border-2 mb-2 py-2 sm:py-4 rounded-2xl sm:rounded-3xl bg-red-100 bg-opacity-30 mx-auto'>
                  <p className='text-sm sm:text-base md:text-2xl lg:text-3xl font-light mb-2 sm:mb-6 max-w-2xl mx-auto font-bold font-serif text-red-500'>
                    Limited time offer: Book your dream vacation today and save up to 30%
                  </p>
                </div>
                <button onClick={handleNavigate} className="bg-white cursor-pointer text-blue-800 hover:bg-blue-700 hover:text-white transition-all font-medium py-2 sm:py-3 px-4 sm:px-8 rounded-full flex items-center mx-auto text-sm sm:text-base">
                  Book Now <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className='relative h-screen w-full'>
            <img src={Room} className='h-full w-full object-cover' alt="Luxury accommodation" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
              <div className="max-w-4xl text-center px-3 sm:px-6 py-4 sm:py-10 bg-gradient-to-b from-white to-gray-100 rounded-2xl sm:rounded-3xl shadow-lg bg-opacity-60 w-[90%] sm:w-auto">
                <div className="mb-2 sm:mb-4">
                  <h2 className="text-red-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif">Luxury Meets Nature</h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-2 sm:mb-6 max-w-2xl mx-auto text-red-400 font-semibold">
                  Experience breathtaking views with world-class amenities
                </p>
              </div>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className='relative h-screen w-full'>
            <img src={Nature} className='h-full w-full object-cover' alt="Special offer" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/70 via-black/50 to-black/30 text-white p-2 sm:p-4">
              <div className="max-w-4xl text-center px-3 sm:px-6 py-4 sm:py-10 bg-gradient-to-b from-white to-gray-100 rounded-2xl sm:rounded-3xl shadow-xl w-[90%] sm:w-auto">
                {/* Special Offer Badge */}
                <span className="inline-block bg-gradient-to-r from-red-600 to-red-400 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md mb-2 sm:mb-4">
                  SPECIAL OFFER
                </span>

                {/* Heading */}
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 drop-shadow-md text-red-500">
                  Last Minute Deals
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-3 sm:mb-6 max-w-2xl mx-auto text-red-400 font-semibold">
                  Book within the next 24 hours and receive complimentary upgrades
                </p>

                {/* Subscription Box with Glassmorphism */}
                <div className="bg-white/30 backdrop-blur-lg p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg max-w-lg mx-auto border border-white/50">
                  <p className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                    Enter Your Email For reach us
                  </p>

                  {/* Email Input and Subscribe Button */}
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-3 sm:px-4 py-2 sm:py-3 rounded-full text-gray-900 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white text-sm sm:text-base"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Introduction Section */}
      <div className='min-h-[90vh] w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8'>
        <div className='h-auto md:h-auto w-full md:w-[54%] bg-gray-900 text-white rounded-xl p-3 sm:p-4 md:p-6 order-2 md:order-1'>
          <p className='text-xl sm:text-2xl md:text-3xl font-semibold font-serif'>INTRODUCTION OF <span>SAMAR-<span className='text-yellow-400 font-bold'>NIWAS</span> DEHRADUN</span></p>
          <p className='text-xs sm:text-sm font-semibold py-4 sm:py-6 md:py-8'>It is surrounded by tall pine & oak trees, the hotel gives you a true feel of a vacation in hill station. The hotel caters exclusively to the taste of a traveler seeking the serine beauty in the Himalayan foothill. It's a preferred accommodation of every traveler visiting Nainital for its natural beauty. The ambience and customer service has been specially designed to suit the tastes and requirements of budget mind leisure travelers with great hospitality.</p>
        </div>
        <div className='h-auto md:h-auto w-full md:w-[40%] rounded-xl order-1 md:order-2'>
          <img src={Room} alt="rooms" className='h-full w-full object-cover rounded-xl' />
        </div>
      </div>

      {/* Rooms Section */}
      <div className='min-h-[60vh] w-full flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-10 py-4 bg-gray-100'>
        <div className='h-full w-full lg:w-[80%] p-4'>
          <p className='font-semibold font-serif text-xl sm:text-2xl md:text-3xl'>Explore Our <span className='text-red-500'>Rooms</span></p>
          <p className='text-xs sm:text-sm font-semibold font-serif text-yellow-700 mb-6'>Choose a room according to your budget</p>
          
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-40">
              <p className="text-red-500">{error}</p>
            </div>
          ) : roomData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomData.map((room, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
                  <img src={room.image} alt="" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{room.Title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{room.Description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-red-500 font-bold">₹{room.Price}</p>
                    <button 
                      onClick={() => navigate(`/room/${room._id}`)} 
                      className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-40">
              <p className="text-gray-500">No rooms available at the moment.</p>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => navigate("/rooms")} 
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-900 transition-colors"
            >
              View All Rooms
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full flex flex-col items-center px-4 py-10">
        <div className='py-8 w-full flex flex-col items-center justify-center'>
          <p className='font-semibold font-serif text-4xl mb-2'>Our <span className='text-red-600'>Services</span></p>
          <h2 className="text-xl font-bold mt-4">HOTEL FACILITIES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-5xl">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border hover:shadow-lg transition-all">
              {service.icon}
              <p className="mt-2 font-semibold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 font-serif">
            <span className="text-black">Our</span> <span className="text-red-500">Gallery</span>
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-screen p-2">
              <button
                className="absolute top-2 right-2 bg-white text-black p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ✖
              </button>
              <img 
                src={selectedImage} 
                alt="Expanded View" 
                className="max-w-full max-h-[90vh] rounded-lg" 
              />
            </div>
          </div>
        )}
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;