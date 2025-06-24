import React from 'react';


function GameCard({ game, onSelect }) {
  return (
    <div style={styles.card}>
      <img src={game.image} alt={game.title} style={styles.image} />
      <h3 style={styles.title}>{game.title}</h3>
      <p style={styles.description}>{game.description}</p>
      <button style={styles.button} onClick={() => onSelect(game)}>Детальніше</button>
    </div>
  );
}


const styles = {
    card: {
      backgroundColor: '#1e1e1e',
      borderRadius: 12,
      padding: 16,
      margin: 12,
      width: 260,
      color: '#fff',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    image: {
      width: '100%',
      height: 150,
      objectFit: 'cover',
      borderRadius: 8,
      marginBottom: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#ccc',
      marginBottom: 12,
    },
    button: {
      backgroundColor: '#00adee',
      color: '#fff',
      padding: '10px 16px',
      border: 'none',
      borderRadius: 6,
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
  export default GameCard;