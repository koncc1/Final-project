import React from 'react';
import GameList from '../components/GameList';
import { games } from '../data/games';

function Home() {

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}></h1>
      <GameList />
    </div>
  );
}

export default Home;