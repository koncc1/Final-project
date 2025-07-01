import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GameList.css';
import { games } from '../data/games';

function GameList() {
  const navigate = useNavigate();

  return (
    <div className="game-list">
      {games.map(game => (
        <div
          key={game.id}
          className="game-card"
          onClick={() => navigate(`/games/${game.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img src={game.image} alt={game.title} className="game-image" />
          <h3>{game.title}</h3>
          <p>Rating: {game.rating}</p>
          <p>Genres: {game.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default GameList;
