// import React from 'react';
// import user1 from '../assets/images/user1.jpeg';
// import user2 from '../assets/images/user2.jpeg';
// import user3 from '../assets/images/user3.jpeg';
// import user4 from '../assets/images/user4.jpeg';

// const Stories = () => {
//   const stories = [
//     { name: "User 1", img: user1 },
//     { name: "User 2", img: user2 },
//     { name: "User 3", img: user3 },
//     { name: "User 4", img: user4 },
//     { name: "User 5", img: user3 },
//     { name: "User 6", img: user4 },
//   ];

//   return (
//     <div className="bg-white-600 p-4 rounded-lg">
//       <div className="flex justify-center items-center space-x-1 overflow-x-hidden ml-[200px]">
//         {stories.map((story, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div className="relative p-1 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500">
//             <img
//               src={story.img}
//               alt={story.name}
//               className="rounded-full w-16 h-16 object-cover" 
//             />
//             </div>
//             <p className="text-xs mt-2 text-center">{story.name}</p>  
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stories;
import React from 'react';
const Stories = () => {
  const stories = [
    { name: "User 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBlYXx_sxeP_4qIzR2__k9Xhq6yQBkqSiw&s"},
    { name: "User 2", img: "https://cdn.pixabay.com/video/2022/03/03/109454-684501206_tiny.jpg" },
    { name: "User 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA296q6n00p6QQe5V3N8rKNoCVE3UYhnsYRA&s" },
    { name: "User 4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_axSqyyq11x5JqZ_rKbzYcbXLORVp-1nAw&s" },
    { name: "User 5", img: "https://cdn.pixabay.com/photo/2018/03/02/19/21/nature-3194001_1280.jpg" },
  ];

  return (
    <div className=" p-6 rounded-lg"> 
      <div className="flex justify-center items-center space-x-3 overflow-x-hidden ml-[200px]">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500"> 
              <a href='#' className='bg-white rounded-full p-1 block'>
              <img
                src={story.img}
                alt={story.name}
                className="rounded-full w-21 h-21 " 
              />
              </a>
              
                   
            </div>
            <p className="text-lg mt-2 text-center">{story.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
