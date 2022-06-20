import React, { useState, useEffect } from 'react';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
//5. write logic +++

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  const { width, height } = dimensions;

  // algo
  // 1 взяти ширину і висоту і встановити в стейт +++
  // 2 добавити обробник який буде встановлювати нові дані +++
  // 3 почистити подію +++

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });

    const resizeHandler = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
