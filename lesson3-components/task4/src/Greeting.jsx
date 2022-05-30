import React from 'react';

// algo
// 1 створити компоненту Greeting, яка відмалює дані +++
// 2 (firstName, lastName, birthDate) +++

const Greeting = (firstName, lastName, birthDate) => {
  const numberYears = new Date().getFullYear() - birthDate.getFullYear();
  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I'm ${numberYears} years old`}</div>
  );
};

export default Greeting;
