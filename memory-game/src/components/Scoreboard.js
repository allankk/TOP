import React from 'react';

const Scoreboard = (props) => {
    
    return (
        <div className="scoreboard">
            <div className="buttons"></div>

            <div className="currentscore">
                <p>Current Score</p>
                <p>{props.currentScore}/{props.totalCards}</p>    
            </div>

            <div className="bestscore">
                <p>Best Score</p>
                <p>{props.bestScore}/{props.totalCards}</p>
            </div>
    
        </div>
    )
}

export default Scoreboard;