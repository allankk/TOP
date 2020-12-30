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

// place ships manually
const PlaceShips = (player) => {
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

            if (player.board.placeShip(element.length, [randRow, randCol], randomDirection(), element.name)) {
                break;
            }
        }
    })

}

export {PlaceShips, randomShips};