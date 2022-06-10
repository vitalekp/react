import React, { Component } from 'react';

// 0. create project +
// 1. male static layout (верстка) +
// 2. divide into components +
// 3. static react version (верстка) +
// 4. declare state (what, where) and props ++
// 5. write logic +++

// algo
// 1 onSubmit => console.log(object values)

// props
// createUser func

// state
// name, student, occupation, about

class UserForm extends Component {
  state = {
    name: '',
    student: '',
    occupation: '',
    about: '',
  };

  changeHandler = e => {
    const { name, value, checked, type } = e.target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, student, occupation, about } = this.state;
    const { submitHandler, changeHandler } = this;

    return (
      <form className="login-form" onSubmit={submitHandler}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={student}
            onChange={changeHandler}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            value={occupation}
            onChange={changeHandler}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input" value={about} onChange={changeHandler} />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
