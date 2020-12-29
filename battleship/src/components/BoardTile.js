import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './../utils/items'


const BoardTile = (props) => {

    const[{ isOver }, drop] = useDrop({
        accept: ItemTypes.SHIP,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    // returns a proper classname for the ship tile.
    const renderShip = (object, coord) => {
        
        if (object.isPartHit(coord)) {
            if (object.isSunk()) {
                return 'sunk';
            } else {
                return 'hit';
            }
        // if its an unhit player ship, return 'S', otherwise return null (to hide enemy ships)
        } else if (props.isPlayer) {
            return 'ship';
        } else {
            return 'ship' // CHANGE THIS TO '' TO HIDE OPPONENT SHIPS
        }
    }

    const tileClasses = (value, row, col) => {
        if (value === 1) {
            return 'tile attacked';
        } else if (typeof(value) === 'object') {
            return `tile ${renderShip(value, [row, col])}`;
        } else {
            return 'tile';
        }
    }

    return (
        <div className={tileClasses(props.value, props.row, props.col)}
            id={'row-' + props.row + '-col-' + props.col}
            key={'row' + props.row + 'col' + props.col}
            onClick={!props.isPlayer ? () => props.handleAttack(props.row, props.col) : null}
            ref={drop} style={{backgroundColor: isOver ? 'blue' : null}}
            >
            { (props.value === 1) ? 'x' : null }
        </div>
    )
}

export default BoardTile