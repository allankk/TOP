import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './../utils/items';

import Overlay from './Overlay';


const BoardTile = (props) => {

    const handleDrop = (item) => {
        props.placeShip(item.length, [props.row, props.col], item.isVertical, item.name)
    }

    const[{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.SHIP,
        canDrop: (item) => props.checkValidity(props.row, props.col, item.length, item.isVertical),
        drop: (item, monitor) => handleDrop(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
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
            ref={drop}>
            { isOver && canDrop && <Overlay color="green" />}
            { isOver && !canDrop && <Overlay color="orange" />}
            { (props.value === 1) ? 'x' : null }
        </div>
    )
}

export default BoardTile