// ship - const Ship = ( length, coordArray ) => {
// gameboard - const placeShip = (length, coords, isVertical)


// length of ships
const CARRIER = 5;
const BATTLESHIP = 4;
const CRUISER = 3;
const SUBMARINE = 3;
const DESTROYER = 2;

// place ships manually without checking
const PlaceShips = (player) => {
    player.board.placeShip(CARRIER, [2, 0], true);
    player.board.placeShip(BATTLESHIP, [0, 6], false);
    player.board.placeShip(CRUISER, [2, 2], false);
    player.board.placeShip(SUBMARINE, [7, 9], true);
    player.board.placeShip(DESTROYER, [9, 3], false);
}


export default PlaceShips;