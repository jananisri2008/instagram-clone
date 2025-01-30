import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Stories from './components/Stories';
import Post from './components/Post';
import RightSidebar from './components/RightSidebar';
import Explore from './components/Explore';
import Search from './components/Search';
import Reels from './components/Reels';
import Messages from './components/Messages';
import Notification from './components/Notification';
import Create from './components/Create';
const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Navigation />
        <div className="flex-grow bg-white-100 px-6 py-4 space-y-8">
          <Routes>
            <Route path="/" element={
              <>
                <div className="mb-6">
                  <Stories />
                </div>
                <div className='ml-[250px]'>
                  <Post />
                </div>
              </>
            } />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/create" element={<Create/>} />
            
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </Router>
  );
};

export default App;
