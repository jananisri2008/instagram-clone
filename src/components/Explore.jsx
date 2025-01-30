
import React from 'react';

const Explore = () => {
  
  const posts = [
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
    { id: 1, img: "https://cdn.pixabay.com/video/2023/11/22/190144-887464241_tiny.jpg" },
    { id: 2, img: "https://png.pngtree.com/background/20230424/original/pngtree-this-is-a-picture-of-a-rooster-picture-image_2456680.jpg" },
    { id: 3, img: "https://png.pngtree.com/background/20230528/original/pngtree-photo-shot-of-a-rooster-on-a-colorful-background-picture-image_2773045.jpg" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgc7r5jO6wdwtdVwk6-_mEdvoUuKXcMCLKwDJ5QtSAWsJb2AVp8tP-8M0IhtAL4gsjKg&usqp=CAU" },
  ];

  return (
    <div className="p-4 pt-24 max-w-5xl mx-auto"> 
      {/* Grid  images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg shadow-md">
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
