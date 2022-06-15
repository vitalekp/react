import React from 'react';

const UserForm = ({ userData, changeHandler }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={changeHandler}
      />
    </form>
  );
};

export default UserForm;
