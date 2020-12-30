import React, { useState } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faUndo } from "@fortawesome/free-solid-svg-icons";


import { useDrag } from 'react-dnd';
import { ItemTypes } from './../utils/items';


const Ship = ( props ) => {
    const [isVertical, setIsVertical] = useState(true);

    const[{ isDragging }, drag, preview] = useDrag({
        item: {
            type: ItemTypes.SHIP,
            length: props.length,
            name: props.name,
            isVertical: isVertical,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    let ship = [];

    const opacity = isDragging ? 0 : 1;
    const style = {
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
    }

    for (let i = 0; i < props.length; i++) {
        if (i === 0) {
            ship.push(<div className="tile ship rotate" key={uniqid()} onClick={() => setIsVertical(!isVertical)}>
                <FontAwesomeIcon icon={faUndo} />
            </div>)
        } else if (i === (props.length - 1)) {
            ship.push(<div ref={drag} className="tile ship move" key={uniqid()}>
                <FontAwesomeIcon icon={faArrowsAlt}/>
            </div>)
        } else {
            ship.push(<div className="tile ship" key={uniqid()}></div>)
        }
    }

    return <div ref={preview} style={{ ...style, opacity }} className="ship" key={uniqid()}>{ship}</div> //key
}

export default Ship