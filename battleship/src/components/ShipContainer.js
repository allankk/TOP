import React from 'react';
import uniqid from 'uniqid';

import { PlaceShips } from './../helpers/shipPlacement';
import Ship from './Ship';

const ShipContainer = (props) => {

    let ships = PlaceShips();

    return (
        <div className="ship-container">
            {ships.map((ship, index) => {
                return (
                    (!props.shipsPlaced.includes(ship.name) ? <Ship key={uniqid()} length={ship.length} name={ship.name} /> : null)
                )
            })}                 
        </div>
    )
}

export default ShipContainer