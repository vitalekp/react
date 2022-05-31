import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <>
        <Counter start={10} interval={700} />
        <Counter start={20} interval={1000} />
        <Counter start={-80} interval={600} />
      </>
    );
  }
}

export default App;
