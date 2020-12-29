import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import uniqid from 'uniqid';

import BoardTile from './BoardTile';

const Board = (props) => {

    const[{ isOver }, drop] = useDrop({
        accept: ItemTypes.SHIP,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    const grid = props.player.board.getBoard();

    const handleAttack = (row, col) => {

        props.opponent.attack(props.player, [row, col])

        // if attack was on a ship that was sunk, create a message outside of the board        
        if (typeof(grid[row][col]) === 'object' && grid[row][col].isSunk()) {
            // check if all ships are sunk. If so, display message
            props.setMessage(`${props.player.getName()}'s ${grid[row][col].getName()} has been sunk`);
        }

        props.toggleTurn();
    }

    // // returns a proper classname for the ship tile.
    // const renderShip = (object, coord) => {
        
    //     if (object.isPartHit(coord)) {
    //         if (object.isSunk()) {
    //             return 'sunk';
    //         } else {
    //             return 'hit';
    //         }
    //     // if its an unhit player ship, return 'S', otherwise return null (to hide enemy ships)
    //     } else if (props.isPlayer) {
    //         return 'ship';
    //     } else {
    //         return 'ship' // CHANGE THIS TO '' TO HIDE OPPONENT SHIPS
    //     }
    // }

    // const tileClasses = (value, row, col) => {
    //     if (value === 1) {
    //         return 'tile attacked';
    //     } else if (typeof(value) === 'object') {
    //         return `tile ${renderShip(value, [row, col])}`;
    //     } else {
    //         return 'tile';
    //     }
    // }

// div ref props.isPlayer ? drop : null
    return (
        <div>
            { (props.isPlayer) ? (<h2>PLAYER</h2>) : (<h2>COMPUTER</h2>)}
            <div className={'board' + (props.turn ?  ' disabled' : '')}>
                {grid.map((innerArr, row) => {
                    return (
                        <div key={'row' + row} className={'grid-row row-' + row}>
                            {grid[row].map((value, col) => {
                                return (
                                    <BoardTile key={uniqid()} isPlayer={props.isPlayer} row={row} col={col} value={value} handleAttack={() => handleAttack(row, col)} />
                                    // <div className={tileClasses(value, row, col)}
                                    //     id={'row-' + row + '-col-' + col}
                                    //     key={'row' + row + 'col' + col}
                                    //     onClick={!props.isPlayer ? () => handleAttack(row, col) : null}
                                    //     ref={drop}
                                    //     >
                                    //     { (value === 1) ? 'x' : null }
                                    // </div>
                                );
                            })}                    
                        </div>
                    );
                })}

            </div>
            
        </div>
    )
}

export default Board;