import React, { useState } from "react";
import Navbar from "../Components/Navbar";
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
import RoomThirteen from "../assets/room13.jpeg";

import Footer from "../Components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [RoomOne, RoomTwo, RoomThree, RoomFour, RoomFive, RoomSix, RoomSeven, RoomEight,RoomNine,RoomTen,RoomEleven,RoomTwelve,RoomThirteen];

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex flex-col items-center text-center px-4 py-16">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl font-serif">
            Our{" "}
            <span className="text-red-600 hover:text-yellow-600 transition duration-300">
              Gallery
            </span>
          </p>
          <p className="text-lg md:text-xl font-semibold font-serif mt-2">
            Explore <span className="text-yellow-700">Samar Niwas</span>
          </p>
        </div>

        {/* Image Grid */}
        <section className="w-full bg-gray-100 py-10">
          <div className="container mx-auto px-4">
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
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 bg-white text-black p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              {/* Image */}
              <img
                src={selectedImage}
                alt="Expanded View"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
      <div className="">
        <Footer/>
      </div>
    </>
  );
};

export default Gallery;
