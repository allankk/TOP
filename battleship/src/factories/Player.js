import Gameboard from './Gameboard';

const randomAttack = (opponent) => {
    
    while (true) {
        let randRow = Math.floor(Math.random() * 10);
        let randCol = Math.floor(Math.random() * 10);

        let tile = opponent.board.getBoard()[randRow][randCol]

        if (typeof(tile) == 'object') {
            if (tile.isPartHit()) {
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
    const board = Gameboard();
    let turn = false;

    // attack the opponents board. If the AI is attacking, attack randomly
    const attack = (opponent, coords) => {
        console.log('attack function - received');
        if (!turn) return;

        (isPC) ? randomAttack(opponent) : opponent.board.receiveAttack([coords[0], coords[1]]);
    }

    const toggleTurn = () => {
        turn = !turn;
    }

    const isTurn = () => {
        return turn;
    }

    return {
        toggleTurn,
        attack,
        board,
        isTurn
    }
}

export default Player