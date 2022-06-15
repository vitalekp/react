import React from 'react';

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>Вода кипит.</p>;
  }

  return <p>Вода не кипит.</p>;
};

export default BoilingVerdict;
