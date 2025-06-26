import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/GameList.css';
import { games } from '../data/games';

function GameList() {
  const navigate = useNavigate();

  return (
    <div className="game-list">
      {games.map(game => (
<<<<<<< HEAD
        <div
          key={game.id}
          className="game-card"
          onClick={() => navigate(`/games/${game.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img src={game.image} alt={game.title} className="game-image" />
          <h3>{game.title}</h3>
          <p>Рейтинг: {game.rating}</p>
          <p>Жанри: {game.genre}</p>
=======
        <div key={game.id} className="game-card">
          <img src={game.background_image} alt={game.name} className="game-image" />
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
          <p>Genres: {game.genres.map(g => g.name).join(', ')}</p>
>>>>>>> bfaf3cdbfc5421a1b9581171ee3930450819e1c1
        </div>
      ))}
    </div>
  );
}

export default GameList;
