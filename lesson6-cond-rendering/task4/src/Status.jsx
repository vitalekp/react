import React from 'react';
import Online from './Online';
import Offline from './Offline';
// algo Page
// 1 добавити розмітку +++
// 2  добавити в стейт isOnline +++
// 3 if isOnline = true (show Online) else Offline

class Status extends React.Component {
  state = {
    isOnline: false,
  };

  render() {
    const { isOnline } = this.state;
    return (
      <div class="status">
        <Online isOnline={isOnline} />
        <Offline isOnline={isOnline} />
      </div>
    );
  }
}

export default Status;
