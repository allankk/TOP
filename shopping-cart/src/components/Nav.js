import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
 
function Nav() {

    return (
        <nav>
            <Link to='/'>
                <h1>Shop page</h1>
            </Link>
            <ul>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
            <Link to='/cart'>
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </nav>
    )
}

export default Nav;