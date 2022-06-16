import React, { Component } from 'react';
import Dialog from './Dialog';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) ++
// 4. declare state (what, where) and props
// 5. write logic

// state
// isOpen: false

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const { hideDialog, showDialog } = this;
    const { isOpen } = this.state;

    return (
      <div className="app">
        <button className="btn" onClick={showDialog}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={isOpen} onClose={hideDialog}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
