import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++

// algo
// users => render filter and users list

// props
// users list

// state
// count, filterText, users

class UsersList extends Component {
  state = {
    count: '1',
    filterText: '',
    users: this.props.users,
  };

  changeValueHandler = e => {
    const { value } = e.target;
    this.setState({
      filterText: value,
    });

    this.filterHandler(value);
  };

  filterHandler = text => {
    const usersArr = this.props.users
      .filter(({ name }) => {
        return name.toLowerCase().includes(text);
      })
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }

        return 0;
      });

    this.setState({
      count: usersArr.length,
      users: usersArr,
    });

    return usersArr;
  };

  render() {
    const { count, filterText, users } = this.state;
    const { changeValueHandler } = this;

    return (
      <div>
        <Filter filterText={filterText} count={count} onChange={changeValueHandler} />
        <ul className="users">
          {users.map(({ name, age, id }) => {
            return <User key={id} name={name} age={age} />;
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
