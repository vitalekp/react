import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++

// algo
// fetch(userId) => state: userData => render

// props
// userId

// state
// userData

class App extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;

    fetch(userUrl)
      .then(response => response.json())
      .then(response =>
        this.setState({
          userData: response,
        }),
      );
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}

export default App;
