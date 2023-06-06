import React from 'react';
import TaskList from './TaskList';
import CreateTaskInput from './CreateTaskInput';

function TodoList(props) {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <CreateTaskInput />
      <TaskList />
    </>
  );
}

export default TodoList;
