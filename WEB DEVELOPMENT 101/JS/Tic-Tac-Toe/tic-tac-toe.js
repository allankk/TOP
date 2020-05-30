//  TODO: BUG when restarting the game. Top right buttons don't display anything (value is still counted)

let player1;
let player2;

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

    const clearBoard = () => {
        obj.board = [['', '', ''], ['', '', ''], ['', '', '']];
    };

    const getValue = (row, column) => board[row][column]; 
    const setValue = (row, column, value) => { // sets the played value on the grid. Returns false if value already exists.
        if (board[row][column] != '') {
            return false;
        } else {
            board[row][column] = value;
            return true;
        }
    };

    obj = {getValue, setValue, checkBoard, clearBoard, board};
    return obj;

})();

const Player = (name, mark) => { // mark defines the symbol used, i.e. 'X' or 'O'
    let turn = false;
    
    const play = (row, column) => {
        if (gameBoard.setValue(row, column, mark)) {
            displayController.updateBoard(row, column, mark);
            toggleTurn();
        }
            
        if (gameBoard.checkBoard(row, column, mark)) {
            console.log(`${name} has won!`);
            displayController.toggleBoard('disable');
            gridEvents.removeGridEvents();
        }
    }

    const toggleTurn = () => {
        obj.turn = !obj.turn;
    }
    
    const obj = { name, mark, play, toggleTurn, turn };
    return obj;
}

const displayController = (() => {
    const gameBoardItem = document.querySelector('.game-board'); // get the game-board section from DOM
    const squareItems = document.querySelectorAll('.square');

    const clearBoard = () => {
        gameBoard.clearBoard();
        squareItems.forEach(item => item.innerHTML = '');
    };

    const toggleBoard = (action) => { // Two kinds of actions: 'enable' or 'disable' board
        squareItems.forEach(item => {
            if (action == 'enable' && item.classList.contains('disabled')){
                item.classList.remove('disabled');
            } else if (action == 'disable' && !item.classList.contains('disabled')) {
                item.classList.add('disabled');
            }
        });
    }
 
    const updateBoard = (row, column, mark) => {
        let numOfSquare = translateCoordinatesToSquare(row, column);
        let squareItem = document.getElementById(`square-${numOfSquare}`);
        squareItem.classList.toggle('disabled');
        squareItem.innerHTML = mark;
    }

    const translateCoordinatesToSquare = (row, column) => { // translates grid number to the number of the square
        if (row == 0) {
            return column + 1;
        } else if (row == 1) {
            return column + 4;
        } else if (row == 2) {
            return column + 7;
        }
    };

    const translateSquareToCoordinates = (square) => { // translates square to grid number
        squareNumber = square.charAt(square.length - 1);

        if (squareNumber >= 7) {
            return [2, squareNumber - 7];
        } else if (squareNumber >= 4) {
            return [1, squareNumber - 4];
        } else {
            return [0, squareNumber - 1];
        }
    };

    return {updateBoard, translateSquareToCoordinates, toggleBoard, clearBoard};
})();


const gridEvents = (() => {
    const squareItems = document.querySelectorAll('.square');

    function addGridEvents() {
        squareItems.forEach(button => button.addEventListener('click', squareEvents))
    };

    function removeGridEvents() {
        squareItems.forEach(button => button.removeEventListener('click', squareEvents));
    };

    function squareEvents() {
        let coordinates = displayController.translateSquareToCoordinates(this.id);
    
        if (player1.turn == true) {
            player1.play(coordinates[0], coordinates[1]);
            player2.toggleTurn();
        } else {
            player2.play(coordinates[0], coordinates[1]);
            player1.toggleTurn();
        }
    }

    return {addGridEvents, removeGridEvents, squareItems};
})();


function addButtonEvents() {
    const startBtn = document.getElementById('start-game');
    startBtn.addEventListener('click', startGame);
}

// TODO: clear the board when game starts or restarts

function startGame() {
    displayController.clearBoard();
    gridEvents.addGridEvents();

    displayController.toggleBoard('enable');
    player1 = Player('Player 1', 'O');
    player2 = Player('Player 2', 'X');
    player1.toggleTurn(); // Enables the turn of player1 when game starts

    // player1.play(1, 1);
    // player2.play(0, 2);
}

displayController.toggleBoard('disable');
addButtonEvents();

