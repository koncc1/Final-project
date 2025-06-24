// components/GameLibrary.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { games } from '../data/games';
import GameCard from './GameCard';


function GameLibrary() {
    const navigate = useNavigate();
    const handleSelect = (game) => {
      navigate(`/games/${game.id}`);
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Крамниця ігор</h1>
        <div style={styles.list}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    );
  }

const styles = {
    container: {
      padding: 24,
      backgroundColor: '#121212',
      minHeight: '100vh',
      color: '#fff',
    },
    title: {
      fontSize: 32,
      marginBottom: 24,
      textAlign: 'center',
      color: '#00adee',
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  };
export default GameLibrary;
