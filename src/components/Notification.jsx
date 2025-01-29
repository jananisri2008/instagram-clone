import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import user2 from '../assets/images/user2.jpeg';
import user3 from '../assets/images/user3.jpeg';

const Notification = () => {
  const suggestions = [
    { name: 'user1', img: user1 },
    { name: 'user2', img: user2 },
    { name: 'user3', img: user3 },
    { name: 'user4', img: user1 },
    { name: 'user2', img: user2 },
    { name: 'user3', img: user3 },
  ];

  return (
    <div className="py-6 px-4 flex justify-center">
      <div className="notification-content">
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
      </div>
    </div>
  );
};

export default Notification;
