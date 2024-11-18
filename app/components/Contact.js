"use client"
// import Navbar from './Navbar';

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted');
  };

  return (
    <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-800  p-6">
      <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;