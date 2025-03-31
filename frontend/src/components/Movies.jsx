

// import axios from '../utils/axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Topnav from './partials/Topnav';
// import Dropdown from './partials/Dropdown';
// import InfiniteScroll from "react-infinite-scroll-component";
// import Cards from './partials/Cards';
// import Loading from './Loading';

// const Movies = () => {
//   document.title = "Movies";

//   const navigate = useNavigate();
//   const [category, setCategory] = useState("now_playing");
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const GetMovies = async () => {
//     try {
//       const { data } = await axios.get(`/movie/${category}?page=${page}`);
//       if (data.results.length > 0) {
//         setMovies((prevState) => [...prevState, ...data.results]);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error fetching Movies:", error);
//       setHasMore(false);
//     }
//   };

//   const refersHandler = async () => {
//     setPage(1);
//     setMovies([]);
//     setHasMore(true);
//     await GetMovies();
//   };

//   useEffect(() => {
//     refersHandler();
//   }, [category]);

//   return (
//     <div className="bg-white min-h-screen w-full p-6">
//       <div className="w-full flex flex-col gap-4">
//         <div className="flex items-center">
//           <i
//             onClick={() => navigate(-1)}
//             className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"
//           ></i>
//           <h1 className="text-3xl font-bold text-gray-900">
//             MOVIES <small className="ml-2 text-lg text-gray-600"></small>
//           </h1>
//         </div>

//         <Topnav />

//         <div className="flex justify-end">
//           <Dropdown
//             title="Category"
//             options={['popular', 'top_rated', 'upcoming', 'now_playing']}
//             func={(e) => setCategory(e.target.value)}
//           />
//         </div>
//       </div>

//       {movies.length > 0 ? (
//         <InfiniteScroll
//           dataLength={movies.length}
//           next={GetMovies}
//           hasMore={hasMore}
//           loader={<h1 className="text-center text-gray-500">Loading...</h1>}
//         >
//           <Cards data={movies} title="movie" />
//         </InfiniteScroll>
//       ) : (
//         <Loading />
//       )}
//     </div>
//   );
// };

// export default Movies;




import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from './partials/Cards';
import Loading from './Loading';

const Movies = () => {
  document.title = "Movies";

  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Movies:", error);
      setHasMore(false);
    }
  };

  const refersHandler = async () => {
    setPage(1);
    setMovies([]);
    setHasMore(true);
    await GetMovies();
  };

  useEffect(() => {
    refersHandler();
  }, [category]);

  return (
    <div className="bg-white min-h-screen w-full px-4 sm:px-6 md:px-10 py-6 max-w-screen-lg mx-auto">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"
          ></i>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            MOVIES
          </h1>
        </div>

        <Topnav />

        <div className="flex justify-end">
          <Dropdown
            title="Category"
            options={['popular', 'top_rated', 'upcoming', 'now_playing']}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      {movies.length > 0 ? (
        <InfiniteScroll
          dataLength={movies.length}
          next={GetMovies}
          hasMore={hasMore}
          loader={<h1 className="text-center text-gray-500">Loading...</h1>}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Cards data={movies} title="movie" />
          </div>
        </InfiniteScroll>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Movies;
