import React, { Component } from 'react';

class CreateTaskInput extends Component {
  state = {
    value: 'ssss',
  };

  changeHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  taskCreateHandler = () => {
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

export default CreateTaskInput;

// 1 take text from input +
// 2 create task with this text +
// 3 add created task to the list
