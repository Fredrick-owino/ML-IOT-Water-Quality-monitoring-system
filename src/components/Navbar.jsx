import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-3 text-white">
          <li className="hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline">
            <a href="/about">About Us</a>
          </li>
          <li className="hover:underline">
            <a href="/services">Services</a>
          </li>
          <li className="hover:underline">
            <a href="/visualization">Visualization</a>
          </li>
          <li className="hover:underline">
            <a href="/alerts">Alerts & Notifications </a>
          </li>
          <li className="hover:underline">
            <a href="/contact">Contact</a>
          </li>
          <li className="group relative">
            <span className="cursor-pointer">More</span>
            <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white text-black shadow-lg rounded-md">
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="/settings">Settings</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
