import React, { PureComponent } from 'react';

class Numbers extends PureComponent {
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

export default Numbers;
