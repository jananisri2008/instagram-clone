// import React from 'react';
// import user1 from '../assets/images/user1.jpeg';
// import user2 from '../assets/images/user2.jpeg';
// import user3 from '../assets/images/user3.jpeg';

// const Notification = () => {
//   const suggestions = [
//     { name: 'user1', img: user1 },
//     { name: 'user2', img: user2 },
//     { name: 'user3', img: user3 },
//     { name: 'user4', img: user1 },
//     { name: 'user2', img: user2 },
//     { name: 'user3', img: user3 },
//   ];

//   return (
//     <div className="py-6 px-4 flex justify-center">
//       <div className="notification-content">
//         <div className="flex items-center space-x-3 mb-6">
//           <img
//             src={user1} 
//             alt="User"
//             className="w-12 h-12 rounded-full"
//           />
//           <div className="flex items-center justify-between w-full">
//             <div>
//               <p className="font-semibold text-lg">Username</p>
//               <p className="text-sm text-gray-500">Username@1</p>
//             </div>
//             <button className="text-blue-500 bg-gray-400 text-sm">Following</button>
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="flex items-center justify-between">
//             <h2 className="font-semibold text-gray-800 text-lg">Yesterday</h2>
//             {/* <button className="text-blue-500 text-sm">See All</button> */}
//           </div>
//           <div className="mt-4 space-y-3">
//             {suggestions.map((user, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={user.img}
//                     alt={user.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold">{user.name}</p>
//                     <p className="text-xs text-gray-500">Suggested for you</p>
//                   </div>
//                 </div>
//                 <button className="text-blue-500 text-sm">Follow</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notification;
import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import user2 from '../assets/images/user2.jpeg';
import user3 from '../assets/images/user3.jpeg';

const Notification = () => {
  const suggestions = {
    today: [
      { name: 'user1', img: user1 },
      { name: 'user2', img: user2 },
    ],
    yesterday: [
      { name: 'user3', img: user3 },
      { name: 'user4', img: user1 },
    ],
    thisWeek: [
      { name: 'user2', img: user2 },
      { name: 'user3', img: user3 },
    ],
  };

  const renderSuggestions = (category, suggestionsList) => {
    return (
      <>
        <h2 className="font-semibold text-gray-800 text-lg">{category}</h2>
        <div className="mt-4 space-y-3">
          {suggestionsList.map((user, index) => (
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
              <button className="text-black-900 bg-gray-100  rounded-2xl px-5 py-2 font-semibold ml-[50px]">Following</button>
            </div>
          ))}
        </div>
        
        <hr className="my-4 border-gray-300" />
      </>
    );
  };

  return (
    <div className="py-6 px-4 flex justify-center">
      <div className="notification-content">
        <div className="flex items-center space-x-3 mb-6">
          
          <div className="flex items-center justify-between w-full">
            <div>
              
              <p className="font-bold text-3xl">Notifications</p> 
            </div>
            
          </div>
        </div>

        <div className="p-4">
          {renderSuggestions("Today", suggestions.today)}
          {renderSuggestions("Yesterday", suggestions.yesterday)}
          {renderSuggestions("This Week", suggestions.thisWeek)}
        </div>
      </div>
    </div>
  );
};

export default Notification;
