import { Link } from 'react-router-dom';
 
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
        </nav>
    )
}

export default Nav;