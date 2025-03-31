// import React from 'react'

// const Dropdown = ({ title, options, func }) => {
//     return (
//         <div className="select">
//             <select defaultValue="0" onChange={func} name="format" id="format">
//                 <option value="0" disabled>
//                     {title}
//                 </option>
//                 {options.map((o, i) => (
//                     <option key={i} value={o}>
//                         {o.toUpperCase()}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };

// export default Dropdown;




import React from 'react';

const Dropdown = ({ title, options, func }) => {
    return (
        <div className="relative w-full max-w-xs">
            <select 
                defaultValue="0" 
                onChange={func} 
                name="format" 
                id="format"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="0" disabled>
                    {title}
                </option>
                {options.map((o, i) => (
                    <option key={i} value={o}>
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
