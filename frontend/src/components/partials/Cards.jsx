
// import { useNavigate } from 'react-router-dom';
// import React from 'react';

// const Cards = ({ data, title }) => {
//     const navigate = useNavigate();

//     const handleClick = (item) => {
//         if (title === "movie") {
//             navigate(`/movie/details/${item.id}`);
//         } else if (title === "tv") {
//             navigate(`/tv/details/${item.id}`);
//         } else if (title === "person") {
//             navigate(`/person/details/${item.id}`);
//         }
//     };

//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {data.map((item) => (
//                 <div key={item.id} onClick={() => handleClick(item)} className="cursor-pointer">
//                     <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
//                     <p className="text-center">{item.title || item.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cards;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Cards = ({ data, title }) => {
//     const navigate = useNavigate();

//     const handleClick = (item) => {
//         if (title === "movie") {
//             navigate(`/movie/details/${item.id}`);
//         } else if (title === "tv") {
//             navigate(`/tv/details/${item.id}`);
//         } else if (title === "person") {
//             navigate(`/person/details/${item.id}`);
//         }
//     };

//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
//             {data.map((item) => (
//                 <div 
//                     key={item.id} 
//                     onClick={() => handleClick(item)}
//                     className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//                 >
//                     <img 
//                         src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
//                         alt={item.title || item.name} 
//                         className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="absolute bottom-4 left-4 right-4 text-white">
//                         <h2 className="text-lg font-bold">{item.title || item.name}</h2>
//                         <p className="text-sm opacity-80">{item.release_date || item.first_air_date}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cards;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ data, title }) => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        if (title === "movie") {
            navigate(`/movie/details/${item.id}`);
        } else if (title === "tv") {
            navigate(`/tv/details/${item.id}`);
        } else if (title === "person") {
            navigate(`/person/details/${item.id}`);
        }
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 md:p-4">
            {data.map((item) => (
                <div 
                    key={item.id} 
                    onClick={() => handleClick(item)}
                    className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                        alt={item.title || item.name} 
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                        <h2 className="text-sm sm:text-lg font-bold">{item.title || item.name}</h2>
                        <p className="text-xs sm:text-sm opacity-80">{item.release_date || item.first_air_date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
