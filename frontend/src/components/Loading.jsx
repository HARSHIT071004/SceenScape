// import React from 'react';
// import loader from '/load.gif';

// const Loading = () => {
//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-ehite">
//       <img className="w-48 h-48 md:w-64 md:h-64 object-contain " src={loader} alt="Loading..." />
//     </div>
//   );
// }

// export default Loading;


import React from "react";
import loader from "/load.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <img
        className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
