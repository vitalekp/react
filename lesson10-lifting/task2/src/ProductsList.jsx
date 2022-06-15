import React from 'react';

const ProductsList = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(({ name, price, id }) => {
          return (
            <li key={id} className="products__list-item">
              <span className="products__item-name">{name}</span>
              <span className="products__item-price">{`$${price}`}</span>
            </li>
          );
        })}
      </ul>
      <div className="products__total">{`Total: $${totalPrice}`}</div>
    </div>
  );
};

export default ProductsList;
