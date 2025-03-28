
// import React from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./components/Home";
// import Trending from "./components/Trending";
// import Popular from "./components/Popular";
// import Webseries from "./components/Webseries";
// import Moviedetails from "./components/Moviedetails";
// import Persondetails from "./components/Persondetails";
// import Tvdetails from "./components/Tvdetails";
// import Movies from "./components/Movies";
// import Trailer from "./components/partials/Trailer";
// import Actors from "./components/Actors";
// import Contact from "./components/Contact";
// import SideNav from "./components/partials/Sidenav";
// import Tvshows from "./components/Tvshows";
// import About from "./components/About";

// const App = () => {
//   const location = useLocation();
//   const isFullScreenPage = location.pathname === "/contact" || location.pathname === "/about"; 

//   return (
//     <div className={`bg-[#fff7f7] w-screen h-screen ${isFullScreenPage ? "" : "flex"}`}>
//       {!isFullScreenPage }
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/popular" element={<Popular />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/webseries" element={<Webseries />} />
//         <Route path="/person" element={<Actors />} />
//         <Route path="/people/details/:id" element={<Persondetails />} />
//         <Route path="/movie/details/:id" element={<Moviedetails />} />
//         <Route path="/movie/details/:id/trailer" element={<Trailer />} />
//         <Route path="/tv/details/:id" element={<Tvdetails />} />
//         <Route path="/tv/details/:id/trailer" element={<Trailer />} />
//         <Route path="/details/:media_type/:id" element={<Moviedetails />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/tv" element={<Tvshows />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/movie/details/:id" element={<Persondetails />} />

//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Webseries from "./components/Webseries";
import Moviedetails from "./components/Moviedetails";
import Persondetails from "./components/Persondetails";
import Tvdetails from "./components/Tvdetails";
import Movies from "./components/Movies";
import Trailer from "./components/partials/Trailer";
import Actors from "./components/Actors";
import Contact from "./components/Contact";
import SideNav from "./components/partials/Sidenav";
import Tvshows from "./components/Tvshows";
import About from "./components/About";
import Loading from "./components/Loading"; 
import Footer from "./components/Footer";
import Sidenav from "./components/partials/Sidenav";
import Services from "./components/services";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isFullScreenPage = location.pathname === "/contact" || location.pathname === "/about";

  useEffect(() => {
    console.log("Simulating API call...");
    setTimeout(() => {
      console.log("Data loaded!");
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`bg-[#fff7f7] w-screen h-screen ${isFullScreenPage ? "" : "flex"}`}>
      {!isFullScreenPage}
      {/* && <SideNav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/webseries" element={<Webseries />} />
        <Route path="/person" element={<Actors />} />
        <Route path="/people/details/:id" element={<Persondetails />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} />
        <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        <Route path="/details/:media_type/:id" element={<Moviedetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/details/:id" element={<Persondetails />} />
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/sidenav" element={<Sidenav/>}/>
        <Route path="/services" element={<Services/>}/>



      </Routes>
    </div>
  );
};

export default App;
