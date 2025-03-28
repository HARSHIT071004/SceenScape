// import React from 'react'
// import { Link } from 'react-router-dom'
// const Sidenav = () => {

//     return (
//         <>
//             <div className="w-[15%]  h-full border-r-2 border-zinc-400 p-30">
//             <br/>
//             <br/>

//                 <h1 className="text-2xl text-black w-full font-bold">
//                     {/* <i className=" text-black ri-tv-fill text-4xl mr-2"></i> */}
//                     <span className="m-5 w-full bg-gray-300 shadow-lg text-xl">ScreenScape</span>
//                 </h1>
// <br/>
// <br/>



//                 <nav className="flex flex-col  text-zinc-800 text-2xl gap-3 ">
                   


//                     <Link to="/Popular" className=" hover:text-black  hover:bg-blue-200 round-lg duration-250 p-5 w-full ">
//                         {/* <i className="mr-2 ri-bard-fill"></i> */}
//                         Blockbuster Hits
//                     </Link>

//                     <Link to="/Movies" className=" hover:bg-blue-200 hover:text-black round-lg duration-250 p-5">
//                         {/* <i className=" mr-2 ri-movie-2-fill"></i> */}
//                         MOVIES
//                     </Link>

//                     <Link to="/tv" className=" hover:bg-blue-200 hover:text-black round-lg duration-250 p-5">
//                         {/* <i className="mr-2 ri-tv-2-fill"></i> */}
//                         Must-See TV
//                     </Link>

//                     <Link to="/person" className=" hover:bg-blue-200 hover:text-black round-lg duration-250 p-5">
//                         {/* <i className="mr-2 ri-user-smile-fill"></i> */}
//                         Iconic Faces
//                     </Link>

//                     <Link to="/trending" className=" hover:bg-blue-200  round-lg duration-250 p-5">
//                         {/* <i className=" mr-2 ri-fire-fill"></i> */}
//                         Buzzing Now
//                     </Link>

//                 </nav>
//                 <hr />
//                 <hr />

//                 <nav className="flex-col flex">
//                     <Link to="/contact" className=" hover:bg-blue-200   text-zinc-900 round duration-250 p-5">
//                         <i className="mr-2 ri-customer-service-2-line"></i>
//                         CONTACT
//                     </Link>

//                     <Link to="/about" className=" hover:bg-blue-200   text-zinc-800 round-lg duration-250 p-5">
//                         <i className="mr-2 ri-information-fill"></i>
//                         ABOUT
//                     </Link>

//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Sidenav;




// import React from "react";
// import { Link } from "react-router-dom";

// const Sidenav = () => {
//   return (
//     <div className="w-full bg-white shadow-md border-b-2 border-gray-300 py-3 px-5 flex justify-center space-x-6">
//       <h1 className="text-2xl font-bold text-gray-800">ScreenScape</h1>

//       <nav className="flex space-x-4">
//         <Link to="/Popular" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Blockbuster Hits
//         </Link>
//         <Link to="/Movies" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Movies
//         </Link>
//         <Link to="/tv" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Must-See TV
//         </Link>
//         <Link to="/person" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Iconic Faces
//         </Link>
//         <Link to="/trending" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Buzzing Now
//         </Link>
//       </nav>

//       <nav className="flex space-x-4 ml-auto">
//         <Link to="/contact" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           Contact
//         </Link>
//         <Link to="/about" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md">
//           About
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidenav;





// import React from "react";
// import { Link } from "react-router-dom";

// const Sidenav = () => {
//   return (
//     <div className="w-full bg-white shadow-md border-b-2 border-gray-300 py-2 px-5 flex justify-center space-x-4">
//       <h1 className="text-xl font-bold text-gray-800 self-center">ScreenScape</h1>

//       <nav className="flex space-x-3">
//         <Link to="/Popular" className="h-12 flex items-center justify-center     ">
//           Blockbuster Hits
//         </Link>
//         <Link to="/Movies" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           Movies
//         </Link>
//         <Link to="/tv" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           Must-See TV
//         </Link>
//         <Link to="/person" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           Iconic Faces
//         </Link>
//         <Link to="/trending" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           Buzzing Now
//         </Link>
//       </nav>

//       <nav className="flex space-x-3 ml-auto">
//         <Link to="/contact" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           Contact
//         </Link>
//         <Link to="/about" className="h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 px-4 rounded-lg shadow-md">
//           About
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidenav;



import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-full  shadow-lg border-b border-gray-900 py-4 px-6 flex justify-between items-center">
      {/* <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">ScreenScape</h1> */}

      <nav className="flex space-x-5">
        <Link to="/Popular" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-blue-100 hover:text-blue-600 transition duration-300 shadow-md">
          Blockbuster Hits
        </Link>
        <Link to="/Movies" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-blue-100 hover:text-blue-600 transition duration-300 shadow-md">
          Movies
        </Link>
        <Link to="/tv" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-blue-100 hover:text-blue-600 transition duration-300 shadow-md">
          Must-See TV
        </Link>
        <Link to="/person" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-blue-100 hover:text-blue-600 transition duration-300 shadow-md">
          Iconic Faces
        </Link>
        <Link to="/trending" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-blue-100 hover:text-blue-600 transition duration-300 shadow-md">
          Buzzing Now
        </Link>
      </nav>

      <nav className="flex space-x-4">
        <Link to="/contact" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-green-100 hover:text-green-600 transition duration-300 shadow-md">
          Contact
        </Link>
        <Link to="/about" className="px-5 py-2 text-gray-700 font-medium rounded-xl hover:bg-green-100 hover:text-green-600 transition duration-300 shadow-md">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
