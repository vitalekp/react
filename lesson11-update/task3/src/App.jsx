import React, { Component } from 'react';
import Expand from './Expand';

// 0. create project +
// 1. male static layout (верстка) ++
// 2. divide into components +++
// 3. static react version (верстка) ++++
// 4. declare state (what, where) and props
// 5. write logic

class App extends Component {
  render() {
    return (
      <div className="app">
        <Expand title="Some title">
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
