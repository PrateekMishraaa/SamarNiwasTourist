import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // For adding meta tags
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

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// RoomCard Component with structured data
const RoomCard = ({ image, title, description, price, amenities }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm hover:scale-105 transition-transform duration-300"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true }}
      // Adding schema.org structured data for hotel rooms
      itemScope
      itemType="https://schema.org/HotelRoom"
    >
      <img src={image} alt={`${title} - Luxury Hotel Room`} className="w-full h-52 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900" itemProp="name">{title}</h3>
        <p className="text-gray-700 text-sm mt-2" itemProp="description">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">
            <span itemProp="priceRange">Rs. {price}</span> <span className="text-sm text-gray-500">/ Night</span>
          </span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700" aria-label={`View details for ${title}`}>
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  { icon: <FaParking size={40} className="text-blue-500" />, label: "Free Parking Space" },
  { icon: <FaUserShield size={40} className="text-green-600" />, label: "24/7 Security Guard" },
  { icon: <FaUserMd size={40} className="text-red-400" />, label: "Doctor on Call" },
  { icon: <FaServer size={40} className="text-orange-400" />, label: "Backup Generator" },
  { icon: <FaConciergeBell size={40} className="text-[#9b4f2c]" />, label: "24-Hour Reception" },
  { icon: <FaTree size={40} className="text-[#53ad1f]" />, label: "Lush Gardens" },
  { icon: <FaUtensils size={40} className="text-[#f7cd36]" />, label: "Fine Dining Restaurant" },
  { icon: <FaWifi size={40} className="text-blue-400" />, label: "Complimentary High-Speed Wifi" },
  { icon: <FaVideo size={40} className="text-red-500" />, label: "CCTV Security" },
];

const testimonials = [
  {
    name: "Anjali Mehra",
    comment: "The rooms were immaculately clean and the service was excellent! I highly recommend staying at this luxury hotel.",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    comment: "Perfect stay for a family vacation. The staff is very helpful and polite. The premium rooms exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    comment: "A truly luxurious experience with great food and fast wifi! The super deluxe rooms offer exceptional comfort and value.",
    rating: 4,
  },
];

