import React, { useContext } from 'react';
import { CartItems } from '../App';

const PUBLIC_URL = process.env.PUBLIC_URL || 'http://localhost:3000';

const Cart = () => {
    const data = useContext(CartItems);

    const handleChange = (e, element) => {
        if (e.target.value < 0) {
            data.setItemAmount(element, 0);
        } else {
            data.setItemAmount(element, e.target.value);
        }
    };

    return (
        <div className="cart-container">
            <h1>shopping cart</h1>

            <div className="items">
                {data.addedItems.length === 0 ? (<h3>cart is empty</h3>) : null}
                {data.addedItems.map(element => {
                    return (
                        <div key={'cart-' + element.id} className="cart-item"> 
                            <img src={PUBLIC_URL + element.src} alt=""/>
                            <div className="item-content">
                                <h2>{element.title}</h2>
                                <p>Price: {element.price}€</p>
                                <div className="buttons">
                                    <div className="quantity">
                                        <p>Quantity: </p>
                                        <input type="number" value={element.amount} onChange={e => {handleChange(e, element)}}/>
                                    </div>
                                    <button className="edit-number decrement" onClick={e => {data.decrementItem(element)}}>-</button>
                                    <button className="edit-number increment" onClick={e => {data.incrementItem(element)}}>+</button>
                                    <button className="remove-element" onClick={e => {data.removeItem(element)}}>Remove item</button>   
                                </div>

                            </div>

                        </div>
                    )                    
                })}
                
                {data.addedItems.length === 0 ? null : (
                    <div className="checkout">
                        <p>Total price: {data.totalPrice}€</p>
                        <button id="checkout-btn">Checkout</button>
                    </div>
                )}
            </div>
            

            

        
        </div>

    )


}

export default Cart;

