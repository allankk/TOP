const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'

const OPPONENT_WIN = 'COMPUTER WINS THIS ROUND';
const PLAYER_WIN = 'PLAYER WINS THIS ROUND';
const DRAW = 'THIS ROUND IS A DRAW';

let playerScore = 0;
let opponentScore = 0;
let drawScore = 0;
let roundsPlayed = 0;


//Updates the scores in HTML
function updateScores(){
    document.getElementById("playerScore").innerHTML = "PLAYER WINS: " + playerScore;
    document.getElementById("opponentScore").innerHTML = "OPPONENT WINS: " + opponentScore;
    document.getElementById("drawScore").innerHTML = "DRAWS: " + drawScore;
}

//Updates the HTML of last round win.
function updateRunningInfo(result){
    if (result == PLAYER_WIN) {
        document.getElementById("lastRound").innerHTML = PLAYER_WIN;
    }
    else if (result == OPPONENT_WIN) {
        document.getElementById("lastRound").innerHTML = OPPONENT_WIN;
    } else {
        document.getElementById("lastRound").innerHTML = DRAW;
    }
}

//Checks if the game is over and makes an endgame prompt if so
function checkIfGameIsOver(){
    
    if (roundsPlayed >= 5) {
        let element = document.getElementById("lastRound");

        if(playerScore > opponentScore) {
            element.innerHTML = "PLAYER WINS THE GAME OF FIVE WITH " + playerScore + " POINTS TO " + opponentScore + ".";
        } else if (opponentScore > playerScore) {
            element.innerHTML = "COMPUTER WINS THE GAME OF FIVE WITH " + opponentScore + " POINTS TO " + playerScore + ".";
        } else {
            element.innerHTML = "THE GAME ENDED IN A DRAW WITH BOTH PLAYERS HAVING " + playerScore + " POINTS.";
        } 

        /// Hide the div containing play buttons
        hidePlayButtons();        
    }
}

//Returns a random play.
function computerPlay() {
    
    let possiblePlays = [ROCK, PAPER, SCISSORS];
    let play = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];

    return play;
}

//Plays one round of rock-paper-scissors
function playRound(playerChoice) {
    let opponentChoice = computerPlay();

    if(playerChoice == ROCK) {
        if(opponentChoice == ROCK) message = DRAW;
        else if(opponentChoice == SCISSORS) message = PLAYER_WIN;
        else message = OPPONENT_WIN;
    } else if (playerChoice == SCISSORS) {
        if(opponentChoice == ROCK) message = OPPONENT_WIN;
        else if(opponentChoice == SCISSORS) message = DRAW;
        else message = PLAYER_WIN
    } else {
        if (opponentChoice == ROCK) message = PLAYER_WIN;
        else if (opponentChoice == SCISSORS) message = OPPONENT_WIN;
        else message = DRAW;
    }

    if (message == PLAYER_WIN) {
        playerScore++;
    } else if (message == OPPONENT_WIN) {
        opponentScore++;
    } else {
        drawScore++;
    }

    roundsPlayed++;
    
    updateRunningInfo(message);
    updateScores();
    checkIfGameIsOver();   
}

function loadEventHandlers(){
    let btnRock = document.getElementById("btn.ROCK");
    let btnScissors = document.getElementById("btn.SCISSORS");
    let btnPaper = document.getElementById("btn.PAPER");
    let btnPlayAgain = document.getElementById("btn.PLAYAGAIN");

    btnRock.addEventListener("click", playRound.bind(null, ROCK));
    btnScissors.addEventListener("click", playRound.bind(null, SCISSORS));
    btnPaper.addEventListener("click", playRound.bind(null, PAPER));
    btnPlayAgain.addEventListener("click", restartGame.bind());
}

/// Hide the play buttons when the game has ended.
function hidePlayButtons(){
    let x = document.getElementById("button-container");
    let startAgain = document.getElementById("play-again");
    x.style.display = "none";
    startAgain.style.display = "flex";
}

/// Show the play buttons
function showPlayButtons(){
    let x = document.getElementById("button-container");
    let startAgain = document.getElementById("play-again");
    startAgain.style.display = "none";
    x.style.display = "flex";
}

// restarts the game.
function restartGame() {
    playerScore = 0;
    opponentScore = 0;
    drawScore = 0;
    roundsPlayed = 0;

    let roundInfo = document.getElementById("lastRound");
    roundInfo.innerHTML = "";

    updateScores();
    showPlayButtons();
}

loadEventHandlers();

/*
// Play a number of automatic games;
function autoGame() {
    let howManyGames = 100; 
    let i;

    for (i = 0; i < howManyGames; i++ ){
        playRound(null, computerPlay());
    }
}
autoGame();
*/