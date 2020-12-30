import React from 'react';
import uniqid from 'uniqid';

import BoardTile from './BoardTile';

const Board = (props) => {
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

    // used for tile components to check whether placing a ship there is valid
    const checkValidity = (row, col, length, isVertical) => {
        let shipArray = props.player.board.createShipArray(length, [row, col], isVertical);
        return (props.player.board.checkIfValid(shipArray));
    }

    // used for tile components to place a ship
    const placeShip = (length, coords, isVertical, name) => {
        // place ship on board
        props.player.board.placeShip(length, coords, isVertical, name);
        // update placed ships parent state
        let shipsPlaced = [...props.shipsPlaced];
        shipsPlaced.push(name);
        props.setShipsPlaced(shipsPlaced)    
    }

    return (
        <div>
            {(props.isPlayer) ? (<h2>PLAYER</h2>) : (<h2>COMPUTER</h2>)}
            <div className={'board' + (props.turn ?  ' disabled' : '')}>
                {grid.map((innerArr, row) => {
                    return (
                        <div key={'row' + row} className={'grid-row row-' + row}>
                            {grid[row].map((value, col) => {
                                return (
                                    <BoardTile key={uniqid()} isPlayer={props.isPlayer} row={row} col={col} value={value} handleAttack={() => handleAttack(row, col)} checkValidity={checkValidity} placeShip={placeShip} />
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