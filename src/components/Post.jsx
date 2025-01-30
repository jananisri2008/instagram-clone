
import React from 'react';
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9614ROApCdbYcwrsiZXkg1Z8hrIxKlAnSQ&s",
      caption: "100 likes",
    },
    {
      id: 2,
      username: "user2",
      useract:"username@2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0294c4W_bA1IAmha0GTpzQ397iK3uBz2pqCSkLjVWkJYx6wG2Eicywr7929OkPRLk3E&usqp=CAU",
      caption: "200 likes",
    },
    {
      id: 3,
      username: "user3",
      useract:"username@3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6u7Y4E6RPMNzqk0_25Qs4L-JwNcSu3Qj1Mmo7fMxffE84adCMeYrIMebmzlQ2t1EdbU&usqp=CAU",
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRboCvHOqHfUS2URUKHXB4LQOxZeDCZIpEdzA&s"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              
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

           
            <div className='flex items-center space-x-3 mb-3 w-full justify-center'>
              <img
                src={post.img}
                alt="Post"
                className="w-full h-auto object-cover"
              />
            </div>

           
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
