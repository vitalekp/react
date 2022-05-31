import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Lviv" offset={3} />
      <Clock location="London" offset={0} />
      <Clock location="Lisbon" offset={1} />
    </>
  );
};

export default App;
