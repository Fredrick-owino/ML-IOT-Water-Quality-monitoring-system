import React from 'react';

import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
     

      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Reach out to us via email, phone, or fill out the form below.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            <p className="text-gray-600">support@lakemonitoring.com</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
            <p className="text-gray-600">+254 700 000 000</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
