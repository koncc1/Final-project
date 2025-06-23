import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <nav style={{ ...styles.sidebar, left: isOpen ? 0 : '-300px' }}>
      <button onClick={toggleSidebar} style={styles.closeBtn}>&times;</button>
      <ul style={styles.list}>
        <li><Link to="/" onClick={toggleSidebar} style={styles.link}>Головна</Link></li>
        <li><Link to="/about" onClick={toggleSidebar} style={styles.link}>Про нас</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar} style={styles.link}>Контакти</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    top: 60,
    left: 0,
    width: '300px',
    height: '100%',
    backgroundColor: '#333',
    color: '#fff',
    paddingTop: '60px',
    transition: 'left .5s ease',
    zIndex: 1000,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
    fontSize: '30px',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    paddingLeft: '20px',
  },
  link: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 0',
    fontSize: '18px',
  },
};

export default Sidebar;
