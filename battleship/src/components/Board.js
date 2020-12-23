import React from 'react';

const Board = (props) => {

    const grid = props.player.board.getBoard();

    const handleAttack = (row, col) => {

        props.opponent.attack(props.player, [row, col])

        // check if all ships are sunk. If so, display message

        // if attack was on a ship that was sunk, create a message outside of the board        
        if (typeof(grid[row][col]) === 'object' && grid[row][col].isSunk()) {
            // check if all ships are sunk. If so, display message
            if (props.player.board.areAllSunk()) {
                props.displayWinner(props.opponent.getName());
            } else {
                props.setMessage(`${props.player.getName()}'s ${grid[row][col].getName()} has been sunk`);
            }


        }

        props.toggleTurn();
    }

    const renderShip = (object, coord) => {
        // if its an unhit player ship, return 'S', otherwise return null (to hide enemy ships)
        if (object.isPartHit(coord)) {
            if (object.isSunk()) {
                return 'sunk';
            } else {
                return 'hit';
            }
        } else if (props.isPlayer) {
            return 'ship';
        } else {
            return ''
        }
    }

    const tileClasses = (value, row, col) => {
        if (value === 1) {
            return 'tile attacked';
        } else if (typeof(value) === 'object') {
            return `tile ${renderShip(value, [row, col])}`;
        } else {
            return 'tile';
        }
    }
// ${renderShip(value, [row, col])}

    return (
        <div>
            { (props.isPlayer) ? (<h2>PLAYER</h2>) : (<h2>COMPUTER</h2>)}
            <div className={'board' + (props.turn ?  ' disabled' : '')}>
                {grid.map((innerArr, row) => {
                    return (
                        <div key={'row' + row} className={'grid-row row-' + row}>
                            {grid[row].map((value, col) => {
                                return (
                                    <div className={tileClasses(value, row, col)}
                                        id={'row-' + row + '-col-' + col}
                                        key={'row' + row + 'col' + col}
                                        onClick={() => handleAttack(row, col)}
                                        >
                                        { (value === 1) ? 'x' : null }
                                        {/* { (typeof(value) === 'object') ? renderShip(value, [row, col]) : null} */}
                                    </div>
                                );
                            })}                    
                        </div>
                    );
                })}

            </div>
            
        </div>
        // if it is not this players turn (therefore is opponents turn), this board should be enabled

    )

}

export default Board;