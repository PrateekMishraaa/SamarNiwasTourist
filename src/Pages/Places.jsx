import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Snow from "../assets/snow.jpeg";
import Snow2 from "../assets/snow2.jpeg";
import Snow3 from "../assets/snow3.jpeg";
import Snow4 from "../assets/snow4.jpeg";
import Snow5 from "../assets/snow5.jpeg";

const places = [
  {
    title: 'SNOW VIEW POINT',
    description:
      'Snow View Point offers a breathtaking panoramic view of the snow-clad Himalayan peaks. It is one of the most popular tourist destinations in Nainital, accessible by a cable car ride.',
    image: Snow,
  },
  {
    title: 'TIFTON TOP',
    description:
      'Tiffin Top, also known as Dorothy’s Seat, is a scenic hilltop known for its stunning views of the Kumaon hills and Nainital town. It is an excellent picnic spot.',
    image: Snow2,
  },
  {
    title: 'BHIMTAL LAKE',
    description:
      'Bhimtal Lake is a serene and less crowded alternative to Naini Lake, known for its picturesque island in the middle. Visitors can enjoy boating and birdwatching.',
    image: Snow3,
  },
  {
    title: 'ECO CAVE GARDEN',
    description:
      'Eco Cave Garden is a network of interconnected caves and hanging gardens that offer a glimpse of wildlife habitats. It’s a fun and educational place for children and nature lovers.',
    image: Snow4,
  },
  {
    title: 'MALL ROAD',
    description:
      'Mall Road is the heart of Nainital, bustling with shops, restaurants, and scenic lake views. It’s a great place to shop for souvenirs and enjoy local delicacies.',
    image: Snow5,
  },
];

const Places = () => {
  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full flex flex-col items-center py-10 bg-gray-100'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>PLACES TO VISIT</h2>
        <div className='w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8'>
          {places.map((place, index) => (
            <div
              key={index}
              className='bg-white rounded-4xl shadow-lg overflow-hidden bg-shadow-dark'
            >
              <img
                src={place.image}
                alt={place.title}
                className='w-full h-56 object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold font-serif cursor-pointer'>{place.title}</h3>
                <p className='text-gray-600 mt-2'>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Places;
