import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

// algo Clock
// 1 ({ location, offset }) => render time every minutes +++

class Clock extends Component {
  state = {
    offSetTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        offSetTime: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { location } = this.props;
    const { offSetTime } = this.state;

    return (
      <>
        <div className="clock">
          <div className="clock__location">{location}</div>
          <div className="clock__time">{offSetTime}</div>
        </div>
      </>
    );
  }
}

export default Clock;

// <div className="clock">
//   <div className="clock__location">
//       <!-- название города -->
//       New York
//   </div>
//   <div className="clock__time">
//       <!-- локальное время в этом городе (с учером переданного смещения) -->
//       7:00:51 AM
//   </div>
// </div>
