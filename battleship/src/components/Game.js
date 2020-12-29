// initiate the players and gameboards?

import React, {useState, useEffect} from 'react';

import Player from '../factories/Player';
import Board from './Board';
import Message from './Message';

// helper to manually place ships
import {PlaceShips, randomShips} from '../helpers/shipPlacement';

const player = Player(false);
const pc = Player(true);

PlaceShips(player);
// PlaceShips(pc);
randomShips(pc);

const Game = () => {
    const [playerTurn, setPlayerTurn] = useState(true);
    const [message, setMessage] = useState(null);

    // if it is PC-s turn, carry out a random attack after a set amount of time, then change the turn back.
    useEffect(() => {
        if (!playerTurn) {
                setTimeout(function() {
                    pc.attack(player, [0, 0])
                    if (player.board.areAllSunk()) {
                        alert('You lost!');
                    }
                    setPlayerTurn(!playerTurn);
            }, 1500 );
        } else {
            if (pc.board.areAllSunk()) {
                alert('YOU WON!');
            }
        }
    }, [playerTurn]);

    // when message of an action is displayed, delete it after a set amount of time
    useEffect(() => {
        setTimeout(() => setMessage(null), 3000)
    }, [message])

    return (
        <div>
            <div className="board-container">
                <Board player={player} opponent={pc} turn={playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={true} />
                <Board player={pc} opponent={player} turn={!playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={false} />           
            </div>
            { (message != null) ? <Message message={message} setMessage={(msg) => setMessage(msg)} /> : null}
        </div>
    )
}

export default Game;