import React from 'react';

const Create = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md h-[550px] bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Create new post</h1> 
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRC6GA4MNcw-ZPYzvobeMqfPXVXLg11biGQ&s'
        alt='img1'
        className='ml-[100px]'/>      
        <p className="font-normal text-center text-lg mb-2">Drag photos and videos here</p>
        <button className="text-white bg-blue-400 rounded-2xl px-5 py-2 font-semibold ml-[100px]">select from computer</button>
      </div>
    </div>
  );
};

export default Create;
