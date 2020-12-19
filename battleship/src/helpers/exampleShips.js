// ship - const Ship = ( length, coordArray ) => {
// gameboard - const placeShip = (length, coords, isVertical)


// // length of ships
// const CARRIER = 5;
// const BATTLESHIP = 4;
// const CRUISER = 3;
// const SUBMARINE = 3;
// const DESTROYER = 2;

// const ships = [
//     {
//         name: 'carrier',
//         length: 5
//     },
//     {
//         name: 'battleship',
//         length: 4
//     },
//     {
//         name: 'cruiser',
//         length: 3
//     },
//     {
//         name: 'submarine',
//         length: 3
//     },
//     {
//         name: 'destroyer',
//         length: 2
//     }
// ]


const ships = {
    carrier: {
        name: 'carrier',
        length: 5
    },
    battleship: {
        name: 'battleship',
        length: 4
    },
    cruiser: {
        name: 'cruiser',
        length: 3
    },
    submarine: {
        name: 'submarine',
        length: 3
    },
    destroyer: {
        name: 'destroyer',
        length: 2
    }
}


// place ships manually without checking
const PlaceShips = (player) => {
    player.board.placeShip(ships.carrier.length, [2, 0], true, ships.carrier.name);
    player.board.placeShip(ships.battleship.length, [0, 6], false, ships.battleship.name);
    player.board.placeShip(ships.cruiser.length, [2, 2], false, ships.cruiser.name);
    player.board.placeShip(ships.submarine.length, [7, 9], true, ships.submarine.name);
    player.board.placeShip(ships.destroyer.length, [9, 3], false, ships.destroyer.name);
}


export default PlaceShips;