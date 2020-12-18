import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Board = (props) => {

    // set the board as state.
    const [grid, setGrid] = useState(props.player.board.getBoard());

    const handleAttack = (row, col) => {
        console.log('board at handleattack');
        console.log(props.player.board.getBoard());
        props.player.attack(props.player, [row, col])
        props.toggleTurn();
        // setGrid(props.player.board.getBoard());

        console.log('board after handleattack')
        console.log(props.player.board.getBoard());
        console.log('------------------')
    }

    return (
        // if it is not this players turn (therefore is opponents turn), this board should be enabled
        <div className={'board' + (props.turn ?  ' disabled' : '')}>
            {grid.map((innerArr, row) => {
                return (
                    <div key={'row' + row} className={'grid-row row-' + row}>
                        {grid[row].map((value, col) => {
                            return (
                                <div className="tile"
                                     id={'row-' + row + '-col-' + col}
                                     key={'row' + row + 'col' + col}
                                     onClick={() => handleAttack(row, col)}
                                     >
                                     { (grid[row][col] === 1) ? 'x' : null }
                                </div>
                            );
                        })}                    
                    </div>
                );
            })}

        </div>
    )

}

export default Board;