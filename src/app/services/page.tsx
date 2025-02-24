'use client';
import { Palette,Computer, FileUser,BookOpen} from 'lucide-react';
import React from 'react';
import Footer from '../components/footer';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Creating modern, responsive, and visually appealing website designs.',
      icon:  <Palette className='w-16  h-16 ' />,
    },
    {
      title: 'Web Development',
      description: 'Building fast and scalable web applications using Next.js and TypeScript.',
      icon: <Computer className='w-16 h-16' />,
    },
    {
      title: 'Portfolio Design',
      description: 'Crafting personal and business portfolios to showcase your work.',
      icon: <FileUser className='w-16 h-16' />,
    },
    {
      title: 'Teaching',
      description: 'Providing mentorship and tutorials on web development and design.',
      icon: <BookOpen className='w-16 h-16' />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center items-center  " >
      <h1 className=" text-gray-500 text-4xl font-sans   font-bold text-center mb-8">My Services</h1>
      <p className='text-center text-gray-300 font-sans font-bold w-full lg:w-[600px] p-6 text-[16px]' >I specialize in creating visually appealing and high-performance websites. Whether you need a modern web design, a functional portfolio, or expert guidance in web development, I’ve got you covered!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 ">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 shadow-black shadow-xl rounded-2xl p-6 text-center transform hover:scale-110 transition duration-500 ease-in-out">
            <div className="text-[#CA5900] flex justify-center items-center">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-500 mt-4">{service.title}</h2>
            <p className="text-gray-300 font-sans font-bold mt-2">{service.description}</p>
          </div>
        ))}
      </div>
        <Footer />
    </div>
  );
};

export default Services;
