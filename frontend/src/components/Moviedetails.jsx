

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import { asyncloadmovie } from "../store/actions/movieactions";
// import { removemovie } from "../store/reducers/movieSlice";
// import Loading from "../components/Loading";
// import HorizontalCards from "../components/partials/HorizontalCards";

// const Moviedetails = () => {
//   const { pathname } = useLocation();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { info } = useSelector((state) => state.Movie);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncloadmovie(id));
//     return () => {
//       dispatch(removemovie());
//     };
//   }, [dispatch, id]);

//   const renderWatchProviders = (type, title) => {
//     const providers = info.watchProviders?.[type];
//     if (providers?.length > 0) {
//       return (
//         <div className="mb-4">
//           <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//           <div className="flex flex-wrap gap-4">
//             {providers.map((provider, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img
//                   className="w-[5vh] h-[5vh] rounded-md object-cover"
//                   src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
//                   alt={provider.provider_name}
//                 />
//                 <span className="text-xs text-white mt-1">
//                   {provider.provider_name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   return info ? (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
//         backgroundSize: "cover",
//         backgroundPosition: "top",
//         backgroundRepeat: "no-repeat",
//       }}
//       className=" absolute w-screen h-screen px-[10%] py-10 overflow-auto"
//     >
      
//       <nav className="w-full flex items-center gap-8 text-xl text-white mb-8">
//         <Link
//           onClick={() => navigate(-1)}
//           className="hover:text-red-500 ri-arrow-left-line cursor-pointer"
//         ></Link>
//         <a
//           target="_blank"
//           href={info.detail.homepage}
//           rel="noopener noreferrer"
//           className="hover:text-red-500"
//         >
//           <i className="ri-links-line"></i>
//         </a>
//         <a
//           target="_blank"
//           href="https://www.themoviedb.org/"
//           rel="noopener noreferrer"
//           className="hover:text-red-500"
//         >
//           <i className="ri-global-fill"></i>
//         </a>
//         {info.externalIds?.imdb_id && (
//           <a
//             target="_blank"
//             href={`https://www.imdb.com/title/${info.externalIds.imdb_id}/`}
//             rel="noopener noreferrer"
//             className="hover:text-red-500"
//           >
//             IMDb
//           </a>
//         )}
//       </nav>

    
//       <div className="flex flex-wrap gap-8">
//         <img
//           className="shadow-lg h-[50vh] w-[30%] rounded-lg object-cover"
//           src={`https://image.tmdb.org/t/p/original${info.detail.backdrop_path|| info.detail.profile_path}`}
//           alt="Movie Backdrop"
//         />

        
//         <div className="flex-1 text-white">
//           <h1 className="text-4xl font-bold mb-2">
//             {info.detail.title || "Movie Title"}
//           </h1>
//           <p className="text-sm text-gray-300 mb-4">
//             Released: {info.detail.release_date.split("-")[0]}
//           </p>
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-lg font-semibold bg-yellow-400 text-black px-4 py-2 rounded-full">
//               {(info.detail.vote_average * 10).toFixed()}%
//             </span>
//             <span className="text-sm text-gray-300">
//               {info.detail.vote_count} Votes
//             </span>
//           </div>
//           <p className="text-sm text-gray-300 mb-6">{info.detail.overview}</p>
//           <Link
//             className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-flex items-center gap-2"
//             to={`${pathname}/trailer`}
//           >
//             <i className="ri-play-line"></i> Play Trailer
//           </Link>
//         </div>
//       </div>

      
//       <div className="mt-10">
//         {renderWatchProviders("flatrate", "Streaming Providers")}
//         {renderWatchProviders("rent", "Rent Providers")}
//         {renderWatchProviders("buy", "Buy Providers")}
//       </div>
      
    
//       <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-200 "/>
//       <h1 className="text-red-700 font-extrabold text-3xl mt-5 mb-5"> Recommendations Similar stuff</h1>
//       <HorizontalCards
      
//         data={
//            info.recommendations?.length>0 ?
//            info.recommendations:
//            info.simliar||[]
//         }
//       />
//       <Outlet/>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Moviedetails;





// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import { asyncloadmovie } from "../store/actions/movieactions";
// import { removemovie } from "../store/reducers/movieSlice";
// import Loading from "../components/Loading";
// import HorizontalCards from "../components/partials/HorizontalCards";

// const Moviedetails = () => {
//   const { pathname } = useLocation();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { info } = useSelector((state) => state.Movie);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncloadmovie(id));
//     return () => {
//       dispatch(removemovie());
//     };
//   }, [dispatch, id]);

