import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './clock.scss';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++++

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

// algo Clock
// 1 ({ location, offset }) => render time every minutes +++

const Clock = ({ location, offset }) => {
  const [offSetTime, setOffSetTime] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setOffSetTime(moment(getTimeWithOffset(offset)).format('LTS'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{offSetTime}</div>
    </div>
  );
};

export default Clock;
