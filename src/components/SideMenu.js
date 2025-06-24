import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const [genres, setGenres] = useState([]);

  const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => setGenres(data.results));
  }, []);

  return (
    <nav style={{ ...styles.sidebar, left: isOpen ? 0 : '-300px' }}>
      <button onClick={toggleSidebar} style={styles.closeBtn}>&times;</button>
      
      <div style={styles.scrollContent}>
        <ul style={styles.list}>
          <li>
            <h3>Important</h3>
            <Link to="/" onClick={toggleSidebar} style={styles.link}>Store</Link>
            <Link to="/cart" onClick={toggleSidebar} style={styles.link}>Cart</Link>
            <Link to="/filter" onClick={toggleSidebar} style={styles.link}>Filter</Link>
          </li>
          <li>
            <h3>Genres</h3>
            {genres.map(genre => (
              <Link 
                key={genre.id}
                to={`/genre/${genre.slug}`}
                onClick={toggleSidebar}
                style={styles.link}>
                  {genre.name}
              </Link>
            ))}
          </li>
          <li>
            <h3>Platform</h3>
            <Link to="/windows" onClick={toggleSidebar} style={styles.link}>Windows</Link>
            <Link to="/linux-mac" onClick={toggleSidebar} style={styles.link}>Linux, Mac</Link>
            <Link to="/ps-xbox" onClick={toggleSidebar} style={styles.link}>PS, Xbox</Link>
          </li>
          <li>
            <h3>Else</h3>
            <Link to="/about" onClick={toggleSidebar} style={styles.link}>About us</Link>
            <Link to="/contact" onClick={toggleSidebar} style={styles.link}>Contacts</Link>
          </li>
        </ul>
      </div>
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
    paddingTop: '60px',
    backgroundColor: '#333',
    color: '#fff',
    transition: 'left .5s ease',
    zIndex: 1000,
  },
  scrollContent: {
    height: '80%',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    paddingLeft: '20px',
    paddingRight: '20px',
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
    marginLeft: '10px',
  },
};

export default Sidebar;
