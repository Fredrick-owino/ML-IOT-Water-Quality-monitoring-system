// /frontend/src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-mdsticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/logo.png" alt="Logo" className="h-20 w-20 rounded-full shadow-md" />
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-wide">
              Smart Aquaculture Water Monitoring
            </h1>
            <p className="text-sm italic">Real-time water and atmospheric condition monitoring</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <Navbar />
    </header>
  );
};

export default Header;
