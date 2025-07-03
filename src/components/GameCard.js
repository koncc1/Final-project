import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/games/${game.id}`)}
    >
      <img src={game.image} alt={game.title} style={styles.gameImage} />
      <h3 style={styles.title}>{game.title}</h3>
      <p style={styles.decription}>Rating: {game.rating}</p>
      <p style={styles.decription}>Genres: {game.genre}</p>
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
      cursor: 'pointer',
    },
    gameImage: {
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
    decription: {
      fontSize: 14,
      color: '#ccc',
      marginBottom: 12,
    },
  };
  export default GameCard;
