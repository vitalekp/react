import React, { Component } from 'react';

// state
// isOpen

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toogleBlock = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { toogleBlock } = this;
    const { isOpen } = this.state;
    const expandContent = isOpen ? (
      <div className="expand__content">{this.props.children}</div>
    ) : null;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={toogleBlock}>
            {isOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>
        </div>
        {expandContent}
      </div>
    );
  }
}

export default Expand;

// <i class="fa-solid fa-angle-down"></i>
//  <i className="fas fa-chevron-up"></i>
