import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/GameList.css';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)
      .then(res => res.json())
      .then(data => {
        const shuffled = shuffleArray(data.results);
        const selected = shuffled.slice(0, 12);
        setGames(selected);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: '#ccc' }}>Loading...</p>;

  return (
    <div className="game-list">
      {games.map(game => (
        <Link
          key={game.id}
          to={`/game/${game.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="game-card">
            <img src={game.background_image} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <p>Genres: {game.genres.map(g => g.name).join(', ')}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GameList;
