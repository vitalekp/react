import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Home from './Home';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

// 0. create project
// 1. male static layout (верстка)
// 2. divide into components
// 3. static react version (верстка)
// 4. declare state (what, where) and props
//5. write logic

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