// Rooms Component
const Rooms = () => {
  const rooms = [
    {
      image: RoomOnee,
      title: "PREMIUM ROOM",
      description: "Designed specially to pamper its guests, the premium rooms showcase a perfect blend of luxury in its accommodation with utmost security and comfort.",
      price: "4000",
      amenities: ["Air Conditioning", "King Size Bed", "Flat-screen TV", "Mini Bar", "Free Wifi"]
    },
    {
      image: SuperDeluxe,
      title: "SUPER DELUXE ROOM",
      description: "A haven of indulgence, the spacious super deluxe rooms are facilitated by state-of-the-art amenities accompanied by warm and efficient services for business and leisure travelers.",
      price: "5000",
      amenities: ["Air Conditioning", "King Size Bed", "Jacuzzi", "Flat-screen TV", "Mini Bar", "Free Wifi"]
    },
    {
      image: RoomOne,
      title: "FAMILY ROOM",
      description: "The spacious family rooms are facilitated by a range of state-of-the-art amenities accompanied by warm and efficient services perfect for family stays and group accommodations.",
      price: "7000",
      amenities: ["Air Conditioning", "Multiple Beds", "Separate Living Area", "Flat-screen TV", "Mini Bar", "Free Wifi"]
    },
  ];

  // Location information for SEO
  const hotelLocation = {
    name: "Luxury Hotel & Resort",
    address: "123 Main Street, City Name",
    region: "State/Region",
    country: "India",
    postalCode: "123456",
    phone: "+91 1234567890"
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Luxury Hotel Rooms & Accommodations | Premium, Super Deluxe & Family Rooms</title>
        <meta name="description" content="Experience luxury accommodation with our Premium, Super Deluxe and Family Rooms. Enjoy amenities like free WiFi, fine dining, and 24/7 service at affordable prices." />
        <meta name="keywords" content="luxury hotel rooms, premium accommodation, super deluxe rooms, family rooms, hotel booking, affordable luxury rooms, hotel amenities, hotel with restaurant, hotel with wifi" />
        <meta property="og:title" content="Luxury Hotel Rooms & Accommodations | Premium, Super Deluxe & Family Rooms" />
        <meta property="og:description" content="Book your luxury stay in our Premium, Super Deluxe or Family Rooms with amenities including free WiFi, fine dining, and 24/7 service." />
        <meta property="og:image" content={RoomOnee} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/rooms" />
        
        {/* Schema markup for Hotel */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "${hotelLocation.name}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${hotelLocation.address}",
                "addressRegion": "${hotelLocation.region}",
                "addressCountry": "${hotelLocation.country}",
                "postalCode": "${hotelLocation.postalCode}"
              },
              "telephone": "${hotelLocation.phone}",
              "priceRange": "Rs. 4000 - Rs. 7000",
              "amenityFeature": [
                {"@type": "LocationFeatureSpecification", "name": "Free Wifi"},
                {"@type": "LocationFeatureSpecification", "name": "Restaurant"},
                {"@type": "LocationFeatureSpecification", "name": "Free Parking"},
                {"@type": "LocationFeatureSpecification", "name": "24/7 Security"}
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${RoomOnee})` }} aria-label="Luxury Hotel Room Banner">
        <div className="absolute inset-0 bg-black opacity-50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Experience Luxury Accommodation Like Never Before</h1>
          <p className="text-lg font-medium">Book a premium room that suits your comfort and budget</p>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section className="bg-gray-100 py-12" id="hotel-rooms">
        <motion.div
          className="px-6 md:px-20 text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold font-serif mb-2">
            Explore Our <span className="text-red-700 hover:text-yellow-600 transition">Luxury Rooms</span>
          </p>
          <p className="text-sm text-gray-600">Choose from our selection of premium accommodations for your perfect stay</p>
        </motion.div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12" id="hotel-amenities">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our <span className="text-red-600">Premium Amenities</span></h2>
          <p className="text-sm text-gray-600 mt-2">LUXURY HOTEL FACILITIES</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <p className="mt-3 font-semibold text-center">{service.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12" id="guest-reviews">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">What Our Guests Say About Our Accommodations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <p className="italic text-gray-600" itemProp="reviewBody">"{testi.comment}"</p>
              <div className="text-right mt-4">
                <p className="font-semibold text-red-600" itemProp="author">- {testi.name}</p>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testi.rating} />
                  <meta itemProp="bestRating" content="5" />
                  <div className="flex justify-end mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < testi.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-white py-12" id="accommodation-faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            {[
              {
                question: "What amenities are included in your luxury rooms?",
                answer: "All our luxury rooms come with air conditioning, high-speed WiFi, flat-screen TV, premium bedding, in-room safe, mini bar, and 24-hour room service. Super Deluxe rooms also include a jacuzzi, while Family rooms feature separate living areas."
              },
              {
                question: "What is your check-in and check-out time?",
                answer: "Our standard check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, we offer airport transfer services for our guests at an additional cost. Please contact our reception desk to arrange this service."
              },
              {
                question: "Is breakfast included in the room rate?",
                answer: "Yes, complimentary breakfast is included with all room bookings. Our breakfast buffet is served from 7:00 AM to 10:30 AM daily in our restaurant."
              },
            ].map((faq, index) => (
              <div key={index} className="shadow-md rounded-lg p-6" itemScope itemType="https://schema.org/Question">
                <h3 className="font-bold text-lg text-gray-900" itemProp="name">{faq.question}</h3>
                <div className="mt-2" itemScope itemType="https://schema.org/Answer">
                  <p className="text-gray-700" itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      {/* <section className="bg-gray-100 py-12" id="hotel-location">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Location</h2>
          <p className="mb-6">Located in the heart of the city, our luxury hotel offers easy access to major attractions, shopping centers, and business districts.</p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="aspect-w-16 aspect-h-9 mb-4">
       
              <div className="bg-gray-300 h-64 flex items-center justify-center">Map Placeholder</div>
            </div>
            <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
              <p className="font-semibold">{hotelLocation.name}</p>
              <p itemProp="streetAddress">{hotelLocation.address}</p>
              <p>
                <span itemProp="addressRegion">{hotelLocation.region}</span>, <span itemProp="addressCountry">{hotelLocation.country}</span> - <span itemProp="postalCode">{hotelLocation.postalCode}</span>
              </p>
              <p className="mt-2">Phone: <a href={`tel:${hotelLocation.phone}`} className="text-blue-600">{hotelLocation.phone}</a></p>
            </address>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <motion.section
        className="bg-black py-12 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Luxury Stay?</h2>
        <p className="mb-6">Experience premium comfort, convenience, and luxury accommodation. Reserve your room now for the best rates!</p>
        <a href="/booking" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Book Now
        </a>
      </motion.section>

      <Footer />
    </>
  );
};

export default Rooms;