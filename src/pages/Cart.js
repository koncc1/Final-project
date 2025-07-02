import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Cart({ wishlist }) {
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="game-list">
            {wishlist.map(game => (
                <div
                    key={game.id}
                    className="game-card"
                    onClick={() => navigate(`/games/${game.id}`, { state: { from: location.pathname } })}
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

export default Cart;