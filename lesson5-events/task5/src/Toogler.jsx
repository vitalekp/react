import React from 'react';

class Toogler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState: 'Off',
    };
  }

  buttonHandler = () => {
    if (this.state.buttonState === 'Off') {
      this.setState({
        buttonState: 'On',
      });
    } else
      this.setState({
        buttonState: 'Off',
      });
  };

  render() {
    return (
      <div className="toggler" onClick={this.buttonHandler}>
        {this.state.buttonState}
      </div>
    );
  }
}

export default Toogler;
