// src/components/ToDoList.jsx

import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    completed: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    completed: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    completed: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTask = id => {
    // copy the array in state
    const tasksCopy = [...tasks];

    // loop over the copied array
    // toggle the task with matching id true/false
    tasksCopy.forEach(task => {
      if (task._id === id) {
        task.completed = !task.completed;

        if (task.completed) {
          setTasksCompleted(tasksCompleted + 1);
        } else {
          setTasksCompleted(tasksCompleted - 1);
        }

        // we can also use the ternary operator for the above
        // but in this case it's a bit long and difficult to read
        // task.completed ? setTasksCompleted(tasksCompleted + 1) : setTasksCompleted(tasksCompleted - 1)
      }
    });

    // update state to render changes
    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className='todo-container'>
        {tasks.map(task => (
          <Task key={task._id} toggleTask={toggleTask} task={task} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
