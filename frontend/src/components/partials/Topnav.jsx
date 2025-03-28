import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const Getsearches = async () => {
    if (!query.trim()) {
      setSearches([]);
      return;
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      Getsearches();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center bg-white px-4 py-2 rounded-lg shadow-lg">
      <i className="text-3xl text-gray-700 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-full text-black ml-4 p-2 text-lg outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything..."
        aria-label="Search input"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-2xl text-gray-300 ri-close-line cursor-pointer hover:text-red-500 transition duration-200"
          aria-label="Clear search"
        ></i>
      )}
      {searches.length > 0 && (
        <div className="w-full max-h-[50vh] absolute top-[110%] left-0 bg-white rounded-lg shadow-2xl overflow-y-auto z-10 border border-gray-700">
          {searches.map((s, i) => (
            <Link
              key={i}
              to={`/${s.media_type}/details/${s.id}`}
              className="flex items-center p-3 text-black border-b border-gray-100 hover:bg-gray-200 transition duration-200"
            >
              <img
                src={s.poster_path ? `https://image.tmdb.org/t/p/w200${s.poster_path}` : "/no-images.jpeg"}
                alt={s.title || s.name || "No title"}
                className="w-14 h-14 object-cover rounded-md shadow-md"
              />
              <span className="ml-4 truncate text-lg font-medium">{s.original_title || s.name || s.title || s.original_name || "Untitled"}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
