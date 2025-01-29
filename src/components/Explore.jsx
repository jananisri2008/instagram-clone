
import React from 'react';
import user1 from '../assets/images/user1.jpeg';
import user2 from '../assets/images/user2.jpeg';
import user3 from '../assets/images/user3.jpeg';
import user4 from '../assets/images/user4.jpeg';
import user5 from '../assets/images/user5.jpeg';
import user6 from '../assets/images/user6.jpeg';
// import user7 from '../assets/images/user7.jpeg';

const Explore = () => {
  // Imported image assets for posts
  const posts = [
    { id: 1, img: user1 },
    { id: 2, img: user2 },
    { id: 3, img: user3 },
    { id: 4, img: user4 },
    { id: 5, img: user5 },
    { id: 6, img: user6 },
    // { id: 7, img: user7 },
  ];

  return (
    <div className="p-4 pt-24 max-w-5xl mx-auto"> 
      {/* <h1 className="text-3xl font-semibold mb-6 text-center">Explore</h1> */}

      {/* Grid  images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={post.img}
              alt={`Image ${post.id}`}
              className="w-full h-[250px] object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
