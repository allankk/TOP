import { Gameboard } from './Gameboard';

it('jest works', () => {

})

test('gameboard is created correctly', () => {
    let board = Gameboard();

    expect(board.getBoard()[9][9]).toBe(0);
})

test('ship is placed correctly to an empty gameboard', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.getBoard()[1][1][1]).toBeFalsy();
})

test('placing a second ship that is not interfering should be valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[3, 3], [3, 4], [3, 5]])).toBeTruthy();
})

test('placing a ship outside of borders is not valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[9, 2], [10, 2], [11, 2]])).toBeFalsy();    
})

test('placing a ship next to another is not valid', () => {
    let board = Gameboard();
    board.placeShip(3, [1, 1], true);

    expect(board.checkIfValid([[1, 2], [1, 3], [1, 4]])).toBeFalsy();
})



