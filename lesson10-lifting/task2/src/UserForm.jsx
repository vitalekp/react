import React from 'react';

const UserForm = ({ userData, changeHandler }) => {
  const { firstName, lastName } = userData;

  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={changeHandler}
      />
    </form>
  );
};

export default UserForm;
