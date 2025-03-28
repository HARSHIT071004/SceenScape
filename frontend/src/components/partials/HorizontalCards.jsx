
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import { Link } from "react-router-dom";

// const HorizontalCards = ({ data }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full h-[45vh] p-5 mb-5 flex justify-between">
//       <div className="w-full flex overflow-x-auto mb-5 p-5 space-x-5 ">
//         {data.length > 0 ? (
//           data.map((d, i) => (
//             <div
//               key={i}
//               className="h-[40vh] min-w-[240px] max-w-[20%] bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <Link to={`/details/${d.media_type}/${d.id}`}>
//                 <img
//                   className="w-full h-[180px] object-cover rounded-t-xl"
//                   src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
//                   alt="Image Not Available"
//                 />
//               </Link>
//               <div className="p-4 text-white h-[60%] flex flex-col justify-between">
//                 <h1 className="text-lg font-semibold truncate">{d.name || d.title || d.original_name || d.original_title}</h1>
//                 <div className="text-sm text-gray-300 flex-grow overflow-hidden">
//                   <p className="line-clamp-3">
//                     {d.overview.length > 120 ? `${d.overview.slice(0, 120)}...` : d.overview}
//                   </p>
//                   {d.overview.length > 120 && (
//                     <Link
//                       to={`/details/${d.media_type}/${d.id}`}
//                       className="block text-blue-400 hover:text-blue-600 mt-2 font-semibold"
//                     >
//                       Read More
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1 className="text-white text-3xl font-extrabold mx-auto">Nothing to show</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HorizontalCards;
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[45vh] p-5 mb-5 flex justify-between">
      <div className="w-full flex overflow-x-auto mb-5 p-5 space-x-5 scrollbar-hide">
        {data.length > 0 ? (
          data.map((d, i) => (
            <div
              key={i}
              className="h-[40vh] min-w-[240px] max-w-[20%] bg-gray-100 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Link to={`/details/${d.media_type}/${d.id}`}>
                <img
                  className="w-full h-[180px] object-cover rounded-t-xl"
                  src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
                  alt="Image Not Available"
                />
              </Link>
              <div className="p-4 text-black h-[60%] flex flex-col justify-between">
                <h1 className="text-lg font-semibold truncate">{d.name || d.title || d.original_name || d.original_title}</h1>
                <div className="text-sm text-gray-700 flex-grow overflow-hidden">
                  <p className="line-clamp-3">
                    {d.overview.length > 120 ? `${d.overview.slice(0, 120)}...` : d.overview}
                  </p>
                  {d.overview.length > 120 && (
                    <Link
                      to={`/details/${d.media_type}/${d.id}`}
                      className="block text-blue-400 hover:text-blue-600 mt-2 font-semibold"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-white text-3xl font-extrabold mx-auto">Nothing to show</h1>
        )}
      </div>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalCards;
