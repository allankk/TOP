import Gameboard from './Gameboard';


test('gameboard is created correctly', () => {
    let board = Gameboard();

    expect(board.getBoard()[9][9]).toBe(0);
})

// placing a ship

test('ship is placed correctly to an empty gameboard', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.getBoard()[1][1]).not.toBe(0);
})

// check if valid

test('placing a second ship that is not interfering should be valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[3, 3], [3, 4], [3, 5]])).toBe(true);
})

test('placing a ship outside of borders is not valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[9, 2], [10, 2], [11, 2]])).toBe(false);    
})

test('placing a ship next to another is not valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[1, 2], [1, 3], [1, 4]])).toBe(false);
})

// INTEGRATION - isPartHit
test('a new ship should not have a part that is hit', () => {
    let board = Gameboard();
    board.placeShip(2, [2, 2], true);

    expect(board.getBoard()[2][2].isPartHit([2, 2])).toBe(false);
})

// INTEGRATION - issunk
test('a new ship should not be sunk', () => {
    let board = Gameboard();
    board.placeShip(2, [2, 2], true);

    expect(board.getBoard()[2][2].isSunk()).toBe(false);
})

// receiveAttack
test('attacking a coordinate reflects on gameboard', () => {
    let board = Gameboard();

    board.receiveAttack([3,3]);
    expect(board.getBoard()[3][3]).toBe(1);
});

// INTEGRATION - receiveattack
test('integration - attacking a ship on gameboard reflects if ship is hit.', () => {
    let board = Gameboard();
    board.placeShip(3, [2, 2], true);

    board.receiveAttack([3, 2]);

    expect(board.getBoard()[3][2].isPartHit([3,2])).toBe(true);  
})

// testing areAllShipsSunk
test('all ships should be sunk', () => {
    let board = Gameboard();

    board.placeShip(2, [1,1], false);
    board.receiveAttack([1,1]);
    board.receiveAttack([1,2]);

    board.placeShip(2, [4,4], true);
    board.receiveAttack([4,4]);
    board.receiveAttack([5,4]);

    expect(board.areAllSunk()).toBe(true);
})