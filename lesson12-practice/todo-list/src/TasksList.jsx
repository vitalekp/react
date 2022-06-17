import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onCreate = text => {
    // 1 create task obj +
    // 2 post obj to server +
    // 3 fetch list from server +
    // const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  taskStatusChangeHandler = id => {
    // 1 find task in state by id
    // 2 create updated task
    // 3 update task on server
    // 4 fetch updated tasks list
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  // 1 find task in a list +
  // 2 filter task +
  // 3 save updated list +
  deleteTaskHandler = id => {
    deleteTask(id).then(() => this.fetchTasks());
    // fetch(`${baseUrl}/${id}`, {
    //   method: 'DELETE',
    // }).then(response => {
    //   if (response.ok) {
    //     this.fetchTasksList();
    //   } else {
    //     throw new Error('Faild to delete task');
    //   }
    // });
  };

  render() {
    const { onCreate, taskStatusChangeHandler, deleteTaskHandler } = this;
    const { tasks } = this.state;

    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={taskStatusChangeHandler}
              onDelete={deleteTaskHandler}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
