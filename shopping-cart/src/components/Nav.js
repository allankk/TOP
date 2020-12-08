import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartItems } from '../App';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
function Nav() {

    const data = useContext(CartItems);

    return (
        <nav>
            <Link to='/'>
                <h1>SHOPSORY</h1>
            </Link>
            <ul>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
            <Link to='/cart' className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span>{(data.addedItems.length !== 0) ? ('(' + data.addedItems.length + ')') : null}</span>
            </Link>
        </nav>
    )
}

export default Nav;