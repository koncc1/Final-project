import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  const [genres, setGenres] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState({
    genres: false,
    platforms: false,
  });

  const toggleMenu = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

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
           
          </li>
          <li>
            <h3 onClick={() => toggleMenu('genres')} style={styles.dropdownTitle}>
              Genres 
              <span
                style={{
                  ...styles.arrow,
                  transform: isDropdownOpen.genres ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </h3>
            <div
              style={{
                ...styles.dropdownContent,
                maxHeight: isDropdownOpen.genres ? '820px' : '0px',
                pointerEvents: isDropdownOpen.genres ? 'auto' : 'none',
              }}
            >
              {genres.map(genre => (
                <Link
                  key={genre.id}
                  to={`/genre/${genre.slug}`}
                  onClick={toggleSidebar}
                  style={styles.link}>
                  {genre.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <h3 onClick={() => toggleMenu('platforms')} style={styles.dropdownTitle}>
              Platform 
              <span
                style={{
                  ...styles.arrow,
                  transform: isDropdownOpen.platforms ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </h3>
            <div
              style={{
                ...styles.dropdownContent,
                maxHeight: isDropdownOpen.platforms ? '220px' : '0px',
                pointerEvents: isDropdownOpen.platforms ? 'auto' : 'none',
              }}
            >
              <Link to="/platform/4" onClick={toggleSidebar} style={styles.link}>PC</Link>
              <Link to="/platform/18" onClick={toggleSidebar} style={styles.link}>PlayStation</Link>
              <Link to="/platform/1" onClick={toggleSidebar} style={styles.link}>Xbox</Link>
              <Link to="/platform/5" onClick={toggleSidebar} style={styles.link}>Mac</Link>
              <Link to="/platform/6" onClick={toggleSidebar} style={styles.link}>Linux</Link>
            </div>
          </li>
          <li>
            <h3>Else</h3>
            <Link to="/about" onClick={toggleSidebar} style={styles.link}>About us</Link>
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
    userSelect: 'none',
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
  dropdownTitle: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  dropdownContent: {
    overflow: 'hidden',
    transition: 'max-height 0.6s',
  },
  arrow: {
    display: 'inline-block',
    width: '0',
    height: '0',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '8px solid',
    transition: 'transform 0.3s ease',
  },
};

export default Sidebar;
