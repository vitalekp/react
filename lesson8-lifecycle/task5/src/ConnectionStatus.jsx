import React, { Component } from 'react';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props +
// 5. write logic +

// algo
// 1 відловити offline/online ++
// 2 вставити в розмітку текст offline/online ++
// 3 добавити відповідний клас ++
// 4 відписатися від події перед видаленням компоненти ++

// state
// statusClass, status

class ConnectionStatus extends Component {
  state = {
    statusClass: 'status status_online',
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.setOnlineHandler);
    window.addEventListener('offline', this.setOfflineHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.setOnlineHandler);
    window.removeEventListener('offline', this.setOfflineHandler);
  }

  setOnlineHandler = () => {
    this.setState({
      statusClass: 'status status_online',
      status: 'online',
    });
  };

  setOfflineHandler = () => {
    this.setState({
      statusClass: 'status status_offline',
      status: 'offline',
    });
  };

  render() {
    const { status } = this.state;
    const { statusClass } = this.state;

    return <div className={statusClass}>{status}</div>;
  }
}

export default ConnectionStatus;
