// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
//         <p className="text-gray-600 mb-6">
//           Welcome to our platform! We are dedicated to providing top-notch services and ensuring a seamless experience for our users. 
//           Our mission is to connect people, share valuable insights, and make a difference in the digital world.
//         </p>
//         <p className="text-gray-600 mb-6">
//           Feel free to reach out to us anytime. We’d love to hear from you!
//         </p>

//         <div className="flex justify-center space-x-6 mt-4">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-600 transition">
//             <i className="ri-instagram-line"></i>
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-600 transition">
//             <i className="ri-twitter-line"></i>
//           </a>
//           <a href="tel:+1234567890" className="text-green-500 text-2xl hover:text-green-600 transition">
//             <i className="ri-phone-line"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 md:px-8 py-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
          Welcome to our platform! We are dedicated to providing top-notch services and ensuring a seamless experience for our users. 
          Our mission is to connect people, share valuable insights, and make a difference in the digital world.
        </p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
          Feel free to reach out to us anytime. We’d love to hear from you!
        </p>

        <div className="flex justify-center space-x-4 sm:space-x-6 mt-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-500 text-xl sm:text-2xl hover:text-pink-600 transition"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 text-xl sm:text-2xl hover:text-blue-600 transition"
          >
            <i className="ri-twitter-line"></i>
          </a>
          <a 
            href="tel:+1234567890" 
            className="text-green-500 text-xl sm:text-2xl hover:text-green-600 transition"
          >
            <i className="ri-phone-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;