import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {
  const { url } = match;
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${url}/ball`}>Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${url}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;

{
  /* <ul className="navigation">
        <li className="navigation__item">
          <a href="/products/book">Book</a>
        </li>
        <li className="navigation__item">
          <a href="/products/ball">Ball</a>
        </li>
      </ul>

      <div className="product">ball</div> */
}
