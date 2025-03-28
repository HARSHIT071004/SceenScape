// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = ({ data }) => {
//   return (
//     <div
//       style={{
//         background: `
//           linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
//           url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})
//         `,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat', 
//       }}
//       className="h-[70vh] flex flex-col justify-end item-start p-[10%]"
//     >
//       <br/>
//       <h1 className="w-[70%] text-4xl  font-black text-white">
//         {data.name || data.title || data.original_name || data.original_title}
//       </h1>
//       <p className="mt-3 text-3xl w-[70%] text-white">
//         {data.overview.slice(0, 200)}...
//         <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 text-1xl">
//           more
//         </Link>
//       </p>
      
//       <p className="text-white">
//         <i className="ri-megaphone-fill"></i> {data.release_date || 'no information'}
//         <i className="ri-album-fill"></i> {data.media_type}
//       </p>
      
      

//       <Link className="bg-[#6f689f] p-4 w-[10%] rounded text-white mt-5 hover:scale-105 transition-transform duration-200">
//         Watch Trailer
//       </Link>
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),
          url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})
        `,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.9)',
      }}
      className="h-[75vh] flex flex-col justify-end items-start p-[8%] border-2 border-gray-700 rounded-xl"
    >
      <h1 className="w-[70%] text-5xl font-extrabold text-white drop-shadow-lg">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="mt-3 text-xl w-[70%] text-gray-300 leading-7 drop-shadow-md">
        {data.overview.slice(0, 180)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 text-lg font-semibold">
          more
        </Link>
      </p>

      <p className="text-gray-400 text-lg mt-3">
         {data.release_date || 'No information'} &nbsp;&nbsp; | &nbsp;&nbsp;  {data.media_type}
      </p>

      <Link className="mt-6 px-6 py-3 bg-gradient-to-r from-[#6f689f] to-[#4b4788] text-white text-lg font-semibold rounded-lg shadow-xl tracking-wider border-2 border-gray-500 transition-all duration-300 hover:shadow-2xl hover:border-white hover:from-[#867cc1] hover:to-[#6258b0]">
  Watch Trailer
</Link>

    </div>
  );
};

export default Header;
