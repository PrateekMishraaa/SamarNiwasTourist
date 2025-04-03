import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { BiLogoGmail } from 'react-icons/bi';
import { FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        FullName: "",
        Email: "",
        MobileNumber: "",
        Message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.FullName || !formData.Email || !formData.MobileNumber || !formData.Message) {
            toast.error("Please check! All fields are required.");
            return;
        }

        try {
            const response = await axios.post("https://samar-niwasbackend.vercel.app/", formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            toast.success("Message sent successfully!");
            console.log("Message sent successfully", response.data);

            // Clear form after successful submission
            setFormData({
                FullName: "",
                Email: "",
                MobileNumber: "",
                Message: "",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Something went wrong, please try again!");
        }
    };

    return (
        <>
            <Navbar />
            <section className='flex flex-col md:flex-row justify-center items-center md:items-start p-4'>
                {/* Contact Form */}
                <form className='w-full md:w-2/3 lg:w-1/2 border-2 p-6 rounded-xl shadow-lg bg-white' onSubmit={handleSubmit}>
                    <p className='text-3xl font-semibold font-serif text-center mb-6'>
                        Get In <span className='text-red-600'>Touch</span>
                    </p>
                    <input
                        type='text'
                        placeholder='Enter Your Name...'
                        className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none'
                        name="FullName"
                        value={formData.FullName}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder='Enter Your Email...'
                        className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none'
                    />
                    <input
                        type='text'
                        placeholder='Enter Your Mobile Number...'
                        className='h-12 w-full px-4 mb-4 bg-gray-200 rounded-xl focus:outline-none'
                        name='MobileNumber'
                        value={formData.MobileNumber}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder='Enter Your Message...'
                        className='h-32 w-full px-4 py-2 mb-4 bg-gray-200 rounded-xl focus:outline-none resize-none'
                        name='Message'
                        value={formData.Message}
                        onChange={handleChange}
                    />
                    <button className='h-12 w-full md:w-40 border-2 rounded-xl font-semibold font-serif text-white bg-red-700 hover:bg-red-800 transition duration-300' type='submit'>
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className='w-full md:w-1/2 lg:w-1/3 p-6 text-center md:text-left'>
                    <h2 className='text-3xl font-bold font-serif'>Contact Info</h2>
                    <p className='text-gray-700 mt-2'>
                        Feel free to reach out via email or phone for any inquiries.
                    </p>
                    <p className='mt-4 flex items-center text-xl '><BiLogoGmail className='mr-2 text-red-600'/><strong>Email: <span className='text-red-700'>booking@rchronline.com</span></strong></p>
                    <p className='mt-4 flex items-center text-xl '><FaHeadphones className='mr-2 text-blue-600'/><strong>Phone-No: <span className='text-red-700'>+91-9971855186</span></strong></p>
                    <p className='mt-4 flex items-center text-xl '><FaLocationDot className='mr-2 text-red-900'/><strong>Address: <span className='text-red-700'>Samar Niwas Home Stay, Rajpur Rd, Chander Lok Colony, Near Ajanta Hotel, Dehradun, Uttarakhand 248001 </span></strong></p>
                </div>
            </section>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Contact;
