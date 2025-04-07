import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Snow from "../assets/snow.jpeg";
import Snow2 from "../assets/snow2.jpeg";
import Snow3 from "../assets/snow3.jpeg";
import Snow4 from "../assets/snow4.jpeg";
import Snow5 from "../assets/snow5.jpeg";
import HeroBanner from "../assets/logo.png"; // Add a scenic hero image here

const places = [
  {
    title: 'SNOW VIEW POINT',
    description:
      'Snow View Point offers a breathtaking panoramic view of the snow-clad Himalayan peaks. It is one of the most popular tourist destinations in Nainital, accessible by a cable car ride.',
    image: Snow,
  },
  {
    title: 'TIFFIN TOP',
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

      {/* Hero Banner */}
      <div className="w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${HeroBanner})` }}>
        <div className="w-full h-full bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          {/* <h1 className="text-4xl md:text-5xl font-bold font-serif">Discover the Magic of Nainital</h1>
          <p className="mt-4 text-lg md:text-xl">Nature, Peace, and Adventure await you</p> */}
        </div>
      </div>

      {/* Places to Visit */}
      <section className='min-h-screen w-full flex flex-col items-center py-16 bg-gray-100'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 font-serif'>Places to Visit</h2>
        <p className='text-center max-w-3xl text-gray-600 mb-12 px-4'>
          Nestled in the lap of Uttarakhand, Nainital is a paradise for nature lovers and adventure seekers.
          From breathtaking viewpoints to peaceful lakes and lively streets, there's something for everyone.
        </p>

        <div className='w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {places.map((place, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
            >
              <img
                src={place.image}
                alt={place.title}
                className='w-full h-60 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold font-serif text-gray-800 hover:text-red-600 transition cursor-pointer'>
                  {place.title}
                </h3>
                <p className='text-gray-600 mt-3'>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className='bg-white py-14 px-4 text-center'>
        <h3 className='text-2xl md:text-3xl font-bold font-serif mb-6 text-gray-800'>Did You Know?</h3>
        <div className='max-w-3xl mx-auto text-gray-700 space-y-4 text-lg'>
          <p>🌄 Nainital was founded in 1841 by a British sugar trader named P. Barron.</p>
          <p>🌊 The town is named after the Naini Lake, which is shaped like an eye.</p>
          <p>🏞 The region is home to several endangered Himalayan species.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Places;
