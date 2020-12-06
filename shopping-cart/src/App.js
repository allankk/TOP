import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './components/Shop/Shop.js';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
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
