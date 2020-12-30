import React from 'react';

const EndPrompt = (props) => {

    const gameEndMessage = () => {
        if (props.gameEnded[1] === 'player') {
            return <h3>You won!</h3>
        } else {
            return <h3>You lost!</h3>
        }
    }

    return (
        <div>
            {props.gameEnded[0] ? gameEndMessage() : null}
            <button onClick={props.handleNewGame}>Start New Game</button>
        </div>
    )
}

export default EndPrompt