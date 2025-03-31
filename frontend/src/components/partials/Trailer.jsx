 

// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import NotFound from "../NotFound";
// import ReactPlayer from "react-player";

// const Trailer = () => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const category = pathname.includes("movie") ? "movie" : "tv";

//   // Safely access ytvideo
//   const ytvideo = useSelector((state) => state[category]?.info?.videos);

//   return (
//     <div className="bg-[rgba(255,255,255,0.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
//       {/* Close Button */}
//       <Link
//         onClick={() => navigate(-1)}
//         className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-black right-[5%] top-[5%]"
//       >
//         &times;
//       </Link>
      
//       {/* Conditional Rendering for Video or NotFound */}
//       {ytvideo && ytvideo.key ? (
//         <ReactPlayer
//           height={800}
//           width={1500}
//           url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
//         />
//       ) : (
//         <NotFound />
//       )}
//     </div>
//   );
// };

// export default Trailer;


// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import NotFound from "../NotFound";
// import ReactPlayer from "react-player";

// const Trailer = () => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const category = pathname.includes("movie") ? "movie" : "tv";


//   const ytvideo = useSelector((state) => state[category]?.info?.videos);

//   return (
//     <div className="bg-[rgba(255,255,255,0.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
     
//       <Link
//         onClick={() => navigate(-1)}
//         className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-black right-[5%] top-[5%]"
//       >
//         &times;
//       </Link>
      
      
//       {/* {ytvideo && ytvideo.key ? (
//         <ReactPlayer
//           height={800}
//           width={1500}
//           url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
//         />
//       ) : (
//         <NotFound />
//       )} */}
//       {ytvideo?.results?.length > 0 ? (
//   <ReactPlayer
//     height={800}
//     width={1500}
//     url={`https://www.youtube.com/watch?v=${ytvideo.results[0].key}`}
//   />
// ) : (
//   <NotFound />
// )}

//     </div>
//   );
// };

// export default Trailer;




import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";
import ReactPlayer from "react-player";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytvideo = useSelector((state) => state[category]?.info?.videos);

  return (
    <div className="bg-[rgba(255,255,255,0.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-black right-[5%] top-[5%]"
      >
        &times;
      </Link>

      {ytvideo?.results?.length > 0 ? (
        <ReactPlayer
          height={800}
          width={1500}
          url={`https://www.youtube.com/watch?v=${ytvideo.results[0].key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
