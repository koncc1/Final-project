import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';
import SearchBar from '../components/SearchBar';
import Filter from './Filter';
import logo from  './logo.png'
import wish from './shopping-cart.png'
function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="container">
        <div className="left-block">
          <button onClick={toggleSidebar} className="burger">&#9776;</button>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
             <img   src={logo} alt="logo" width="70" height={70} />
            
          </Link>
        </div>
            
            
             
        <div className="right-block">
           <Link to="/cart"  className='wishlist-link'> <img   src={wish} alt="Логотип" width="30" height={30} /></Link>
          <Filter />
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
