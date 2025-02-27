"use client"
import React from "react";
import Map from "../../components/Map";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // console.log("Form values:", data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6  min-h-screen bg-gray-100">
      {/* Map Section */}
      <div className="w-full h-64 md:h-auto  overflow-hidden ">
        <Map />
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold  mb-6 text-center text-green-600">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-600 mb-1">Name</label>
            <input type="text" name="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your name" />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Message</label>
            <textarea name="message"  required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
