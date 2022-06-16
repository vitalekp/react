import React, { Component } from 'react';
import Expand from './Expand';

// 0. create project +
// 1. male static layout (верстка) ++
// 2. divide into components +++
// 3. static react version (верстка) ++++
// 4. declare state (what, where) and props
// 5. write logic

// state
// isOpen

class App extends Component {
  state = {
    isOpen: false,
    iconStyle: 'fa-solid fa-angle-down',
  };

  hideBlock = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      iconStyle: this.state.isOpen ? 'fa-solid fa-angle-down' : 'fas fa-chevron-up',
    });
  };

  render() {
    const { hideBlock, showBlock } = this;
    const { isOpen, iconStyle } = this.state;

    return (
      <div className="app">
        <Expand title="Some title" isOpen={isOpen} iconStyle={iconStyle} onClose={hideBlock}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a className.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
