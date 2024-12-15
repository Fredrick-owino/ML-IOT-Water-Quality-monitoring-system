import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <a href="/" className="text-2xl font-bold">logo</a>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-secondary">Home</a></li>
          <li><a href="/about" className="hover:text-secondary">About</a></li>
          <li><a href="/services" className="hover:text-secondary">Services</a></li>
          <li><a href="/visualization" className="hover:text-secondary">Visualization</a></li>
          <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;