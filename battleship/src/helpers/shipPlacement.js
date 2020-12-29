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

const ships = [
    {
        name: 'carrier',
        length: 5
    },
    {
        name: 'battleship',
        length: 4
    },
    {
        name: 'cruiser',
        length: 3
    },
    {
        name: 'submarine',
        length: 3
    },
    {
        name: 'destroyer',
        length: 2
    }
]

// place ships manually without checking
const PlaceShips = (player) => {
    // player.board.placeShip(ships[0].length, [2, 0], true, ships[0].name);
    // player.board.placeShip(ships[1].length, [0, 6], false, ships[1].name);
    // player.board.placeShip(ships[2].length, [2, 2], false, ships[2].name);
    // player.board.placeShip(ships[3].length, [7, 9], true, ships[3].name);
    // player.board.placeShip(ships[4].length, [9, 3], false, ships[4].name);
    return ships;
}

// place ships randomly
const randomShips = (player) => {

    // random vertical/horizontal placement
    const randomDirection = () => {
        return Math.random() < 0.5 
    }

    ships.forEach((element) => {
        while (true) {
            // get random tile on board
            let randRow = Math.floor(Math.random() * 10);
            let randCol = Math.floor(Math.random() * 10);

            // create a ship array (length, coords, isvertical)
            // insert that array into isvalid

            if (player.board.placeShip(element.length, [randRow, randCol], randomDirection(), element.name)) {
                break;
            }
        }
    })

}


export {PlaceShips, randomShips};