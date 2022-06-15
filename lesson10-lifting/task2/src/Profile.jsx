import React, { Component } from 'react';
import UserForm from './UserForm';

class Profile extends Component {
  render() {
    return (
      <div className="column">
        <UserForm changeHandler={this.props.changeHandler} userData={this.props.userData} />
      </div>
    );
  }
}

export default Profile;
