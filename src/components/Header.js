import React from 'react';


function Header({ toggleSidebar }) {
  return (
    <header style={styles.header}>
      <button onClick={toggleSidebar} style={styles.burger}>
        &#9776;
      </button>
      <h1 style={{ margin: 0 }}>Game Store</h1>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#222',
    color: '#fff',
    padding: '10px 20px',
  },
  burger: {
    fontSize: '24px',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    marginRight: '20px',
  },
};

export default Header;
