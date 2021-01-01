import React, {useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Player from '../factories/Player';
import Board from './Board';
import Message from './Message';
import ShipContainer from './ShipContainer';
import ResetBoard from './buttons/ResetBoard';
import StartPrompt from './StartPrompt';
import EndPrompt from './EndPrompt';

// helper to manually place ships
import { randomShips } from '../helpers/shipPlacement';

let player = Player(false);
let pc = Player(true);

// PlaceShips(player);
// PlaceShips(pc);
randomShips(pc);

const Game = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [playerTurn, setPlayerTurn] = useState(false);
    const [message, setMessage] = useState(null);
    // [is game over, winner]
    const [gameEnded, setGameEnded] = useState([false, null]);

    // keep track of ships placed and update board accordingly
    const [shipsPlaced, setShipsPlaced] = useState([]);

    // if it is PC-s turn, carry out a random attack after a set amount of time, then change the turn back.
    useEffect(() => {
        if (!playerTurn && gameStarted) {
                setTimeout(function() {
                    pc.attack(player, [0, 0])
                    if (player.board.areAllSunk()) {
                        setGameEnded([true, 'pc']);
                        alert('You lost!');
                    }
                    setPlayerTurn(!playerTurn);
            }, 1200 ); // TIME COMPUTER WAITS UNTIL ATTACKING
        } else {
            if (pc.board.areAllSunk()) {
                setGameEnded([true, 'player']);
            }
        }
    }, [playerTurn, gameStarted]);

    // when message of an action is displayed, delete it after a set amount of time
    useEffect(() => {
        setTimeout(() => setMessage(null), 3000)
    }, [message])

    // reset the board
    const handleReset = () => {
        player.board.resetBoard();
        setShipsPlaced([]);
    }

    const handleNewGame = () => {
        player = Player(false);
        pc = Player(true);
        randomShips(pc);
        setGameStarted(false);
        setGameEnded([false, null]);
        setShipsPlaced([]);
        setPlayerTurn(false);
    }

    return (
        <div className="game">
            <DndProvider backend={HTML5Backend}>
                {(gameEnded[0]) ? <EndPrompt gameEnded={gameEnded} setGameEnded={setGameEnded} handleNewGame={handleNewGame} gameStarted={gameStarted} setGameStarted={setGameStarted} /> : null}
                <StartPrompt gameEnded={gameEnded} gameStarted={gameStarted} setGameStarted={setGameStarted} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} shipsPlaced={shipsPlaced} />
                <div className="board-container">
                    <Board player={player} shipsPlaced={shipsPlaced} setShipsPlaced={setShipsPlaced} opponent={pc} turn={playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={true} />
                    <Board player={pc} opponent={player}  shipsPlaced={shipsPlaced} setShipsPlaced={setShipsPlaced} turn={!playerTurn} toggleTurn={() => setPlayerTurn(!playerTurn)} setMessage={(msg) => setMessage(msg)} isPlayer={false} />           
                </div>
                { (!gameStarted) ? <ResetBoard handleReset={handleReset} /> : null}
                { (message != null) ? <Message message={message} setMessage={(msg) => setMessage(msg)} /> : null}
                { (!gameStarted) ? <ShipContainer shipsPlaced={shipsPlaced}/> : null}
            </DndProvider>
        </div>
    )
}

export default Game;