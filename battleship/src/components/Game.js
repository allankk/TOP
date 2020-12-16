// initiate the players and gameboards?

import React from 'react';

import Player from '../factories/Player';
import Board from './Board';


const Game = () => {
    const player = Player(false);
    const pc = Player(true);

    player.toggleTurn();

    return (
        <div>
            <div className="board-container">
                <Board player={player} opponent={pc} />
                <Board player={pc} opponent={player} />           
            </div>
        </div>
    )
}

export default Game;