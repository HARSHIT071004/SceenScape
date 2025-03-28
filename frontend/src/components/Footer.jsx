import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 px-9 min-h-[20vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <h2 className="text-2xl font-bold text-gray-300">ScreenScape 🎬</h2> */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>
      </div>
      <div className="text-center text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} ScreenScape. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
