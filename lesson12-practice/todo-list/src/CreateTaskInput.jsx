import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 1 take text from input +
// 2 create task with this text +
// 3 add created task to the list +

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  changeHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  taskCreateHandler = () => {
    if (!this.state.value) {
      return null;
    }
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { changeHandler, taskCreateHandler } = this;
    const { value } = this.state;

    return (
      <div className="create-task">
        <input className="create-task__input" type="text" value={value} onChange={changeHandler} />
        <button className="btn create-task__btn" onClick={taskCreateHandler}>
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
