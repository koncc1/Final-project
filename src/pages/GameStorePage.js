import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const API_KEY = '97cbcafc437e4b9eb505fbeff95d71d3';

function GameStorePage({ wishlist, setWishlist }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setGame(data));

    fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setScreenshots(data.results.map(s => s.image)));
  }, [id]);

  useEffect(() => {
    if (game && wishlist.some(g => g.id === game.id)) {
      setWishlisted(true);
    }
  }, [game, wishlist]);

  useEffect(() => {
    if (!game) return;

    if (wishlisted && !wishlist.some(g => g.id === game.id)) {
      setWishlist(prev => [...prev, game]);
    } else if (!wishlisted && wishlist.some(g => g.id === game.id)) {
      setWishlist(prev => prev.filter(g => g.id !== game.id));
    }
  }, [wishlisted]);

  if (!game) return (
    <div style={styles.page}>
      <button onClick={() => navigate(from)} style={styles.backButton}>← Back</button>
      <div>Loading...</div>
    </div>
  );

  return (
    <div style={styles.page}>
      <button style={styles.backButton} onClick={() => navigate(from)}>← Back</button>
      <h1 style={styles.title}>{game.name}</h1>

      {game.discount && (
        <div style={styles.discountBanner}>Discount: {game.discount}</div>
      )}

      <img src={game.background_image} alt={game.name} style={styles.mainImage} />

      <h3 style={styles.heading}>Screenshots from the game</h3>
      <div style={styles.screenshotsContainer}>
        {screenshots.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} style={styles.screenshot} />
        ))}
      </div>

      <h2 style={styles.heading}>About the Game</h2>
      <p style={styles.text}>{game.description_raw || "No description available."}</p>

      <h3 style={styles.heading}>Genres</h3>
      <p style={styles.text}>{game.genres.map(g => g.name).join(', ')}</p>

      <h3 style={styles.heading}>Platforms</h3>
      <p style={styles.text}>{game.platforms.map(p => p.platform.name).join(', ')}</p>

      <h3 style={styles.heading}>Rating</h3>
      <p style={styles.text}>{'★'.repeat(Math.round(game.rating))}{'☆'.repeat(5 - Math.round(game.rating))}</p>

      <h3 style={styles.heading}>System Requirements</h3>
      <pre style={styles.pre}>
        {(game.platforms.find(p => p.platform.slug === 'pc')?.requirements?.minimum) || "No info"}
      </pre>

      <button style={styles.buyButton}>
        Buy
      </button>

      <button style={styles.wishlistButton} onClick={() => setWishlisted(!wishlisted)}>
        {wishlisted ? '✅ In Wishlist' : '💖 Add to Wishlist'}
      </button>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: 960,
    margin: 'auto',
    padding: 24,
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#121212',
    color: '#e0e0e0',
  },
  backButton: {
    background: 'transparent',
    color: '#00adee',
    border: 'none',
    fontSize: 16,
    marginBottom: 20,
    cursor: 'pointer',
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    color: '#fff',
  },
  discountBanner: {
    background: '#d32f2f',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 16,
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    maxHeight: 400,
    objectFit: 'cover',
    borderRadius: 12,
    marginBottom: 24,
  },
  heading: {
    color: '#00adee',
    marginTop: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.6,
    color: '#ccc',
    margin: '8px 0',
  },
  pre: {
    background: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    fontSize: 14,
    color: '#c0c0c0',
    overflowX: 'auto',
    marginTop: 8,
  },
  buyButton: {
    backgroundColor: '#00adee',
    color: 'white',
    padding: '14px 28px',
    marginRight: '10px',
    border: 'none',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    cursor: 'pointer',
  },
  wishlistButton: {
    backgroundColor: 'transparent',
    color: '#00adee',
    border: '1px solid #00adee',
    padding: '10px 20px',
    borderRadius: 8,
    fontSize: 16,
    marginTop: 16,
    cursor: 'pointer',
  },
  screenshot: {
    height: '540px',
    borderRadius: 12,
    marginRight: 10,
  },
  screenshotsContainer: {
    display: 'flex',
    overflowX: 'scroll',
    gap: '10px',
  }
};

export default GameStorePage;
