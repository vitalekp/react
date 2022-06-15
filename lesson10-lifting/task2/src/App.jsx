import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++

class App extends Component {
  state = {
    userData: {
      firstName: 'Ton',
      lastName: 'Hon',
    },
  };

  changeHandler = e => {
    const { name, value } = e.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { changeHandler } = this;
    const { userData } = this.state;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={userData} />
          <Profile changeHandler={changeHandler} userData={userData} />
        </main>
      </div>
    );
  }
}

export default App;
