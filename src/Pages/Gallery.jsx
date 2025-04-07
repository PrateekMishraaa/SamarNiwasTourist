import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Logo from "../assets/logo.png"
import RoomOne from "../assets/room.webp";
import RoomTwo from "../assets/room2.webp";
import RoomThree from "../assets/room3.webp";
import RoomFour from "../assets/room4.webp";
import RoomFive from "../assets/room5.webp";
import RoomSix from "../assets/room6.webp";
import RoomSeven from "../assets/room7.webp";
import RoomEight from "../assets/room8.webp";
import RoomNine from "../assets/room9.jpeg";
import RoomTen from "../assets/room10.jpeg";
import RoomEleven from "../assets/room11.jpeg";
import RoomTwelve from "../assets/room12.jpeg";
import RoomThirteen from "../assets/room13.jpeg"; // Adjust this import if needed

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
      <section className="relative h-[50vh] bg-cover bg-center bg-[url('/assets/room6.webp')] flex items-center justify-center text-white">
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>
      <img src={Logo} alt="" className="h-full w-full" />
      </section>

      {/* About Gallery */}
      <section className="text-center px-6 py-10">
        <h2 className="text-3xl font-bold text-red-600 font-serif mb-3">Discover Samar Niwas</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Take a glimpse into the comfort and elegance of Samar Niwas. From cozy interiors to scenic outdoors, every image captures the essence of luxury and warmth.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="w-full bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  View Image
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Expanded Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
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
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      <section className="bg-white py-14 px-4">
        <h2 className="text-3xl font-bold text-center font-serif text-red-600">What Our Guests Say</h2>
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="italic">"The rooms were beautiful and well-maintained. Loved the ambience!"</p>
            <p className="mt-4 font-semibold text-right">- Ananya Sinha</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <p className="italic">"Amazing hospitality and stunning views. Highly recommended!"</p>
            <p className="mt-4 font-semibold text-right">- Ramesh Patel</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
