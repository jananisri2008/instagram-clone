
// import React from 'react';
// import User1 from '../assets/images/user1.jpeg';
// import { FaTimes } from 'react-icons/fa'; 

// const Messages = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-3">
//              <img
//              src={User1}
//              alt="user"
//              className="w-16 h-16 rounded-full border-2 border-pink-500" 
//            />
//             <div>
//               <p className="font-semibold text-lg">Username@1</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaTimes size={20} className="text-gray-500 cursor-pointer" />
//           </div>
//         </div>

//         {/* Recent Section */}
//         <div className="flex justify-between mb-4">
//           <p className="font-bold text-lg">Messages</p>
//           <p className="font-bold text-lg">Requests</p>
//         </div>

//         {/* No Recent Messages Text */}
//         <div className="flex justify-center items-center min-h-[200px]">
//           <p className="text-gray-500">No message found.</p>
//         </div>

//         {/* Recent Messages */}
//         <div className="space-y-4 mt-6">
//           {/* Message 1 */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <div className="flex items-center space-x-3">
//               <div>
//                 <p className="font-semibold text-sm">Recent User</p>
//                 <p className="text-xs text-gray-500">Last message here</p>
//               </div>
//             </div>
//             <div className="text-sm text-gray-500">10:30 AM</div>
//           </div>

//           {/* Message 2 */}
//           <div className="flex items-center justify-between p-4 border-b">
//             <div className="flex items-center space-x-3">
//               <div>
//                 <p className="font-semibold text-sm">Another User</p>
//                 <p className="text-xs text-gray-500">Another last message</p>
//               </div>
//             </div>
//             <div className="text-sm text-gray-500">9:00 AM</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;
import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Messages = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="w-full max-w-md h-[550px] bg-white rounded-lg shadow-md p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1">
            <p className="font-bold text-lg">Username@1</p>
            <div>
              <RiArrowDropDownLine size={40} className="text-black-500 cursor-pointer" />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <HiOutlinePencilAlt size={30} className="text-black-500 cursor-pointer" />
          </div>
        </div>

       
        <div className="flex justify-center mb-0 mr-[320px]"> 
          <img
            src="https://api-private.atlassian.com/users/9bb0cbb0f4ab3ed57444e833b0223917/avatar"
            alt="User"
            className="w-20 h-20 rounded-full border"
          />
        </div>

        
        <p className="text-normal text-gray-400 py-0 px-2">
          Your note
        </p>

        {/* Recent Section */}
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-lg">Messages</p>
          <p className="font-semibold text-lg text-blue-500">Requests</p>
        </div>

        {/* No Recent Messages Text */}
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500">No message found.</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
