import React from 'react';

// algo
// 1 приймає масив unreadMessages +++
// 2 зчитати довжину масиву і добавити кількість в розмітку +++
// 3 якщо масив пустий, нічого не виводити +++

const Mailbox = ({ unreadMessages }) => {
  return (
    <span className="mailbox">
      <span className="mailbox__text">MESSAGES</span>
      {unreadMessages.length > 0 && <span className="mailbox__count">{unreadMessages.length}</span>}
    </span>
  );
};

export default Mailbox;
