const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS'

const OPPONENT_WIN = 'COMPUTER WINS THIS ROUND';
const PLAYER_WIN = 'PLAYER WINS THIS ROUND';
const DRAW = 'THIS ROUND IS A DRAW';

let playerScore = 0;
let opponentScore = 0;
let roundsPlayed = 0;


//Updates the scores in HTML
function updateScores(){
    document.getElementById("playerScore").innerHTML = "PLAYER SCORE: " + playerScore;
    document.getElementById("opponentScore").innerHTML = "OPPONENT SCORE: " + opponentScore;
}

//Updates the HTML of last round win.
function updateRunningInfo(result){
    if (result == PLAYER_WIN) {
        console.log(PLAYER_WIN)
        document.getElementById("lastRound").innerHTML = PLAYER_WIN;
    }
    else if (result == OPPONENT_WIN) {
        console.log(OPPONENT_WIN);
        document.getElementById("lastRound").innerHTML = OPPONENT_WIN;
    } else {
        console.log(DRAW);
        document.getElementById("lastRound").innerHTML = DRAW;
    }
}

//Checks if the game is over and makes an endgame prompt if so
function checkIfGameIsOver(){
    
    if (roundsPlayed >= 5) {
        console.log(roundsPlayed);
        let element = document.getElementById("lastRound");

        if(playerScore > opponentScore) {
            element.innerHTML = "PLAYER WINS THE GAME OF FIVE WITH " + playerScore + " POINTS TO " + opponentScore + ".";
        } else if (opponentScore > playerScore) {
            element.innerHTML = "COMPUTER WINS THE GAME OF FIVE WITH " + opponentScore + " POINTS TO " + playerScore + ".";
        } else {
            element.innerHTML = "THE GAME ENDED IN A DRAW WITH BOTH PLAYERS HAVING " + playerScore + " POINTS.";
        } 
    }
}

//Returns a random play.
function computerPlay() {
    let possiblePlays = [ROCK, PAPER, SCISSORS];
   
    return possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
}

//Plays one round of rock-paper-scissors
function playRound(playerChoice, opponentChoice) {

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

    btnRock.addEventListener("click", playRound.bind(null, ROCK, computerPlay()));
    btnScissors.addEventListener("click", playRound.bind(null, SCISSORS, computerPlay()));
    btnPaper.addEventListener("click", playRound.bind(null, PAPER, computerPlay()));
}

loadEventHandlers();

/*Tests for one-time game
const playerChoice = ROCK;
const opponentChoice = computerPlay();
console.log(playRound(playerChoice, opponentChoice))

function game() {
    let playerScore = 0;
    let opponentScore = 0;

    let btnRock = document.getElementById("btn.ROCK");
    let btnScissors = document.getElementById("btn.SCISSORS");
    let btnPaper = document.getElementById("btn.PAPER");

    btnRock.addEventListener("click", playRound(ROCK, computerPlay()));
    btnScissors.addEventListener("click", playRound(SCISSORS, computerPlay()));
    btnPaper.addEventListener("click", playRound(PAPER, computerPlay()));

}

// Plays a five-round game
function gameWithPrompt() {
    let playerScore = 0;
    let opponentScore = 0;

    let i;
    // play every round. Call the winner and the scores each time
    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Player choice (rock/paper/scissors):");
        let result = playRound(playerChoice, computerPlay());

        if (result == PLAYER_WIN) {
            playerScore++;
            console.log(PLAYER_WIN)
            document.getElementById("lastRound").innerHTML = PLAYER_WIN;
        }
        else if (result == OPPONENT_WIN) {
            opponentScore++;
            console.log(OPPONENT_WIN);
            document.getElementById("lastRound").innerHTML = OPPONENT_WIN;
        } else {
            console.log(DRAW);
            document.getElementById("lastRound").innerHTML = DRAW;
        }

        console.log("Player score: " + playerScore + "\nOpponent Score: "+ opponentScore);
    }

    if(playerScore > opponentScore) console.log("PLAYER WINS THE GAME OF FIVE WITH " + playerScore + "POINTS TO " + opponentScore + ".");
    else if (opponentScore > playerScore) console.log("COMPUTER WINS THE GAME OF FIVE WITH " + opponentScore + "POINTS TO " + playerScore + ".");
    else console.log("THE GAME ENDED IN A DRAW WITH BOTH PLAYERS HAVING " + playerScore + " POINTS.");
}

*/