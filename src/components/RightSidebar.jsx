
import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import user2 from '../assets/images/user2.jpeg';
import user3 from '../assets/images/user3.jpeg';
import { FaRegCopyright } from "react-icons/fa";

const RightSidebar = () => {
  const suggestions = [
    { name: 'user1', img: user1 },
    { name: 'user2', img: user2 },
    { name: 'user3', img: user3 },
    { name: 'user4', img: user1 },
    { name: 'user2', img: user2 },
    { name: 'user3', img: user3 },
  ];

  return (
    <div className="hidden lg:block w-80 p-4 space-y-4">
      {/* User Profile Section */}
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={user1}
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-semibold text-lg">Username</p> 
            <p className="text-sm text-gray-500">Username@1</p>
          </div>
          <button className="text-blue-500 text-sm">Switch</button>
        </div>
      </div>

      {/* Suggested Users Section */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 text-lg">Suggestions for you</h2>
          <button className="text-blue-500 text-sm">See All</button>
        </div>
        <div className="mt-4 space-y-3">
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">Suggested for you</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm">Follow</button>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Footer Section */}
      <div className="bg-white p-4 text-base text-left text-gray-500">
        <p className="text-sm">
          About • Help • Press • API • Privacy • Terms • Locations • Language • Meta Verified
        </p>
      </div>

      {/* Copyright Section */}
      <div className="bg-white p-1 flex items-center space-x-1 text-base text-left text-gray-500">
        <FaRegCopyright size={12} /> 
        <p>2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default RightSidebar;
