const WIN = 'win';
const DRAW = 'draw';
const NOTOVER = 'not-over';


let player1;
let player2;

const gameBoard = (() => {
    let board = [['', '', ''], ['', '', ''], ['', '', '']];
    let diagonal1 = [[0, 0], [1, 1], [2, 2]]; 
    let diagonal2 = [[0, 2], [1, 1], [2, 0]];

    const checkBoard = (row, column, value) => {
        let checkResults = [true, true, true, true]; // checkresults - if not equal to the mark, will change to false.
        let checkDraw = true;

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

        // check for a draw
        board.forEach(square => {
            if (square.includes('')) checkDraw = false;  
        })

        // RETURN WIN, DRAW or NOTOVER
        if (checkDraw == true) return DRAW

        return (checkResults.includes(true)) ? WIN : NOTOVER; // if any of the checking tests succeeded, return true (game won)

    };

    const clearBoard = () => {
        board = [['', '', ''], ['', '', ''], ['', '', '']];
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

    const checkResults = (row, column, mark) => {
        const checkResult = gameBoard.checkBoard(row, column, mark);
        
        if (checkResult == WIN) {
            console.log(`${name} has won!`);
            displayController.updateInfo(name, WIN);
            displayController.toggleBoard('disable');
            gridEvents.removeGridEvents();
        } else if (checkResult == DRAW) {
            displayController.updateInfo(name, DRAW);
            console.log('Game ended in a draw');
        } else {
            console.log(`player1 turn: ${player1.turn}`);
            console.log(`player2 turn: ${player2.turn}`);

            displayController.updateInfo(name, NOTOVER)
        }
    }
    
    const play = (row, column) => {
        if (gameBoard.setValue(row, column, mark)) {
            displayController.updateBoard(row, column, mark);
            checkResults(row, column, mark);
            toggleTurn();


            // displayController.updateInfo();
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
    const startBtn = document.querySelector('#start-game');
    const gameInfo = document.querySelector('.game-info');
    const infoBoard = document.getElementById('info-board');

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

    const displayInfo = () => {
        gameInfo.classList.add('display-flex');
    }

    const updateInfo = (playername, action) => { // Action either WIN, DRAW or NOTOVER
        if (action == WIN) {
            infoBoard.textContent = `${playername} HAS WON`;
        } else if (action == DRAW) {
            infoBoard.textContent = 'DRAW'
        } else {
            if (player1.turn == true) {
                infoBoard.textContent = `${player2.name}'s turn`;
            } else {
                infoBoard.textContent = `${player1.name}'s turn`;
            };
        };
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


    return {updateBoard, translateSquareToCoordinates, toggleBoard, clearBoard, displayInfo, updateInfo};
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
    startBtn.addEventListener('click', function() {
        if (startBtn.textContent == 'RESTART') {
            restartGame();
        } else {
            startBtn.textContent = 'RESTART';
            startGame();
        }
    });
}

function restartGame() {
    displayController.clearBoard();
    gridEvents.addGridEvents();
    displayController.toggleBoard('enable');
    player1.turn = false; // first the turns are reversed for updateInfo to update DOM correctly.
    player2.turn = true;
    displayController.updateInfo();
    player1.turn = true; // Enables the turn of player1 when game starts
    player2.turn = false;
}

function startGame() {
    displayController.clearBoard();
    gridEvents.addGridEvents();
    displayController.toggleBoard('enable');

    const inputPlayer1 = document.getElementById('player1-name');
    const inputPlayer2 = document.getElementById('player2-name');

    if (inputPlayer1.value == "") {
        player1 = Player('Player 1', 'X');
    } else {
        player1 = Player(inputPlayer1.value, 'X');
    }

    if (inputPlayer2.value == "") {
        player2 = Player('Player 2', 'O');
    } else {
        player2 = Player(inputPlayer2.value, 'O');
    }

    document.querySelector('.player-info').classList.add('display-none'); // Hide the player inputs

    player1.turn = false; // first the turns are reversed for updateInfo to update DOM correctly.
    player2.turn = true;
    displayController.displayInfo();
    displayController.updateInfo();
    player1.turn = true; // Enables the turn of player1 when game starts
    player2.turn = false;
}

displayController.toggleBoard('disable');
addButtonEvents();

