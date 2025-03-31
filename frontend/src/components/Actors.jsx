
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Topnav from './partials/Topnav';
// import Dropdown from './partials/Dropdown';
// import axios from '../utils/axios';
// import Cards from './partials/Cards';
// import Loading from './Loading';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const Actors = () => {
//   document.title = 'Actors';

//   const navigate = useNavigate();
//   const [category, setCategory] = useState('popular');
//   const [person, setPerson] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const GetPerson = async () => {
//     try {
//       const { data } = await axios.get(`/person/${category}?page=${page}`);
//       if (data.results.length > 0) {
//         setPerson((prevState) => [...prevState, ...data.results]);
//         setPage((prevPage) => prevPage + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       setHasMore(false);
//     }
//   };

//   const refersHandler = async () => {
//     setPage(1);
//     setPerson([]);
//     setHasMore(true);
//     await GetPerson();
//   };

//   useEffect(() => {
//     refersHandler();
//   }, [category]);

//   return (
//     <div className="bg-white min-h-screen w-full p-6">
//       <div className="w-full flex flex-col gap-4">
//         <div className="flex items-center">
//           <i onClick={() => navigate(-1)} className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"></i>
//           <h1 className="text-3xl font-bold text-gray-900">
//           Iconic Faces <small className="ml-2 text-lg text-gray-600"></small>
//           </h1>
//         </div>
//         <Topnav />
//         <div className="flex justify-end">
//           <Dropdown title="Category" options={['popular']} func={(e) => setCategory(e.target.value)} />
//         </div>
//       </div>

//       {person.length > 0 ? (
//         <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasMore} loader={<h1 className="text-center text-gray-500">Loading...</h1>}>
//           <Cards data={person} title="Actors" />
//         </InfiniteScroll>
//       ) : (
//         <Loading />
//       )}
//     </div>
//   );
// };

// export default Actors;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Actors = () => {
  document.title = 'Actors';

  const navigate = useNavigate();
  const [category, setCategory] = useState('popular');
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setHasMore(false);
    }
  };

  const refersHandler = async () => {
    setPage(1);
    setPerson([]);
    setHasMore(true);
    await GetPerson();
  };

  useEffect(() => {
    refersHandler();
  }, [category]);

  return (
    <div className="bg-white min-h-screen w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="w-full flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-0">
          <i 
            onClick={() => navigate(-1)} 
            className="ri-arrow-left-line p-3 text-gray-700 text-xl sm:text-2xl cursor-pointer hover:text-gray-900 transition"
          ></i>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center sm:text-left">
            Iconic Faces 
            <small className="ml-2 text-base sm:text-lg md:text-xl text-gray-600"></small>
          </h1>
        </div>
        <div className="w-full">
          <Topnav />
        </div>
        <div className="flex justify-center sm:justify-end">
          <Dropdown 
            title="Category" 
            options={['popular']} 
            func={(e) => setCategory(e.target.value)}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {person.length > 0 ? (
        <InfiniteScroll 
          dataLength={person.length} 
          next={GetPerson} 
          hasMore={hasMore} 
          loader={<h1 className="text-center text-gray-500 text-sm sm:text-base py-4">Loading...</h1>}
          className="mt-6"
        >
          <Cards data={person} title="Actors" />
        </InfiniteScroll>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Actors;