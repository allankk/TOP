import React from 'react';

const ResetBoard = (props) => {
    return (
        <div>
            <button onClick={props.handleReset}>RESET BOARD</button>
        </div>
    )
}

export default ResetBoard