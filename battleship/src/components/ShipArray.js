import React from 'react';
import uniqid from 'uniqid';


const ShipArray = (props) => {

    // sort the ships by largest to smallest
    let shipArr = props.ships.sort(function(a, b) {
        return b.getPositionsHit().length - a.getPositionsHit().length;
    })

    // returns how many hits a ship has had
    const getHitAmount = (hitArray) => {
        let count = 0;
        
        hitArray.forEach(element => {
            if (element === 1) {
                count++
            }
        })

        return count;
    }

    const stylePlayer = {
        position: "absolute",
        left: "-100px",
        display: "flex",
        alignItems: "flex-end"
    }

    const stylePC = {
        position: "absolute",
        right: "-100px",
        display: "flex",
        alignItems: "flex-start"
    }

    const renderShip = (ship) => {
        let hitAmount = getHitAmount(ship.getPositionsHit());

        return (
            <div key={uniqid()} className="ship">
                {ship.getPositionsHit().map((value, index) => {
                    return ((hitAmount > index) ? <div key={uniqid()} className="circle filled"></div> : <div key={uniqid()} className="circle"></div>)
                })}            
            </div>
        )
    }

    return (
        <div className="shiparray" style={(props.isPlayer) ? stylePlayer : stylePC}>
            <h3>ships</h3>
            {shipArr.map(ship => {
                return (renderShip(ship));
            })}
        </div>
    )
}

export default ShipArray