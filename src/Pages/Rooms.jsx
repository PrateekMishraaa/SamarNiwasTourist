import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RoomOnee from "../assets/samarroom.jpeg";
import RoomOne from "../assets/samarroom2.jpeg";
import SuperDeluxe from "../assets/samarroom3.jpeg";
import {
  FaConciergeBell,
  FaParking,
  FaServer,
  FaTree,
  FaUserMd,
  FaUserShield,
  FaUtensils,
  FaVideo,
  FaWifi,
} from "react-icons/fa";

// RoomCard Component
const RoomCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">
            Rs. {price} <span className="text-sm text-gray-500">/ Night</span>
          </span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const services = [
  { icon: <FaParking size={40} className="text-blue-500" />, label: "Parking Space" },
  { icon: <FaUserShield size={40} className="text-green-600" />, label: "Security Guard" },
  { icon: <FaUserMd size={40} className="text-red-400" />, label: "Doctor on Call" },
  { icon: <FaServer size={40} className="text-orange-400" />, label: "Backup Generator" },
  { icon: <FaConciergeBell size={40} className="text-[#9b4f2c]" />, label: "Reception" },
  { icon: <FaTree size={40} className="text-[#53ad1f]" />, label: "Gardens" },
  { icon: <FaUtensils size={40} className="text-[#f7cd36]" />, label: "Restaurant" },
  { icon: <FaWifi size={40} className="text-blue-400" />, label: "Free Wifi" },
  { icon: <FaVideo size={40} className="text-red-500" />, label: "CCTV Security" },
];

const testimonials = [
  {
    name: "Anjali Mehra",
    comment: "The rooms were clean and the service was excellent! I highly recommend staying here.",
  },
  {
    name: "Rahul Kumar",
    comment: "Perfect stay for a family vacation. The staff is very helpful and polite.",
  },
  {
    name: "Priya Sharma",
    comment: "A luxurious experience with great food and fast wifi!",
  },
];

// Rooms Component
const Rooms = () => {
  const rooms = [
    {
      image: RoomOnee,
      title: "PREMIUM ROOM",
      description: "Designed specially to pamper its guests, the premium rooms showcase a perfect blend of luxury in its accommodation with utmost security.",
      price: "4000",
    },
    {
      image: SuperDeluxe,
      title: "SUPER DELUXE ROOM",
      description: "A haven of indulgence, the spacious super deluxe rooms are facilitated by state-of-the-art amenities accompanied by warm and efficient services.",
      price: "5000",
    },
    {
      image: RoomOne,
      title: "FAMILY ROOM",
      description: "The spacious family rooms are facilitated by a range of state-of-the-art amenities accompanied by warm and efficient services.",
      price: "7000",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${RoomOnee})` }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Experience Luxury Like Never Before</h1>
          <p className="text-lg font-medium">Book a room that suits your comfort and budget</p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-6 md:px-20 text-center">
          <p className="text-3xl font-bold font-serif mb-2">
            Explore Our <span className="text-red-700 hover:text-yellow-600 transition">Rooms</span>
          </p>
          <p className="text-sm text-gray-600">Choose a room according to your budget</p>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our <span className="text-red-600">Services</span></h2>
          <p className="text-sm text-gray-600 mt-2">HOTEL FACILITIES</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-xl transition-all duration-300">
              {service.icon}
              <p className="mt-3 font-semibold text-center">{service.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">What Our Guests Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6">
              <p className="italic text-gray-600">"{testi.comment}"</p>
              <p className="text-right mt-4 font-semibold text-red-600">- {testi.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
        <p className="mb-6">Comfort, convenience, and luxury await you. Reserve your room now!</p>
        <a href="/contact" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Book Now
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Rooms;
