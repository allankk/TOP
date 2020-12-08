import React, { useContext } from 'react';
import { CartItems } from '../../App';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

const Popup = (props) => {
    const data = useContext(CartItems);

    return (
        <div className="popup" onClick={e => props.togglePopup()}>
            <div className="popup-inner" onClick={e => {e.stopPropagation()}}>
                <img src={PUBLIC_URL + props.element.src} alt={props.element.title}/>
                <div className="popup-content">
                    <h2>{props.element.title}</h2>
                    <p>{props.element.description}</p>
                    <div className="price">
                        <span>Price: {props.element.price + "€"}</span>
                        <button className="add-cart-btn" onClick={e => data.addItem(props.element)}>Add to cart</button>
                    </div>
                    {(data.getItemAmount(props.element) !== 0) ? (<p>Currently in cart: {props.element.amount}</p>) : null}
                    <button className="close-btn" onClick={e => props.togglePopup()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;


