import React, {useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import uniqid from 'uniqid';

import Player from '../factories/Player';
import Board from './Board';
import Message from './Message';
import ShipContainer from './ShipContainer';
import ResetBoard from './buttons/ResetBoard';

// helper to manually place ships
import { randomShips } from '../helpers/shipPlacement';

const player = Player(false);
const pc = Player(true);

// PlaceShips(player);
// PlaceShips(pc);
randomShips(pc);

const Game = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [playerTurn, setPlayerTurn] = useState(false);
    const [message, setMessage] = useState(null);

    // keep track of ships placed and update board accordingly
    const [shipsPlaced, setShipsPlaced] = useState([]);

    // if it is PC-s turn, carry out a random attack after a set amount of time, then change the turn back.
    useEffect(() => {
        if (!playerTurn && gameStarted) {
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

    const handleReset = () => {
        player.board.resetBoard();
        setShipsPlaced([]);
    }

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div className="board-container">
                    <Board player={player} shipsPlaced={shipsPlaced} setShipsPlaced={setShipsPlaced} opponent={pc} turn={playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={true} />
                    <Board player={pc} opponent={player}  shipsPlaced={shipsPlaced} setShipsPlaced={setShipsPlaced} turn={!playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={false} />           
                </div>
                { (!gameStarted) ? <ResetBoard handleReset={handleReset} /> : null}
                { (message != null) ? <Message message={message} setMessage={(msg) => setMessage(msg)} /> : null}
                <ShipContainer shipsPlaced={shipsPlaced}/>
            </DndProvider>
        </div>
    )
}

export default Game;