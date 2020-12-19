// initiate the players and gameboards?

import React, {useState, useRef} from 'react';

import Player from '../factories/Player';
import Board from './Board';

// helper to manually place ships
import PlaceShips from './../helpers/exampleShips';

const player = Player(false);
const pc = Player(true);

PlaceShips(player);
PlaceShips(pc);

const Game = () => {

    console.log('starting game');

    const [playerTurn, setPlayerTurn] = useState(true);

    // const player = useRef(Player(false));
    // const pc = useRef(Player(true));

    // const player = Player(false);
    // const pc = Player(true);


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