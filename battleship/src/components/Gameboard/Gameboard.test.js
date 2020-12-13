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