//   const renderWatchProviders = (type, title) => {
//     const providers = info.watchProviders?.[type];
//     if (providers?.length > 0) {
//       return (
//         <div className="mb-4">
//           <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//           <div className="flex flex-wrap gap-4">
//             {providers.map((provider, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img
//                   className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md object-cover"
//                   src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
//                   alt={provider.provider_name}
//                 />
//                 <span className="text-xs text-white mt-1">{provider.provider_name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   return info ? (
//     <div
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
//         backgroundSize: "cover",
//         backgroundPosition: "top",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="absolute w-full min-h-screen px-6 sm:px-[10%] py-10 overflow-auto"
//     >
//       <nav className="w-full flex items-center gap-6 text-lg text-white mb-6">
//         <Link
//           onClick={() => navigate(-1)}
//           className="hover:text-red-500 ri-arrow-left-line cursor-pointer"
//         ></Link>
//         {info.detail.homepage && (
//           <a target="_blank" href={info.detail.homepage} rel="noopener noreferrer" className="hover:text-red-500">
//             <i className="ri-links-line"></i>
//           </a>
//         )}
//         <a target="_blank" href="https://www.themoviedb.org/" rel="noopener noreferrer" className="hover:text-red-500">
//           <i className="ri-global-fill"></i>
//         </a>
//         {info.externalIds?.imdb_id && (
//           <a
//             target="_blank"
//             href={`https://www.imdb.com/title/${info.externalIds.imdb_id}/`}
//             rel="noopener noreferrer"
//             className="hover:text-red-500"
//           >
//             IMDb
//           </a>
//         )}
//       </nav>

//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           className="shadow-lg h-64 sm:h-[50vh] w-full md:w-[30%] rounded-lg object-cover"
//           src={`https://image.tmdb.org/t/p/original${info.detail.backdrop_path || info.detail.profile_path}`}
//           alt="Movie Backdrop"
//         />

//         <div className="flex-1 text-white">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-2">{info.detail.title || "Movie Title"}</h1>
//           <p className="text-sm text-gray-300 mb-4">Released: {info.detail.release_date?.split("-")[0]}</p>
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-lg font-semibold bg-yellow-400 text-black px-4 py-2 rounded-full">
//               {(info.detail.vote_average * 10).toFixed()}%
//             </span>
//             <span className="text-sm text-gray-300">{info.detail.vote_count} Votes</span>
//           </div>
//           <p className="text-sm text-gray-300 mb-6">{info.detail.overview}</p>
//           <Link
//             className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-flex items-center gap-2"
//             to={`${pathname}/trailer`}
//           >
//             <i className="ri-play-line"></i> Play Trailer
//           </Link>
//         </div>
//       </div>

//       <div className="mt-8">
//         {renderWatchProviders("flatrate", "Streaming Providers")}
//         {renderWatchProviders("rent", "Rent Providers")}
//         {renderWatchProviders("buy", "Buy Providers")}
//       </div>

//       <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-200" />
//       <h1 className="text-red-700 font-extrabold text-2xl sm:text-3xl mt-5 mb-5">Recommendations & Similar Movies</h1>
//       <HorizontalCards data={info.recommendations?.length > 0 ? info.recommendations : info.simliar || []} />
//       <Outlet />
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Moviedetails;










import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie } from "../store/actions/movieActions";
import { removemovie } from "../store/reducers/movieSlice";
import Loading from "../components/Loading";
import HorizontalCards from "../components/partials/HorizontalCards";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.Movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  const renderWatchProviders = (type, title) => {
    const providers = info?.watchProviders?.[type];
    if (providers?.length > 0) {
      return (
        <div className="mb-4">
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-4">
            {providers.map((provider, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                  alt={provider.provider_name}
                />
                <span className="text-xs text-white mt-1">{provider.provider_name}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original${info?.detail?.backdrop_path || '/path/to/default-image.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="absolute w-full min-h-screen px-6 sm:px-[10%] py-10 overflow-auto"
    >
      <nav className="w-full flex items-center gap-6 text-lg text-white mb-6">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-red-500 ri-arrow-left-line cursor-pointer"
        ></Link>
        {info?.detail?.homepage && (
          <a target="_blank" href={info?.detail?.homepage} rel="noopener noreferrer" className="hover:text-red-500">
            <i className="ri-links-line"></i>
          </a>
        )}
        <a target="_blank" href="https://www.themoviedb.org/" rel="noopener noreferrer" className="hover:text-red-500">
          <i className="ri-global-fill"></i>
        </a>
        {info?.externalIds?.imdb_id && (
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info?.externalIds?.imdb_id}/`}
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            IMDb
          </a>
        )}
      </nav>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          className="shadow-lg h-64 sm:h-[50vh] w-full md:w-[30%] rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/original${info?.detail?.backdrop_path || info?.detail?.profile_path || '/path/to/default-image.jpg'}`}
          alt="Movie Backdrop"
        />

        <div className="flex-1 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{info?.detail?.title || "Movie Title"}</h1>
          <p className="text-sm text-gray-300 mb-4">Released: {info?.detail?.release_date?.split("-")[0]}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lg font-semibold bg-yellow-400 text-black px-4 py-2 rounded-full">
              {(info?.detail?.vote_average * 10).toFixed()}%
            </span>
            <span className="text-sm text-gray-300">{info?.detail?.vote_count} Votes</span>
          </div>
          <p className="text-sm text-gray-300 mb-6">{info?.detail?.overview}</p>
          <Link
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg inline-flex items-center gap-2"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-line"></i> Play Trailer
          </Link>
        </div>
      </div>

      <div className="mt-8">
        {renderWatchProviders("flatrate", "Streaming Providers")}
        {renderWatchProviders("rent", "Rent Providers")}
        {renderWatchProviders("buy", "Buy Providers")}
      </div>

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-200" />
      <h1 className="text-red-700 font-extrabold text-2xl sm:text-3xl mt-5 mb-5">Recommendations & Similar Movies</h1>
      <HorizontalCards data={info?.recommendations?.length > 0 ? info?.recommendations : info?.simliar || []} />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
