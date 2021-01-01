import React from 'react';

const StartPrompt = (props) => {

    const turnMessage = () => {
        if (props.gameStarted && props.playerTurn && !props.gameEnded[1]) {
            return (
                <h2>Your turn</h2>
            )
        } else if (props.gameStarted && !props.playerTurn && !props.gameEnded[1]) {
            return (
                <h2>Computer's turn</h2>
            )
        }
    }

    const handleGameStart = () => {
        props.setGameStarted(true);
        props.setPlayerTurn(true);
    }

    return (
        <div className="Prompt">
            {(!props.gameStarted && props.shipsPlaced.length !== 5) ? <h2>Place your ships on your board</h2> : null}
            {(!props.gameStarted && props.shipsPlaced.length === 5) ? <button className="startBtn" onClick={() => handleGameStart()}>Start Game</button> : null}            

            {turnMessage()}
        </div>
    )
}

export default StartPrompt