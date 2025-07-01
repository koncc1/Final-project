import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/Filter.css';
import filterIcon from './filter.png';

function Filter() {
    const genre = '';
    const platform = '';
    const rating = '';
    const date = '';

    const location = useLocation();

    const navigate = useNavigate();

    const handleApply = () => {
        const params = new URLSearchParams();

        const genreIsSet = selectedGenre && selectedGenre !== '';
        const platformIsSet = selectedPlatform && selectedPlatform !== '';
        const ratingIsSet = selectedRating !== null && selectedRating > 0;
        const dateIsSet = selectedDate && selectedDate !== '';

        if (genreIsSet) params.append('genre', selectedGenre);
        if (platformIsSet) params.append('platform', selectedPlatform);
        if (ratingIsSet) params.append('rating', selectedRating);
        if (dateIsSet) params.append('dates', `${selectedDate}-01-01,${selectedDate}-12-31`);

        const hasAnyFilter = genreIsSet || platformIsSet || ratingIsSet || dateIsSet;

        if (hasAnyFilter) {
            navigate(`/filter-page?${params.toString()}`);
        } else {
            setSelectedGenre(null);
            setSelectedPlatform(null);
            setSelectedRating(0);
            setSelectedDate(null);
            navigate(`/`);
        }
    };


    const [isModalOpen, setModalOpen] = useState(false);
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [yearsList, setYearsList] = useState([]);

    const [selectedGenre, setSelectedGenre] = useState(genre);
    const [selectedPlatform, setSelectedPlatform] = useState(platform);
    const [selectedRating, setSelectedRating] = useState(rating);
    const [selectedDate, setSelectedDate] = useState(date);

    useEffect(() => {
        if(location.pathname === '/') {
            setSelectedGenre(null);
            setSelectedPlatform(null);
            setSelectedRating(null);
            setSelectedDate(null);
        }
        setModalOpen(false)
    }, [location.pathname]);

    const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

    useEffect(() => {
        fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setGenres(data.results));
        fetch(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setPlatforms(data.results));
    }, []);

    useEffect(() => {
        const yrs = [];
        for(let y = 2025; y >= 1980; y--) {
            yrs.push(y.toString());
        }
        setYearsList(yrs);
    }, []);

    useEffect(() => {
        handleApply();
    }, [selectedRating, selectedGenre, selectedPlatform, selectedDate]);

    return (
        <div>
            <img
                onClick={() => setModalOpen(!isModalOpen)}
                className="btn"
                src={filterIcon}
                alt="filter"
            />

            {isModalOpen && (
                <div className="modal">
                    <div>
                        <h3>Rating</h3>
                        <div className='f-container'>
                            <input className='slider'
                                type="range"
                                min="0"
                                max="5"
                                step="1"
                                value={selectedRating || 0}
                                onChange={(e) => setSelectedRating(Number(e.target.value))}
                            />
                            <p>{selectedRating || 'off'}</p>
                        </div>
                    </div>

                    <div>
                        <h3>Genres</h3>
                        <div className="f-container">
                            {genres.map((genre) => (
                                <p
                                key={genre.id}
                                onClick={() => setSelectedGenre(selectedGenre === genre.slug ? null : genre.slug)}
                                className={`opt ${selectedGenre === genre.slug ? 'active' : ''}`}>
                                {genre.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3>Platforms</h3>
                        <div className='f-container'>
                            {platforms.map((platform) => (
                            <p
                                key={platform.id}
                                onClick={() => setSelectedPlatform(selectedPlatform === platform.id ? null : platform.id)}
                                className={`opt ${selectedPlatform === platform.id ? 'active' : ''}`}>
                                {platform.name}
                            </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3>Released</h3>
                        <div className="f-container">
                            {yearsList.map((year) => (
                                <p
                                    key={year}
                                    onClick={() => setSelectedDate(selectedDate === year ? null : year)}
                                    className={`opt ${selectedDate === year ? 'active' : ''}`}
                                >
                                    {year}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Filter;
