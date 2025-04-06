
// import React, { useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
// import Loading from "./Loading";
// import HorizontalCards from "./partials/HorizontalCards";
// import { asyncloadTv } from "../store/actions/tvActions";
// import { removetv } from "../store/reducers/TvSlice";

// const TvDetails = () => {
//   const { pathname } = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const tvDetails = useSelector((state) => state.tvDetails);
//   const info = useMemo(() => tvDetails?.info || {}, [tvDetails]);

//   useEffect(() => {
//     dispatch(asyncloadTv(id));
//     return () => {
//       dispatch(removetv());
//     };
//   }, [id, dispatch]);

//   if (!info || !info.detail) return <Loading />;

//   return (
//     <div
//       style={{
//         background: `
//           linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
//           url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path})
//         `,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="relative w-screen h-[180vh] px-[10%] text-white"
//     >
//       <nav className="w-full text-zinc-300 flex items-center gap-4">
//         <Link
//           onClick={() => navigate(-1)}
//           className="py-2 px-5 bg-gray-900 text-white hover:bg-gray-700 rounded-md"
//         >
//           Back
//         </Link>
//         {info.externalid?.wikidata_id && (
//           <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} rel="noopener noreferrer">
//             <i className="ri-earth-fill"></i>
//           </a>
//         )}
//         {info.externalid?.imdb_id && (
//           <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`} rel="noopener noreferrer">
//             IMDb
//           </a>
//         )}
//       </nav>

//       <div className="w-full flex gap-x-8 mt-6">
//         <img
//           className="shadow-lg h-[40vh] object-cover rounded-lg"
//           src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
//           alt="TV Poster"
//         />
//         <div className="content mr-10">
//           <h1 className="text-5xl font-black text-white">
//             {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
//             {info.detail.first_air_date && (
//               <small className="text-xl font-bold text-zinc-200">({info.detail.first_air_date.split('-')[0]})</small>
//             )}
//           </h1>
//           <div className="flex text-zinc-100 items-center gap-x-5 gap-y-10">
//             {info.detail.vote_average && (
//               <span className="absolute right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
//                 {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
//               </span>
//             )}
//             <h1 className="font-semibold text-2xl">User Score</h1>
//             <h1>{info.detail.first_air_date}</h1>
//             <h1>{info.detail.genres?.map((g) => g.name).join(", ") || "N/A"}</h1>
//             <h1>{info.detail.runtime ? `${info.detail.runtime} min` : "N/A"}</h1>
//           </div>
//           <h1 className="text-5xl font-black text-white">{info.detail.tagline || ""}</h1>
//           <p>{info.detail.overview || "No overview available."}</p>
//           <h1>Translated Titles:</h1>
//           <p>{info.translations?.join(", ") || "No translations available"}</p>
//           <Link className="bg-slate-600 px-9" to={`${pathname}/trailer`}>
//             <i className="text-xl ri-play-fill mr-3"></i>
//             Play Trailer
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// };

// export default TvDetails;




import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import Loading from "./Loading";

import { asyncloadTv } from "../store/actions/tvActions";
import { removetv } from "../store/reducers/tvSlice";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const tvDetails = useSelector((state) => state.tvDetails);
  const info = useMemo(() => tvDetails?.info || {}, [tvDetails]);

  useEffect(() => {
    dispatch(asyncloadTv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);

  if (!info || !info.detail) return <Loading />;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-screen px-6 sm:px-[10%] text-white"
    >
      <nav className="w-full text-zinc-300 flex items-center gap-4 mt-4">
        <Link
          onClick={() => navigate(-1)}
          className="py-2 px-4 bg-gray-900 text-white hover:bg-gray-700 rounded-md"
        >
          Back
        </Link>
        {info.externalid?.wikidata_id && (
          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} rel="noopener noreferrer">
            <i className="ri-earth-fill text-2xl"></i>
          </a>
        )}
        {info.externalid?.imdb_id && (
          <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`} rel="noopener noreferrer">
            <i className="ri-imdb-fill text-2xl"></i>
          </a>
        )}
      </nav>

      <div className="w-full flex flex-col sm:flex-row gap-8 mt-6">
        <img
          className="shadow-lg h-[40vh] sm:h-[50vh] object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt="TV Poster"
        />
        <div className="content">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            {info.detail.first_air_date && (
              <small className="text-lg sm:text-xl font-bold text-zinc-200"> ({info.detail.first_air_date.split('-')[0]})</small>
            )}
          </h1>
          <div className="flex flex-wrap text-zinc-100 items-center gap-3 sm:gap-5 mt-3">
            {info.detail.vote_average && (
              <span className="bg-yellow-600 text-white rounded-full text-lg font-semibold w-12 h-12 flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
              </span>
            )}
            <h1 className="font-semibold text-xl sm:text-2xl">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres?.map((g) => g.name).join(", ") || "N/A"}</h1>
            <h1>{info.detail.runtime ? `${info.detail.runtime} min` : "N/A"}</h1>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black mt-4">{info.detail.tagline || ""}</h1>
          <p className="mt-2">{info.detail.overview || "No overview available."}</p>
          <h1 className="mt-4 text-lg font-semibold">Translated Titles:</h1>
          <p>{info.translations?.join(", ") || "No translations available"}</p>
          <Link className="bg-slate-600 px-6 py-2 mt-4 inline-block rounded-md hover:bg-slate-700" to={`${pathname}/trailer`}>
            <i className="text-xl ri-play-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TvDetails;
