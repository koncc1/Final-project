import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


function GameStorePage({ games, wishlist, setWishlist }) {
  const { id } = useParams();
  const game = games.find((g) => g.id === parseInt(id));

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [wishlisted, setWishlisted] = useState(false);

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
    <div>
      <button onClick={() => navigate(from)}>← Back</button>
      <div>Game not found.</div> 
    </div>
  );

  return (
    <div style={styles.page}>
      <button style={styles.backButton} onClick={() => navigate(from)}>← Back</button>
      <h1 style={styles.title}>{game.title}</h1>

      {game.discount > 0 && (
        <div style={styles.discountBanner}>DISCOUNT -{game.discount}%!</div>
      )}

      <img src={game.image} alt={game.title} style={styles.mainImage} />

      <h3 style={styles.heading}>Screenshots from the game</h3>
      <div style={styles.screenshotsContainer}>
        {game.screenshots?.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index + 1}`} style={styles.screenshot} />
        ))}
      </div>

      <h2 style={styles.heading}>About the Game</h2>
      <p style={styles.text}>{game.description}</p>

      <h3 style={styles.heading}>Genre</h3>
      <p style={styles.text}>{game.genre}</p>

      <h3 style={styles.heading}>Platforms</h3>
      <p style={styles.text}>{game.platforms.join(', ')}</p>

      <h3 style={styles.heading}>Rating</h3>
      <p style={styles.text}>{'★'.repeat(game.rating)}{'☆'.repeat(5 - game.rating)}</p>

      <h3 style={styles.heading}>Reviews</h3>
      {game.reviews.map((r, i) => (
        <blockquote key={i} style={styles.blockquote}>{r}</blockquote>
      ))}

      <h3 style={styles.heading}>System Requirements</h3>
      <pre style={styles.pre}>
        OS: {game.requirements.os}{"\n"}
        CPU: {game.requirements.cpu}{"\n"}
        GPU: {game.requirements.gpu}{"\n"}
        RAM: {game.requirements.ram}{"\n"}
        Disk: {game.requirements.disk}
      </pre>

      <button style={styles.buyButton}>
        Buy for {game.price}₴
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
    trailer: {
      width: '100%',
      borderRadius: 12,
      margin: '24px 0',
      backgroundColor: '#000',
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
    blockquote: {
      borderLeft: '4px solid #00adee',
      paddingLeft: 16,
      margin: '12px 0',
      color: '#aaa',
      fontStyle: 'italic',
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
    },
  };
   
export default GameStorePage;
