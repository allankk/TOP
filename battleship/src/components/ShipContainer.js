import React from 'react';
import uniqid from 'uniqid';


import { PlaceShips } from './../helpers/shipPlacement';
import Ship from './Ship';


const ShipContainer = () => {

    let ships = PlaceShips();

    return (
        <div className="ship-container">
            {ships.map((ship, index) => {
                return <Ship key={uniqid()} length={ship.length} name={ship.name} />
            })}                 
        </div>
    )
}


export default ShipContainer