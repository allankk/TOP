import React from 'react';
import CartItemsProvider from './contexts/CartItems';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop/Shop.js';
import About from './components/About';
import Cart from './components/Cart';

const CartItems = React.createContext();

export { CartItems };

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <CartItemsProvider>       
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </CartItemsProvider>
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  )
}

export default App;