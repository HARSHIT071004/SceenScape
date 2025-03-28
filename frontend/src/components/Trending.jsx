
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  document.title = 'Trending';

  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching trending:', error);
      setHasMore(false);
    }
  };

  const refersHandler = async () => {
    setPage(1);
    setTrending([]);
    setHasMore(true);
    await GetTrending();
  };

  useEffect(() => {
    refersHandler();
  }, [category, duration]);

  return (
    <div className="bg-white min-h-screen w-full p-6">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"
          ></i>
          <h1 className="text-3xl font-bold text-gray-900">
          Buzzing Now <small className="ml-2 text-lg text-gray-600"></small>
          </h1>
        </div>

        <Topnav />

        <div className="flex justify-between items-center">
          <Dropdown
            title="Category"
            options={['tv', 'movie', 'all']}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={['week', 'day']}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      {trending.length > 0 ? (
        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1 className="text-center text-gray-500">Loading...</h1>}
        >
          <Cards data={trending} title="movie" />
        </InfiniteScroll>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Trending;
