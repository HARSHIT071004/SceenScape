// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//     alert("Message sent successfully!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-5">
//       <div className="max-w-md w-full bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
//         <h2 className="text-3xl font-extrabold text-black text-center mb-6">Get in Touch</h2>
//         <p className="text-black text-center mb-4">Email us at: <span className="font-semibold text-blue-400">contact@screenscape.com</span></p>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-black mb-2 text-lg">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-black mb-2 text-lg">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-blaxk mb-2 text-lg">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60"
//               rows="4"
//               placeholder="Write your message..."
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-black py-3 rounded-lg text-lg font-semibold tracking-wide shadow-md"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-6">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-black text-center mb-4 text-sm sm:text-base md:text-lg">
          Email us at: <span className="font-semibold text-blue-400">contact@screenscape.com</span>
        </p>
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-black mb-2 text-base sm:text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60 text-sm sm:text-base"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 text-base sm:text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60 text-sm sm:text-base"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-black mb-2 text-base sm:text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 bg-white/20 text-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none placeholder-white/60 text-sm sm:text-base"
              rows="4"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold tracking-wide shadow-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;