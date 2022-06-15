import React from 'react';
import UserForm from './UserForm';

const Profile = ({ changeHandler, userData }) => {
  return (
    <div className="column">
      <UserForm changeHandler={changeHandler} userData={userData} />
    </div>
  );
};

export default Profile;
