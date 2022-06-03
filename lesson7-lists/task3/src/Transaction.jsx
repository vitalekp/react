import React from 'react';
import moment from 'moment';

// ( { from, to, amount, rate, time } ) => render transaction

const Transaction = ({ from, to, amount, rate, time }) => {
  console.log(from, to, amount, rate, time);

  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format('YY MMM')}</span>
      <span className="transaction__time">{moment(time).format('hh:mm')}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
