import React, { PureComponent } from 'react';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EvenNumbers';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) ++
// 4. declare state (what, where) and props +++
//5. write logic ++++

// state
// number

class App extends PureComponent {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { number } = this.state;
    return (
      <div className="app">
        <OddNumbers number={number} title="Odd number" />
        <EvenNumbers number={number} title="Even number" />
        <Numbers number={number} title="All number" />
        <Numbers number={17} title="All number" />
      </div>
    );
  }
}

export default App;
