
import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import post1 from '../assets/images/post1.png';
import post2 from '../assets/images/post2.png';
import post3 from '../assets/images/post3.png';
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa6";
import { IoVolumeMuteSharp } from "react-icons/io5";

const Reels = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      useract: "username@1",
      img: post1,
      caption: "100 likes",
    },
    {
      id: 2,
      username: "user2",
      useract: "username@2",
      img: post2,
      caption: "200 likes",
    },
    {
      id: 3,
      username: "user3",
      useract: "username@3",
      img: post3,
      caption: "300 likes",
    },
  ];

  return (
    <div className="flex justify-center ml-[200px]">
      <div className="max-w-md w-full">
        {posts.map((post) => (
          <div key={post.id} className="flex py-4 px-3 w-full mx-auto">
        
            <div className="relative">
              <img
                src={post.img}
                alt="Post"
                className="w-[300px] h-[550px] object-cover rounded-2xl"
              />

             
              <div className="absolute top-0 right-0 m-2">
                <IoVolumeMuteSharp size={30} className="text-white" />
              </div>

              
              <div className="flex items-center space-x-3 absolute bottom-10 left-4">
                <img
                  src={user1}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-white">
                  <p className="font-semibold text-lg">{post.username}</p>
                  <p className="text-sm text-gray-300">{post.useract}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col absolute right-0 top-1/3 space-y-5 mr-[550px] ">
              <FaRegHeart size={30} className="cursor-pointer hover:text-red-500" />
              <p className="text-normal text-gray-700">3.0k</p>
              <FaRegComment size={30} className="cursor-pointer hover:text-red-500" />
              <p className="text-normal text-gray-700">1,234</p>
              <FiSend size={30} className="cursor-pointer hover:text-red-500" />
              <FaRegBookmark size={30} className="cursor-pointer hover:text-red-500" />
              <BsThreeDots size={30} className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
