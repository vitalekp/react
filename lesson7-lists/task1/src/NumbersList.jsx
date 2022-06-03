import React from 'react';

// algo NumbersList
// 1 приймає масив чисел +++
// 2 рендерить список з отриманими числами +++

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => {
        return <li key={Date.now()}>{num}</li>;
      })}
    </ul>
  );
};

export default NumbersList;
