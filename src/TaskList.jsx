import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1 },
      { text: 'Pick up Tom from airoport', done: false, id: 2 },
      { text: 'Visit party', done: false, id: 3 },
      { text: 'Visit doctor', done: true, id: 4 },
      { text: 'Buy meat', done: true, id: 5 },
    ],
  };
  render() {
    return (
      <ul className="list">
        {this.state.tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    );
  }
}

export default TaskList;
