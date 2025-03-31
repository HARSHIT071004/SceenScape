
// import React, { useState, useEffect } from "react";
// import Sidenav from "./partials/Sidenav";
// import Topnav from "./partials/Topnav";
// import axios from "../utils/axios";
// import Header from "./partials/Header";
// import HorizontalCards from "./partials/HorizontalCards";
// import Dropdown from "./partials/Dropdown";
// import Loading from "./Loading";
// import Footer from "./Footer";

// const Home = () => {
//   document.title = "ScreenScape";

//   const [wallpaper, setWallpaper] = useState(null);
//   const [trending, setTrending] = useState([]);
//   const [category, setCategory] = useState("all");
//   const [loading, setLoading] = useState(true);

//   const GetHeaderWallpaper = async () => {
//     try {
//       const { data } = await axios.get(`/trending/all/day`);
//       const random = data.results[Math.floor(Math.random() * data.results.length)];
//       setWallpaper(random);
//     } catch (error) {
//       console.error("Error fetching wallpaper:", error);
//     }
//   };

//   const GetTrending = async () => {
//     try {
//       const { data } = await axios.get(`/trending/${category}/day`);
//       setTrending(data.results);
//     } catch (error) {
//       console.error("Error fetching trending:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setLoading(true);
//     if (!wallpaper) GetHeaderWallpaper();
//     GetTrending();
//   }, [wallpaper, category]);

//   return loading ? (
//     <Loading />
//   ) : (
//     <div className="w-full h-full flex flex-col">
//             <h1 className="text-2xl font-extrabold  text-gray-900 tracking-wide">ScreenScape</h1>
// <br/>

// <Sidenav />
//       <br/>
//       <br/>
     
//       <Topnav/>
//       <br/>
//       <br/>

      
//         <div className="flex justify-between items-center p-3 mt-4">
//   <h1 className="text-4xl font-extrabold text-gray-600 flex-grow text-center">
//     Trending
//   </h1>
//   <Dropdown
//     className="bg-gray-100 w-auto text-gray-800 text-lg font-semibold py-2 px-6 rounded-xl shadow-md border border-gray-300"
//     title="Select Category"
//     options={["TV Shows", "Movies", "All Content"]}
//   />
// </div>

// <HorizontalCards data={trending} className="mt-1" />

       

//       <div className="my-10">
//         <h1 className="text-4xl font-extrabold text-gray-600 text-center my-5">
//           Experience the Magic of Cinema
//         </h1>
//         <Header data={wallpaper} />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;







import React, { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Footer from "./Footer";

const Home = () => {
  document.title = "ScreenScape";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const random = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(random);
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.error("Error fetching trending:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (!wallpaper) GetHeaderWallpaper();
    GetTrending();
  }, [wallpaper, category]);

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide text-center mt-4">
        ScreenScape
      </h1>

      {/* Side Navigation - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block">
        <Sidenav />
      </div>

      {/* Top Navigation */}
      <div className="w-full px-2 sm:px-4 md:px-6 mt-4">
        <Topnav />
      </div>

      {/* Trending Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 md:px-6 mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-600 text-center mb-4 sm:mb-0">
          Trending
        </h1>
        <Dropdown
          className="bg-gray-100 w-full sm:w-auto text-gray-800 text-base sm:text-lg font-semibold py-2 px-4 sm:px-6 rounded-xl shadow-md border border-gray-300"
          title="Select Category"
          options={["TV Shows", "Movies", "All Content"]}
        />
      </div>

      {/* Horizontal Cards */}
      <div className="w-full px-2 sm:px-4 md:px-6 mt-4">
        <HorizontalCards data={trending} />
      </div>

      {/* Main Header Section */}
      <div className="my-8 sm:my-10 px-2 sm:px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-600 text-center my-4 sm:my-5">
          Experience the Magic of Cinema
        </h1>
        <Header data={wallpaper} />
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;