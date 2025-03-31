// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Interactive Watch Party",
//     description:
//       "🚀 Real-Time Sync, Live Chat & Emojis, Voice & Video Reactions, Polls & Voting, Virtual Remote Control.",
//   },
//   {
//     id: 2,
//     title: "Movie Challenges & Rewards",
//     description:
//       "🏆 मूवी चैलेंज पूरा करके बैज और रिवॉर्ड्स कमाओ! जैसे 'This week 3 Sci-Fi Movies देखो और बैज कमाओ!' 🚀",
//   },
// ];

// const Service = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//       <div className="grid gap-6">
//         {services.map((service) => (
//           <div key={service.id} className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white">
//             <h3 className="text-xl font-semibold">{service.title}</h3>
//             <p className="mt-2">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;




import React from "react";

const services = [
  {
    id: 1,
    title: "Interactive Watch Party",
    description:
      "🚀 Real-Time Sync, Live Chat & Emojis, Voice & Video Reactions, Polls & Voting, Virtual Remote Control.",
  },
  {
    id: 2,
    title: "Movie Challenges & Rewards",
    description:
      "🏆 मूवी चैलेंज पूरा करके बैज और रिवॉर्ड्स कमाओ! जैसे 'This week 3 Sci-Fi Movies देखो और बैज कमाओ!' 🚀",
  },
];

const Service = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Our Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white text-center sm:text-left"
          >
            <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm sm:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
