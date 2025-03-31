// import React from 'react'
// import notfound from '/404.gif'  

// const NotFound = () => {
//   return (
//     <div className='w-screen h-screen flex justify-center items-center bg-black'>
//       <img className="w-[30%] h-[50%] object-cover" src={notfound} alt="" />
//     </div>
//   )
// }

// export default NotFound;




import React from 'react';
import notfound from '/404.gif';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black p-4">
      <img 
        className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto object-cover" 
        src={notfound} 
        alt="Not Found" 
      />
    </div>
  );
};

export default NotFound;
