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

        for (let i = 0; i < shipArray.length; i++) {
            let row = shipArray[i][0];
            let col = shipArray[i][1];

            // check if ship is placed outside of board
            if (row < 0 || row > BOARD_SIZE-1) return false;
            if (col < 0 || col > BOARD_SIZE-1) return false;

            // check if the squares around each ship part are empty            
            for(let j = -1; j < 2; j++) {
                for(let k = -1; k < 2; k++) {
                    let checkRow = row + j;
                    let checkCol = col + k;

                    // don't check outside the board
                    if (checkRow > BOARD_SIZE-1 || checkRow < 0) break;
                    if (checkCol > BOARD_SIZE-1 || checkCol < 0) break;

                    if (board[checkRow][checkCol] != 0) {
                        return false;
                    }
                }
            }
        }

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