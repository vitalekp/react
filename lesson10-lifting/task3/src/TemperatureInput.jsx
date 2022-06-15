import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {
  state = {
    temperature: '',
  };

  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { handleChange } = this;
    const { temperature } = this.props;
    const { scale } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
