
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {
  document.title = 'TV Shows';

  const navigate = useNavigate();
  const [category, setCategory] = useState('airing_today');
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching TV Shows:', error);
      setHasMore(false);
    }
  };

  const refersHandler = async () => {
    setPage(1);
    setTv([]);
    setHasMore(true);
    await GetTv();
  };

  useEffect(() => {
    refersHandler();
  }, [category]);

  return (
    <div className="bg-white min-h-screen w-full p-6">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"
          ></i>
          <h1 className="text-3xl font-bold text-gray-900">
           Must-See TV <small className="ml-2 text-lg text-gray-600"></small>
          </h1>
        </div>

        <Topnav />

        <div className="flex justify-end">
          <Dropdown
            title="Category"
            options={['top_rated', 'on_the_air', 'popular', 'airing_today']}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      {tv.length > 0 ? (
        <InfiniteScroll
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasMore}
          loader={<h1 className="text-center text-gray-500">Loading...</h1>}
        >
          <Cards data={tv} title="tv" />
        </InfiniteScroll>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Tvshows;
