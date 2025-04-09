import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet"; // For adding meta tags
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Logo from "../assets/logo.png";
import RoomOne from "../assets/samarroom.jpeg";
import RoomTwo from "../assets/samarroom2.jpeg";
import RoomThree from "../assets/samarroom3.jpeg";
import RoomFour from "../assets/latest1.jpeg";
import RoomFive from "../assets/latest2.jpeg";
import RoomSix from "../assets/newroom.jpeg";
import RoomSeven from "../assets/newroomtwo.jpeg";
import RoomEight from "../assets/newroomthree.jpeg";
import RoomNine from "../assets/newroomfour.jpeg";
import RoomTen from "../assets/newroomfive.jpeg";
import RoomEleven from "../assets/newroomsix.jpeg";
import RoomTwelve from "../assets/newroomseven.jpeg";
import RoomThirteen from "../assets/newroomthree.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // SEO-friendly image data with descriptive alt text
  const galleryImages = [
    { src: RoomOne, alt: "Luxury accommodation at Samar Niwas - Deluxe room interior" },
    { src: RoomTwo, alt: "Premium hotel room at Samar Niwas - Comfortable beds with elegant decor" },
    { src: RoomThree, alt: "Samar Niwas guest room - Spacious and well-furnished accommodation" },
    { src: RoomFour, alt: "Modern bathroom amenities at Samar Niwas hotel" },
    { src: RoomFive, alt: "Family suite at Samar Niwas - Perfect for group stays" },
    { src: RoomSix, alt: "Samar Niwas hotel dining area - Elegant restaurant seating" },
    { src: RoomSeven, alt: "Luxury bed and breakfast experience at Samar Niwas" },
    { src: RoomEight, alt: "Boutique hotel experience at Samar Niwas - Superior room view" },
    { src: RoomNine, alt: "Samar Niwas heritage hotel - Traditional architecture with modern amenities" },
    { src: RoomTen, alt: "Executive suite at Samar Niwas - Luxury accommodation for business travelers" },
    { src: RoomEleven, alt: "Best hotel in the area - Samar Niwas premium accommodations" },
    { src: RoomTwelve, alt: "Romantic getaway room at Samar Niwas - Perfect for couples" },
    { src: RoomThirteen, alt: "Affordable luxury accommodation at Samar Niwas hotel" },
  ];

  // SEO optimization - Page scroll tracking
  useEffect(() => {
    // Tracking page views and engagement for SEO
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // This would typically connect to analytics, but we're just setting up the structure
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Samar Niwas Photo Gallery | Luxury Hotel Accommodation</title>
        <meta name="description" content="Explore our luxurious Samar Niwas hotel photo gallery. View our elegant rooms, premium accommodations, dining spaces, and amenities. Book your perfect stay today." />
        <meta name="keywords" content="Samar Niwas, hotel gallery, luxury accommodation, boutique hotel, premium rooms, hotel photos, luxury stay, comfortable accommodations, hotel amenities" />
        <link rel="canonical" href="https://samarniwas.com/gallery" />
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="Samar Niwas Photo Gallery | Luxury Hotel Accommodation" />
        <meta property="og:description" content="Explore our luxurious Samar Niwas hotel photo gallery. View our elegant rooms, premium accommodations, and amenities." />
        <meta property="og:image" content="https://samarniwas.com/og-image.jpg" />
        <meta property="og:url" content="https://samarniwas.com/gallery" />
      </Helmet>

      <Navbar />

      {/* Hero Section with structured heading */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] bg-cover bg-center bg-[url('/assets/room6.webp')] flex items-center justify-center text-white"
      >
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>
        <img src={Logo} alt="Samar Niwas Luxury Hotel Logo" className="h-full w-full object-cover" />
      </motion.section>

      {/* About Gallery with enhanced keyword-rich content */}
      <motion.section
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center px-6 py-10"
      >
        <h1 className="text-3xl font-bold text-red-600 font-serif mb-3">Samar Niwas Photo Gallery - Luxury Accommodation</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Take a virtual tour through our luxury hotel Samar Niwas. Browse through our extensive photo gallery showcasing our premium accommodations, elegant interiors, comfortable rooms, and exceptional amenities. Whether you're planning a family vacation, business trip, or romantic getaway, our gallery gives you a glimpse of the unforgettable hospitality experience waiting for you.
        </p>
      </motion.section>

      {/* Gallery Grid with SEO-friendly image alt tags */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-gray-100 py-10"
        id="room-gallery"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 font-serif">Explore Our Premium Hotel Rooms & Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy" // For better performance
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  View Larger Image
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
                aria-label="Close image view"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
              <img
                src={selectedImage}
                alt="Samar Niwas Hotel - Enlarged room view"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonial Section with location keywords */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white py-14 px-4"
        id="guest-testimonials"
      >
        <h2 className="text-3xl font-bold text-center font-serif text-red-600">Guest Reviews of Samar Niwas</h2>
        <p className="text-center max-w-3xl mx-auto mt-4 text-gray-600">
          Read what our satisfied guests have to say about their stay experience at our premium accommodation.
        </p>
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
          {[
            { 
              name: "Ananya Sinha", 
              location: "Delhi",
              text: "The rooms at Samar Niwas were beautiful and well-maintained. The luxury furnishings and attention to detail made our stay exceptional. Loved the ambience and will definitely recommend to friends looking for premium accommodation!" 
            },
            { 
              name: "Ramesh Patel", 
              location: "Mumbai",
              text: "Amazing hospitality and stunning views from our deluxe room. The hotel staff was incredibly attentive and the amenities were top-notch. Samar Niwas offers the perfect blend of traditional charm and modern luxury. Highly recommended!" 
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <p className="italic text-white">"{testimonial.text}"</p>
              <p className="mt-4 font-semibold text-right text-white">- {testimonial.name}, {testimonial.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action - Booking Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-red-50 py-12 px-4 text-center"
      >
        <h2 className="text-2xl font-bold text-red-700 mb-4">Experience Luxury at Samar Niwas</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Ready to experience the comfort and elegance you've seen in our gallery? Book your stay now and enjoy our premium accommodations, excellent amenities, and world-class hospitality.
        </p>
        <a 
          href="/contact" 
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Book Your Stay Now
        </a>
      </motion.section>

      {/* FAQ Section for additional SEO value */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white py-12 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions About Samar Niwas</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">What amenities are offered at Samar Niwas?</h3>
              <p className="text-gray-600">Our premium hotel offers comfortable rooms, room service, free WiFi, air conditioning, private bathrooms, complimentary breakfast, and beautiful garden areas for relaxation.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">Are the rooms in the photos exactly as they appear in real life?</h3>
              <p className="text-gray-600">Yes, all photos in our gallery accurately represent our rooms and facilities. We take pride in ensuring what you see is what you get when you book with Samar Niwas.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">How can I book a room at Samar Niwas?</h3>
              <p className="text-gray-600">You can book directly through our website, call our reservation line, or use popular booking platforms. We recommend booking directly for the best rates and special offers.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Gallery;