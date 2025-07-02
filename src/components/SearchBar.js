import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SearchBar.css';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${query}&page_size=5`)
        .then(res => res.json())
        .then(data => setResults(data.results || []));
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        onFocus={() => query.length > 1 && setShowDropdown(true)}
      />

      {showDropdown && results.length > 0 && (
        <div className="search-dropdown">
          {results.map(game => (
            <div key={game.id} className="dropdown-item" onClick={() => navigate(`/games/${game.id}`)}>
              <img src={game.background_image} alt={game.name} />
              <span>{game.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
