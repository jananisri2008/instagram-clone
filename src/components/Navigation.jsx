import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaCompass, FaVideo, FaEnvelope, FaBell, FaPlusCircle, FaUser, FaHashtag, FaEllipsisH } from 'react-icons/fa';
// import instagramLogo from '../assets/images/instagram-logo.png';

const Navigation = () => {
  const navItems = [
    { name: 'Home', icon: <FaHome size={20} />, path: '/' },
    { name: 'Search', icon: <FaSearch size={20} />, path: '/search' },
    { name: 'Explore', icon: <FaCompass size={20} />, path: '/explore' },
    { name: 'Reels', icon: <FaVideo size={20} />, path: '/reels' },  
    { name: 'Messages', icon: <FaEnvelope size={20} /> , path:'/messages'},
    { name: 'Notifications', icon: <FaBell size={20} />, path: '/notification' }, 
    { name: 'Create', icon: <FaPlusCircle size={20} /> },
    { name: 'Profile', icon: <FaUser size={20} /> },
    { name: 'Threads', icon: <FaHashtag size={20} /> },
    { name: 'More', icon: <FaEllipsisH size={20} /> },
  ];

  return (
    <div className="bg-white shadow-md w-64 flex flex-col items-start py-4 px-3 fixed top-0 left-0 h-screen">
      {/* Instagram logo */}
      {/* <img src={instagramLogo} alt="Instagram Logo" className="w-2/3 mb-1 bg-white-800" /> */}
      <div className="flex items-center justify-between w-full">
      <p className="font-semibold text-2xl italic space-x-2 mb-3 px-3 py-5">Instagram</p>
      </div>
      {/* Navigation buttons */}
      {navItems.map((item, index) => (
        {/* Use item path to route */},
        <Link to={item.path || '#'} key={index}>  
          <button className="flex items-center space-x-2 mb-3 text-black-700 hover:text-red-900 hover:bg-slate-300 rounded p-2">
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
