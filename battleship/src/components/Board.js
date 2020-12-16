import React, { useEffect, useState } from 'react';

const Board = (props) => {

    // set the board as state.
    const [grid, setGrid] = useState(props.player.board.getBoard());
    const [turn, setTurn] = useState(props.player.isTurn());

    const handleAttack = (row, col) => {
        props.player.attack(props.opponent, [row, col])
        props.player.toggleTurn();
        props.opponent.toggleTurn();
    }

    useEffect(() => {
        console.log('useeffect called');
    }, [props.player.isTurn()])
    
    return (
        // if it is not this players turn (therefore is opponents turn), this board should be enabled
        <div className={'board' + (turn ?  ' disabled' : '')}>
            {grid.map((innerArr, row) => {
                return (
                    <div key={'row' + row} className={'grid-row row-' + row}>
                        {grid[row].map((value, col) => {
                            return (
                                <div className="tile"
                                     id={'row-' + row + '-col-' + col}
                                     key={'row' + row + 'col' + col}
                                     onClick={() => handleAttack(row, col)}>
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