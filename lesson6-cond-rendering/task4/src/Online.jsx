import React from 'react';

const Online = ({ isOnline }) => {
  if (!isOnline) {
    return null;
  }
  return (
    <>
      <span class="status__text">Online</span>
      <button class="status__btn">All good!</button>
    </>
  );
};

export default Online;
