import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Logo from "../assets/logo.png";
import RoomOne from "../assets/samarroom.jpeg";
import RoomTwo from "../assets/samarroom2.jpeg";
import RoomThree from "../assets/samarroom3.jpeg";
import RoomFour from "../assets/latest1.jpeg";
import RoomFive from "../assets/latest2.jpeg";
import RoomSix from "../assets/latest3.jpeg";
import RoomSeven from "../assets/room7.webp";
import RoomEight from "../assets/room8.webp";
import RoomNine from "../assets/room9.jpeg";
import RoomTen from "../assets/room10.jpeg";
import RoomEleven from "../assets/room11.jpeg";
import RoomTwelve from "../assets/room12.jpeg";
import RoomThirteen from "../assets/room13.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    RoomOne, RoomTwo, RoomThree, RoomFour, RoomFive,
    RoomSix, RoomSeven, RoomEight, RoomNine, RoomTen,
    RoomEleven, RoomTwelve, RoomThirteen,
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] bg-cover bg-center bg-[url('/assets/room6.webp')] flex items-center justify-center text-white"
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>
        <img src={Logo} alt="" className="h-full w-full object-cover" />
      </motion.section>

      {/* About Gallery */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center px-6 py-10"
      >
        <h2 className="text-3xl font-bold text-red-600 font-serif mb-3">Discover Samar Niwas</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Take a glimpse into the comfort and elegance of Samar Niwas. From cozy interiors to scenic outdoors, every image captures the essence of luxury and warmth.
        </p>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-gray-100 py-10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  View Image
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal for Expanded Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            >
              <button
                className="absolute top-3 right-3 bg-white text-black p-2 rounded-full z-10"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <img
                src={selectedImage}
                alt="Expanded View"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white py-14 px-4"
      >
        <h2 className="text-3xl font-bold text-center font-serif text-red-600">What Our Guests Say</h2>
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
          {[
            { name: "Ananya Sinha", text: "The rooms were beautiful and well-maintained. Loved the ambience!" },
            { name: "Ramesh Patel", text: "Amazing hospitality and stunning views. Highly recommended!" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <p className="italic text-white">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-right text-white">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Gallery;
