import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/GameList.css';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function GenrePage() {
  const { genreSlug } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreSlug}&page_size=20`)
      .then(res => res.json())
      .then(data => {
        setGames(data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [genreSlug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 style={{ color: 'white' }}>Game genre: {genreSlug}</h2>
      <div className="game-list">
        {games.length === 0 && <p>No games found</p>}
        {games.map(game => (
            <div key={game.id} className="game-card" onClick={() => navigate(`/games/${game.id}`)}>
            <img src={game.background_image} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <p>Genre: {game.genres.map(g => g.name).join(', ')}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default GenrePage;