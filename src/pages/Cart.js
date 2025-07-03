import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function Cart({ wishlist }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (wishlist.length === 0) {
      setGames([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    Promise.all(
      wishlist.map(game =>
        fetch(`https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`)
          .then(res => res.json())
      )
    ).then(data => {
      setGames(data);
      setLoading(false);
    });
  }, [wishlist]);

  if (loading) return <p style={{ color: '#ccc' }}>Loading wishlist...</p>;

  return (
    <div className="game-list">
      {games.map(game => (
        <div
          key={game.id}
          className="game-card"
          onClick={() => navigate(`/game/${game.id}`, { state: { from: location.pathname } })}
        >
          <img src={game.background_image} alt={game.name} className="game-image" />
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
          <p>Genres: {game.genres.map(g => g.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
