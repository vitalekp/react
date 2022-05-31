import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
    };

    // в навчальних цілях
    setInterval(() => {
      this.setState({
        offsetTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.offsetTime}</div>
      </div>
    );
  }
}

export default Counter;
