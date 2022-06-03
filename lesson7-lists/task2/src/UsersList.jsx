import React from 'react';
import User from './User';

// algo UsersList
// 1 render .btn and users list +++
// 2 .btn add sort (asc/desc) +++
// 3 add keys +++
// 4 refactoring +++

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toogleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    const { users } = this.props;
    const { sorting } = this.state;

    let usersList;
    if (sorting) {
      usersList = [...users].sort((a, b) => (sorting === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      usersList = users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toogleSorting}>
          {sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
