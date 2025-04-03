import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from "../assets/samarniwas.jpeg"

const places = [
  {
    title: 'NAINI LAKE',
    description:
      'Nainital Lake, famously known as Naini Lake is the major attraction of Nainital town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.',
    image: 'https://source.unsplash.com/600x400/?lake,mountains',
  },
  {
    title: 'NAINITAL ZOO',
    description:
      'Nainital Zoo is one of the best attractions for wildlife in Nainital. Officially named as Bharat Ratna Pt. Gov. Ballabh Pant High Altitude Zoo Nainital, this well-maintained zoo is the single zoo in the entire Uttarakhand state.',
    image: 'https://source.unsplash.com/600x400/?zoo,forest',
  },
  {
    title: 'NAINI LAKE',
    description:
      'Nainital Lake, famously known as Naini Lake is the major attraction of Nainital town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.',
    image: 'https://source.unsplash.com/600x400/?lake,mountains',
  },
  {
    title: 'NAINITAL ZOO',
    description:
      'Nainital Zoo is one of the best attractions for wildlife in Nainital. Officially named as Bharat Ratna Pt. Gov. Ballabh Pant High Altitude Zoo Nainital, this well-maintained zoo is the single zoo in the entire Uttarakhand state.',
    image: 'https://source.unsplash.com/600x400/?zoo,forest',
  },
  {
    title: 'NAINI LAKE',
    description:
      'Nainital Lake, famously known as Naini Lake is the major attraction of Nainital town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.',
    image: 'https://source.unsplash.com/600x400/?lake,mountains',
  },
  {
    title: 'NAINITAL ZOO',
    description:
      'Nainital Zoo is one of the best attractions for wildlife in Nainital. Officially named as Bharat Ratna Pt. Gov. Ballabh Pant High Altitude Zoo Nainital, this well-maintained zoo is the single zoo in the entire Uttarakhand state.',
    image: 'https://source.unsplash.com/600x400/?zoo,forest',
  },
  {
    title: 'NAINI LAKE',
    description:
      'Nainital Lake, famously known as Naini Lake is the major attraction of Nainital town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.',
    image: 'https://source.unsplash.com/600x400/?lake,mountains',
  },
  {
    title: 'NAINITAL ZOO',
    description:
      'Nainital Zoo is one of the best attractions for wildlife in Nainital. Officially named as Bharat Ratna Pt. Gov. Ballabh Pant High Altitude Zoo Nainital, this well-maintained zoo is the single zoo in the entire Uttarakhand state.',
    image: 'https://source.unsplash.com/600x400/?zoo,forest',
  },
];

const Places = () => {
  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full flex flex-col items-center py-10 bg-gray-100'>
        <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center'>PLACES TO VISIT</h2>
        <div className='w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8 '>
          {places.map((place, index) => (
            <div
              key={index}
              className='bg-white rounded-4xl shadow-lg overflow-hidden bg-shadow-dark'
            >
              <img
                src={Home}
                alt={place.title}
                className='w-full h-56 object-cover '
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold font-semibold font-serif cursor-pointer'>{place.title}</h3>
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
