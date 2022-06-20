import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
//5. write logic +++++

// props
// status

// {classNames('list-item', { 'list-item_done': done })}

const ConnectionStatus = () => {
  const [connection, setStatus] = useState(true);

  const status = connection ? 'online' : 'offline';

  useEffect(() => {
    const onlineHandler = () => {
      setStatus(true);
    };
    const offlineHandler = () => {
      setStatus(false);
    };

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);
  return <div className={classNames('status', { status_offline: !connection })}>{status}</div>;
};

export default ConnectionStatus;
