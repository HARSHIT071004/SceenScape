// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-black py-8 px-9 min-h-[20vh] flex flex-col justify-center">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* <h2 className="text-2xl font-bold text-gray-300">ScreenScape 🎬</h2> */}
//         <nav className="flex space-x-6 mt-4 md:mt-0">
//           <Link to="/" className="hover:text-gray-400 transition">Home</Link>
//           <Link to="/about" className="hover:text-gray-400 transition">About</Link>
//           <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
//           <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
//         </nav>
//       </div>
//       <div className="text-center text-gray-400 text-sm mt-6">
//         &copy; {new Date().getFullYear()} ScreenScape. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black px-4 sm:px-6 md:px-9 py-6 sm:py-8 min-h-[20vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Uncomment if you want to include the logo/title */}
        {/* <h2 className="text-xl sm:text-2xl font-bold text-gray-300">ScreenScape 🎬</h2> */}
        <nav className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-4 md:mt-0 text-center sm:text-left">
          <Link 
            to="/" 
            className="hover:text-gray-400 transition text-sm sm:text-base md:text-lg"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gray-400 transition text-sm sm:text-base md:text-lg"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="hover:text-gray-400 transition text-sm sm:text-base md:text-lg"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-gray-400 transition text-sm sm:text-base md:text-lg"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="text-center text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
        © {new Date().getFullYear()} ScreenScape. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;