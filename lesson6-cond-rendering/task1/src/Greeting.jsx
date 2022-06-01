import React from 'react';
import UserGreeting from './userGreeting.jsx';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
