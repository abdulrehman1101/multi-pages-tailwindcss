"use client"
// import Navbar from './Navbar';

import React from 'react';

const About = () => {
  return (
    <div id='about' className="flex items-center justify-center min-h-screen bg-gray-500 p-6">
      <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
        we believe in the beauty and elegance that flowers bring to every moment.
        Our mission is to share this joy with you through our carefully selected, fresh, and vibrant floral arrangements.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Our Passion for Flowers</h2>
        <p className="text-gray-600 mt-2">
        From weddings to anniversaries, our florists put heart and soul into every bouquet. Each petal and stem is chosen with care,
        ensuring that our arrangements make a lasting impression on your special occasions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">A Team of Flower Enthusiasts</h2>
        <p className="text-gray-600 mt-2">
        Our team is composed of experienced florists and passionate flower lovers, all committed to delivering the
         finest blooms and exceptional customer service. We look forward to being part of your floral journey.
        </p>

        <div className="mt-8 flex items-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;