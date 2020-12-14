import { Ship } from '../Ship/Ship';

const BOARD_SIZE = 10;

// creates a new board (grid size x size)
function createBoard(size) {
    let board = [];

    for (let i = 0; i < size; i++) {
        let row = [];

        for (let j = 0; j < size; j++) {
            row.push(0);
        }

        board.push(row);
    }

    return board;
}

// creates ship coordinates
function createShipArray(length, coords, isVertical) {
    let coordArr = [];

    coordArr.push([coords[0], coords[1]]);

    for(let i = 1; i < length; i++) {
        if (isVertical) {
            coordArr.push([coords[0] + i, coords[1]]);
        } else {
            coordArr.push([coords[0], coords[1] + i]);
        }
    };

    return coordArr;
}


const Gameboard = () => {

    const board = createBoard(BOARD_SIZE);

    const placeShip = (length, coords, isVertical) => {
        // TODO: first have to check if it is valid

        let newShip = Ship(length);
        let shipCoords = createShipArray(length, coords, isVertical);

        // for each ship coordinate, place an array on the coordinates of the board
        // array contains of the ship element and false/true for being hit.
        shipCoords.forEach(element => {
            board[element[0]][element[1]] = [newShip, false];
        });
    }

    // check if position to place ship is valid
    const checkIfValid = (shipArray) => {

        // [2,2], [2,3]
        // need to check [1,1][2,1][3,1]
        //               [1,2][3,2]
        //               [1,3][3,3]
        //               [1,4][2,4][3,4]

        // or need to check (with inside of ship parts)
        // 
        shipArray.forEach(element => {

        })

        return true;
    }


    function getBoard() { return board };

    return {
        placeShip,
        getBoard,
        checkIfValid
    }
}

export { Gameboard };