import React from 'react';
import GameList from '../components/GameList';

function Home() {

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}> 🎮 Home </h1>
      <GameList />
    </div>
  );
}

export default Home;