import React from 'react';
import uniqid from 'uniqid';

import { useDrag } from 'react-dnd';
import { ItemTypes } from './../utils/items';


const Ship = ( props ) => {

    const[{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.SHIP,
            length: props.length,
            name: props.name,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0 : 1;

    let ship = [];

    for (let i = 0; i < props.length; i++) {
        ship.push(<div className="tile ship" key={uniqid()}></div>) //key
    }

    return <div ref={drag} style={{ opacity }} className="ship" key={uniqid()}>{ship}</div> //key
}

export default Ship