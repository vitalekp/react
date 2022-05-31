import React from 'react';
import './button.scss';

class GoodButton extends React.Component {
  handleClick() {
    return alert('Good job!');
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
