import React, { useState } from 'react';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props +
//5. write logic +

// state
// counter

const Counter = () => {
  const [counter, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => setCount(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setCount(0)}>
        {counter}
      </span>
      <button className="counter__button" onClick={() => setCount(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
