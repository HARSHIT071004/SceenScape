import React from 'react';
import loader from '/load.gif';

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-ehite">
      <img className="w-48 h-48 md:w-64 md:h-64 object-contain " src={loader} alt="Loading..." />
    </div>
  );
}

export default Loading;
