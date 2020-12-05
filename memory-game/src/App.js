import React, { useEffect, useState } from 'react';
import NumberOfCards from './components/NumberOfCards';
import Navigation from './components/Navigation';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';


const CARDAMOUNT = 8; // initial number of cards to be played with. 

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [totalCards, setTotalCards] = useState(CARDAMOUNT);

  if (currentScore > bestScore) {
    setBestScore(currentScore);
  };

  return (
    <main>
      <Navigation />
      <NumberOfCards totalCards={totalCards} setTotalCards={setTotalCards}/>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} totalCards={totalCards} />

      <Cards cardAmount={totalCards} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
    </main>
  );
};

export default App;
