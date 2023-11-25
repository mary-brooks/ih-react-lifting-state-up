// src/components/Task.jsx

import { useState } from 'react';

function Task(props) {
  // use destructuring to access props more easily via variables
  const { task, toggleTask } = props;
  return (
    <div className='task-card'>
      <div className='task-card-half'>
        <h1>{task.name}</h1>
        {task.completed ? <span>DONE </span> : <span>PENDING ⌛</span>}

        <h2>Task Description</h2>
        <p>{task.description}</p>

        <button className='add' onClick={() => toggleTask(task._id)}>
          {task.completed ? <span>UNDO </span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  );
}

export default Task;
