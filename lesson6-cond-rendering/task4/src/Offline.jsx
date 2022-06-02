import React from 'react';

const Offline = ({ isOnline }) => {
  if (isOnline) {
    return null;
  }
  return (
    <>
      <span class="status__text">Offline</span>
      <button class="status__btn">Reconnect</button>
    </>
  );
};

export default Offline;
