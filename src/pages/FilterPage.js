import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../style/GameList.css';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function FilterPage() {
    const [searchParams] = useSearchParams();
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);


    const genre = searchParams.get('genre');
    const platform = searchParams.get('platform');
    const rating = searchParams.get('rating');
    const dates = searchParams.get('dates');

    useEffect(() => {
        setLoading(true);

        let url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=20`;
        
        if (genre) url += `&genres=${genre}`;
        if (platform) url += `&platforms=${platform}`;
        if (rating) url += `&rating=${rating}`;
        if (dates) url += `&dates=${dates}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            let filteredGames = data.results;

            if (rating > 0) {
                filteredGames = filteredGames.filter(game => 
                    game.rating >= parseFloat(rating) && 
                    game.rating <= parseFloat(rating) + 1
                );
            }

            setGames(filteredGames);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [genre, platform, rating, dates]);

    if (loading) return <p style={{ color: 'white' }}>Loading...</p>;

    return (
        <div>
        <h2 style={{ color: 'white' }}>Filtered Results</h2>
        <div className="game-list">
            {games.length === 0 && <p style={{ color: 'white' }}>No games found.</p>}
            {games.map(game => (
            <div key={game.id} className="game-card">
                <img src={game.background_image} alt={game.name} className="game-image" />
                <h3>{game.name}</h3>
                <p>Рейтинг: {game.rating}</p>
                <p>Жанри: {game.genres.map(g => g.name).join(', ')}</p>
            </div>
            ))}
        </div>
        </div>
    );
}

export default FilterPage;
