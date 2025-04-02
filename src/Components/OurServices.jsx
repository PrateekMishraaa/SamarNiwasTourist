import React from 'react'
import RoomOne from "../assets/room.webp"
import RoomTwo from "../assets/room2.webp"
import RoomThree from "../assets/room3.webp"
import RoomFour from "../assets/room4.webp"
const OurServices = () => {
  
  const images = [RoomOne, RoomTwo, RoomThree, RoomFour];
  const services = [
    { icon: <FaParking size={40} className='text-blue-500'/>, label: "Parking Space" },
    { icon: <FaUserShield size={40} className='text-green-600' />, label: "Security Guard" },
    { icon: <FaUserMd size={40} className='text-red-400' />, label: "Doctor on Call" },
    { icon: <FaServer size={40} className='text-orange-400' />, label: "Backup Generator" },
    { icon: <FaConciergeBell size={40} className='text-[#9b4f2c]' />, label: "Reception" },
    { icon: <FaTree size={40} className='text-[#53ad1f]' />, label: "Gardens" },
    { icon: <FaUtensils size={40} className='text-[#f7cd36]' />, label: "Restaurant" },
    { icon: <FaWifi size={40} className='text-blue-400' />, label: "Free Wifi" },
    { icon: <FaVideo size={40} className='text-red-500'/>, label: "CCTV Security" }
];
  return (
    <>
      <div className="w-full flex flex-col items-center px-4">
            <div className='h-[20vh] w-full border-2 flex items-center justify-center rounded-xl'>
                <p className='font-semibold font-serif text-4xl py-4'>Our <span className='text-red-600'>Services</span></p>
            </div>
            <h2 className="text-xl font-bold mt-8">HOTEL FACILITIES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-5xl">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg border hover:shadow-lg transition-all">
                        {service.icon}
                        <p className="mt-2 font-semibold">{service.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default OurServices
