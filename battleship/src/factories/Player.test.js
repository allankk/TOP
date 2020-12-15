import Player from './Player'

test('jest works', () => {

})

// test('creating a player also creates a board', () => {
//     const player1 = Player();

//     expect(player1.board.getBoard()).toBeTruthy();
// })

test('player can attack AI board', () => {
    const player = Player(false);
    player.toggleTurn();

    const pc = Player(true);

    player.attack(pc, [2, 2]);
    expect(pc.board.getBoard()[2][2]).toBe(1);    
})

test('AI can attack player board', () => {
    const player = Player(false);
    const pc = Player(true);
    pc.toggleTurn();

    pc.attack(player, [3, 3]);

    let checkValue = (player.board.getBoard().find(element => element.includes(1))).includes(1);

    expect(checkValue).toBe(true);
})