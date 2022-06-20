import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toogle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="button" onClick={toogle}>
        TOOGLE
      </button>
      <div className="clock__wrapper">
        {visible && <Clock location="Lviv" offset={3} />}
        {visible && <Clock location="London" offset={1} />}
        {visible && <Clock location="Lisbon" offset={1} />}
      </div>
    </>
  );
};

export default App;
