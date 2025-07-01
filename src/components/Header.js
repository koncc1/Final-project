import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';
import SearchBar from '../components/SearchBar';
import Filter from './Filter';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="container">
        <div className="left-block">
          <button onClick={toggleSidebar} className="burger">&#9776;</button>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className='logo'>Game Store</h1>
          </Link>
        </div>

        <div className="right-block">
          <Filter />
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
