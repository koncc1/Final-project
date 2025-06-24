import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/SideMenu';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import GameLibrary from './components/GameLibrary';
import GameStorePage from './pages/GameStorePage';
import { games } from './data/games';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ transition: 'margin-left 0.3s ease', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Нова сторінка список ігор */}
          <Route path="/games" element={<GameLibrary />} />

          {/* Детальна сторінка гри */}
          <Route path="/games/:id" element={<GameStorePage games={games} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;