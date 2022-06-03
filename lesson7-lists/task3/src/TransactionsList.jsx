import React from 'react';
import Transaction from './Transaction';

// algo UsersList
// 1 render .btn and users list +++
// 2 .btn add sort (asc/desc) +++
// 3 add keys +++
// 4 refactoring +++

class TransactionsList extends React.Component {
  render() {
    const { transactions } = this.props;
    console.log(transactions);

    return (
      <ul className="transactions">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
