import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RoomOnee from "../assets/room6.webp";
import RoomOne from "../assets/room.webp";
import RoomTwo from "../assets/room2.webp";
import RoomThree from "../assets/room3.webp";
import RoomFour from "../assets/room4.webp";
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
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm md:max-w-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
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

// Services List
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

// Rooms Component
const Rooms = () => {
  const rooms = [
    {
      image: RoomOnee,
      title: "PREMIUM ROOM",
      description:
        "Designed specially to pamper its guests, the premium rooms showcase a perfect blend of luxury in its accommodation with utmost security.",
      price: "4000",
    },
    {
      image: RoomOne,
      title: "SUPER DELUXE ROOM",
      description:
        "A haven of indulgence, the spacious super deluxe rooms are facilitated by state-of-the-art amenities accompanied by warm and efficient services.",
      price: "5000",
    },
    {
      image: RoomOne,
      title: "FAMILY ROOM",
      description:
        "A haven of indulgence, the spacious family rooms are facilitated by a range of state-of-the-art amenities accompanied by warm and efficient services.",
      price: "7000",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="h-auto w-full  bg-gray-100 py-10">
        <div className="px-20 py-10">
          <p className="text-3xl font-semibold font-serif">
            Explore Our <span className="text-red-700 hover:text-yellow-600 transition">Rooms</span>
          </p>
          <p className="text-sm font-semibold font-serif text-gray-500">
            Choose A Room According To Your Budget
          </p>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="w-full flex flex-col items-center px-4">
        <div className="h-[20vh] w-full border-2 flex items-center justify-center rounded-xl">
          <p className="font-semibold font-serif text-4xl py-4">
            Our <span className="text-red-600">Services</span>
          </p>
        </div>
        <h2 className="text-xl font-bold mt-8">HOTEL FACILITIES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-5xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border hover:shadow-lg transition-all"
            >
              {service.icon}
              <p className="mt-2 font-semibold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
      <Footer />
      </div>
    </>
  );
};

export default Rooms;
