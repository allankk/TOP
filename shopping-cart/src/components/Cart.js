import React, { useContext } from 'react';
import { CartItems } from '../App';

const Cart = () => {
    const data = useContext(CartItems);

    console.log(data);

    const handleChange = (e, element) => {
        if (e.target.value < 0) {
            data.setItemAmount(element, 0);
        } else {
            data.setItemAmount(element, e.target.value);
        }
    };

    return (
        <div className="cart-container">
            <h1>This is cart</h1>

            <div className="items">
                {data.addedItems.map(element => {
                    return (
                        <div key={'cart-' + element.id} className="cart-item"> 
                            <h2>{element.title}</h2>
                            {/* <button class="edit-number" onClick={data.decrementItem(element)}>-</button> */}
                            <input type="number" value={element.amount} onChange={e => {handleChange(e, element)}}/>
                            {/* <button class="edit-number" onClick={data.incrementItem(element)}>+</button> */}
                        </div>
                    )                    
                })}
            </div>
            

            

        
        </div>

    )


}

export default Cart;

