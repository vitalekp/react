import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  state = {
    visible: true,
  };

  toogle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button className="button" onClick={this.toogle}>
          TOOGLE
        </button>
        <div className="clock__wrapper">
          {this.state.visible && <Clock location="Lviv" offset={3} />}
          {this.state.visible && <Clock location="London" offset={1} />}
          {this.state.visible && <Clock location="Lisbon" offset={1} />}
        </div>
      </>
    );
  }
}

export default App;
