
const gameBoard = (() => {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    let diagonal1 = [[0, 0], [1, 1], [2, 2]];
    let diagonal2 = [[0, 2], [1, 1], [2, 0]];

    const checkBoard = (row, column, value) => {
        let checkResults = [true, true, true, true]; // checkresults - if not equal to the mark, will change to false.

        for (let i = 0; i <= 2; i++) {  // check the same row and column of inserted value
            if (getValue(row, i) != value) checkResults[0] = false;
            if (getValue(i, column) != value) checkResults[1] = false;
        }
        
        diagonal1.forEach(grid => {
           if (getValue(grid[0], grid[1]) != value) checkResults[2] = false;
        });

        diagonal2.forEach(grid => {
            if (getValue(grid[0], grid[1]) != value) checkResults[3] = false;
        });

        return (checkResults.includes(true)) ? true : false; // if any of the checking tests succeeded, return true (game won)
    };

    
    // TODO WHEN SET VALUE, CHECK IF VALUE ALREADY EXISTS

    const getValue = (row, column) => board[row][column]; 
    const setValue = (row, column, value) => {
        board[row][column] = value;
        return true;
    };
    return {getValue, setValue, checkBoard, board};

})();

const Player = (name, mark) => { // mark defines the symbol used, i.e. 'X' or 'O'
    
    const play = (row, column) => {
        if (gameBoard.setValue(row, column, mark)) displayController.updateBoard(row, column, mark);

        console.log('result: ' + gameBoard.checkBoard(row, column, mark));
        if (gameBoard.checkBoard(row, column, mark)) {
            console.log(`${name} has won!`);
        }
    }
    return { name, mark, play }
}

const displayController = (() => {
    const gameBoardItem = document.querySelector('.game-board'); // get the game-board section from DOM
    const squareItems = document.querySelectorAll('.square');

    const updateBoard = (row, column, mark) => {
        let numOfSquare = translateCoordinates(row, column);
        let squareItem = document.getElementById(`square-${numOfSquare}`);
        squareItem.innerHTML = mark;
    }

    const translateCoordinates = (row, column) => { // translates grid number to the number of the square
        if (row == 0) {
            return column + 1;
        } else if (row == 1) {
            return column + 4;
        } else if (row == 2) {
            return column + 7;
        }
    }

    return {updateBoard};
})();




const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

player1.play(1, 1);
player2.play(0, 2);
