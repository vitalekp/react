import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

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
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
