import React from 'react';
import '../style/header.css';
import SearchBar from '../components/SearchBar';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="container">
        <div className="left-block">
          <button onClick={toggleSidebar} className="burger">&#9776;</button>
          <h1 className="logo">Game Store</h1>
        </div>

        <div className="right-block">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
