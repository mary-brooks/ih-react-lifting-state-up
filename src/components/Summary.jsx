// src/components/Summary.jsx

import React from 'react';

function Summary({ tasksCompleted }) {
  // above - direct destructuring
  // below - regular destructuring
  // const { tasksCompleted } = props;

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className='tasks-completed'>{tasksCompleted}</p>
    </div>
  );
}

export default Summary;
