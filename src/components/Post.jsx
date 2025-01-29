
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

const Post = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      useract:"username@1",
      img: post1,
      caption: "100 likes",
    },
    {
      id: 2,
      username: "user2",
      useract:"username@2",
      img: post2,
      caption: "200 likes",
    },
    {
      id: 3,
      username: "user3",
      useract:"username@3",
      img: post3,
      caption: "300 likes",
    },
  ];

  return (
    <div className="py-6  flex justify-center">
      <div className="max-w-md w-full space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md px-3 py-4 w-full mx-auto flex flex-col items-center"
          >
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-3 w-full">
              <img
                src={user1}
                alt="User"
                className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
              />
              {/* <span className="font-semibold text-lg">{post.username}</span>
              <span className="font-normal text-base">{post.useract}</span> */}
              <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-semibold text-lg">{post.username}</p> 
            <p className="text-sm text-gray-500">{post.useract}</p>
          </div>
          
        </div>
              <div className="flex items-center justify-between mt-3 w-full ml-[230px]">
              < BsThreeDots size={30} className="cursor-pointer hover:text-red-700" />
              </div>
            </div>

            {/* Post Image */}
            {/* <div className="mt-4 w-full mx-auto flex justify-center"> */}
            <div className='flex items-center space-x-3 mb-3 w-full justify-center'>
              <img
                src={post.img}
                alt="Post"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Post Action Icons */}
            <div className="flex items-center justify-between mt-3 w-full">
              <div className="flex items-center space-x-6">
                <FaRegHeart  size={24} className="cursor-pointer hover:text-red-700" />
                <FaRegComment size={24} className="cursor-pointer hover:text-red-700" />
                <FiSend size={24} className="cursor-pointer hover:text-red-700" />
              </div>
              <FaRegBookmark  size={24} className="cursor-pointer hover:text-red-700" />
            </div>

            {/* Caption */}
            <p className="mt-2 text-sm text-left w-full">{post.caption}</p>
            {/* Comment */}
            <div className="flex items-center justify-between w-full">
              <div>
              <p className="text-sm text-gray-500 mt-2">Add a comment...</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
