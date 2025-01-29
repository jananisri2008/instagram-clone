import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import user2 from '../assets/images/user2.jpeg';
import user3 from '../assets/images/user3.jpeg';
import user4 from '../assets/images/user4.jpeg';

const Stories = () => {
  const stories = [
    { name: "User 1", img: user1 },
    { name: "User 2", img: user2 },
    { name: "User 3", img: user3 },
    { name: "User 4", img: user4 },
    { name: "User 5", img: user3 },
    { name: "User 6", img: user4 },
  ];

  return (
    <div className="bg-white-600 p-4 rounded-lg">
      <div className="flex justify-center items-center space-x-1 overflow-x-hidden ml-[200px]">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={story.img}
              alt={story.name}
              className="w-25 h-25 rounded-full border-2 border-pink-500" 
            />
            <p className="text-xs mt-2 text-center">{story.name}</p>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
