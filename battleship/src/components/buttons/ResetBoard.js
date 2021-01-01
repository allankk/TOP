import React from 'react';

const ResetBoard = (props) => {
    return (
        <div className="resetDiv">
            <button className="resetBtn" onClick={props.handleReset}>RESET BOARD</button>
        </div>
    )
}

export default ResetBoard