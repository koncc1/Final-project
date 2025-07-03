import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/SideMenu';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';

import GenrePage from './pages/GenrePage';
import PlatformPage from './pages/PlatformPage';
import FilterPage from './pages/FilterPage';

import GameLibrary from './components/GameLibrary';
import GameStorePage from './pages/GameStorePage';
import GameList from './components/GameList';
import { games } from './data/games';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ marginTop: '60px', transition: 'margin-left 0.3s ease', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart wishlist={wishlist} />} />

          <Route path="/filter-page" element={<FilterPage />} />

          <Route path="/genre/:genreSlug" element={<GenrePage />} />
          <Route path="/platform/:platformSlug" element={<PlatformPage />} />

          <Route path="/games" element={<GameLibrary />} />
          <Route path="/games/:id" element={<GameStorePage games={games} wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path="/" element={<GameList />} />
          <Route path="/game/:id" element={<GameStorePage wishlist={wishlist} setWishlist={setWishlist} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
