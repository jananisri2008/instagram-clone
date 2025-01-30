import React from 'react';
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { CgDetailsMore } from "react-icons/cg";

const Navigation = () => {
  const navItems = [
    { name: 'Home', icon: <GoHomeFill  size={20} />, path: '/' },
    { name: 'Search', icon: <FiSearch size={20} />, path: '/search' },
    { name: 'Explore', icon: <MdOutlineExplore  size={20} />, path: '/explore' },
    { name: 'Reels', icon: <GoVideo  size={20} />, path: '/reels' },  
    { name: 'Messages', icon: <BiMessageRoundedDetail  size={20} /> , path:'/messages'},
    { name: 'Notifications', icon: <FaRegHeart  size={20} />, path: '/notification' }, 
    { name: 'Create', icon: <FaRegPlusSquare  size={20} />, path:'/create' },
    { name: 'Profile', icon: <FaUserCircle  size={20} /> },
    { name: 'Threads', icon: <SiThreads  size={20} /> },
    { name: 'More', icon: <CgDetailsMore  size={20} /> },
  ];

  return (
    <div className="bg-white shadow-md w-64 flex flex-col items-start py-4 px-3 fixed top-0 left-0 h-screen">
     <div className="flex items-center justify-between w-full">
      <p className="font-semibold text-2xl italic space-x-2 mb-3 px-3 py-5">Instagram</p>
      </div>
      {/* Navigation buttons */}
      {navItems.map((item, index) => (
        {/* Use item path to route */},
        <Link to={item.path || '#'} key={index}>  
          <button className="flex items-center space-x-2 mb-1 text-black-700 hover:text-red-500 rounded p-2">
            {item.icon}
            <span className="text-lg">{item.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
