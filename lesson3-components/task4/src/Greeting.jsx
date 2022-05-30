import React from 'react';
import moment from 'moment';

// algo
// 1 створити компоненту Greeting, яка відмалює дані +++
// 2 (firstName, lastName, birthDate) +++

const Greeting = props => {
  const numberYears = moment(props.birthDate).fromNow().slice(0, 2);
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${numberYears} years old`}</div>
  );
};

export default Greeting;
