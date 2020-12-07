import React, { useContext } from 'react';
import { CartItems } from '../../App';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

const Popup = (props) => {
    const data = useContext(CartItems);

    return (
        <div className="popup">
            <img src={PUBLIC_URL + props.element.src} alt={props.element.title}/>
            <p>{props.element.title}</p>
            <p>{props.element.description}</p>
            <p>{props.element.price + "€"}</p>
            <button onClick={e => data.addItem(props.element)}>Add to cart</button>
            <button onClick={e => props.togglePopup()}>Close me</button>
        </div>
    )

}

export default Popup;


