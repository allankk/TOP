// initiate the players and gameboards?

import React, {useState, useEffect} from 'react';

import Player from '../factories/Player';
import Board from './Board';
import Message from './Message';

// helper to manually place ships
import PlaceShips from './../helpers/exampleShips';

const player = Player(false);
const pc = Player(true);

PlaceShips(player);
PlaceShips(pc);

const Game = () => {

    console.log('starting game');

    const [playerTurn, setPlayerTurn] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        
        if (playerTurn) {
            if (player.board.areAllSunk()) {
                console.log('You lost!');
            }
        } else {
            if (pc.board.areAllSunk()) {
                console.log('YOU WON!');
            }
        }
    }, [playerTurn]);

    // display a message for a few seconds when an action (such as a ship sinking) happens
    useEffect(() => {
        setTimeout(() => setMessage(null), 3000)
    }, [message])

    const displayWinner = (name) => {
        alert(`${name} has won the game!`)
    }  


    return (
        <div>
            <div className="board-container">
                <Board player={player} opponent={pc} turn={playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={true} displayWinner={displayWinner} />
                <Board player={pc} opponent={player} turn={!playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={false} displayWinner={displayWinner} />           
            </div>
            { (message != null) ? <Message message={message} setMessage={(msg) => setMessage(msg)} /> : null}
        </div>
    )
}

export default Game;

// 