import React, { Component } from 'react';

class EvenNumbers extends Component {
  shouldComponentUpdate() {
    return this.props.number % 2 === 1;
  }

  render() {
    const { number, title } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default EvenNumbers;
