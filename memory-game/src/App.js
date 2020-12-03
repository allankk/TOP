import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';


const CARDAMOUNT = 25; // number of cards to be played with. 

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(2);
  const [totalCards, setTotalCards] = useState(CARDAMOUNT);


  return (
    <main>
      <Navigation />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} totalCards={totalCards} />

      <Cards cardAmount={CARDAMOUNT} setCurrentScore={setCurrentScore}/>
    </main>
  );
};

export default App;
