import React from 'react';
import CartItemsProvider from './contexts/CartItems';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop/Shop.js';
import About from './components/About';
import Cart from './components/Cart';

const CartItems = React.createContext();

export { CartItems };

function App() {
  
  return (
    <BrowserRouter basename="/shopsory">
      <div className="App">
        
        <Switch>
          <CartItemsProvider>
            <Nav />       
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </CartItemsProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


const Home = () => {
  return (
    <div className="home">
      <div className="short">
        <h1>ACCESSORY SHOP</h1>
      </div>
    </div>
  )
}

export default App;
