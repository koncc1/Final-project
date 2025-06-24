import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Sidebar from './components/SideMenu';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GenrePage from './pages/GenrePage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (

    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ marginTop: '60px', transition: 'margin-left 0.3s ease', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/genre/:genreSlug" element={<GenrePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
