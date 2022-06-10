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

class UserForm extends Component {
  submitHandler = e => {
    e.preventDefault();
    const formData = [...new FormData(this.formRef)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {},
    );

    this.props.onSubmit(formData);
  };

  setRef = node => {
    this.formRef = node;
  };

  render() {
    const { submitHandler, setRef } = this;

    return (
      <form ref={setRef} className="login-form" onSubmit={submitHandler}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input">
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
          <textarea name="about" className="form-input" />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
