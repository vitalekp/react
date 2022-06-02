import React from 'react';

// algo
// 1
// 2
// 3

const Message = ({ text }) => {
  if (!text) {
    return null;
  }
  return <div className="message">{text}</div>;
};

export default Message;
