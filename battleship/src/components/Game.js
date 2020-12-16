// initiate the players and gameboards?

import React, {useState} from 'react';

import Player from '../factories/Player';
import Board from './Board';

const Game = () => {

    const [playerTurn, setPlayerTurn] = useState(true);

    const player = Player(false);
    const pc = Player(true);

    //player.toggleTurn();

    return (
        <div>
            <div className="board-container">
                <Board player={player} opponent={pc} turn={playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} />
                <Board player={pc} opponent={player} turn={!playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)}/>           
            </div>
        </div>
    )
}

export default Game;

// 