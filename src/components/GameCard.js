import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div
      className="game-card"
      onClick={() => navigate(`/games/${game.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={game.image} alt={game.title} className="game-image" />
      <h3>{game.title}</h3>
      <p>Rating: {game.rating}</p>
      <p>Genres: {game.genre}</p>
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
