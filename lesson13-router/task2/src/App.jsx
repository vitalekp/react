import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка)
// 4. declare state (what, where) and props
//5. write logic

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" component={Products} />
      </BrowserRouter>
    </div>
  );
};

export default App;
