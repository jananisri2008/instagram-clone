import React from 'react';
import { FaTimes } from 'react-icons/fa'; 

const Search = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md h-[550px] bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Search</h1>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pl-10 border-border-none bg-gray-200 rounded-lg "
          />
         
          <FaTimes
            size={20}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            // to clear input here
            onClick={() => console.log('Clear search')} 
          />
        </div>

       
        <p className="font-bold text-lg mb-2">Recent</p>

        
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500">No recent searches.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
