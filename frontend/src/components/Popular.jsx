

// import axios from '../utils/axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Topnav from './partials/Topnav';
// import Dropdown from './partials/Dropdown';
// import InfiniteScroll from "react-infinite-scroll-component";
// import Cards from './partials/Cards';
// import Loading from './Loading';

// const Popular = () => {
//     document.title = "Popular";

//     const navigate = useNavigate();
//     const [category, setCategory] = useState("movie");
//     const [popular, setPopular] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasMore, setHasMore] = useState(true);

//     const GetPopular = async () => {
//         try {
//             const { data } = await axios.get(`${category}/popular?page=${page}`);
//             if (data.results.length > 0) {
//                 setPopular((prevState) => [...prevState, ...data.results]);
//                 setPage((prevPage) => prevPage + 1);
//             } else {
//                 setHasMore(false);
//             }
//         } catch (error) {
//             console.error("Error fetching popular:", error);
//             setHasMore(false);
//         }
//     };

//     const refersHandler = async () => {
//         setPage(1);
//         setPopular([]);
//         setHasMore(true);
//         await GetPopular();
//     };

//     useEffect(() => {
//         refersHandler();
//     }, [category]);

//     return (
//         <div className="bg-white min-h-screen w-full p-6">
//             <div className="w-full flex flex-col gap-4">
//                 <div className="flex items-center">
//                     <i onClick={() => navigate(-1)} className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"></i>
//                     <h1 className="text-3xl font-bold text-gray-900">
//                     Blockbuster Hits <small className="ml-2 text-lg text-gray-600"></small>
//                     </h1>
//                 </div>

//                 <Topnav />

//                 <div className="flex justify-end">
//                     <Dropdown
//                         title="Category"
//                         options={['tv', 'movie']}
//                         func={(e) => setCategory(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {popular.length > 0 ? (
//                 <InfiniteScroll
//                     dataLength={popular.length}
//                     next={GetPopular}
//                     hasMore={hasMore}
//                     loader={<h1 className="text-center text-gray-500">Loading...</h1>}
//                 >
// <Cards data={popular} title="movie" />
// </InfiniteScroll>
//             ) : (
//                 <Loading />
//             )}
//         </div>
//     );
// };

// export default Popular;




import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from './partials/Cards';
import Loading from './Loading';

const Popular = () => {
    document.title = "Popular";

    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
                setPage((prevPage) => prevPage + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching popular:", error);
            setHasMore(false);
        }
    };

    const refersHandler = async () => {
        setPage(1);
        setPopular([]);
        setHasMore(true);
        await GetPopular();
    };

    useEffect(() => {
        refersHandler();
    }, [category]);

    return (
        <div className="bg-white min-h-screen w-full p-4 sm:p-6">
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center">
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line p-3 text-gray-700 text-2xl cursor-pointer"></i>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Blockbuster Hits <small className="ml-2 text-lg text-gray-600"></small>
                    </h1>
                </div>

                <Topnav />

                <div className="flex justify-end">
                    <Dropdown
                        title="Category"
                        options={['tv', 'movie']}
                        func={(e) => setCategory(e.target.value)}
                    />
                </div>
            </div>

            {popular.length > 0 ? (
                <InfiniteScroll
                    dataLength={popular.length}
                    next={GetPopular}
                    hasMore={hasMore}
                    loader={<h1 className="text-center text-gray-500">Loading...</h1>}
                >
                    <Cards data={popular} title="movie" />
                </InfiniteScroll>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Popular;
