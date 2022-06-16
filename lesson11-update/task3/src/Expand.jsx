import React, { Component } from 'react';

// state
// isOpen

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toogleBtn = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { toogleBtn } = this;
    const { isOpen } = this.state;
    const { children, title } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={toogleBtn}>
            {isOpen ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>
        </div>
        {isOpen ? <div className="expand__content">{children}</div> : null}
      </div>
    );
  }
}

export default Expand;

// <i class="fa-solid fa-angle-down"></i>
//  <i className="fas fa-chevron-up"></i>
