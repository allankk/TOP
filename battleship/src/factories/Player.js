import Gameboard from './Gameboard';

const randomAttack = (opponent) => {
    
    while (true) {
        let randRow = Math.floor(Math.random() * 10);
        let randCol = Math.floor(Math.random() * 10);
        let tile = opponent.board.getBoard()[randRow][randCol]

        if (typeof(tile) == 'object') {
            if (tile.isPartHit([randRow, randCol])) {
                continue;
            } else {
                opponent.board.receiveAttack([randRow, randCol]);
                break;
            }
        } else if (tile === 1) {
            continue;
        } else {
            opponent.board.receiveAttack([randRow, randCol]);
            break;
        }
    }
} 

const Player = (isPC) => {
    let board = Gameboard();

    const getName = () => {
        if (isPC) {
            return 'Computer'
        } else {
            return 'Player'
        }
    }

    // attack the opponents board. If the AI is attacking, attack randomly
    const attack = (opponent, coords) => {
        (isPC) ? randomAttack(opponent) : opponent.board.receiveAttack([coords[0], coords[1]]);
    }

    return {
        attack,
        board,
        getName,
    }
}

export default Player